noseX=0;
noseY=0;

function preload() {
 clown_nose = loadImage('https://i.postimg.cc/0yscFW0h/pngimg-com-france-PNG4-removebg-preview.png');
 clown_nr = loadImage('https://i.postimg.cc/QdDT1zVg/714t39l-ASr-L-AC-UY1100-removebg-preview.png');
 clown_nf = loadImage('https://i.postimg.cc/gj4fsQmw/662854bd124a854eb7277247-wearme-pro-flat-top-polarized-lens-removebg-preview.png');
}
function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
if(results.length > 0)
{

console.log(results);
noseX = results[0].pose.nose.x;
rightEarX = results[0].pose.rightEar.x;
rightEarY = results[0].pose.rightEar.y;
noseY = results[0].pose.nose.y;
console.log("nose x =" + noseX);
console.log("nose y = " + noseY)
}
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX-10, noseY-1, 30, 30);
    image(clown_nr, noseX-50, noseY-130, 100, 80); 
    image(clown_nf, noseX-30, noseY-60, 70, 80); 
}
function take_snapshot(){
save('myFilterImage.png');
}
