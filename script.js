


const buttons = document.querySelectorAll('button');
/* operation about to be made*/
const operation = document.getElementById('operation');
/* display answer */
const number = document.getElementById('id');



buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        console.log(button.innerHTML);
    })
})

