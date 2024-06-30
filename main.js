noseX=0;
noseY=0;

function preload() {
  lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup() {
  //use createCanvas(300, 300) to create a canvas
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  //Hide extra component using video.hide();
  


  //initialize poseNet using ml5.poseNet(video, modelLoaded)
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-25;
    noseY = results[0].pose.nose.y+15;
  }
}

function draw() {
image(video, 0, 0, 300, 300);
  //display video on canvas using image(video, 0, 0, 300, 300)
  
  //add lipstick image
  image( lipstick, noseX, noseY, 50, 20);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
