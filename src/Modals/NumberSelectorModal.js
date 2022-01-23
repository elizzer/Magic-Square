import React from "react";
import { Button, Modal } from 'react-bootstrap';


export default function NumberSelectorModal({show,magicNumber,magicSquare,onHide,notInMSQ})
{
    
    
    console.log(notInMSQ)
    
    function clickHandler(e)
    {
        onHide(e);
    }

    function ModalCloseHandler()
    {
        onHide(1255);
    }
    return(
        <>
        <Modal centered show={show} onHide={ModalCloseHandler}> 
            <Modal.Header closeButton>
                <span>Working great</span>
            </Modal.Header>
            <Modal.Body>
                {notInMSQ.map((e,i)=>{
                 return  <Button variant="primary"style={{height:"50px", width:"50px",margin:"5px"}} onClick={()=>{clickHandler(e)}} >{e}</Button>
                })}
            </Modal.Body>
        </Modal>
        </>
    );
}