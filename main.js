noseX=0;
noseY=0;



function preload()
{
  clown_nose=loadImage('https://i.postimg.cc/PqR3qKkY/nose-removebg-preview.png');
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modeloladed);
    poseNet.on('pose',gotPoses);
}

function draw()
{
   image(video,0,0,300,300);
   image(clown_nose,noseX,noseY,25,25);
}

function take_snapshot()
{
    save('myFilterImage.png');
}
 
function modeloladed()
{
    console.log('Posenet isitialized');

}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-10;

         noseY=results[0].pose.nose.y-10;
         console.log("nose x ="+noseX);
         console.log("nose y ="+noseY);
    }

}