import { CST } from "../CST"
import { MenuScene } from "./MenuScene";
export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.LOAD
        })
    }
    init(){

    }
    preload(){
        this.load.image("background", "./assets/image/background.png");
        
        this.load.image("options_button", "./assets/image/options_button.png");
        
        this.load.image("play_button", "./assets/image/play_button.png");
        
        this.load.image("menu_icon", "./assets/image/menu_icon.png");

        // loading bar
        
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff //white
            }
        })

        // adding large load to see the loading screen 
        for(let i = 0; i< 300; i++){
            this.load.image("title_bg" + i, "./assets/image/title_bg.jpg");
        }
        
        
        this.add.rectangle(this.game.renderer.width/2, this.game.renderer.height/2+50, 500, 40, 0xffffff);
        this.add.rectangle(this.game.renderer.width/2, this.game.renderer.height/2+50, 490, 30, 0xf5cec7);
        
        let text = this.add.text(this.game.renderer.width/2, this.game.renderer.height / 2 - 20, "LOADING...", {font: "bold 32px Arial", fill: "#4d446f"}).setOrigin(0.5);
        
        this.load.on("progress", (percent)=>{
            loadingBar.fillRect(this.game.renderer.width / 2 - 480/2, this.game.renderer.height / 2 + 40, 480 * percent, 20).setDepth(10);
            console.log(percent);
        })

        this.load.on("complete", ()=>{
            // console.log("loading Done");
        })
    }
    create(){
        this.scene.start(CST.SCENES.MENU, "hello from load scene");
    }
}