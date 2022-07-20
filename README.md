# [Wanted Pre Onboarding FE 5th] 팀 과제 #  3-1

- 주제: 광고 플랫폼 대시보드
<img src="https://user-images.githubusercontent.com/73277502/178656762-a651e524-d0a2-4d4a-96ff-0d463c2ccfa1.svg" width=300px;/>

- 프로젝트 기간: 2022.07.14 ~ 2022.07.20

<br />

## **1. 팀원 소개 · 맡은 부분**

### # <a href="https://github.com/chaengs">심채영</a>

```

```

### # <a href="https://github.com/leejiho9898">이지호</a>

```

```

### # <a href="https://github.com/godcl1623">이치행<a>

```
- Week리스트 구현 및 그래프에서 데이터를 수령하기 위한 API 구현
- 데이터 로딩 중 조작 방지 로직 구현
- 이전 데이터 대비 증감률 계산 및 표시 로직 구현
```

### # <a href="https://github.com/devMarco14">임종혁</a>

```
- 광고관리 페이지 레이아웃
- 광고관리 카드 신규생성(post)
```

### # <a href="https://github.com/HyeonJu-C">천현주</a>

```

```

<br />

## **2. 기술 스택**

`react` `type-script` `styled-components` `axios` `json server` `context-API`

<br />

## **3. 프로젝트 소개**

![_광고 플랫폼 대시보드](https://user-images.githubusercontent.com/99126860/179872824-b7efead0-0c26-4b17-99e8-b519423af817.jpg)

<br />

## **4. 프로젝트 구조**

```

```

<br />

## **5. 컨벤션**

### # 협업을 위한 git 커밋 컨벤션 설정

| 커밋명   | 내용                                                   |
| -------- | ------------------------------------------------------ |
| feat     | 새로운 기능을 추가                                     |
| fix      | 버그 수정                                              |
| design   | CSS 등 사용자 UI 디자인 변경                           |
| docs     | 문서 생성, 추가, 수정(README.md)                       |
| refactor | 코드 리팩토링                                          |
| chore    | 간단한 코드 변경, 로직에 큰 영향을 주지 않는 작은 변경 |
| test     | 테스트 코드 추가 및 리팩토링                           |
| rename   | 파일 혹은 폴더명을 수정, 이동                          |
| !HOTFIX  | 치명적인 버그의 긴급한 수정                            |

<br />

## **6. 발생 에러**

### # merge, refactor 작업: 앱 작동을 방해하는 오류

```
1. 서버에서 데이터를 받아 화면을 표시하는 기능의 오작동
    - 원인: MainPage, useMovieModel에서 각각 axios.get에 사용하는 주소가 다르게 지정
    - 해결: 주소를 constants로 만들어 통일

2. SideNavBar가 모든 컴포넌트에서 표시되지 않는 문제
    - 원인: 라우팅 설정 문제
    - 해결: Route, Outlet을 사용한 중첩 라우팅 구성으로 해결
3. 즐겨찾기 목록이 바뀔 때마다 페이지를 새로 렌더링하는 방법을 이용했을 때 무한 렌더링 발생
    - 원인 : 요청 => state 업데이트 => 요청 ... 무한으로 발생 
    - 해결 : js
    const callback = (response) => {
      const isSameLikeList =
        JSON.stringify(response.data) === JSON.stringify(movieList);
      if (isSameLikeList) return;
      setMovieList(response.data);
    };
 ```   

<br />

## **7. 프로젝트 설치 · 실행 방법**

### # 프로젝트 클론

```
$ git clone https://github.com/Wanted-Pre-Onboarding-Team1/Oneflix
```

### # 패키지 설치

```
$ npm install
```

### # develop 서버 실행

```
$ npm start
```

### # branch에서 작업

```
$ git checkout -b feature/page
```
