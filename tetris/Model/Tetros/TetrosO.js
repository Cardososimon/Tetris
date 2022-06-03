export default class TetrosO{
    constructor(){
        this.arrayPostion=[[['j','j'],['j','j']]]
    }
    getTetros(){
        return this.arrayPostion[0]
    }
    sizeX(){
        return this.arrayPostion[0].length
    }
    sizeY(){
        return this.arrayPostion[0][0].length
    }
    getCaseXY(x,y){
        return this.arrayPostion[0][x][y];
    }
    changePOsition(){
        return this.arrayPostion[0]
    }
    testNextPosition(){
        return this.arrayPostion[0]
    }
}