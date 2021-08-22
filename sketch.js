
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bedroom

function preload() {

hauntedBedroom = loadImage("assets/bedroom.jpg")
TheThreeDoors = loadImage("assets/ThreeDoorRooms.jpg")
TheGhostHunter = loadImage("assets/survivor.png")
GoToDoorText = loadImage("assets/DoorText.jpg")
YouLoseHallway = loadImage("assets/hallwayscary.png")
YouLoseHallwayGhost = loadImage("assets/Ghost1.png")
YouLoseActualText = loadImage("assets/YouLose.jpg")
The2Dscaryhallway = loadImage("assets/2DHallway.png")
EvilGhost = loadImage("assets/creepyGhostLong.png")
TheLocker = loadImage("assets/locker.png")
YouWin = loadImage("assets/youescaped.png")
GoAndHide = loadImage("assets/Hide.jpg")
}


function setup() {
  createCanvas(1600,900);

  


  engine = Engine.create();
  world = engine.world;

  DeadHallway = createSprite(750,600,100,100);
  DeadHallway.addImage(YouLoseHallway)
  DeadHallway.x=750
  DeadHallway.y=600
  DeadHallway.visible = false

  YouWinScreen = createSprite(750,600,100,100);
  YouWinScreen.addImage(YouWin)
  YouWinScreen.visible = false

  ThreeDoorsOutside = createSprite(750,500,100,100);
  ThreeDoorsOutside.addImage(TheThreeDoors)
  ThreeDoorsOutside.scale = 1.87
  ThreeDoorsOutside.visible = false

  TeleportToLibrary2D = createSprite(10000000000,500,50,50);
  TeleportToLibrary2D.visible = false

  survivor3 = createSprite(440,500,50,50)
  survivor3.addImage(TheGhostHunter)
  survivor3.scale = 0.5
  survivor3.visible = false

  LibraryHallway = createSprite(750,500,100,100);
  LibraryHallway.addImage(The2Dscaryhallway)
  LibraryHallway.scale = 0.8
  LibraryHallway.visible = false

  HideInLockerText = createSprite(100000,500,100,100);
  HideInLockerText.addImage(GoAndHide)
  HideInLockerText.scale = 0.6

  GoToTheEscapeDoor1Text = createSprite(1000000,500,100,100);
  GoToTheEscapeDoor1Text.addImage(GoToDoorText)
  GoToTheEscapeDoor1Text.scale = 0.1

  FinishTheEnd = createSprite(1115,50,20,20)
  FinishTheEnd.visible = false

  
  BlockThatMakesSurvivor5GoToEscapeDoor1 = createSprite(796,500,20,20);
  BlockThatMakesSurvivor5GoToEscapeDoor1.visible = false

  BlockThatMakesSurvivor5GoToEscapeDoor2 = createSprite(796,100,20,20);
  BlockThatMakesSurvivor5GoToEscapeDoor2.visible = false

  EndingBlock = createSprite(1115,100,20,20);
  EndingBlock.visible = false

  Lockers = createSprite(620,500,100,100);
  Lockers.addImage(TheLocker)
  Lockers.scale = 0.15
  Lockers.visible = false

  blocker1 = createSprite(450,230,50,50);
  blocker1.visible = false

  blocker2 = createSprite(800,200,50,50);
  blocker2.visible = false

  survivor4 = createSprite(750,800,10,10);
  survivor4.addImage(TheGhostHunter)
  survivor4.scale = 0.2
  survivor4.visible = false

  survivor5 = createSprite(650,500,10,10);
  survivor5.addImage(TheGhostHunter)
  survivor5.scale = 0.2
  survivor5.visible = false

  BlockThatMakesSurvivor5ComeOut = createSprite(750,1000,50,50);

  SlenderGhost = createSprite(440,-3000,50,50);
  SlenderGhost.addImage(EvilGhost)
  SlenderGhost.scale = 0.5

  GoDoorButton3 = createSprite(-10000000,230,50,50)
  GoDoorButton3.addImage(GoToDoorText)
  GoDoorButton3.scale = 0.13
  mousePressedOver(GoDoorButton3)
  GoDoorButton3.visible = false

  survivor2 = createSprite(1240,690,50,50)
  survivor2.addImage(TheGhostHunter)
  survivor2.scale = 0.5
  survivor2.visible = false

  GhostHallwayKiller = createSprite(300,-200,50,50)
  GhostHallwayKiller.addImage(YouLoseHallwayGhost)
  GhostHallwayKiller.scale = 0.65
  GhostHallwayKiller.visible = false

  GhostsInvisibleBlock = createSprite(300,800,50,50)
  GhostsInvisibleBlock.visible = false


  InvisibleBlocker1 = createSprite(800,690,50,50)
  InvisibleBlocker1.visible = false

  bedroom = createSprite(750,500,100,100);
  bedroom.addImage(hauntedBedroom)

  survivor = createSprite(1000,720,50,50)
  survivor.addImage(TheGhostHunter)
  survivor.scale = 0.5

  GoDoorButtonBlockVelocity = createSprite(550,720,50,50)
  GoDoorButtonBlockVelocity.visible = false

  TeleportTo3DoorsRoom = createSprite(710,500,50,50)
  TeleportTo3DoorsRoom.visible = false
  
  GoDoorButton = createSprite(710,459,50,50)
  GoDoorButton.addImage(GoToDoorText)
  GoDoorButton.scale = 0.13
  mousePressedOver(GoDoorButton)

  GoDoorButton2 = createSprite(1300,300,50,50)
  GoDoorButton2.addImage(GoToDoorText)
  GoDoorButton2.scale = 0.13
  mousePressedOver(GoDoorButton2)
  
  YouDiedScreen = createSprite(750,400,100,100)
  YouDiedScreen.addImage(YouLoseActualText)
  YouDiedScreen.visible = false


  Door2Touch = createSprite(1440,650,50,300)
  Door2Touch.visible = false
}


