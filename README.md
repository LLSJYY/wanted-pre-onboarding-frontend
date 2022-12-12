# 원티드 프리온보딩 프론트엔드 - 선발 과제

https://user-images.githubusercontent.com/96014828/207006502-e45e3fd6-10bb-40da-94da-c4cdfef821ac.mov



로그인 / 회원가입.  

Assignment1. 유효성 검사  

```
  const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

```
정규표현식을 이용해서 포맷을 만들고, 그이후 match 값을 validBtn의 disable속성에 전달해서 유효성검사를 진행했습니다.

Assignment2. 로그인 API 호출.     
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

Assignment3. 토큰여부에 따른 리다이렉트 처리.  
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

Assignment4. /todo경로에 접속하면 투두 리스트의 목록구현과 addTodo 구현

````
const onAddTodo = (data) => {
    api.addTodo(accessToken, data).then((res) => {  
      const { todo, userId, id, isCompleted } = res.data;
      setTodoList([
        ...todoList,
        {
          todo,
          userId,
          id,
          isCompleted,
        },
      ])
    })
  }
 
````
1. 경로접속시 TodoList구현은 useEffect 를 이용하여 구현했습니다
2. addTodo 할때,디스트럭쳐링을 이용해서 코드를 줄였습니다

Assignment5. 투두 리스트의 수정, 삭제 기능 구현 
````
function switchMode(mode, el) {  /* todo: 함수이름명 고치기.. */
    if (el.id === modify.id && mode === 'modify') {
      return <>
     {...}
    </>
````
1.TodoItem 컴포넌트에서 삼항연산자 대신  함수를 이용하여 수정기능의 공통된 코드를 합쳤음. + 
수정기능을 이용할때, 수정 => 제출 경우에 수정이 정상적으로 되지만, 수정 => 다른 투두 수정 버튼을 눌렀을 때는 수정이 안됩니다.
후자의 방식으로 수정할떄 수정기능이 정상적으로 이용될 수 있도록 나중에 기능추가를 위해 함수로 뺴놨습니다.

Todo
- [x] loginPage template 통합
- [ ] newTodo Input 한글 오류  => vue에서 비슷한 경험이 있었음.
- [ ] isCompleted / onModifyTodo => 기능이 비슷해서 통합하기
- [x] api Todo 파라미터 이름통일 id=>item
- [ ] switchMode 수정 => 타 투두리스트 수정버튼 눌렀을 때 수정 될수 있게 기능 
