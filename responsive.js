document.addEventListener('DOMContentLoaded',()=>{
 const hamburger = document.querySelector('.hamburger input');
 const navMenu = document.querySelector('.nav-items ul');

 hamburger.addEventListener('click', ()=>{
        navMenu.classList.toggle('show-menu');
        // console.log('hamburger Clicked')
    
 });


});