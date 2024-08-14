 const button = document.querySelector('#starBtn');

const generateColor = function(){

    const hex = '1234567890ABCDEF';
    let color = '#';

    for(let i =0; i<6; i++){

        color += hex[Math.floor(Math.random() *16)]
    }    

    return color;
}

button.addEventListener('click' , ()=>{
    console.log(generateColor())
    document.body.style.backgroundImage = ' linear-gradient(135deg, #13547a 10%, #80d0c7 100%);'
  document.body.style.backgroundColor = generateColor();
    
})