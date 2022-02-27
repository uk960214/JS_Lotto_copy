import LottoManager from '../model/lottoManager.js';
import Lotto from '../model/lotto.js';
import { LOTTO_NUMBER_COUNT, LOTTO_NUMBER_RANGE, LOTTO_PRICE } from '../constants/constants';

describe('구입 금액 검증 테스트 ', () => {
  const lottoManger = new LottoManager();
  test('입력 값이 빈 칸이 아니어야 한다.', () => {
    const cashInput = '';
    expect(() => lottoManger.buyLotto(cashInput)).toThrow();
  });
  test('입력 값이 1000원 단위인지 검증한다.', () => {
    const cashInput = '1500';
    expect(() => lottoManger.buyLotto(cashInput)).toThrow();
  });
  test('입력 값의 범위가 1000원 이상 50000원 이하인지 검증한다.', () => {
    // 실패 케이스
    const lowCashInput = '900';
    expect(() => lottoManger.buyLotto(lowCashInput)).toThrow();
    const highCashInput = '51000';
    expect(() => lottoManger.buyLotto(highCashInput)).toThrow();

    // 성공 케이스
    const minCashInput = '1000';
    expect(() => lottoManger.buyLotto(minCashInput)).not.toThrow();
    const maxCashInput = '50000';
    expect(() => lottoManger.buyLotto(maxCashInput)).not.toThrow();
  });
  test('올바른 입력 값을 입력하면 오류가 발생하지 않는다.', () => {
    const cashInput = '2000';
    expect(() => lottoManger.buyLotto(cashInput)).not.toThrow();
  });
});

describe('로또 번호 생성 테스트', () => {
  test('범위가 1 - 45인 고유한 숫자 6개가 생성되는지 확인한다.', () => {
    const lotto = new Lotto();
    expect(lotto.lottoNumberSet.size).toEqual(LOTTO_NUMBER_COUNT);
    lotto.lottoNumberSet.forEach((number) =>
      expect(number).toBeWithinRange(LOTTO_NUMBER_RANGE.MIN, LOTTO_NUMBER_RANGE.MAX)
    );
  });

  test('투입한 금액만큼의 로또가 생성되는지 확인한다.', () => {
    const lottoManager = new LottoManager();
    const cashInput = '5000';
    lottoManager.buyLotto(cashInput);
    expect(lottoManager.lottos).toHaveLength(Number(cashInput) / LOTTO_PRICE);
  });
});

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    }
    return {
      message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
      pass: false,
    };
  },
});
