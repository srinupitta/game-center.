import {useState} from "react"
import {questions} from "./ques.js"
import './style.css'
import Gamepage from "./components/Gamepage.jsx"
import {Stack,Button} from './Material.js'
import "./index.css"
import Score from './components/Score.jsx'
import Home from "./Home.jsx"


export default function Game(props) {
  const [start,setStart]=useState(false);
  const [score,setScore] = useState(0);
  const [quesState,setQuesState] = useState(true)
  const [state,setState] = useState(false);
  const [alertstate,setAlertState] = useState(true);
  
  const startQuizBtn=()=>{    
  setStart(true)  
  }
  function alertFunc(){
    if(alertstate===true){
     setTimeout(()=>{
      alert('Warning : You Can Only Select The Option Once....')
     },100)
    }
  }
    const changeState=()=>{
    setQuesState(false)
    setState(true)
  }
  const addScore=()=>{
    setScore(score+1);
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'relative',
    height: '4vh',
  };
  
  const buttonStyle = {
    position: 'absolute',
    top: '-44px',
    right: '20px',
    backgroundColor:'#018749',
    fontWeight:'600',
    fontFamily: 'Arial',
    // marginTop:''
  };

  const funcc=()=>{
    startQuizBtn();
    alertFunc();
  }

if(start===false){
return(
  <>
  <button className='back-btn1' onClick={props.func} >BACK</button>
    <div className="modal" id="quizModal">
    <div className="modal-content">
      <h2>Test your Brain</h2>
      <p className="ready">Are Youuu Reaaadddyyy🔥?</p>
      <button onClick={funcc} id="startQuizBtn" >Start Quiz</button>
    </div>
  </div>
  </>
)
}
else if(quesState===true){
  return(
<>
<div id="quespage">
<button className="back-btn" onClick={props.func}>BACK</button>
<h1 className="heading">Quizz</h1>
<div style={containerStyle}>
    <Button variant="contained" onClick={changeState} style={buttonStyle}>
      Submit
    </Button>
</div>
<div className='Questionsdiv'>
{questions.map((c,idx)=><Gamepage c={c}key={idx} alertstate={alertstate} setAlertState={setAlertState} questionNum={idx+1} addScore={addScore}/>)}
</div>
</div>
</>
  )
}
else {
return(
<>
<button className="back-btn2" onClick={props.func}>BACK</button>
 <Score state={state} score={score}/>
</>
)
}
}

