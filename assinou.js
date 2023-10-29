let buttons = document.querySelectorAll('button.card-button');
let windows = document.querySelectorAll('div.Planos')

for(let i in buttons){
    buttons[i].addEventListener('click', () =>{
        if(windows[i].id.slice(6) == buttons[i].id.slice(3)){
            windows[i].style.display = 'block'
        }
    })
}