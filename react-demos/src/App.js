import logo from './logo.svg';
import './App.css';
//import FormattedDate from './formattedDt';
//import Welcomeuser from './welcome-user';
//import BoilingVerdict from './BoilingVerdict';
//import CounterComp from './countercomp';
//import ToggleEffect from './toggleEffect';
//import TempCalc from './TempCalc';
//import {Timer} from './timer';
//import { Parent } from './parent';
//import StateHookDemo from './statehook-demo';
import UseEffectTimer from './useEffectTimer';
import ControlledForm from './controlledForm';
import UncontrolledComp from './uncontrolledForm';
import UncontrolledFlavour from './uncontrolled-flavour';
import ControlledFlavour from './controlledFlavour';
function App() {
  return (
    
    
    <div className="App">
       <h3>This is controlled flavoure</h3>
       <ControlledFlavour />
       <h3>This is uncontrolled flavoure</h3>
       <UncontrolledFlavour />
   {/*  <UseEffectTimer/>
     <UncontrolledComp/>
       <ControlledForm />

   
     <UseEffectTimer/>
      <StateHookDemo />
       <Parent/>

        <Timer />   
       <TempCalc />

     <CounterComp user ='John'/>

    <ToggleEffect />


   <h3>Hello World</h3>
   
    <FormattedDate date ={new Date()}/>    
    
    <Welcomeuser fname='John' lname='Doe'/>
    <Welcomeuser fname='Sara' lname='Mill'/>
}
    <BoilingVerdict temperature={100} />
    <BoilingVerdict temperature={50} />*/}
    
    
    {/*    <Welcomeuser username='John'/>*/}
    
    </div>
  );
}

export default App;
