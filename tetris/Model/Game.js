import  Sac  from './Sac.js';

export default class Game {
    constructor(){
        this.grille;
        this.copieGrille;
        this.sac
        this.x
        this.y
        this.start()
    }
    start(){
        this.grille=this.initGrille()
        this.copieGrille=this.initGrille();
        this.afficheTab(this.grille)
        this.sac= new Sac()
        this.x=-1
        this.y=4
        this.currantTetros=null
        this.selectTetros()
        this.placerTetrosGrille()
    }
    deplacementY(direction){
        let droite = true;
        let gauche= true;
        for(let j=this.currantTetros.sizeX();j>0;j--){
            let placementX= this.x+(-this.currantTetros.sizeX()+j)
            for(let k=0;k<this.currantTetros.sizeY();k++){
                if(this.currantTetros.getCaseXY(j-1,k)!='-'){
                    let placementY= this.y+(-1+k)
                    if(direction==="droite" && droite){
                        droite= !this.colisionDroite(placementX,placementY+1,this.copieGrille)
                    }
                    if(direction==="gauche" && gauche){
                        gauche= !this.colisionGauche(placementX,placementY-1,this.copieGrille)
                    }
                    console.log("x : "+placementX+ " y : "+placementY)
                }
            }
        }
        if(direction==="droite" && droite){
            this.y+=1
            this.placerTetrosGrille()
        }
        if(direction==="gauche" && gauche){
            this.y-=1
            this.placerTetrosGrille()
        }
        
    }
    deplacementX(){
        let bas =true
        for(let j=this.currantTetros.sizeX();j>0;j--){
            let placementX= this.x+(-this.currantTetros.sizeX()+j)
            for(let k=0;k<this.currantTetros.sizeY();k++){
                if(this.currantTetros.getCaseXY(j-1,k)!='-'){
                    let placementY= this.y+(-1+k)
                    if(bas){
                        bas= !this.colisionBas(placementX+1,placementY,this.copieGrille)
                    }
                    console.log("x : "+placementX+ " y : "+placementY)
                }
            }
        }
        if(bas){
            this.x+=1
            this.placerTetrosGrille()
        }
        else{
            this.x=0
            this.y=4
            this.copieGrille=this.copieGrilleProfond(this.grille,this.copieGrille)
            this.ligneFull()
            this.currantTetros=null
            this.selectTetros()
        }
    }

    rotation(){
        let rotationP = true
        for(let j=this.currantTetros.sizeX();j>0;j--){
            let placementX= this.x+(-this.currantTetros.sizeX()+j)
            if(rotationP){
                for(let k=0;k<this.currantTetros.sizeY();k++){
                    if(this.currantTetros.testNextPosition()[j-1][k]!='-' && rotationP){
                        let placementY= this.y+(-1+k)
                        console.log("x : "+placementX+ " y : "+placementY)
                        rotationP=this.rotationPOssible(placementX,placementY,this.copieGrille)
                        console.log(rotationP)
                    }
                }
            }
        }
        if(rotationP){
            this.currantTetros.changePOsition();
            this.placerTetrosGrille();
        }
    }
    selectTetros(){
        if(this.currantTetros===null)this.currantTetros=this.sac.getTetros()
        this.afficheTab(this.currantTetros.getTetros())
    }
    placerTetrosGrille(){
        this.grille=this.copieGrilleProfond(this.copieGrille,this.grille)
        for(let j=this.currantTetros.sizeX();j>0;j--){
            let placementX= this.x+(-this.currantTetros.sizeX()+j)
            if(placementX>=0){
                for(let k=0;k<this.currantTetros.sizeY();k++){
                        if(this.currantTetros.getCaseXY(j-1,k)!='-'){
                            let placementY= this.y+(-1+k)
                            this.grille[placementX][placementY]=this.currantTetros.getCaseXY(j-1,k)
                        }
                }
            }
        }
        this.afficheTab(this.grille)
    }
    rotationPOssible(x,y,grille){
        if(y>9 || y<0)return false
        if( x>21)return false
        if(x<0 && (y>=0|| y<=9)) return true
        if(grille[x][y]!='-')return false
        return true

    }
    colisionDroite(x,y,grille){
        if(x<0 && y<=10)return false
        if(y==10)return true;
        if(grille[x][y]!='-')return true;
        return false
    }
    colisionGauche(x,y,grille){
        if(x<0 && y>=0)return false
        if(y==-1)return true;
        if(grille[x][y]!='-')return true;
        return false
    }
    colisionBas(x,y,grille){
        if(x>21)return true
        if(x>=0 && x<=21 && y>=0 && y<=9){
            if(grille[x][y]!="-")return true
        }
        return false
        
    }
    copieGrilleProfond(grille,copiegrille){
        for(let i=0;i<22;i++){
            for(let j=0;j<10;j++){
                copiegrille[i][j]=grille[i][j]
            }
        }
        return copiegrille
    }
    initGrille(){
        let grille=[]
        for(let i=0;i<22;i++){
            grille.push([])
            for(let j=0;j<10;j++){
                grille[i].push('-')
            }
        }
        console.log(grille)
        return grille
    }
    afficheTab(tab){
        let acc=""
        for(let i=0;i<tab.length;i++){
            for(let j=0;j<tab[i].length;j++){
                acc+=tab[i][j]+" "
            }
            acc+="\n"
        }
        console.log(acc)
    }
    endGame(){
        for(let i=0;i<this.copieGrille[0].length;i++){
            if(this.copieGrille[0][i]!='-') return true;
        }
        return false;
    }
    ligneFull(){
        for(let i=0;i<this.copieGrille.length;i++){
            let full=true
            for(let j=0;j<this.copieGrille[0].length;j++){
                if(full && this.copieGrille[i][j]=='-')full=false
            }
            if(full)this.subLigne(i)
        }
        this.copieGrilleProfond(this.copieGrille,this.grille)
    }
    dellLigne(x){
        for(let i=0;i<this.copieGrille[x].length;i++){
            this.copieGrille[x][i]="-"
        }
    }
    subLigne(x){
        this.dellLigne(x)
        for(let i=x;i>0;i--){
            for(let j=0; j<this.copieGrille[i].length;j++){
                this.copieGrille[i][j]=this.copieGrille[i-1][j]
            }
            console.log("x : "+x+" i : "+i)
            this.dellLigne(i-1)
        }
    }
    getGrille(){
        return this.grille;
    }
    
}