lw=0;
rw=0;
d=0;
text = document.getElementById("text").value;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A7');
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + d +"px";
    textSize(d);
    fill('#FFE787');
    text(text, 50, 400);
}

function modelLoaded() {
    console.log('Posenet is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        lw = results[0].pose.leftWrist.x;
        rw = results[0].pose.rightWrist.x;
        d = floor(lw - rw);
        console.log("Left Wrist = "+lw);
        console.log("Right Wrist = "+rw);
        console.log("Difference = "+d);
    }
}