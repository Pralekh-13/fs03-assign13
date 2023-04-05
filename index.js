const imageGallery = document.getElementById("imageGallery");
const images = imageGallery.getElementsByTagName("img");
const timer = document.getElementById("timer");
let currentIndex = 0;

function showImage() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[currentIndex].style.display = "block";
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage();
}

function startTimer() {
  let count = 10;
  timer.innerHTML = count;
  const timerInterval = setInterval(() => {
    count--;
    timer.innerHTML = count;
    if (count === 0) {
      clearInterval(timerInterval);
      nextImage();
      setInterval(nextImage, 5000);
    }
  }, 1000);
}

showImage();
startTimer();
