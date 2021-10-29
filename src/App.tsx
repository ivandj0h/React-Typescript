import UseContextComponent from './components/useContextComponent';
import UseLineComponent from './components/useLineComponent';
import UseReducerComponent from './components/useReducerComponent';
// import UseEffectComponent from './components/useEffectComponent';
import UseStateComponent from './components/useStateComponent';


function App() {
  return (
    <>
      <div>React typescript </div>
      <UseLineComponent />
      <UseStateComponent />
      <UseLineComponent />
      {/* <UseEffectComponent /> */}
      <UseContextComponent />
      <UseLineComponent />
      <UseReducerComponent />
    </>
  );
}

export default App;
