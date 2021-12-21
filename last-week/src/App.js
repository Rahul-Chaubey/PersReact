import logo from "./logo.svg";
import "./App.css";
//import "./styles.scss";
import HookSample from "./HookSample";
import RefParent from "./RefParent";
import PortalDemo from "./PortalDemo";
import ProfilerDemo from "./ProfilerDemo";
import UserHookSample from "./UserHookSample";
import Increment from "./Increment";
import NewIncrement from "./NewIncrement";
import NormalProps from "./NormalProps";
import Incrementer from "./Incrementer";
import Decrement from "./Decrement";
import NewDecrement from "./NewDecrement";
import Decrementer from "./Decrementer";
import DemoComponent from "./DemoComponent";
import Reconciliation from "./Reconciliation";
import SaassDemo from "./SaassDemo";
import RadiumDemo from "./RadiumDemo";
import TestComponent from "./TestComponent";
import JqueryDemo from "./JqueryDemo";

function App() {
  const onClickHandler = () => {
    console.log("Clicked");
  };
  return (
    <div className="App">
      <JqueryDemo />
      {/* <TestComponent name={"Rahul"} /> */}
      {/* <RadiumDemo /> */}
      {/* <SaassDemo /> */}
      {/* sample app using Hooks
      <br />
      <button onClick={onClickHandler}>Toggle Component</button>
      {showComponent && <ConditionalRenderedComponent />} */}
      {/* <HookSample /> */}
      {/* <UserHookSample /> */}
      {/* <RefParent /> */}
      {/* I am inside App Component */}
      {/* <PortalDemo/> */}
      {/* <ProfilerDemo /> */}
      {/* <Increment />
     <NewIncrement /> */}
      {/* <NormalProps 
    render = { (someValue) => {
       return "old name" + someValue;rgb(203, 214, 44);
      {/* <Incrementer 
       render = {(value, onClickHandler) => {
         return <Increment value= {value}
         onClickHandler= {onClickHandler} />
       }}/>
       <Incrementer 
       render = {(value, onClickHandler) => {
         return <NewIncrement value= {value}
         onClickHandler= {onClickHandler} />
       }} /> */}
      {/* <Decrement />
       <NewDecrement /> */}
      {/* <Decrementer 
       render = {(value, onClickHandler) => {
         return <Decrement value = {value}
         onClickHandler= {onClickHandler} />
       }} />

       <Decrementer
       render = {(value, onClickHandler) => {
         return <NewDecrement value = {value}
         onClickHandler = {onClickHandler} />
       }} /> */}
      {/* <DemoComponent /> */}
      {/* <Reconciliation /> */}
    </div>
  );
}

export default App;
