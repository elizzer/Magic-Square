import { useState } from "react";
import MagicSquare from "./components/MagicSquare"
import WinnerModal from "./Modals/WinnerModal";

function App() {

  const [winnerModalShow,setWinnerModalShow]=useState(false);  

  return(
    <div>
      <WinnerModal show={winnerModalShow} onHide={setWinnerModalShow}/>
      <MagicSquare onComplete={setWinnerModalShow}/>
    </div>
  );
}

export default App;