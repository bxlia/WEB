// JavaScript source code
/*document.getElementById("7").innerHTML = "Sedem";*/
/*document.getElementById("/").innerHTML = "Division";*/
let buttons = document.getElementsByTagName("button");
/*console.log(buttons);*/
/*console.log(elemens);*/

let a = null, b = null; //операнды
let operation = ""; //Sign - знак операции
let input = false;
let input_operation = false;

let digitButtons = document.getElementsByClassName("digit-button");
let operationButtons = document.getElementsByClassName("operation-button");
let clearButtons = document.getElementsByClassName("clear-button");
console.log(digitButtons);
//for (let i = 0; i < digitButtons.length-1; i++)
//{
//	for (let j = i + 1; j < digitButtons.length - 1; j++)
//	{
//		if (digitButtons[j].innerHTML < digitButtons[i].innerHTML)
//		{
//			//let buffer = digitButtons[i];
//			//digitButtons[i] = digitButtons[j];
//			//digitButtons[j] = buffer;
//			digitButtons[j] = [digitButtons[i], digitButtons[i] = digitButtons[j]][0];
//		}
//	}
//}
//digitButtons.sort();
//console.log(digitButtons);

for (let i = 0; i < digitButtons.length; i++)
{
	digitButtons[i].addEventListener("click", inputDigit);
	//document.getElementById(`${i}`).addEventListener("click", inputDigit);
}
for (let i = 0; i < operationButtons.length; i++)
{
	operationButtons[i].addEventListener("click", SetState);
}
for (let i = 0; i < clearButtons.length; i++)
{
	clearButtons[i].addEventListener("click", SetState);
}

function SetState()
{
	console.log(this.innerHTML);
	Press(this.innerHTML);
}
function inputDigit()
{
	/*let display = document.getElementById("display");
	if (display.value === '0') display.value = '';
	display.value += this.innerHTML;
	console.log(this);*/
	digit2display(this.innerHTML);
}
function digit2display(digit)
{
	if (input_operation === true)
	{
		document.getElementById("display").value = "";
		input_operation = false;
	}
	console.log("digit2display");
	console.log(digit);
	console.log("------------------------------------");
	let display = document.getElementById("display");
	if (digit == ' ') return;
	if (display.value === '0') display.value = '';
	if (digit == '.' && display.value.includes('.')) return;
	display.value += digit;
	console.log(this);
	input = true;
}

/*document.onkeypress = function (e)
{
	console.log(e.key);
	if (e.key >= 0 && e.key <= 9)
	{
		//document.getElementById(`${e.key.charcode-48}`).
		document.getElementById("display").value += e.key;
		console.log("DIGIT");
	}
	console.log(e);
}*/

document.onkeydown = function (e)
{
	console.log(e.key);
	let button = document.getElementById(`${e.key}`);
	//alert(button);
	if (button != null) button.classList.add("button-active");
	//console.log(button.pseudo(":active"));
	console.log(button);

	switch (e.key)
	{
		case "Escape": document.getElementById("C").classList.add("button-active"); break;
		case "Enter": document.getElementById("=").classList.add("button-active"); break;
	}
}
document.onkeyup = function (e)
{
	Press(e.key)
}
function Press(key)
{
	console.log(key);
	let button = document.getElementById(`${key}`);
	if (button != null && button.classList != null)
		button.classList.remove("button-active");

	switch (key)
	{
		case "Backspace": Backspace(); break;
		case "Escape":
		case "C":
		case "CE":
			Clear();
			document.getElementById("C").classList.remove("button-active");
			break;
		case "Enter":
		case "=":
			Calculate();
			document.getElementById("=").classList.remove("button-active");
			break;

		case "+":
		case "-":
		case "*":
		case "/":
			if (a === null) a = Number(document.getElementById("display").value);
			//input = false;
			if (input) Calculate();
			operation = key;
			input_operation = true;
			break;
	}
	if ((key >= 0 && key <= 9) || key == '.')
		digit2display(key);
}
function Backspace()
{
	let display = document.getElementById("display");
	if (display.value.length === 1) display.value = "0";
	else display.value = display.value.substring(0, display.value.length - 1);
	input = true;
}
function Calculate()
{
	if (input) b = Number(document.getElementById("display").value);
	input = false;
	switch (operation)
	{
		case "+": a += b; break;
		case "-": a -= b; break;
		case "*": a *= b; break;
		case "/": a = (b === 0) ? "" : a / b; break;
		default: break;
	}
	input_operation = false;
	let display = document.getElementById("display");
	display.value = (a === null) ? "0" : a;
}
function Clear()
{
	a = null, b = null;	//операнды
	operation = "";		//Sign - знак операции
	input = false;
	input_operation = false;
	document.getElementById("display").value = "0";
}