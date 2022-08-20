var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;

    if(Content == 'take my selfie'){
        speak();
    }
    
}

function speak() {
    var synth = window.speechSynthesis;
    var speakdata = document.getElementById("textbox").value
    speakdata = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){

        take_snapshot();
        download();
    }, 5000);
}


camera = document.getElementById("camera");

Webcam.set({
    width : 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "selfie" src = "' +data_uri+'">'
    })
}

function download() {
    link = document.getElementById("link")//hold your anchor tag
    image = document.getElementById("selfie").src//hold's your selfie
    link.herf = image //in anchor tag we got the image
    link.click();
}