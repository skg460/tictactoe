import React, { useState } from 'react';
import './Tictactoe.css';

function Tictactoe() {
	const [turn, setTurn] = useState(1);
	const [over, setOver] = useState(false);
	const [winner, setWinner] = useState(-1);
	const [board, setBoard] = useState([
		[' ', ' ', ' '],
		[' ', ' ', ' '],
		[' ', ' ', ' ']
	]);
	function handleClick(r, c){
		let copy = [...board];
		if(turn === 1){
			copy[r][c] = '#';
			setTurn(2);
		} else if(turn === 2){
			copy[r][c] = 'O';
			setTurn(1);
		}
		setBoard(copy);
		checkGameStatus();
	}
	function checkGameStatus(){
		console.log("Here")
		for(let i = 0; i < 3; i++){
            if(board[i][0] !== ' ' && board[i][0] === board[i][1] && board[i][1] === board[i][2]){
                setOver(true);
				setWinner(board[i][0] === '#' ? 1 : 2);
                return;
            }
        }
        for(let i = 0; i < 3; i++){
            if(board[0][i] !== ' ' && board[0][i] === board[1][i] && board[1][i] === board[2][i]){
                setOver(true);
				setWinner(board[i][0] === '#' ? 1 : 2);
                return;
            }
        }
        if(board[0][0] !== ' ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]){
            setOver(true);
			setWinner(board[0][0] === '#' ? 1 : 2);
			return;
        }
        if(board[0][2] !== ' ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]){
            setOver(true);
			setWinner(board[0][2] === '#' ? 1 : 2);
			return;
        }
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(board[i][j] === ' '){
                    return;
                }
            }
        }
		setOver(true);
	}
	function getResult() {
		let string = "";
		if(over === true){
			string = string + "Game over";
			if(winner === 1){
				string += " Winner is Player 1";
			} else if(winner === 2){
				string += " Winner is Player 2";
			} else {
				string += " It's a Draw";
			}
		}
		return string;
	}
    return (
        <div>
            <h1>Welcome to Tic-Tac-Toe</h1>
            <table>
                <tbody>
                    <tr>
                        <td onClick={() => handleClick(0,0)}>{board[0][0]}</td>
                        <td onClick={() => handleClick(0,1)} style={{border:"1px solid black", borderTop:"none"}}>{board[0][1]}</td>
                        <td onClick={() => handleClick(0,2)}>{board[0][2]}</td>
                    </tr>
                    <tr>
                        <td onClick={() => handleClick(1,0)} style={{border:"1px solid black", borderLeft:"none"}}>{board[1][0]}</td>
                        <td onClick={() => handleClick(1,1)}>{board[1][1]}</td>
                        <td onClick={() => handleClick(1,2)} style={{border:"1px solid black", borderRight:"none"}}>{board[1][2]}</td>
                    </tr>
                    <tr>
                        <td onClick={() => handleClick(2,0)}>{board[2][0]}</td>
                        <td onClick={() => handleClick(2,1)} style={{border:"1px solid black", borderBottom:"none"}}>{board[2][1]}</td>
                        <td onClick={() => handleClick(2,2)}>{board[2][2]}</td>
                    </tr>
                </tbody>
            </table>
			<h3>{turn === 1? "Player 1 " : "Player 2"} turn</h3>
			<h3>{getResult()}</h3>
        </div>
    )
}

export default Tictactoe;
