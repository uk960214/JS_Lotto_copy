<p align="middle" >
  <img width="200px;" src="./images/lotto_ball.png"/>
</p>
<h2 align="middle">level1 - 행운의 로또</h2>
<p align="middle">자바스크립트로 구현 하는 로또 어플리케이션</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</p>

## 데모 페이지

https://uk960214.github.io/javascript-lotto/

## UI 구현

- [x] 피그마 양식에 따라 마크업 작성
- [x] 피그마 양식에 따라 css style 작성

## 기능 구현

- [x] 구입 금액을 입력 받는다.
  - [x] 입력 값이 빈 칸이 아닌지 검증한다.
  - [x] 입력 값이 1000원 단위인지 검증한다.
  - [x] 입력 값의 범위가 1000 - 50000인지 검증한다.
  - [x] 구입 버튼을 눌렀을 때 결과 부분이 표시된다.
  - [x] 구입 버튼을 눌렀을 때, 금액 입력창과 구입 버튼은 비활성화 된다.
- [x] 입력한 구입 금액만큼 로또를 발급한다.
  - [x] 각 로또 당 1 - 45 사이의 임의의 숫자 6개를 생성한다.
  - [x] 발급한 로또를 페이지에 표시한다.
- [x] 번호 보기 토글을 선택하면 숫자를 보여준다.
  - [x] 토글 버튼을 구현한다.
  - [x] 토글 버튼이 활성 상태일 때 로또 숫자를 보여준다.
  - [x] 토글 버튼이 비활성 상태일 때 로또 숫자를 숨긴다.

## 예외 사항

- 구입 금액의 유효 범위는 1000원 ~ 50000원이다.

## ⚙️ Before Started

#### 개발 환경 가이드

개발 중에는 아래 명령어를 사용하여 webpack dev server를 띄워 현재 개발 중인 어플리케이션을 확인할 수
있습니다.

```
npm run start
```

별도로 빌드를 해야 한다면 아래 명령어를 사용해주세요

```
npm run build
```

<br>

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/javascript-lotto/issues)에 등록해주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-lotto/blob/main/LICENSE) licensed.
