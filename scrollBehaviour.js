
const aboutClass = document.querySelector('.about a');
const aboutId = document.querySelector('#about-section');

aboutClass.addEventListener('click' , (e)=>{
    e.preventDefault();

aboutId.scrollIntoView({
    behavior:"smooth",
    
   
});
});