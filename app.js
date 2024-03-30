let playerState = 'run';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
    })

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'https://www.frankslaboratory.co.uk/downloads/shadow_dog.png'
const spriteWidth = 575; //image is 6876px widtd, 12 columns
const spriteHeight = 523;    // height is 5230px and 10 rows
let gameFrame = 0;
const staggerFrames = 5; //controls speed of animation. Higher num slows it down
const spriteAnimations = []; //empty array that contains data for all of my animations
const animationStates = [
    {
        name: 'idle',  //make sure there's a comma between each object
        frames: 7, 
    },
    {
        name: 'jump',
        frames: 7, 
    }, 
    {
        name: 'fall', //was blinking when set at 9. 7 is the correct num of frames
        frames: 7, 
    }, 
    {
        name: 'run',
        frames: 9, 
    }, 
    {
        name: 'dizzy',
        frames: 11, 
    }, 
    {
        name: 'sit',
        frames: 5, 
    }, 
    {
        name: 'roll',
        frames: 7, 
    }, 
    {
        name: 'bite',
        frames: 7, 
    }, 
    {
        name: 'ko',
        frames: 12, 
    }, 
    {
        name: 'getHit',
        frames: 4, 
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],  
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;  
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(animationStates);

function animate() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT );
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
   
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0,0, spriteWidth, spriteHeight);
      
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();
