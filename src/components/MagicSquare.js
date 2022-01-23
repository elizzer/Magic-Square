import { useState,useEffect } from "react";
import {useMagicSquare} from "../context/magicSquareContext"
import NumberBox from "./NumberBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberSelectorModal from "../Modals/NumberSelectorModal";
import { ProgressBar } from "react-bootstrap";

let selectedBox;

export default function MagicSquare({onComplete})
{
  const {magicNumber,magicSquare,magicSquareQuistion,sumUpTo}= useMagicSquare();
  const [MSQ,setMSQ]=useState(magicSquareQuistion);
  const [numberSelectorModalShow,setNumberSelectorModalShow]=useState(false);
  
  
  let temp=0
  for(let i=0;i<9;i++)
      {
        if(MSQ[i]==magicSquare[i])
          temp+=1;
      }
  let ProgressBarVariant;
  
  if(temp==8)console.log("[+]GameOver you won")
  
  
  if(temp<9/4) ProgressBarVariant="danger"
  else if(temp<9/2) ProgressBarVariant="warning"
  else if(temp<9) ProgressBarVariant="info"
  else {
    onComplete(true)
    ProgressBarVariant="success"
  }

  //if(temp==9)onComplete(true)

    function ModalOnClose(e)
    {
      setNumberSelectorModalShow(false)
      setMSQ((prev)=>{
        if(e!=1255)
      prev[selectedBox]=e;
      return [...prev];
      })
    }

    const notInMSQ= []
    if(notInMSQ.length==0)notInMSQ.push(null);
    for(let i=magicNumber;i<8+magicNumber;i++)
    {
      let flag=MSQ.find(x=>x==i)
        if(!flag)
        notInMSQ.push(i);
        
      }

    function magicSquareClickHandler(i)
    {
      selectedBox=i;
      setNumberSelectorModalShow(true);
    }
    
    
    return(
      <>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
          <div style={{margin:"10px"}}>{`The Number of each row and coloumns and all diagonals should sum up to "${sumUpTo}"`}</div>
          <div style={{margin:"10px"}}>Do Not giveup</div>

          <div  >
          <NumberSelectorModal show={numberSelectorModalShow} magicNumber={magicNumber} magicSquare={magicSquare} onHide={ModalOnClose} notInMSQ={notInMSQ}/>
          <br></br>
          {MSQ.map((box,i)=>{ 
            if(i%3!==0)
                return <NumberBox value={box} key={i} index={i} onClick={magicSquareClickHandler}/>
            else
                return <><br></br><NumberBox value={box} key={i} index={i} onClick={magicSquareClickHandler}/></>
          })}

          </div>
          </div>
          <ProgressBar label={`${temp} Boxes are correct in correct place`} variant={ProgressBarVariant} min={0} max={9} now={temp} style={{width:"50%",margin:"auto",marginTop:"10px"}} />
      </>
    
  );

  
}