import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './magicSquare.css';
import { useMagicSquare } from "../context/magicSquareContext";

const size="70px"
const fontSize="2rem"

const style={
    width:size,
    height:size,
    fontSize:fontSize,
    
}


export default function NumberBox(Props)
{   
    const {magicSquareQuistionBool}=useMagicSquare();
   
    const variant=magicSquareQuistionBool[Props.index]?"outline-success":"outline-dark";
   
    return(
        <>
            <Button disabled={magicSquareQuistionBool[Props.index]} style={style} variant={variant} onClick={()=>Props.onClick(Props.index )}>{Props.value}</Button>
        </>
    )
}