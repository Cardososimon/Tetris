export default class Controller {
    constructor(game, view){
        this.game=game
        this.view=view
        this.nIntervIdG;
        this.gamestart=false
        this.view.newgame()
        if(!this.gamestart){
            this.view.gameStart()
        }
        document.addEventListener('keydown', (event) => {
            var name = event.key;
            if(name==="z" && this.gamestart){
                this.game.rotation()
                let grille = this.game.getGrille()
                this.view.actualisationGrille(grille)
            }
            if(name==="d" && this.gamestart ){
                this.game.deplacementY("droite")
                let grille = this.game.getGrille()
                this.view.actualisationGrille(grille)
            }
            if(name==="q" && this.gamestart){
                this.game.deplacementY("gauche")
                let grille = this.game.getGrille()
                this.view.actualisationGrille(grille)
            }
            if(name==="s" && this.gamestart){
                this.game.deplacementX()
                let grille = this.game.getGrille()
                this.view.actualisationGrille(grille)
            }
            if(name===" "){
                this.view.masqueGameStart()
                if(this.game.endGame()){
                    this.view.newgame()
                    this.game.start()
                    this.gamestart=true
                    this.nIntervIdG=false
                }
                if (!this.nIntervIdG) {
                    this.nIntervIdG = setInterval(()=>{
                        this.game.deplacementX()
                        let grille = this.game.getGrille()
                        this.view.actualisationGrille(grille)
                        let end =this.game.endGame()
                        this.gamestart=true
                        if(end){
                            clearInterval(this.nIntervIdG)
                            this.gamestart=false
                            this.view.gameOver()
                            this.view.gameStart()
                        }
                    },300);
                  }
            }
            console.log(name)

          }, false);
          
    }
}