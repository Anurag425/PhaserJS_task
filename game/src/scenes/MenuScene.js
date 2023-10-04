import { CST } from "../CST"
export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.MENU
        })
    }
    init(data){
        console.log(data);
        console.log("got it");
    }
    create(){
        this.add.image(0, 0, "background").setOrigin(0).setScale(1.2);
        this.add.image(this.game.renderer.width/2, this.game.renderer.height * 0.2, "menu_icon");
        let playButton = this.add.image(this.game.renderer.width/2-250, this.game.renderer.height / 2 + 20, "play_button");
        let optionButton = this.add.image(this.game.renderer.width/2-250, this.game.renderer.height / 2 + 100, "options_button");
    }
}