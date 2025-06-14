import React, { useEffect, useState } from 'react'
import {Paper,Scissor,Rock} from './images.js'
import './RPS.css'
const Rps = (props) => {

  const [computerMove,setComputerMove] = useState();
    const obj ={
        rock:"scissor",
        paper:"rock",
        scissor:"paper"
    }
    const[score,setScore] = useState(0);
    const[highScore,setHighScore] = useState(0);
    const [userChoice,setUserChoice] = useState();
    const [status,setStatus] = useState('');
    

    let resetScore = ()=>{
        if(score>highScore){
            setHighScore(score);
        }
        setScore(0);
    }

    function pickComputermove(){
        const randomNumber=Math.random();

        if(randomNumber >=0 && randomNumber<1/3 )
            {    
                setComputerMove('rock');
            }
        else if( randomNumber >=1/3 && randomNumber<2/3)
            {
                setComputerMove('paper')
            }
        else if( randomNumber >=2/3 && randomNumber<1)
            {
                setComputerMove('scissor')
            }  
            
        return computerMove;
        }

        function youWon(){
            setScore(score+1);
        }

        function userChoices(choice){
              setUserChoice(choice);
                if(obj[choice]==computerMove){
                    setStatus('you won')
                    youWon();
                }
                else if(choice==computerMove){
                    setStatus('Tie')
                }
                else{
                    setStatus('You Lose')
                }
                pickComputermove();

        }
        useEffect(()=>{
            pickComputermove();
        },[])  

    return (
        <>
            <button className="back-btn" onClick={props.rpsBack}>Back</button>
            <div className="process">
                <script> alert('Are you Ready...?');</script>
                <h3> Rock - Paper - Sciccors</h3>
                <button onClick={()=>userChoices('rock')} className="move-button">
                    <img src={Rock} className="move-icon" /></button>
                <button onClick={()=>userChoices('paper')} className="move-button">
                    <img src={Paper} className="move-icon" />
                </button>

                <button onClick={()=>userChoices('scissor')} className="move-button">
                    <img src={Scissor} className="move-icon" />
                </button>


                <p className="js-result result"></p>
                <p className="js-moves"></p>
                <p className="js-score score"></p>
                <p className="score"><b>Result:</b><b>{status}</b></p>
                <p className="score">Score:{score}</p>
                <p className="score">High Score:{highScore}</p>
                <button className="reset-score-button" onClick={resetScore}>Reset Score</button>
            </div>
        </>
    )
}

export default Rps