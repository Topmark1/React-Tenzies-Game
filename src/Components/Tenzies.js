import React from 'react'
import './Tenzies.css';
import Box from './Box.js'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

    
export default function Tenzies(){
    const [initial,NewRoll] = React.useState(collatedRandom())
    

    function randomData(){
    return {
        number:Math.ceil(Math.random()*6),
        isClicked:false,
    id:nanoid()}   }

    function collatedRandom(){
        let Array = []
        for(let i=1;i<11;i++){
            Array.push(randomData()) }
        return Array}

    function uniqueBox(id){
        NewRoll((prevState)=>prevState.map((objj)=>(id===objj.id?{...objj,isClicked:!objj.isClicked}:objj)))
        }    
        let RollValue = 'Roll'
        let confetti
function confirmWin(){
     let confirmationArray =[]
        let isClickedvalueArray =[]
        let Win = (<div></div>)
        
    initial.map((objj)=>{ confirmationArray.push(objj.number)
        return isClickedvalueArray.push(objj.isClicked)})
       
    let set1 = new Set(confirmationArray)
    let set2 = new Set(isClickedvalueArray)
    let condition  = (set1.size ===1)&&(set2.size===1)
    if(condition){
      Win = (<div>You Win!!!!</div>)}
      RollValue = (condition)?('New Game'):RollValue
      confetti = (condition)?<Confetti />:''

      return Win
}
    const TenDices = (initial).map((obj)=>{ 
    let firstcolor = {backgroundColor:'yellow'}
    let secondcolor = {backgroundColor:'red'}
        return <Box 
        key={obj.id} 
        id={obj.id}
        num={obj.number} 
        style={obj.isClicked?firstcolor:secondcolor}
        freeze={()=>uniqueBox(obj.id)}/> })


    function Roll(){
    return NewRoll((prevState)=>prevState.map((objjj)=>((objjj.isClicked)?objjj:(objjj.number=randomData()))))
    }
    function NewGame(){
        window.location.reload(false)
    }

function NewgameCondition(){
    let confirmationArray =[]
       let isClickedvalueArray =[]

   initial.map((objj)=>{ confirmationArray.push(objj.number)
       return isClickedvalueArray.push(objj.isClicked)})
   let set1 = new Set(confirmationArray)
   let set2 = new Set(isClickedvalueArray)
   let condition  = (set1.size ===1)&&(set2.size===1)
     return condition
}

return (
    <div className='darkB'>
    <div className="innerB">
    <h1 className='title'>Tenzies</h1>
    <h5>Roll untill all dice are the same. Click each die to freeze it at its current value between rolls.</h5>
    <div className='box'>
    {TenDices}
    </div>
    <h1 style={{color:'red',fontSize:'50px',margin:'-9px 0px -15px 0px'}}>{confirmWin()}</h1>
    {NewgameCondition()?<button onClick={NewGame}>{RollValue}</button>:<button onClick={Roll}>{RollValue}</button>}
    {confetti}
    </div>
    </div>)
}
