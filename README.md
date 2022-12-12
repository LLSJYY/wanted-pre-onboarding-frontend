
https://user-images.githubusercontent.com/96014828/207006502-e45e3fd6-10bb-40da-94da-c4cdfef821ac.mov



로그인 / 회원가입.  

1.유효성 검사  

```
  const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

```
정규표현식을 이용해서 포맷을 만들고, 그이후 match 값을 validBtn의 disable속성에 전달해서 유효성검사를 진행했습니다.

2.로그인 API 호출.  
3.토큰여부에 따른 리다이렉트 처리.  

투두리스트
 1.투두 리스트의 목록.  
 2.완료 여부(체크박스).  
 3.수정모드.  
 4.삭제버튼.  

Issue
- [v] loginPage template 통합
- [x] newTodo Input 한글 오류  => vue에서 비슷한 경험이 있었음.
- [v] readme.. 날라감.. 다시씀..

