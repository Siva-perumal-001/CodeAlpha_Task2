const result = document.querySelector(".result");
const calculation = document.querySelector(".calculation");

let expression = "";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    let val = button.addEventListener("click", () => {
        const value = button.value;

        if (value === "="){
            return ;
        }

        if (value === "clr"){
            expression = "";
            calculation.innerHTML = "";
        }

        else{
            expression += value;
            calculation.innerHTML = expression;
        }

    });
});

let math = ``

for (let btn of buttons){
    let operator = btn.addEventListener("click",()=>{
        const op = btn.value;

        if (!isNaN(op)){
            math += op;
            console.log(math);
        }
        
    })
    
}











