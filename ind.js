
const medi = require(['@mediapipe/tasks-vision'])


//working vv
let video = document.querySelector("#videoElement");
var vidT = "false";

function toggleCam(){

if (vidT == "false") {
    vidT = "true"; 
    navigator.mediaDevices.getUserMedia({ video: vidT}).then(function(stream) {
        video.srcObject = stream;
    })
    .catch( function (error){
        console.log("Something didn't go right")
    })
} else{
    console.log("getUserMedia isn't supported!")
    vidT = "false"; 

    navigator.mediaDevices.getUserMedia({ video: vidT}).then(function(stream) {
        video.srcObject = stream;
    })
    .catch( function (error){
        console.log("Something didn't go right")
    })
}
}
//working^^









async function setUp(){
    const vision = await FilesetResolver.forVisionTasks(
// path/to/wasm/root
"https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/vision_bundle.js"
);
const poseLandmarker = await poseLandmarker.createFromOptions(
vision,
{
  baseOptions: {
    modelAssetPath: "app/shared/models/pose_landmarker_heavy.task"
  },
  runningMode: VIDEO
});
}

async function LiveDetection(){
await poseLandmarker.setOptions({ runningMode: "VIDEO" });

let lastVideoTime = -1;
function renderLoop(){
const video = document.getElementById("videoElement");

if (video.currentTime !== lastVideoTime) {
const poseLandmarkerResult = poseLandmarker.detectForVideo(video);
processResults(detections);
console.log(processResults)
lastVideoTime = video.currentTime;
}

requestAnimationFrame(() => {
renderLoop();
});
}
}

setUp()
LiveDetection()
