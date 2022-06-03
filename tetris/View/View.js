export default class View {
    constructor(ctx){
        this.ctx = ctx;
    }
    newgame(){
        this.ctx.fillStyle="#080705"
        this.ctx.fillRect(220,100,340,490)
        this.creatGrille()
    }
    creatGrille(){
        this.ctx.fillStyle ="#5EFC8D"
        for(let i=0;i<23;i++){
            this.ctx.fillRect(280,100+(i*20),200,1)
        }
        for(let i=0;i<11;i++){
            this.ctx.fillRect(280+(i*20),100,1,440)
        }
    }
    actualisationGrille(grille){
        for(let i=0; i<grille.length; i++){
            for(let j=0 ; j<grille[i].length; j++){
                if(grille[i][j]==="-")this.ctx.fillStyle="#080705"
                if(grille[i][j]==="v")this.ctx.fillStyle="#0CCA4A"
                if(grille[i][j]==="o")this.ctx.fillStyle="#F39237"
                if(grille[i][j]==="b")this.ctx.fillStyle="#1C77C3"
                if(grille[i][j]==="c")this.ctx.fillStyle="#40BCD8"
                if(grille[i][j]==="i")this.ctx.fillStyle="#AF2BBF"
                if(grille[i][j]==="r")this.ctx.fillStyle="#DE3C4B"
                if(grille[i][j]==="j")this.ctx.fillStyle="#E4C21A"
                this.ctx.fillRect(280+(j*20)+1,100+(i*20)+1,19,19)
            }
        }
    }

    gameOver(){
        this.ctx.fillStyle = "#F9F7F3";
        this.ctx.font = '50px serif';
        this.ctx.fillText('GAME OVER !!', 220, 300);
    }
    gameStart(){
        this.ctx.fillStyle = "#F9F7F3";
        this.ctx.font = '40px serif';
        this.ctx.fillText('Use space for play !', 230, 580);
    }
    masqueGameStart(){
        this.ctx.fillStyle="#080705"
        this.ctx.fillRect(220,550,340,50)
    }
}