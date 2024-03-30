const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'https://www.frankslaboratory.co.uk/downloads/shadow_dog.png'
const spriteWidth = 575; //image is 6876px widtd, 12 columns
const spriteHeight = 523;    // height is 5230px and 10 rows
let frameX = 0;
let frameY = 1;
let gameFrame = 0;
const staggerFrames = 5; //controls speed of animation. Higher num slows it down
const spriteAnimations = []; //empty array that contains data for all of my animations
const animationStates = [
    {
        name: 'idle',
        frames: 7, 
    },
    {
        name: 'jump',
        frames: 7, 
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
   let position = Math.floor(gameFrame/staggerFrames) % 6;
   frameX = spriteWidth * position;
   ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0,0, spriteWidth, spriteHeight);
      
    gameFrame++;
    requestAnimationFrame(animate);


    
};
animate();

// //////////
// spriteAnimations = [
//     'idle' = {
//         width: 525,
//         height: 523,
//         loc: [
//             { x: 0, y: 0 },
//             { x: 575, y: 0 },
//             { x: 1150, y: 0 },
//             { x: 1725, y: 0 },
//             { x: 2300, y: 0 },
//              { x: 2875, y: 0 },
//              { x: 3450, y: 0 },
      
//         ]
//     },

//     'jump' = {
//         width: 120,
//         height: 120,
//         loc: []
//     },
//     'run' = {
//         width: 1200,
//         height: 1250,
//         loc: []
//     }
// ];