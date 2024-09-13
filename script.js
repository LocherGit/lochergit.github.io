// Update navbar title
const sectionTitles = document.querySelectorAll('.section-title');
const sections = document.querySelectorAll('section');
let observerOptions = {
  root: null, // relative to document viewport
  rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
  threshold: 0.7 // visible amount of item shown in relation to root
};
let observer = new IntersectionObserver(onChange, observerOptions);
sections.forEach(section => observer.observe(section));


function onChange(changes, observer) {
changes.forEach(change => {
  if (change.intersectionRatio > 0) {
    sectionTitles.forEach(el => {
      el.classList.remove('active');
    });
    let sectionTarget = document.getElementById("section-" + change.target.id);
    sectionTarget.classList.add('active');
  }
});
}

// exchange with danbooru / testbooru
var danbooru_results = null;
fetch('https://danbooru.donmai.us/posts.json?tags=scenery&limit=100', { method: 'GET' })
.then(res => { return res.json() })
.then(data => {
  console.log("SUCCESS: Initializing Danbooru results succeeded");
  danbooru_results = data;
  let rng
  while(true) {
    rng = Math.floor(Math.random() * danbooru_results.length);
    console.log("danbooru rng: ", + rng);
    if( isImage(danbooru_results[rng].file_url)) {
      break;
    }
    console.log("Removing non-image out of danbooru results: ");
    console.log(danbooru_results[rng]);
    danbooru_results.splice(rng, 1);
  }
  let linkContainer = document.getElementById('random-image');
  linkContainer.src = danbooru_results[rng].large_file_url;
  let sourceImageContainer = document.getElementById('random-source-image');
  sourceImageContainer.href = danbooru_results[rng].media_asset.variants[2].url;
})
.catch(error => console.log('ERROR: Initializing Danbooru results failed') );

function randomizeDanbooru() {

  let rng = Math.floor(Math.random() * danbooru_results.length);
  let linkContainer = document.getElementById('random-image');
  linkContainer.src = danbooru_results[rng].large_file_url;
  let sourceImageContainer = document.getElementById('random-source-image');
  sourceImageContainer.href = danbooru_results[rng].media_asset.variants[2].url;
}
function isImage(filename) {
  let extension = filename.split('.').pop();
  return ["png", "PNG", "jpg", "JPG"].includes(extension);
}

// Create Prototype Slider
let active = 0;
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next-project');
let prev = document.getElementById('prev-project');
function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = '5';
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    let image = items[active].querySelectorAll('.flex-link')[0];
    image.classList.remove('disabled');

    for( var i = active + 1; i < items.length; i++ ) {
        stt++;
        items[i].style.transform = `translateX(${500 * stt}px)  scale(${1 - 0.3 * stt}) perspective(24px) rotateY(-0.5deg)`;
        items[i].style.zIndex = -stt + 5;
        items[i].style.filter = `blur(${2.5 * stt}px)`;
        items[i].style.opacity = 1 - (0.4 * stt);
        let image = items[i].querySelectorAll('.flex-link')[0];
        image.classList.add('disabled');

    }
    stt = 0;
    for( var i = active - 1; i >= 0; i-- ) {
        stt++;
        items[i].style.transform = `translateX(${-500 * stt}px)  scale(${1 - 0.3 * stt}) perspective(24px) rotateY(0.5deg)`;
        items[i].style.zIndex = -stt + 5;
        items[i].style.filter = `blur(${2.5 * stt}px)`;
        items[i].style.opacity = 1 - (0.4 * stt);
        let image = items[i].querySelectorAll('.flex-link')[0];
        image.classList.add('disabled');
    }
}

next.onclick = function() {
    active = active + 1 < items.length ? active + 1 : active;
    if( active == items.length - 1) {
        next.classList.add("hide");
    }
    if( active == 1 ) {
        prev.classList.remove("hide");
    }
    loadShow();
}
prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : active;
    if( active == 0 ) {
        prev.classList.add("hide");
    }
    if( active < items.length - 1 ) {
        next.classList.remove("hide");
    }
    loadShow();
}

// Handle Rambling Items random teleport fading sequence
const transition_fadeOut = [{opacity: 1},{opacity: 0}];
const transition_fadeIn  = [{opacity: 0},{opacity: 1}];
const timing = {duration: 1500 };
const ramblingItems = document.getElementsByClassName("rambling-item");
const ramblingArray = Array.from(ramblingItems);
const boundingBox = document.getElementById("ramblings").getBoundingClientRect();
function moveDiv() {
  ramblingArray.forEach(el => {
    el.animate(transition_fadeOut, timing);
    let itemBox = el.getBoundingClientRect();
    var maxLeft = boundingBox.width - itemBox.width;
    var maxTop = boundingBox.height - itemBox.height;
    var leftPos = Math.floor(Math.random() * (maxLeft + 1))
    var topPos = Math.floor(Math.random() * (maxTop + 1))
    el.style.left = leftPos;
    el.style.top = topPos;
    el.setAttribute('style', "left: " + leftPos + "px; top:" + topPos + "px");
    el.animate(transition_fadeIn, timing);
  });
};

function ramblings(rambItem) {
  window.open("./ramblings/?file="+rambItem, '_blank');
}