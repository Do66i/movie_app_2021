import {useState, useEffect} from "react";

function Hello(){
    useEffect(() => {
      console.log("Hi :)")
      return function(){
        console.log("Bye")
      };
    },[]);
    // useEffect(function(){
    //   console.log("Hi :)");
    //   return function () {
    //     console.log("Bye")
    //   };
    // }, []);
  return <h1>Hello</h1>;
}

function Bye(){
  return <h1>Bye</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
  <div>
  {showing ? <Hello/> : <Bye/>}
    <button onClick={onClick}>{showing ? "Hide" : "Show" }</button>
  </div>)
}

export default App;