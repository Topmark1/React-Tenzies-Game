import React from 'react'

export default function Box(props){
    //const [click,clicked] = React.useState(false)
    function randomDice(){
  
    let boxes = (<div id={props.id} className='boxes' style={props.style} onClick={props.freeze}>{props.num}</div>)
    return boxes
    }
    return randomDice()
}