import React, { useState } from 'react'
import Game from './App.jsx'
import  Rps  from './Rps.jsx'
import './style.css'
import {Button,Card,CardActions,CardContent,CardMedia,Typography} from './Material.js'

const Home=()=>{
    const [home,setHome]=useState(true)
    const [quiz,setQuiz]=useState(false)
    const [rps,setRps]=useState(false)

    const btnClicked1=()=>{
        setHome(false)
        setQuiz(true)
    }
    const btnClicked2=()=>{
        setHome(false)
        setRps(true)
    }
    function func(){
      setHome(true);
      setQuiz(false);
    }
    const rpsBack=()=>{
      setHome(true);
      setRps(false);
    }
    if(home===true){
    return(
        <>
        <div className='gamecenter'>
        <h1 className="head">Game Center</h1>
        <div className='cards'>
        <div className='quiz-class'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="./Quiz.avif"
        title="Quiz"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Quiz
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Quiz : Here, the player is given a sheet of questions with each question having 4 options each containing one correct answer among them . The player can select only one option ,once selected cannot be changed. Final score will be given when you submit the questions .Play and have fun !!!
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={btnClicked1} size="small">Start</Button>
      </CardActions>
    </Card>

        </div>
      <div className='rps-class'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200}}
        image="/rock-paper-scissors.jpg"
        title="Rock-Paper-Scissor"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rock-Paper-Scissors
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Rock, Paper, Scissors. The familiar game of Rock, Paper, Scissors is played like this: at the same time, two players display one of three symbols: a rock, paper, or scissors. A rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it. Play and have fun!!!
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={btnClicked2} size="small">Start</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </div>
    </div>
        </div>
       
        </>
    )
    }
    else if(quiz===true){
        return(<>
        
        <Game func={func} />
        </>
        )
    }
    else if(rps===true){
        return(
            <>
            <Rps rpsBack={rpsBack}/>
            </>
        )
    }
    
}

export default Home