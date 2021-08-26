const num_array = [1,2,3,4,5,6,7,8,9,0];
const oper_array = ['+','-','÷','×','='];
let operate = ["","",""];
let current = 0;


const buttons = document.querySelectorAll('button');
/* operation about to be made*/
const operation = document.getElementById('operation');
/* display answer */
const number = document.getElementById('number');


var newHandle = function(event) { handle(event, myArgument); };
buttons.forEach((button) =>{
    button.addEventListener('click', event => {
        action(button.innerHTML);
    })
})

function action(input)
{
    /* should have been one big switch, too late to change now */

    let continues = true;
    /* check if input is clear*/
    if(input == 'C')
    {
        operate = ["","",""];
        current = 0;
        operation.innerHTML = "";
    }

    /* check if input is remove*/
    if(input == 'R')
    {
        if(operate[current] == "" && current != 0)
             current--;

        let split = operate[current].toString().split("");
        operate[current] = "";

        for(let i = 0; i < split.length-1; i++)
        {
            operate[current] += split[i];
        }
    }

    /* check if input is Number */
    for(let i = 0; i < num_array.length; i++)
    {
        if(num_array[i] == input)
        {
            operate[current] += input;
            continues = false;

            i = num_array.length+1;  /* stop loop when opperate action is done */
        }
    }

    /* if not a number, continue check for if operator*/
    if(continues)
    {
        for(let i = 0; i < oper_array.length; i++)
        {
            if(input == '=')
            {
                console.log("=");
                if(operate[2] != "")
                {
                    let answers = answer(operate[0], operate[2], operate[1]);
                    operate[0] = answers;
                    operate[1] = "";
                    operate[2] = "";
                    current = 0;
                }
                i = num_array.length + 1;  /* stop loop when opperate action is done */
            }

            if(input == oper_array[i])
            {
                console.log("operate");
                /* max pair reach, calculate answer*/
                if(current == 2)
                {
                    let answer = answer(operate[0], operate[2], operate[1]);
                    operate[0] = answer;
                    operate[1] = "";
                    operate[2] = "";
                    current = 0;
                }

                else
                {
                    if(operate[current] == "")
                        operate[current] = "0";

                    current++;
                    operate[current] = input;
                    current++;
                }

                i = num_array.length + 1;  /* stop loop when opperate action is done */
            }
        }
    }  
    console.log(operate);
    console.log(current);
    show_onscreen(operate);
}

function answer(num1, num2, inOp)
{
    let answer;
    answer = Number(answer);
    num1 = Number(num1);
    num2 = Number(num2);
    switch(inOp)
    {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '×':
            answer = num1 * num2;
            break;
        case '÷':
            answer = num1 / num2;
            break;
    }

    return answer;

}

function show_onscreen(array)
{
    number.innerHTML = "";
    for(let i = 0; i < array.length; i++)
    {
        number.innerHTML += array[i];
    }
}
