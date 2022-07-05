let mobileNavOpen = false;

document.addEventListener("DOMContentLoaded", function(){
    window.onscroll = function (){
        document.querySelector('header').classList.add('headerbg');
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