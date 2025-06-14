import React, { useState } from 'react';
import '../style.css';
import Answer from './Answer';
 
 export default function Gamepage({c,questionNum,addScore}) {
    const{question,answers}=c;
    const [bool,setBool] = useState(false);
   return (
<>
{/* <button>back</button> */}
<div className='question'>
    {questionNum} : {question}</div>
    {answers.map((c,idx)=><Answer key={idx} addScore={addScore} bool={bool} setBool={setBool} c={c}/>
)}

</>   )
 }
 