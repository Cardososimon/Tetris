export default class TetrosJ{
    constructor(){
        this.arrayPostion=[[['-','-','-'],['b','b','b'],['-','-','b']]
                          ,[['-','b','b'],['-','b','-'],['-','b','-']]
                          ,[['-','-','-'],['b','-','-'],['b','b','b']]
                          ,[['-','b','-'],['-','b','-'],['b','b','-']]]
        this.position=0
    }
    getTetros(){
        return this.arrayPostion[this.position]
    }
    sizeX(){
        return this.arrayPostion[this.position].length
    }
    sizeY(){
        return this.arrayPostion[this.position][0].length
    }
    getCaseXY(x,y){
        return this.arrayPostion[this.position][x][y];
    }
    changePOsition(){
        this.position=(this.position+1)%4
        return this.arrayPostion[this.position]
    }
    testNextPosition(){
        return this.arrayPostion[(this.position+1)%4]
    }
}