function draw() 
{
  background(51);
  Engine.update(engine);
  drawSprites()
  bedroom.display()
  survivor.display()
  GoDoorButton.display()
  DeadHallway.display()
  GoDoorButton2.display()
  Door2Touch.display()
  survivor2.display()
  InvisibleBlocker1.display()
  GhostHallwayKiller.display()
  GhostsInvisibleBlock.display()
  YouDiedScreen.display()
  GoDoorButtonBlockVelocity.display()
  TeleportTo3DoorsRoom.display()
  ThreeDoorsOutside.display()
  survivor3.display()
  GoDoorButton3.display()
  LibraryHallway.display()
  TeleportToLibrary2D.display()
  survivor4.display()
  SlenderGhost.display()
  blocker1.display()
  blocker2.display()
  Lockers.display()
  HideInLockerText.display()
  survivor5.display()
  BlockThatMakesSurvivor5ComeOut.display()
  GoToTheEscapeDoor1Text.display()
  BlockThatMakesSurvivor5GoToEscapeDoor1.display()
  BlockThatMakesSurvivor5GoToEscapeDoor2.display()
  EndingBlock.display()
  FinishTheEnd.display()
  YouWinScreen.display()

  if(mousePressedOver(GoDoorButton)){
   survivor.velocityX = -4
   survivor.velocityY = 0
   GoDoorButton.destroy()
   GoDoorButton2.destroy()
}
if(mousePressedOver(GoDoorButton2)){
  survivor.velocityX = 4
  survivor.velocityY = 0
  GoDoorButton2.destroy()
  GoDoorButton.destroy()
}
if(survivor.isTouching(Door2Touch)){
  survivor.destroy()
  survivor2.visible = true
  survivor2.velocityX = -2
  DeadHallway.visible = true
  bedroom.destroy()
  Door2Touch.destroy()
  GoDoorButton.destroy()
  GoDoorButton2.destroy()
  
}
if(survivor2.isTouching(InvisibleBlocker1)){
  survivor2.velocityX = 0
  GhostHallwayKiller.velocityY = 9
  
}

if(GhostHallwayKiller.isTouching(GhostsInvisibleBlock)){
   GhostHallwayKiller.velocityX = 20
   GhostHallwayKiller.velocityY = 0
   GhostHallwayKiller.visible = true
}

if(GhostHallwayKiller.isTouching(survivor2)){
   YouDiedScreen.visible = true
   GhostHallwayKiller.destroy()
   survivor2.destroy()
   DeadHallway.destroy()
}
if(survivor.isTouching(GoDoorButtonBlockVelocity)){
  survivor.velocityX = 0
  survivor.velocityY = -1
}
if(survivor.isTouching(TeleportTo3DoorsRoom)){
  bedroom.destroy()
  ThreeDoorsOutside.visible = true
  survivor.destroy()
  survivor2.destroy()
  GhostHallwayKiller.destroy()
  survivor3.visible = true
  GoDoorButton3.visible = true
  GoDoorButton3.x = 1090
  GoDoorButton3.y = 230
  TeleportToLibrary2D.x = 1240
  TeleportToLibrary2D.y = 500
  
}
if(mousePressedOver(GoDoorButton3)){
  survivor3.velocityX = 4
  survivor3.velocityY = 0
  GoDoorButton3.destroy()
}
if(survivor3.isTouching(TeleportToLibrary2D)){
  LibraryHallway.visible = true
  survivor3.destroy()
  ThreeDoorsOutside.destroy()
  survivor4.visible = true
  SlenderGhost.velocityY = 10
  Lockers.visible = true
  HideInLockerText.x = 430
  HideInLockerText.y = 500
}
if(SlenderGhost.isTouching(blocker1)){
  SlenderGhost.velocityX = 10
  SlenderGhost.velocityY = 0
}
if(SlenderGhost.isTouching(blocker2)){
  SlenderGhost.velocityY = 10
  SlenderGhost.velocityX = 0
}
if(mousePressedOver(HideInLockerText)){
  survivor4.velocityY = -4
  survivor4.velocityX = -1.7
  HideInLockerText.destroy()
}
if(survivor4.isTouching(Lockers)){
  survivor4.destroy()
}
if(SlenderGhost.isTouching(BlockThatMakesSurvivor5ComeOut)){
  survivor5.visible = true
  GoToTheEscapeDoor1Text.x = 1050
  GoToTheEscapeDoor1Text.y = 500
}
if(mousePressedOver(GoToTheEscapeDoor1Text)){
  survivor5.velocityX = 2
  survivor5.velocityY = 0
  GoToTheEscapeDoor1Text.destroy()
}
if(survivor5.isTouching(BlockThatMakesSurvivor5GoToEscapeDoor1)){
  survivor5.velocityY = -5
  survivor5.velocityX = 0
}
if(survivor5.isTouching(BlockThatMakesSurvivor5GoToEscapeDoor2)){
  survivor5.velocityY = 0
  survivor5.velocityX = 5
}
if(survivor5.isTouching(EndingBlock)){
  survivor5.velocityY = -0.9
  survivor5.velocityX = 0
}
if(survivor5.isTouching(FinishTheEnd)){
  survivor5.destroy()
  YouWinScreen.visible = true
}
if(survivor4.isTouching(SlenderGhost)){
  survivor4.destroy()
  SlenderGhost.destroy()
  LibraryHallway.destroy()
  YouDiedScreen.visible = true
  HideInLockerText.destroy()
  Lockers.destroy()
}
}