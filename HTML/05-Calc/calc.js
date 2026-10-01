// JavaScript source code
/*document.getElementById("7").innerHTML = "Sedem";*/
/*document.getElementById("/").innerHTML = "Division";*/
let buttons = document.getElementsByTagName("button");
/*console.log(buttons);*/
/*console.log(elemens);*/
//for (let i = 0; i < buttons; i++)
//{
//	if (buttons[i].innerHTML > "0" && buttons[i].innerHTML <= "9")
//		digitButtons = buttons[i];
//}
//console.log(digitButtons);

let digitButtons = document.getElementsByClassName("digit-button");
console.log(digitButtons);

for (let i = 0; i < digitButtons.length; i++)
{
	/*digitButtons[i].addEventListener("click", inputDigit);*/
	document.getElementById(`${i}`).addEventListener("click", inputDigit);
}
function inputDigit()
{
	let display = document.getElementById("display");
	if (display.value === '0') display.value = '';
	display.value += this.innerHTML;
	console.log(this);

}

document.onkeypress = function (e)
{
	console.log(e.key);
	if (e.key.charcode >= 0 && e.key.charcode <= 9)
	{
		/*document.getElementById(`${e.key.charcode-48}`).;*/
		document.getElementById("display").innerHTML += e.key;
	}
	console.log(e);
}