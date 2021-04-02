import MyComponent from "./props-basic/MyComponent";
import ButtonEffect from "./event-basic/eventHandling";

function App() {
  return (
    <div>
        <MyComponent age={25}/>
        <ButtonEffect/>
    </div>
  );
}

export default App;
