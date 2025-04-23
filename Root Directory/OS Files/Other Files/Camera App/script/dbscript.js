/*----Db open/create => camera ----*/
/*----Db object store => gallery ----*/
/*----photo/video capture jo hui uskko => gallery(-object store ) ----*/

/*----Data format

let data={

mId: 16545542313,
mType: "image"/"video",
media: actual content ( image=> toDataURL , video=> blob to be stored);
}

----*/

/*--------------main---------------*/

let db = "camera";
let v = 1;
let dbAccess;
let container = document.querySelector(".container-main");

let request = indexedDB.open(db, v); // request to brower to open a database with name and version

request.addEventListener("success", function () {
  dbAccess = request.result;
});

request.addEventListener("upgradeneeded", function () {
  let db = request.result; // created another instance beacause we get dbAccess in success event and upgrade event is triggled before success event so we need a new instance of the varibale to get the access
  db.createObjectStore("gallery", { keyPath: "mId" }); // createobjStore event can be only done in upgradneeded event
});

request.addEventListener("error", function () {
  alert("something went wrong !");
});

function addMedia(type, media) {
  // dbname -Camera --> gallery --> object store
  //assuming we hava db access

  let tx = dbAccess.transaction("gallery", "readwrite"); // dbstorename , mode --> this is a transaction

  let galleryObjectStore = tx.objectStore("gallery"); //opening obj store

  let data = {
    mId: Date.now(),
    type,
    media,
  };
  galleryObjectStore.add(data);
}

function viewMedia() {
  //assuming we hava db access

  let tx = dbAccess.transaction("gallery", "readonly"); // dbstorename , mode --> this is a transaction

  let galleryObjectStore = tx.objectStore("gallery"); //opening obj store

  let request = galleryObjectStore.openCursor();

  request.addEventListener("success", function () {
    let cursor = request.result;

    if (cursor) {
      let div = document.createElement("div");

      div.classList.add("media-card");
      //${cursor.value.type}
      div.innerHTML = ` <div class="media-container"></div>
      <div class="action-container">
        <button class="media-download" data-id="${cursor.value.mId}">Download</button>
        <button class="media-delete" data-id="${cursor.value.mId}">Delete</button>
      </div>`;

      let donwloadbtn = div.querySelector(".media-download");
      let deletebtn = div.querySelector(".media-delete");

      /*------ Delete-button -----*/


      deletebtn.addEventListener("click",(e)=>{
        // deleting data from indexedDB as well as UI

        let mId = e.currentTarget.getAttribute("data-id");
        e.currentTarget.parentElement.parentElement.remove();
      
        deleteMediafromDb(mId);


      })

      if (cursor.value.type == "img") {
        let img = document.createElement("img");
        img.src = cursor.value.media;
        img.classList.add("media-gallery");
        let mediaContainer = div.querySelector(".media-container"); // go to media container in div and append media

        mediaContainer.appendChild(img);

        /*------ Download-button-image -----*/
        donwloadbtn.addEventListener("click", function(e){

          let a = document.createElement("a");
          a.download="image.jpg";
          a.href=e.currentTarget.parentElement.parentElement.querySelector(".media-container").children[0].src
          a.click();
          a.remove();

        })



      } else {
        let video = document.createElement("video");
        video.classList.add("media-gallery");
        video.src = window.URL.createObjectURL(cursor.value.media);
        let mediaContainer = div.querySelector(".media-container"); // go to media container in div and append media

        video.addEventListener("mouseenter", function () {
          video.currentTime = 0;
          // video.autoplay=true;
          video.play();
          video.muted=true;
        });
        video.addEventListener("mouseleave", function () {
          // video.autoplay=false;
          video.pause();
        });

        video.controls = true;
        video.loop = true;
        mediaContainer.appendChild(video);

        /*------ Download-button video -----*/
        donwloadbtn.addEventListener("click", function(e){

          let a = document.createElement("a");
          a.download="video.mp4";
          a.href=e.currentTarget.parentElement.parentElement.querySelector(".media-container").children[0].src
          a.click();
          a.remove();
        })
      }

      container.appendChild(div);
      cursor.continue();
    }
  });
}

function deleteMediafromDb(mId){

  let tx = dbAccess.transaction("gallery", "readwrite");
  let galleryStore=  tx.objectStore("gallery");

  galleryStore.delete(Number(mId));


}