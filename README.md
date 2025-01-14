# [Wanted Pre Onboarding FE 5th] 팀 과제 #  3-1

- 주제: 광고 플랫폼 대시보드

- 프로젝트 기간: 2022.07.14 ~ 2022.07.20

- [Log_Link] https://www.notion.so/_Log_-a6d42f609f944f149ce0292ab869d969#78742bcc71d440aea7d3ddf11c3591cb

<br />

## **1. 팀원 소개 · 맡은 부분**

### # <a href="https://github.com/chaengs">심채영</a>

### # <a href="https://github.com/leejiho9898">이지호</a>

### # <a href="https://github.com/godcl1623">이치행<a>

### # <a href="https://github.com/devMarco14">임종혁</a>

### # <a href="https://github.com/HyeonJu-C">천현주</a>


<br />

## **2. 기술 스택**

`react` `type-script` `styled-components` `axios` `json server` `context-API`

<br />

## **3. 프로젝트 소개**

![_광고 플랫폼 대시보드](https://user-images.githubusercontent.com/99126860/179872824-b7efead0-0c26-4b17-99e8-b519423af817.jpg)

<br />

## **4. 프로젝트 구조**

```
📦public
 ┣ 📜favicon.ico
 ┣ 📜index.html
 ┣ 📜logo192.png
 ┣ 📜logo512.png
 ┣ 📜manifest.json
 ┗ 📜robots.txt
 📦src
 ┣ 📂components
 ┃ ┣ 📂adManagement
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┣ 📜useAdLoad.ts
 ┃ ┃ ┃ ┣ 📜useAdPost.ts
 ┃ ┃ ┃ ┗ 📜useAdUpdateForm.ts
 ┃ ┃ ┣ 📜AdAddBox.tsx
 ┃ ┃ ┣ 📜AdManagementArticle.tsx
 ┃ ┃ ┣ 📜AddCardInner.tsx
 ┃ ┃ ┗ 📜CardInner.tsx
 ┃ ┣ 📂dashboard
 ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┗ 📜Spinner-1s-200px.svg
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┣ 📜useFormatize.ts
 ┃ ┃ ┃ ┣ 📜useHideScroll.ts
 ┃ ┃ ┃ ┣ 📜useMediaData.ts
 ┃ ┃ ┃ ┣ 📜useMediaLoad.ts
 ┃ ┃ ┃ ┣ 📜useReportLoad.ts
 ┃ ┃ ┃ ┗ 📜useTotalData.ts
 ┃ ┃ ┣ 📂subComponents
 ┃ ┃ ┃ ┣ 📜DataTable.tsx
 ┃ ┃ ┃ ┣ 📜LineGraph.tsx
 ┃ ┃ ┃ ┣ 📜SelectBox.tsx
 ┃ ┃ ┃ ┣ 📜StackedBarChart.tsx
 ┃ ┃ ┃ ┣ 📜StackedBarTooltip.tsx
 ┃ ┃ ┃ ┣ 📜TableChart.tsx
 ┃ ┃ ┃ ┣ 📜Test.tsx
 ┃ ┃ ┃ ┗ 📜WeekList.tsx
 ┃ ┃ ┣ 📂util
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📜DashboardContext.tsx
 ┃ ┃ ┣ 📜DashboardLayout.tsx
 ┃ ┃ ┣ 📜MediaStatus.tsx
 ┃ ┃ ┗ 📜TotalAdStatus.tsx
 ┃ ┗ 📂header
 ┃ ┃ ┣ 📜AppLayout.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜MobileSideBar.tsx
 ┃ ┃ ┣ 📜SideBarInner.tsx
 ┃ ┃ ┣ 📜ToggleButton.tsx
 ┃ ┃ ┗ 📜WebSideBar.tsx
 ┣ 📂database
 ┃ ┗ 📜database.json
 ┣ 📂hooks
 ┃ ┣ 📜useForm.ts
 ┃ ┣ 📜useInput.ts
 ┃ ┗ 📜useToggle.ts
 ┣ 📂libs
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜adAPI.ts
 ┃ ┃ ┣ 📜getDataAPI.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂context
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜theme.tsx
 ┃ ┣ 📂style
 ┃ ┃ ┣ 📂theme
 ┃ ┃ ┃ ┣ 📜darkTheme.ts
 ┃ ┃ ┃ ┗ 📜defaultTheme.ts
 ┃ ┃ ┣ 📜commonStyles.tsx
 ┃ ┃ ┗ 📜globalStyles.ts
 ┃ ┗ 📂utils
 ┃ ┃ ┣ 📜constants.ts
 ┃ ┃ ┣ 📜initalDatas.ts
 ┃ ┃ ┗ 📜sideBar.ts
 ┣ 📂pages
 ┃ ┣ 📜AdManagementPage.tsx
 ┃ ┣ 📜LandingPage.tsx
 ┃ ┗ 📜NotFoundPage.tsx
 ┣ 📂routes
 ┃ ┣ 📜Path.ts
 ┃ ┗ 📜Routing.tsx
 ┣ 📂types
 ┃ ┣ 📜ad.d.ts
 ┃ ┣ 📜dashboard.d.ts
 ┃ ┣ 📜media-status.d.ts
 ┃ ┗ 📜styled-components.d.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜logo.svg
 ┗ 📜react-app-env.d.ts
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

### # 

```
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
