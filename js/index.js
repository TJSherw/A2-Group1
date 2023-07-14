// main iimg and thumbnail
var mainImg = document.getElementById("mainImg");
var thumbnailList = document.getElementById("thumbnailList");

// array of objs
var images = [
  {
    src: "images/flowers-pink-small.jpg",
    alt: "Pink",
    caption: "Pink Flowers",
    info: "These are Pink Flowers"
  },
  {
    src: "images/flowers-purple-small.jpg",
    alt: "Purple",
    caption: "Purple Flowers",
    info: "These are Purple Flowers"
  },
  {
    src: "images/flowers-red-small.jpg",
    alt: "Red",
    caption: "Red Flowers",
    info: "These are Red Flowers"
  },
  {
    src: "images/flowers-white-small.jpg",
    alt: "White",
    caption: "White Flowers",
    info: "These are White Flowers"
  },
  {
    src: "images/flowers-yellow-small.jpg",
    alt: "Yellow",
    caption: "Yellow Flowers",
    info: "These are Yellow Flowers"
  }
];

// loop through array for thumbnails
for (var i = 0; i < images.length; i++) {
  var listItem = document.createElement("li");
  var thumbnailImg = document.createElement("img");
  var figCaption = document.createElement("figcaption");

  //source and alt
  thumbnailImg.src = images[i].src;
  thumbnailImg.alt = images[i].alt;
  thumbnailImg.width = 240;
  thumbnailImg.height = 160;

  //caption 
  figCaption.textContent = images[i].caption;

  //append
  listItem.appendChild(thumbnailImg);
  listItem.appendChild(figCaption);
  thumbnailList.appendChild(listItem);

  // click event listener
  thumbnailImg.addEventListener("click", createThumbnailClickHandler(images[i]));
}

// function for click 
function createThumbnailClickHandler(image) {
  return function () {
    
    mainImg.src = image.src;

    // Reset filter for all thumbnail images
    var thumbnailImages = thumbnailList.getElementsByTagName("img");
    for (var j = 0; j < thumbnailImages.length; j++) {
      thumbnailImages[j].style.filter = "grayscale(100%)";
    }

    // Apply full color filter to the clicked thumbnail image
    this.style.filter = "none";

    // Update the figcaption text with the image's info
    var mainImgInfo = document.getElementById("mainImgInfo");
    mainImgInfo.textContent = image.info;
  };
}

