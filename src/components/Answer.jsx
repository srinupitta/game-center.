import { lightGreen } from '@mui/material/colors';
import React ,{useState}from 'react';
import Score from './Score.jsx';
export default function Answer({c,idx,bool,setBool,addScore}){
    const{text,correct}=c
    const [myStyle,setMyStyle] = useState('white')
    const [myColor,setMyColor] = useState('black')
    const [count,setCount] = useState(0);
    const handleButtonClicked = ()=>{
      setBool(true)
    }
    const [score,setScore] = useState(0);
    function defaultColor(){
        setMyStyle('white')
        setMyColor('black')
    }
    function func(){
      if(correct==true){
        addScore();
      }
      setMyStyle('#0076CE');
      setMyColor('white')
      if(count%2!=0){
        defaultColor();
      }
      setCount(count+1);
    }
    function buttonClicked(){
      func();
      handleButtonClicked();
    }
  return (
  <>
  <div className='options'>
    <button className='btn'  disabled={bool} style = {{backgroundColor:myStyle,color:myColor}} key={idx} onClick={buttonClicked} ><p className='options-text'>{text}</p></button>
    </div>
    <Score />
  </>
  )
}