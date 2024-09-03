document.addEventListener('DOMContentLoaded',()=>{
 const hamburger = document.querySelector('.hamburger input');
 const navMenu = document.querySelector('.nav-items ul');
 const svg = document.querySelector('#svg');

 hamburger.addEventListener('click', (e)=>{
        e.stopPropagation();
        navMenu.classList.toggle('show-menu');
        // console.log('hamburger Clicked')
    
 });


});
