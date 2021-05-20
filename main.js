function preload(){

}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
// to access the webcam
video=createCapture(VIDEO);
video.size(300,300);
video.hide(); 
//to initialize the post net model
posenet=ml5.poseNet(video,modelloaded);
// to execute the comparision
posenet.on('pose',gotposes);
}
//to fetch the live view of the webcam
function draw(){
image(video,0,0,300,300);
}
function take_snapshot(){
save('image.png');
console.log("snap");
}
//to define the modelloaded function
function modelloaded(){
    console.log('Post net is intialized');
}
//to define gotposes()
function gotposes(results){
if(results.length>0){
    console.log(results);
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);
}
}