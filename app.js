const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'https://www.frankslaboratory.co.uk/downloads/shadow_dog.png'
const spriteWidth = 575; //image is 6876px widtd, 12 columns
const spriteHeight = 523;    // height is 5230px and 10 rows


function animate() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT );
    // ctx.fillRect(100,50,100,100);
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh );
    ctx.drawImage(playerImage, 1 * spriteWidth, 0, spriteWidth, spriteHeight, 0,0, spriteWidth, spriteHeight);
    requestAnimationFrame(animate);


    
};
animate();