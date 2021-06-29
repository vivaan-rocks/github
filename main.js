objects=[];
video='';
status='';

function preload(){
    video=createVideo("video.mp4");;
    video.hide()
}
function setup() {
	canvas = createCanvas(1240,336);
	//canvas = createCanvas(650,400);
	video = createCapture(VIDEO);
	video.size(600,300);
	canvas.parent('canvas');
	instializeInSetup(mario);
	poseNet=ml5.poseNet(video,modelloaded);
	poseNet.on('pose',gotposes);
}
function draw(){
    image(video,0,0,380,380);
}