import {useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([])
  const onChange = (e) => setToDo(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault(); // preventDefault()를 사용해서 사용자가 입력 칸에 원하지 않는 문자를 입력하지 못하도록 합니다
    if(toDo === "") {
      console.log(toDo)
      return;
    } // form은 submit 이벤트를 갖고 있다.
      // 그러므로 evernt.preventDefault() 함수를 이용하여 기본 동작을 막자.
    setToDos((currentArray) => [toDo, ...currentArray])
    console.log(toDos)
    setToDo("");
  }
  return(
    <div>
    <h1>밍밍밍밍밍{toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="Write your to do !"
        />
        <button>Add To Do</button>
      </form>
      <hr /> {/* hr = horizontal rule */}
      <ul>
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>))}
      </ul>
      {/*
      리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에 key를 넣어 고유하게 만들어줘야함
      map의 첫 번째 argument는 값이고 두번째는 index 즉 숫자를 의미함
      그래서
      {toDos.map((item, index) => {item})}
      만들어줌
      즉,
      {{item},{item},{item}...}
      배열을 만들어 각자 고유의 key를 가지게 함
       */}
    </div>
  )

}
export default App;