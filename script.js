const result = document.querySelector(".result");
const calculation = document.querySelector(".calculation");
const buttons = document.querySelectorAll("button");
const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector("i");
const body = document.body;

let expression = "";
let inputstop = false;

// Load saved expression/result
const storedExpr = localStorage.getItem("lastExpression");
const storedResult = localStorage.getItem("lastResult");
if (storedExpr) {
  expression = storedExpr;
  calculation.textContent = expression;
}
if (storedResult) {
  result.textContent = storedResult;
}

// Theme toggle
body.classList.add("light-theme");
icon.className = "ri-moon-line";

toggleBtn.addEventListener("click", () => {
  const isLight = body.classList.contains("light-theme");
  body.classList.toggle("light-theme", !isLight);
  body.classList.toggle("dark-theme", isLight);
  icon.className = isLight ? "ri-sun-line" : "ri-moon-line";
  toggleBtn.style.color = isLight ? "#fff" : "#111";
  toggleBtn.style.background = isLight
    ? "rgba(255, 255, 255, 0.15)"
    : "rgba(255, 255, 255, 0.3)";
});

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

function evaluation(button) {
  const value = button.value;

  if (value === "=") {
    try {
      inputstop = true;
      const op = eval(expression);
      result.textContent = Number(op);
      switch_class();
      localStorage.setItem("lastResult", result.textContent);
      return;
    } catch {
      result.textContent = "Error";
    }
  }

  if (value === "clr") {
    expression = "";
    calculation.textContent = "";
    result.textContent = "";
    switch_class_back();
    localStorage.removeItem("lastExpression");
    localStorage.removeItem("lastResult");
    return;
  }

  if (value === "del") {
    let math = [...expression];
    math.pop();
    expression = math.join("");
    calculation.innerHTML = expression;
    localStorage.setItem("lastExpression", expression);
    return;
  }

  if (inputstop && !isNaN(value)) {
    // New number starts new expression
    expression = value;
    result.textContent = "";
    switch_class_back();
    inputstop = false;
  } else if (inputstop && isNaN(value)) {
    // Continue with result + operator
    expression = result.textContent + value;
    result.textContent = "";
    switch_class_back();
    inputstop = false;
  } else {
    expression += value;
  }

  calculation.innerHTML = expression;
  localStorage.setItem("lastExpression", expression);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    evaluation(button);
  });
});
