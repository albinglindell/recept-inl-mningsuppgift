let hamburgerBtn = document.querySelector(".hamburger");
let hamburgerBar= document.querySelector(".hamburger-bar");
let popUp= document.querySelector(".recept nav");
let active = false;

hamburgerBtn.addEventListener("click", ()=>{
    if(!active){
active=true
hamburgerBtn.classList.add("hamburger-active");
popUp.style.display="flex";
}else{
    active=false;
    hamburgerBtn.classList.remove("hamburger-active");
    popUp.style.display="none";
}
})

