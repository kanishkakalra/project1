const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (btn){
    console.log(btn)
btn.addEventListener('mouseover',function(e){
    // if(e.target.id === 'red'){
    //     body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id === 'yellow'){
    //     body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id === 'blue' ){
    //     body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id === 'green' ){
    //     body.style.backgroundColor=e.target.id
    // }
    switch (e.target.id) {

        case 'red':
        case 'yellow':
        case 'blue':
        case  'green':            
            body.style.backgroundColor=e.target.id;
            break;
    
        default:
            break;
    }
})
})
