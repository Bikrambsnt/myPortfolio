document.addEventListener('DOMContentLoaded',()=>{
 const hamburger = document.querySelector('.hamburger input');
 const navMenu = document.querySelector('.nav-items ul');
 const svg = document.querySelector('#svg');

 hamburger.addEventListener('click', (e)=>{
        e.stopPropagation();
        navMenu.classList.toggle('show-menu');
        // console.log('hamburger Clicked')
    
 });

svg.addEventListener('click' ,(e)=>{

       if(e.target === svg){

              console.log(`Clicked ${e.target}`);
              
              e.stopPropagation();
              navMenu.classList.remove('show-menu');    
              
            
       }
});



document.addEventListener('click' ,()=>{
       navMenu.classList.remove('show-menu')
})



});
