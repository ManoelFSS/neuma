
const currentLocation = document.querySelectorAll('nav a');
const css_ativo ='ativo';



currentLocation.forEach(function(e){
    e.addEventListener('click', function(){
        for(let i =0; i < currentLocation.length; i++){
            currentLocation[i].classList.remove(css_ativo);
        }
        e.classList.add(css_ativo);
    })
})






