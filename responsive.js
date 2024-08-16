document.addEventListener('DOMContentLoaded',()=>{
 const hamburger = document.querySelector('.hamburger input');
 const navMenu = document.querySelector('.nav-items ul');

 hamburger.addEventListener('click', (e)=>{
        e.stopPropagation();
        navMenu.classList.toggle('show-menu');
        // console.log('hamburger Clicked')
    
 });
});
//  document.addEventListener('click' ,(e)=>{
//        if(e.target ===svg){
//        navMenu.classList.remove('show-menu');
//        console.log(`SVG Clicked ${e.target}`)
//        }
//  })


// });
