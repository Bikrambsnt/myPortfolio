
 const cursor = document.querySelector('.cursor');
 const main = document.querySelector('#main');


 main.addEventListener('mousemove' , (e)=>{

    cursor.style.left = e.clientX +'px';
    cursor.style.top = e.clientY +'px';
 })