status1="";
img="";
objects=[];
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status-detecting objects";
    video=createCapture(VIDEO);
    video.hide();
    video.size(380,380);
}
function preload(){
    //preload
    //sock
}
function draw(){
    image(video,0,0,380,380);
    if(status1!=""){
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video,gotResult);
        for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="status-object detected";
        document.getElementById("objects").innerHTML="number of objects detected are-" + objects.length;
        fill(r,g,b);
    text(objects[i].label,objects[i].x,objects[i].y);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function modelLoaded(){
    console.log("modelLoaded");
    status1=true;
    //there used to be code here
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}