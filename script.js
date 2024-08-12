  const pic = document.querySelector('#profile')
let url = 'https://api.github.com/users/Bikrambsnt'

new Promise (function(resolve , reject){

    setTimeout(()=>{

        if(url){
            resolve(url);
        }
        
        else{
            reject('ERROR, Invalid Url');
        }
    },1000);

})
.then(function(url){
    return fetch(url) // return to do more chaining..
})
.then(function(response){

    if(!response.ok){
        throw new Error(`ERROR, ${response.status} ${response.statusText}`);
        
    }

    else {
        return response.json();//more chaining
    }
    
})

.then(function(data){ //finally catch the response data
    const image = data.avatar_url;

    pic.src = image;
    comsole.log(image)

})
.catch(function(error){
    console.log('Failed to get Data' , error);
})


