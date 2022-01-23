import { createContext, useContext } from "react";

const MagicSquareContext=createContext();

export function useMagicSquare()
{
    
    return useContext(MagicSquareContext);
}

const min=10;
const max=50;

const magicNumber = Math.floor(Math.random() * (max - min) + min);

const magicSquareQuistionBool=[];
const magicSquare=[3+magicNumber,8+magicNumber,1+magicNumber,2+magicNumber,4+magicNumber,6+magicNumber,7+magicNumber,0+magicNumber,5+magicNumber]

const sumUpTo=magicSquare[0]+magicSquare[1]+magicSquare[2]

for(let i=0;i<9;i++)
{
    magicSquareQuistionBool.push(Math.round(Math.random()));   
}

const magicSquareQuistion=[];

magicSquareQuistionBool.map((x,i)=>{
    if(x!=0)
    magicSquareQuistion.push(magicSquare[i]*x)
    else
    magicSquareQuistion.push(null);
})

export function MagicSquareContextProvider({children})
{
    return(
        <MagicSquareContext.Provider value={{magicNumber,magicSquare,magicSquareQuistion,magicSquareQuistionBool,sumUpTo}}>
        <div>{children}</div>
        </MagicSquareContext.Provider>
    );
}