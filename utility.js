class SnakeLadder {
    assignPositionOne = () =>{
        let playerOnePosition = 0;
        return playerOnePosition;
    }
    assignPositioTwo = () =>{
        let playerTwoPosition = 0;
        return playerTwoPosition;
    }
    diceRoll = ()=>{
        let diceRoll = (Math.floor(Math.random() * 6)+1);
        return diceRoll;
    }
    option = (position1,position2)=>{
        let turn = 1;
        let count = 0;
        let position = 0;
        do {
            count++;
            let roll =this.diceRoll();
            console.log("dice Roll is->",roll);
            let random = (Math.floor(Math.random() * 3));
        switch (random) {
            case 0:
                //console.log("No Play");
                turn=this.noPlay(turn);
                break;
            case 1:
                // console.log("Ladder");;
                // position=position+roll;
                // console.log(position);
                position=this.ladder(position1,position2,roll,turn);
                if (turn == 1) {
                    position1=position;
                    turn = 1;
                } else if (turn == 0) {
                    position2=position;
                    turn =0;
                }
                break;
            case 2:
                // console.log("Snake");
                // position=position-roll;
                // console.log(position);
                position=this.snake(position1,position2,roll,turn);
                if (turn == 1) {
                    position1=position;
                    turn = 0;
                } else if (turn == 0){
                    position2=position;
                    turn =1;
                }
                break;      
            default:
                break;
        }
        }while (position1 < 100 && position2 < 100 );
        console.log("Final Player one pos",position1);
        console.log("Final Player two pos",position2);
        (position1 == 100) ? console.log("Player 1 winner"):console.log("Player 2 winner");; 
        console.log("Dice rolled->",count);
    }
    noPlay = (turn) =>{
        console.log("No play");
        if (turn == 1) {
            console.log("Player 1 turn over");
            return  0;
        } else if (turn == 0){
            console.log("Player 2 turn over");
            return 1;
        }
    }
    ladder = (pos1,pos2,roll,turn) => {
        console.log("Ladder");
        if (turn == 1) {
            pos1=pos1+roll;
            if (pos1>100) {
                pos1 = pos1-roll;
            }
            console.log("Player one->",pos1);
            console.log("Player 1 turn continues");
            return pos1;
        } else if (turn == 0){
            pos2=pos2+roll;
            if (pos2>100) {
                pos2 = pos2-roll;
            }
            console.log("Player two->",pos2);
            console.log("Player 2 turn continues");
            return pos2;
        }
    }
    snake = (pos1,pos2,roll,turn) =>{
        console.log("Snake");
        if (turn == 1) {
            pos1=pos1-roll;
            if (pos1<0) {
                pos1 = 0;
            }
            console.log("Player one->",pos1);
            console.log("Player 1 turn over");
            return pos1;
        } else if (turn == 0){
            pos2=pos2-roll;
            if (pos2<0) {
                pos2 = 0;
            }
            console.log("Player two->",pos2);
            console.log("Player 2 turn over");
            return pos2;
        }
    }  
}
module.exports = new SnakeLadder();