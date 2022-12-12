
https://user-images.githubusercontent.com/96014828/207006502-e45e3fd6-10bb-40da-94da-c4cdfef821ac.mov



로그인 / 회원가입.  

1.유효성 검사  

```
  const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

```
정규표현식을 이용해서 포맷을 만들고, 그이후 match 값을 validBtn의 disable속성에 전달해서 유효성검사를 진행했습니다.

2.로그인 API 호출.     
````
const _api = api[typeAPI];

const handleBtnClick = () => {
   _api({
      email: userId,
      password: userPassword
    }).then((res)=> {
      localStorage.setItem('wtd_tk',res.data.access_token)
      navigate('/todos') //res 가 성공적이면~
    }).catch((err)=> console.warn(err));
  }
````
typeAPI를 props로 전달을 해주어서 login/signUp이 props 로 전달되는 값에 따라 실행되게해서 컴포넌트의 재사용성을 높이려고 시도했습니다.

3.토큰여부에 따른 리다이렉트 처리.  
````
const accessToken = localStorage.getItem("wtd_tk");

useEffect(() => {
    if(accessToken){
      navigate('/todos')
    }
  }, [accessToken])

````
localstorage안의 토큰값을 이용하여 처리했습니다.

투두리스트
````
공통사항:
````

 1.AddTodo.    
 2.isCompleted    
 3.ModifyMode.    
 4.DeleteTodo.  
 5.InitTodo. 
 
 
Todo
- [x] loginPage template 통합
- [ ] newTodo Input 한글 오류  => vue에서 비슷한 경험이 있었음.
- [ ] isCompleted / onModifyTodo => 기능이 비슷해서 통합하기
- [ ] api Todo 파라미터  
