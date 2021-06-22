
import './App.css';
import{ useState , useEffect} from 'react'
import Square from './Components/Square';
import {Patterns} from './Patterns';

function App() {
  const [board, setBoard] = useState(["","","","","","","","","",]);
  const [player, setPlayer] = useState("LARA");
  const [result, setResult] = useState({winner:"none", state:"none"});

  useEffect(()=>{
    checIfTie();
    checkWin();

    if(player=="LARA"){
      setPlayer("PAPA MAMAN");
    } else{
      setPlayer("LARA");
    }
  }, [board]);

  useEffect(()=>{
    if(result.state !="none"){
      alert(`Game finished! Winning player: ${result.winner}`);
      restartGame();
    }  
  }, [result]);

  const chooseAquare = (square) =>{
    setBoard(
      board.map((val, index)=>{
      if(index == square && val == ""){
        return player
      }
      return val
    })
    );
  };
  const checkWin =()=>{
    Patterns.forEach((currPattern)=>{
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer=="") return;
      let foundWinningPattern = true;
      currPattern.forEach((index)=>{
        if(board[index] != firstPlayer){
          foundWinningPattern = false;
        }
      });
      if(foundWinningPattern){
        setResult({winner: player, state: "GAGNÉ"})
      }
    });
  };

  const checIfTie=()=>{
    let filled = true;
    board.forEach((square)=>{
      if(square ==""){
        filled = false;
      }
    });
    
    if(filled){
      setResult({ winner: "PERSONNEL GAGNÉ", state: "Tie" });
    }
  };

  const restartGame =()=>{
    setBoard(["","","","","","","","","",]);
    setPlayer("PAPA MAMAN");
  };



  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square val={board[0]} chooseAquare={()=>{chooseAquare(0)}}/>
          <Square val={board[1]} chooseAquare={()=>{chooseAquare(1)}}/>
          <Square val={board[2]} chooseAquare={()=>{chooseAquare(2)}}/>
        </div>
        <div className="row">
        <Square val={board[3]} chooseAquare={()=>{chooseAquare(3)}}/>
          <Square val={board[4]} chooseAquare={()=>{chooseAquare(4)}}/>
          <Square val={board[5]} chooseAquare={()=>{chooseAquare(5)}}/>
        </div>
        <div className="row">
        <Square val={board[6]} chooseAquare={()=>{chooseAquare(6)}}/>
          <Square val={board[7]} chooseAquare={()=>{chooseAquare(7)}}/>
          <Square val={board[8]} chooseAquare={()=>{chooseAquare(8)}}/>
        </div>

      </div>
    </div>
  );
}

export default App;
