document.addEventListener('DOMContentLoaded',()=>{
 const hamburger = document.querySelector('.hamburger input');
 const navMenu = document.querySelector('.nav-items ul');
 const svg = document.querySelector('#svg');
const gotoTop =document.querySelector('#to-top');

 hamburger.addEventListener('click', (e)=>{
        e.stopPropagation();

     
        navMenu.classList.toggle('show-menu');
        // console.log('hamburger Clicked')
    
 });

       // hamburger.addEventListener('click' ,(e)=>{

       //        e.stopPropagation();
       //        navMenu.classList.remove('show-menu');
       // })

       document.addEventListener('click', (e) =>{
              if (navMenu.classList.contains('show-menu') && !e.target.closest('.hamburger')){
              navMenu.classList.remove('show-menu');
              }
       })

       // Buttn to get on Top

       gotoTop.addEventListener('click' ,function(){
              window.scrollTo({
                     top:0,
                     behavior:'smooth'
              })

       });

});
