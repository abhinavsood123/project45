
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var lborder,rborder,uborder,bborder;
var mp,mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8,mp9,mp10,mp11,mp12,mp13,mp14,mp15,mp16,mp17,mp18,mp19,mp20,mp21,mp22,mp23,mp24,mp25,mp26,mp27,mp28,mp29,mp30,mp31,mp32,mp33,mp34,mp35,mp36,mp37,mp38,mp39,mp40,mp41,mp42,mp43,mp44,mp45,mp46,mp47,mp48,mp49,mp50;
var pac1,pacimage,spikes,ghost,ghostimage;
var dir;
var life=3;
function preload()
{
pacimage=loadAnimation("pacman1.png","pacman2.png","pacman3.png");	
ghostimage=loadImage("ghost.jpg");
}

function setup() {
	createCanvas(800,800);
	lborder=createSprite(10,400,20,800);
	rborder=createSprite(790,400,20,800);
	uborder=createSprite(400,10,800,20);
	uborder=createSprite(400,790,800,20);
	engine = Engine.create();
	world = engine.world;
	pac1=createSprite(45,750,10,10);
	pac1.addAnimation("pac",pacimage);
	pac1.scale=0.2
	ghost=createSprite(45,750,10,10);
	ghost.addImage(ghostimage);
	ghost.scale=0.2
	ghost.visible=false;
mp1=createSprite(735,665,20,120);
mp=createSprite(370,720,750,20);
mp2=createSprite(685,607,120,20);
mp3=createSprite(685,557,120,20);
mp4=createSprite(735,288,20,520);
mp5=createSprite(385,670,20,90);
mp6=createSprite(315,632,160,20);
mp7=createSprite(315,632,160,20);
mp8=createSprite(245,600,20,50);
mp9=createSprite(334,570,200,20);
mp10=createSprite(338,530,20,90);
mp11=createSprite(440,595 ,20,70);
mp12=createSprite(475,635,90,20);
mp13=createSprite(509,595,20,70);
mp14=createSprite(580,580,20,220);
mp15=createSprite(633,480,110,20);
mp16=createSprite(678,425,20,90);
mp17=createSprite(705,378,73,20);
mp18=createSprite(385,495,110,20);
mp19=createSprite(445,445,20,120);
mp20=createSprite(497,395,90,20);
mp21=createSprite(532,433,20,90);
mp22=createSprite(512,481,60,20);
mp23=createSprite(492,470,20,90);
mp24=createSprite(270,490,20,150);
mp25=createSprite(325,425,90,20);
mp26=createSprite(660,102,160,20);
mp27=createSprite(590,146,20,90);
mp28=createSprite(630,181,60,20);
mp29=createSprite(650,266,20,150);
mp30=createSprite(380,38,728,20);
mp31=createSprite(445,75 ,20,60);
mp32=createSprite(480,102,90,20);
mp33=createSprite(521,142,20,100);
mp34=createSprite(420,182,200,20);
mp35=createSprite(312,225,20,105);
mp36=createSprite(308,285,160,20);
mp37=createSprite(88,400,20,630);
mp38=createSprite(486,250,20,120);
mp39=createSprite(529,316,120,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}

function draw() {
	background("red");
  rectMode(CENTER);
text(mouseX+","+mouseY,mouseX,mouseY);
if(frameCount===50){
	ghost.visible=true;
}
if(dir===0){
ghost.velocityY=-2;	
ghost.velocityX=0;
}
if(dir===1){
	ghost.velocityY=2;	
	ghost.velocityX=0;
	}
	if(dir===2){
		ghost.velocityY=0;	
		ghost.velocityX=2;
		}
		if(dir===3){
			ghost.velocityY=0;	
			ghost.velocityX=-2;
			}
 if(keyWentDown(UP_ARROW)){
pac1.velocityY=-2;
pac1.velocityX=0;
dir=0;
 }

 if(keyWentDown(DOWN_ARROW)){
	pac1.velocityY=2;
	pac1.velocityX=0;
	dir=1
	 } 

	 if(keyWentDown(RIGHT_ARROW)){
		pac1.velocityY=0;
		pac1.velocityX=2;
		dir=2
		 }

		 if(keyWentDown(LEFT_ARROW)){
			pac1.velocityY=0;
			pac1.velocityX=-2;
			dir=3
			 }
			 if(ghost.isTouching(pac1)){
				 life=life-1
			 }
			pac1.collide(mp);
	        pac1.collide(mp1);
			pac1.collide(mp2);
			pac1.collide(mp3);
			pac1.collide(mp4);
			pac1.collide(mp5);
			pac1.collide(mp6);
			pac1.collide(mp7);
			pac1.collide(mp8);
            pac1.collide(mp9);
			pac1.collide(mp10);
            pac1.collide(mp11);
			pac1.collide(mp12);
			pac1.collide(mp13);
			pac1.collide(mp14);
			pac1.collide(mp15);
			pac1.collide(mp16);
			pac1.collide(mp17);
			pac1.collide(mp18);
			pac1.collide(mp19);
            pac1.collide(mp20);
			pac1.collide(mp21);
			pac1.collide(mp22);
			pac1.collide(mp23);
			pac1.collide(mp24);
			pac1.collide(mp25);
			pac1.collide(mp26);
			pac1.collide(mp27);
			pac1.collide(mp28);
            pac1.collide(mp29);
			pac1.collide(mp30);
			pac1.collide(mp31);
            pac1.collide(mp32);
			pac1.collide(mp33);
			pac1.collide(mp34);
			pac1.collide(mp35);
			pac1.collide(mp36);
			pac1.collide(mp37);
			pac1.collide(mp38);
			pac1.collide(mp39);
















			ghost.collide(mp);
			ghost.collide(mp1);
			ghost.collide(mp2);
			ghost.collide(mp3);
			ghost.collide(mp4);
			ghost.collide(mp5);
			ghost.collide(mp6);
			ghost.collide(mp7);
			ghost.collide(mp8);
			ghost.collide(mp9);
			ghost.collide(mp10);
			ghost.collide(mp11);
			ghost.collide(mp12);
			ghost.collide(mp13);
			ghost.collide(mp14);
			ghost.collide(mp15);
			ghost.collide(mp16);
			ghost.collide(mp17);
			ghost.collide(mp18);
			ghost.collide(mp19);
			ghost.collide(mp20);
			ghost.collide(mp21);
			ghost.collide(mp22);
			ghost.collide(mp23);
			ghost.collide(mp24);
			ghost.collide(mp25);
			ghost.collide(mp26);
			ghost.collide(mp27);
			ghost.collide(mp28);
			ghost.collide(mp29);
			ghost.collide(mp30);
			ghost.collide(mp31);
			ghost.collide(mp32);
			ghost.collide(mp33);
			ghost.collide(mp34);
			ghost.collide(mp35);
			ghost.collide(mp36);
			ghost.collide(mp37);
			ghost.collide(mp38);
			ghost.collide(mp39);
			
			 
  drawSprites();
 
}



