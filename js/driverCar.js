class Car {
    constructor() {
        this.speed = 5;
        this.timeMove = 100;
        this.x = 100;
        this.y = 100;
        this.direction = 'ArrowUp';
        this.height = 85;
        this.width = 60;
    }

    speedUp() {
        this.speed *= 2;
    }

    resetSpeed() {
        this.speed = this.speed / 2;
    }

    move() {
        console.log(this.speed);
        switch (this.direction) {
            case 'ArrowUp':
                this.y -= this.speed;
                break;
            case 'ArrowDown':
                this.y += this.speed;
                break;
            case 'ArrowLeft':
                this.x -= this.speed;
                break;
            case 'ArrowRight':
                this.x += this.speed;
                break;
        }
    }

    changeDirection(dir) {
        this.direction = dir;
    }

    show(ctx) {
        let image = document.getElementById('myCar'); // h = 85 | w = 60
        ctx.beginPath();
        ctx.drawImage(image, this.x, this.y);
        ctx.closePath();
    }

    create(ctx) {
        let image = document.getElementById('myCar'); // h = 85 | w = 60
        image.style.position = 'absolute';
        ctx.beginPath();
        this.x = (document.getElementById('myCanvas').width / 2) - 30;
        this.y = document.getElementById('myCanvas').height - 85;
        ctx.drawImage(image, this.x, this.y);
        ctx.closePath();
    }
}

class Obstacles {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.height = 50;
        this.width = 50;
    }

    create(ctx) {
        this.x = randomX();
        this.y = randomY();
        ctx.beginPath();
        ctx.rect(this.x, this.y, 50, 50);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();
    }

    show(ctx){
        ctx.beginPath();
        ctx.rect(this.x, this.y, 50, 50);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();
    }
}

class Coin{
    constructor() {
        this.x = 0;
        this.y = 0;
        this.height = 50;
        this.width = 50;
    }

    create(ctx) {
        this.x = randomX();
        this.y = randomY();
        //console.log("" + this.x + this.y)
        let image = document.getElementById('coin'); // h = 50 | w = 50
        ctx.beginPath();
        ctx.drawImage(image, this.x, this.y);
        ctx.closePath();
    }

    show(ctx){
        let image = document.getElementById('coin');
        ctx.beginPath();
        ctx.drawImage(image, this.x, this.y);
        ctx.closePath();
    }
}

function randomX(){
    //console.log(Math.floor(Math.random() * ((document.getElementById('myCanvas').width - 50) - 50)) + 50);
    return (Math.floor(Math.random() * ((document.getElementById('myCanvas').width - 50) - 50)) + 50);
}

function randomY(){
    return (Math.floor(Math.random() * ((document.getElementById('myCanvas').height - 50) - 50)) + 50);
}