const result = document.querySelector(".result");
const calculation = document.querySelector(".calculation");

const buttons = document.querySelectorAll("button");

function switch_class() {
    calculation.classList.remove("calculation");
    calculation.classList.add("clicked-style-calc");
    result.classList.remove("result");
    result.classList.add("clicked-style-res");
}

function switch_class_back() {
    calculation.classList.add("calculation");
    calculation.classList.remove("clicked-style-calc");
    result.classList.add("result");
    result.classList.remove("clicked-style-res");
}

let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (value === "=") {
            switch_class();
            return;
        }

        if (value === "clr") {
            expression = "";
            calculation.innerHTML = "";
            switch_class_back();
            return;
        }

        if (value === "del") {
            math = [...expression];
            math.pop();
            expression = math.join("");
            calculation.innerHTML = expression;
        }

        else {
            expression += value;
            calculation.innerHTML = expression;
            switch_class_back();
            return;
        }

    });
});

let n1 = "";
let n2 = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let btnval = btn.value;

        switch (btnval) {
            case (!isNaN(btnval)):
                n1 += btnval;
                break;

            case (isNAN(btnval)):
                break;

            default:
                break;
        }
        console.log(n1)

    })
})















