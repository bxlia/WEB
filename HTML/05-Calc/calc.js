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
/*console.log(digitButtons);*/

for (let i = 0; i < digitButtons.length; i++)
{
	digitButtons[i].addEventListener("click", inputDigit);
}
function inputDigit()
{
	let display = document.getElementById("display");
	if (display === '0') display.value = '';
	display.value += this.innerHTML;
	console.log(this);

}