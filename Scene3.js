class Scene3 extends Phaser.Scene {
    constructor() {
        super("secondAnimation");
    }

    preload() {

        let imageUrl = window.innerWidth < 1100 ? 'assets2/main-bg-portrait.png' : 'assets2/main-bg.png'
        console.log(imageUrl)
        this.load.image('background', imageUrl)

        this.load.atlas('stars', 'assets2/star.png', 'star.json')
    }

    create() {
        this.frameNames = this.textures.get('stars').getFrameNames();
        console.log(this.frameNames)

        this.background = this.add.image(0, 0, 'background');
        this.background.setOrigin(0, 0);

        this.stars = this.add.sprite(0, 0, 'stars')
        this.stars.setOrigin(0, 0);

        this.anims.create({
            key: 'shine',
            frames: [
                { key: 'stars', frame: 'smallStars_1' },
                { key: 'stars', frame: 'smallStars_2' },
                { key: 'stars', frame: 'smallStars_3' },
                { key: 'stars', frame: 'smallStars_4' },
                { key: 'stars', frame: 'smallStars_5' },
                { key: 'stars', frame: 'smallStars_6' },
            ],
            frameRate: 5,
            repeat: -1
        });

        if (window.innerWidth < 1100) {
            this.stars.displayHeight = 1920;
            this.stars.scaleX = this.stars.scaleY;
        } else {
            this.stars.displayHeight = 1080;
            this.stars.scaleX = this.stars.scaleY;
        }
        this.stars.alpha = 0.8;
        this.stars.play('shine')
    }
}