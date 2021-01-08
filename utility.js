class SnakeLadder {
    assignPosition = () =>{
        let playerOnePosition = 0;
        return playerOnePosition;
    }
    diceRoll = ()=>{
        let diceRoll = (Math.floor(Math.random() * 6)+1);
        return diceRoll;
    }
    option = (position)=>{
        let random = (Math.floor(Math.random() * 3));
        switch (random) {
            case 0:
                console.log("No Play");
                break;
            case 1:
                console.log("Ladder");
                position=position+this.diceRoll();
                console.log(position);
                break;
            case 2:
                console.log("Snake");
                position=position-this.diceRoll();
                console.log(position);
                break;      
            default:
                break;
        }
    }  
}
module.exports = new SnakeLadder();