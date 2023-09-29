nosex=0;
nosey=0;
difference=0;
rightWristx=0;
leftWristx=0

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(70, 100)

    canvas = createCanvas(550, 500);
    canvas.position(900, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('Model is initialized')
}

function draw() {
    background('#969A97');

document.getElementById('square_side').innerHTML = "Width and Height of a Square will be = " + difference + "px"

    fill('#F9003');
    stroke("0000000");
    textSize(difference);
    text('Tejo', 50, 400)
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log('nosex='+ nosex + 'nosey='+nosey);

        leftWristx= results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference = floor(leftWristx-rightWristx );
        console.log("leftWristx = "+ leftWristx + "rightWristx = " + rightWristx+ "difference = "+ difference);
    }
}
