//https://teachablemachine.withgoogle.com/models/6WCPhtwOL/

Webcam.set({
    width :350, 
    height :300,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'>";
    });
} 
 
console.log("ml5version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6WCPhtwOL/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model is Loaded");
};