// JavaScript source code
/*document.getElementById("7").innerHTML = "Sedem";*/
/*document.getElementById("/").innerHTML = "Division";*/
let buttons = document.getElementsByTagName("button");
/*console.log(buttons);*/
/*console.log(elemens);*/

let a, b; //операнды
let s; //Sign - знак операции
let input = false;
let input_operation = false;

let digitButtons = document.getElementsByClassName("digit-button");
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
function inputDigit()
{
	//let display = document.getElementById("display");
	//if (display.value === '0') display.value = '';
	//display.value += this.innerHTML;
	//console.log(this);
	digit2display(this.innerHTML);
}

function digit2display(digit)
{
	if (input_operation === true)
	{
		document.getElementById("display").value = "";
		input_operation = false;
	}
	let display = document.getElementById("display");
	if (digit == ' ') return;
	if (display.value === '0') display.value = '';
	if (digit == '.' && display.value.includes('.')) return;
	display.value += digit;
	console.log(this);
	input = true;
}

//document.onkeypress = function (e)
//{
//	console.log(e.key);
//	if (e.key.charcode >= 0 && e.key.charcode <= 9)
//	{
//		/*document.getElementById(`${e.key.charcode-48}`).;*/
//		document.getElementById("display").innerHTML += e.key;
//	}
//	console.log(e);
//}

document.onkeydown = function (e)
{
	console.log(e.key);
	let button = document.getElementById(`${e.key}`);
	if (button != null)button.classList.add("button-active");
	//button.pseudo(":active");
	//console.log(button);

	switch (e.key)
	{
		case "Escape": document.getElementById("C").classList.add("button-active"); break;
		case "Enter": document.getElementById("=").classList.add("button-active"); break;
	}
}

document.onkeyup = function (e)
{
	let button = document.getElementById(`${e.key}`);
	if (button != null && button.classList != null)
		button.classList.remove("button-active");

	switch (e.key)
	{
		case "Backspace": Backspace(); break;
		case "Escape":
			document.getElementById("C").classList.remove("button-active"); 
		document.getElementById("display").value = "0"; break;
		case "Enter":
			Calculate();
			input = false;
			input_operation = false;
			document.getElementById("=").classList.remove("button-active"); break;

		case "+":
		case "-":
		case "*":
		case "/":
			operation = e.key;
			input = false;
			input_operation = true;
			a = Number(document.getElementById("display").value);
			break;
	}
	if(e.key >= 0 && e.key <= 9 || e.key == '.')
		digit2display(e.key);
}

function Backspace()
{
	document.getElementById("display").value;
	if (display.value.length === 1) display.value = "0";
	else display.value = display.value.substring(0, display.value.length - 1);
}
function Calculate()
{
	if (input)b = Number(document.getElementById("display").value);
	switch (operation)
	{
		case "+": a += b; break;
		case "-": a -= b; break;
		case "*": a *= b; break;
		case "/": a /= b; break;
	}
	document.getElementById("display").value = a;
	input = false;
	input_operation = false;
}