const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const navbar = document.querySelector(".navbar");
let index = 0;

//!button
const menuBtn = document.querySelector("#menu-btn");


function prevSlide(n){
    index+=n;
    console.log("prevSlide is called");
    changeSlide();
  }
  
  function nextSlide(n){
    index+=n;
    changeSlide();
  }
  
  changeSlide();
  
  function changeSlide(){
  
    if(index>slides.length-1)
      index=0;
  
    if(index<0)
      index=slides.length-1;
  
  
  
      for(let i=0;i<slides.length;i++){
        slides[i].style.display = "none";
  
        dots[i].classList.remove("active");
  
  
      }
  
      slides[index].style.display = "block";
      dots[index].classList.add("active");
  
  
  
  }


menuBtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navbar)
        ) {
            navbar.classList.remove("active");
        }
    });
});