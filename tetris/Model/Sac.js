import  TetrosI  from './Tetros/TetrosI.js';
import  TetrosJ  from './Tetros/TetrosJ.js';
import  TetrosL  from './Tetros/TetrosL.js';
import  TetrosO  from './Tetros/TetrosO.js';
import  TetrosS  from './Tetros/TetrosS.js';
import  TetrosT  from './Tetros/TetrosT.js';
import  TetrosZ  from './Tetros/TetrosZ.js';

export default class Sac {
    constructor(){
        this.sacVide=0
        this.currentSac=[]
        this.remplirSac()
        this.nbTetrosUse=0
    }
    sac_Vide(){
        if(this.currentSac.length==0)return true
        return fale
    }
    remplirSac(){
        this.currentSac.push(new TetrosO())
        this.currentSac.push(new TetrosO())
        this.currentSac.push(new TetrosL())
        this.currentSac.push(new TetrosL())
        this.currentSac.push(new TetrosI())
        this.currentSac.push(new TetrosI())
        this.currentSac.push(new TetrosT())
        this.currentSac.push(new TetrosT())
        this.currentSac.push(new TetrosJ())
        this.currentSac.push(new TetrosJ())
        this.currentSac.push(new TetrosS())
        this.currentSac.push(new TetrosS())
        this.currentSac.push(new TetrosZ())
        this.currentSac.push(new TetrosZ())
        this.sacVide+=1
    }
    getTetros(){
        if(this.currentSac.length<=0){
            this.remplirSac()
            this.getNbSacVide+=1
        }
        let randTetros=Math.floor(Math.random() * this.currentSac.length);
        let tetros = this.currentSac[randTetros]
        this.currentSac.splice(randTetros,1)
        this.nbTetrosUse+=1
        return tetros
    }
    getNbSacVide(){
        return this.sacVide
    }
    getNbTetrosUse(){
        return this.nbTetrosUse
    }
}