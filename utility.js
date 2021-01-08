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
        do {
            let roll =this.diceRoll();
            let random = (Math.floor(Math.random() * 3));
        switch (random) {
            case 0:
                console.log("No Play");
                break;
            case 1:
                console.log("Ladder");;
                position=position+roll;
                console.log(position);
                break;
            case 2:
                console.log("Snake");
                position=position-roll;
                console.log(position);
                break;      
            default:
                break;
        }
            if (position<0) {
                position = 0;
            }
            if (position >100) {
                position = position - roll;   
            }
        }while (position < 100);
    }  
}
module.exports = new SnakeLadder();