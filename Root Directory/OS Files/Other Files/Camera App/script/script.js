// selecting video element
let videoPlayer = document.querySelector("video");
let constraints = { video: true, audio: true }; // permission we want to access like video audio etc  are the constraints
let btnRecord = document.querySelector("button#record");
let btnCapture = document.querySelector("button#capture");
let body = document.querySelector("body");
let mediaRecoder;
let isrecording = false;
let chunks = [];

let filters = document.querySelectorAll(".filters");
let filter = ""; // for putting color into canvas

let zoomIn = document.querySelector(".zoom-in");
let zoomOut = document.querySelector(".zoom-out");
let minZoom = 1;
let maxZoom = 3;
let currentZoom = 1;

let gallery = document.querySelector("#gallery");



gallery.addEventListener("click", function(){
    location.assign("gallery.html");
})


for (let i = 0; i < filters.length; i++) {
    filters[i].addEventListener("click", function (e) {
        filter = e.currentTarget.style.backgroundColor;
        removeFilter();
        applyFilter(filter);
    });
}

/* ----Button capture Events---- */


btnRecord.addEventListener("click", function (e) {
    let innerDiv = btnRecord.querySelector("div");
    filter = "";
    removeFilter();
    if (isrecording) {
        mediaRecoder.stop();
        isrecording = false;
        // btnRecord.innerHTML = "Record";
        innerDiv.classList.remove("record-animation");
    } else {
        mediaRecoder.start();
        isrecording = true;
        // btnRecord.innerHTML = "Recoding...";
        innerDiv.classList.add("record-animation");
        videoPlayer.style.transform = `scale(1)`;
    }
});

btnCapture.addEventListener("click", function () {
    let innerDiv = btnCapture.querySelector("div");
    innerDiv.classList.add("capture-animation");
    setTimeout(() => {
        innerDiv.classList.remove("capture-animation");
    }, 400);
    captureImage();
});


/*---zoom-in-out events---*/

zoomIn.addEventListener("click", function (e) {
    let videoCurrentScale = videoPlayer.style.transform .split("(")[1].split(")")[0];
    if (videoCurrentScale > maxZoom) {
        return;
    } else {
        currentZoom = Number(videoCurrentScale) + 0.1;
        videoPlayer.style.transform = `scale(${currentZoom})`;
    }
    console.log(currentZoom);
});
zoomOut.addEventListener("click", function (e) {
    if (currentZoom > minZoom) {
        currentZoom -= 0.1;
        videoPlayer.style.transform = `scale(${currentZoom})`;
    }
});


/* navigator is browser buildin  object having child mediaDevices to getUsermedia which accept all permission 
constraints and return a promise with live mediaStream which is an object and assign to source */

navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
    videoPlayer.srcObject = mediaStream; // assigning src object to video instead on url
    mediaRecoder = new MediaRecorder(mediaStream); // passing th stream to recorder

    mediaRecoder.addEventListener("dataavailable", function (e) {
        //event 1 of media Recorder
        chunks.push(e.data);
    });

    mediaRecoder.addEventListener("stop", function (e) {
        //event 2 of media Recorder
        let blob = new Blob(chunks, { type: "video/mp4" }); // basically adding up small chunks of data to one in format mp4

        addMedia("video", blob); // blob is basically object pointing to memory-> RAM  so directly storing into db instead of storing it into RAM  
        chunks = []; //empty the stored data

        //  creating download url - via creating ancor element and appending href and download value
        let url = URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "video.mp4";
        // a.click();
        a.remove();
    });
});

/*----------To caputure image in canvas------*/

function captureImage() {
    let canvas = document.createElement("canvas");
    canvas.width = videoPlayer.videoWidth;
    canvas.height = videoPlayer.videoHeight;
    let ctx = canvas.getContext("2d");

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(currentZoom, currentZoom);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    ctx.drawImage(videoPlayer, 0, 0);
    if (filter != "") {
        ctx.fillStyle = filter;
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
    let a = document.createElement("a");
    a.download = "image.jpg";
    a.href = canvas.toDataURL();  // doing todataURL because its not pointing to memory (RAM), dataurl it contains the url itself 
    addMedia("img", canvas.toDataURL())
    // a.click(); -- cause direct download nhi krna so removed temp
    a.remove();
    
}

/*Filter Events */

function applyFilter(filterColor) {
    //console.log(1);
    let filterDiv = document.createElement("div");
    filterDiv.classList.add("filter-div");
    filterDiv.style.backgroundColor = filterColor;
    // console.log(filterDiv);
    body.appendChild(filterDiv);
}

function removeFilter() {
    let filterDiv = document.querySelector(".filter-div");
    if (filterDiv) {
        filterDiv.remove();
    }
}
