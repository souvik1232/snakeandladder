class SnakeLadder {
    assignPosition=()=>{
        let playerOnePosition = 0;
    }
    diceRoll= ()=>{
        let diceRoll = (Math.floor(Math.random() * 6)+1);
        return diceRoll;
    }  
}
module.exports = new SnakeLadder();