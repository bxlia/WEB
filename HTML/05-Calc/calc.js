// JavaScript source code
/*document.getElementById("7").innerHTML = "Sedem";*/
/*document.getElementById("/").innerHTML = "Division";*/
let buttons = document.getElementsByTagName("button");
/*console.log(buttons);*/
/*console.log(elemens);*/

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
	let display = document.getElementById("display");
	if (display.value === '0') display.value = '';
	display.value += this.innerHTML;
	console.log(this);
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
	button.classList.add("button-active");
	//button.pseudo(":active");
	console.log(button);
}

document.onkeyup = function (e)
{
	document.getElementById(`${e.key}`);
	if (button.classList != null)
		button.classList.remove("button-active");
}