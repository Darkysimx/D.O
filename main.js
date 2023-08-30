img = ""
function preload(){
    img = loadImage('dog_cat.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    text("dog",45,75);
    text("cat",320,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
    stroke("#FT6748");
    rect(300,60,250,350);
}