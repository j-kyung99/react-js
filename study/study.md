## React JS 강의 요약

### useEffect

- 두 개의 argument를 가지는 함수
- 첫 번째 argument는 우리가 단 한번만 실행하고 싶은 코드
- 두 번째 argument는 [] 배열
  - 대표적인 사용법 : useEffect(callback함수, []) => API를 한번만 호출하고 다시는 호출하기 싫은 경우
- 특정한 코드만 변화했을 때 원하는 코드만 실행할 수 있는 방법
  - []배열 자리에 원하는 state를 작성해주면 됨
    - ex) useEffect(() => {
      console.log("",#);
      },[**keyword**])
    - keyword가 변화할 때 코드를 실행할 것이라고 react.js에게 알려줌
    - 빈 배열만 작성한 경우 코드가 단 한번만 실행(react가 지켜볼 게 없기 때문)
    - [keyword, counter] 같이 두가지 state도 가능
- 컴포넌트가 destroy 될 때도 코드 실행 가능
  - return으로 함수를 만들어주면 됨

### map

- 하나의 array 안에 있는 item들을 내가 원하는 것으로 바꿔주는 역할을 함
  - 예전 array를 가져와서 변형시킴
  - key는 map안에서 component들을 render 할 때 사용하는 것 (반드시 필요)
    - 다른 항목들 사이에서 고유하게 식별할 수 있는 것으로 사용

### async-await

- then 대신에 보편적으로 사용하는 것
- await을 감싸는 await을 만들 수 있음

### react-router-dom

- Routes : 한 번에 하나의 Route만 렌더링 하기 위해 사용
- Link : 브라우저 새로고침 없이도 다른 페이지 이동 가능하게 해줌
  - 기존 HTML의 a태그 사용 시 페이지 이동 시 항상 새로고침 됨
