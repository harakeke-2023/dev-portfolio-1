const slideList = [{
    img: "img/p1.png",
},
{
    img: "img/p2.png",
},
{
    img: "img/p3.png",
}];

const image = document.querySelector('img.slider');

const arrowL = document.getElementById('arrowL');
const arrowR = document.getElementById('arrowR');

let active = 0;

const changeSlide = () => {
    active++;

    if (active === slideList.length){
        active = 0;
    }
    
    if (active < 0) {
        active = slideList.length - 1;
    }
    image.src = slideList[active].img;
};

arrowR.addEventListener("click", changeSlide);

const changeSlideL = () => {
    active--;

    if (active === slideList.length){

        active = 0;
    }
   
    
    if (active < 0) {
        active = slideList.length - 1;
    }
    image.src = slideList[active].img;
};

arrowL.addEventListener("click", changeSlideL);

const arrowB = document.getElementById("arrowB");

const sources = ["/portfolio/index.html", "/portfolio/resume.html", "/portfolio/contact.html"];

arrowB.addEventListener("click", function(){
    if (active){
        window.open(sources[active]);
    } else if (active === 0){
        window.open(sources[0]);
    }
    
})