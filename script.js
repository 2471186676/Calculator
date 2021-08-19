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
    console.log(input);
    num_array.forEach((num) =>{
        if(input == num)
            operate[current] += Number(input);
            show(operate);
    })

    oper_array.forEach((oper) =>{
        console.log(input);
        if(input == oper && input != '=')
        {
            if(current != 2)
            {
                current ++;
                operate[current] = input;
                current ++;
                show(operate);
            }
        }
        else if(input === '=')
        {
            let result = answer(operate[0], operate[2], operate[1]);
            operation.innerHTML = result;
            operate[0] = result;
            operate[1] = "";
            operate[2] = ""
            current = 1;
            number.innerHTML = "_";

        }
    })
}

function action(input)
{
    let continues = true;
    for(let i = 0; i < num_array.length; i++)
    {
        if(num_array[i] == input)
        {
            console.log("number");
            operate[current] += input;
            continues = false;

            i = num_array.length+1;  /* stop loop when opperate action is done */
        }
    }

    if(continues)
    {
        for(let i = 0; i < num_array.length; i++)
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

            else if(input == oper_array[i])
            {
                console.log("operate");
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
