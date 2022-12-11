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