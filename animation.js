

anime({
    targets: '.morphing-demo .polymorph',
    points: [
      { value: [
          '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
          '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369'
        ]
      },
      { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
      { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
      { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
    ],
    easing: 'easeOutQuad',
    duration: 2000,
    loop: true
  });


  // Back side of Skill Card
  anime({
    targets: '.el',
    translateY: 1000,
    rotate:'2turn',
    easing:'EaseInOut',
    direction: 'alternate',
    loop: true,
    duration: 8000,
    easing: function(el, i, total) {
      return function(t) {
        return Math.pow(Math.sin(t * (i + 6)), total);
      }
    }
  });

//  Rotate Profile Pic. 
  setInterval(() =>{
    anime({
        targets:'.image-container',
        rotateY:'+=360',
        easing:'easeInOutQuad',
        duration:2000
    
      }
      )


  },5000)
 

// Animation Viewpoint for Fade in anmation on pages


document.addEventListener("DOMContentLoaded" , ()=>{

  const section = document.querySelectorAll('.about-content ,.morph,.icon-container,.icon-container-b,.maincard,.contact-card');

  const observer = new IntersectionObserver((e) =>{
    e.forEach(entry =>{
      // console.log('Enteries:' ,entry);
      if(entry.isIntersecting){
        entry.target.classList.add('show-fade');
        // observer.unobserve(entry.target);
      }
    });


  },{threshold:0.3})  

section.forEach (contentSection =>{
observer.observe(contentSection);
});


});


  
