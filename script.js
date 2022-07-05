let mobileNavOpen = false;

document.addEventListener("DOMContentLoaded", function(){
    window.onscroll = function (){
        if(window.scrollY > 0){
            document.querySelector('header').classList.add('headerbg');;
        }else{
            document.querySelector('header').classList.remove('headerbg');;
        }
        checkSlides();
    };
    document.querySelector(".icon").onclick = ()=>{
        if(!mobileNavOpen){
            document.querySelector(".mobile-nav-links").style.display = "block";
            document.querySelector('.icon').classList.remove('fa-bars');
            mobileNavOpen = true;
            document.querySelector('.icon').classList.add('fa-xmark');
        }else{
            document.querySelector(".mobile-nav-links").style.display = "none";
            mobileNavOpen = false;
            document.querySelector('.icon').classList.remove('fa-xmark');
            document.querySelector('.icon').classList.add('fa-bars');
        }
    }
});
function checkSlides(){
    const triggerPoint = window.innerHeight/5 * 4;
    document.querySelectorAll('.slide-in').forEach(submain =>{
        const boxTop = submain.getBoundingClientRect().top;
        if(boxTop < triggerPoint){
            submain.classList.add('show');
        }else{
            submain.classList.remove('show');
        }
    });

}