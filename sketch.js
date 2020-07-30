var gameState = "intro"
var introimg, storyimg
var start
var ninSwing
var gameimg

function preload (){
     introimg = loadImage("sprites/background 2.png")
     storyimg = loadImage("sprites/background 1.png")
     ninSwing = loadAnimation("swing0.png","swing1.png")
     gameimg = loadImage("sprites/gameBg.jpg")
     start = loadImage("sprites/startB.png")
    }


 function setup (){
     createCanvas(displayWidth - 50, displayHeight - 60)
    }

 function draw (){
     background(0) 
     drawSprites();
     if (gameState === "intro"){
         var backdropi = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
         backdropi.addImage("bg1", introimg)
         var startB = createSprite(displayWidth/2 -10, displayHeight/2)
         startB.addImage("st", start)
         startB.scale = 0.2
         var title = createElement('h1')
         title.html("NINJA HUNT")
         title.position(displayWidth/ 2 - 100, 50)
         if (mousePressedOver(startB)){
            gameState = "story"
           } 
        } 
     if (gameState === "story"){
         console.log(gameState)
         var backdrop = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
         backdrop.addImage("bg2", storyimg)
         textSize(20)
         fill("white")
         text("Fuma is a young boy who had lost his father in the battle against the dark ninja clans.", 30,200)
         text("Recently he lost his mother and his siblings in a massacre.",30,230) 
         text("He was thirsty for revenge when just then he a member of the hashira clan,", 30, 260)
         text("Giyu tomioka approached him and told him that he would help him seek his goal.",30, 290)
         text("Fuma trained hard everyday and after 6 months of endless and extreme training he finally succeeded.",30, 320)
         text("Now he is out for revenge and will show NO mercy to his familys slaughterers!",30,350)
         text("Press space to start",30,500)
         if(keyDown("space")){
            gameState = "level1"
         }
        }
        if(gameState === "level1"){
            var bg1 = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
            bg1.addImage("game", gameimg )
            bg1.scale = 2.5
            var swing = createSprite(100,600)
            swing.addAnimation('ninja','swing0.png','swing1.png')
            swing.scale = 0.1
        }
    } function spawnObstacles(){
        if(frameCount % 70 === 2){
            var ob1 = createSprite(displayWidth - 50, 100)
        }
     }  

   
