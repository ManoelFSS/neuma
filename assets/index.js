
const currentLocation = location.href;
const menuItems = document.querySelectorAll('a');
const menuLenght = menuItems.length;


for(let i =0; i < menuLenght; i++){
    if(menuItems[i].href === currentLocation){
         var cor = menuItems[i].className = "ativo";
     
    }

  
}




