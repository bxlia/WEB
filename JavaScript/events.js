// JavaScript source code
function factorial() {
	let n = Number(document.getElementById("factorial-source").value);
	//alert(`${typeof (n)} ${n}`)
	let f = BigInt(1);
	for (let i = 1n; i <= n; i++) {
		f *= i;
	}
	document.getElementById("factorial-result").innerHTML = `${n}! = ${f}`;
}
function power() {
	let base = document.getElementById('base').value;
	let exp = document.getElementById('exponent').value;
	document.getElementById('power').innerHTML = `${base}<sup>${exp}</sup>=${base**exp}`;
}
/*=========================================================================================*/
function setImage() {
	let image_file_control = document.getElementById("image-file");
	let filename = image_file_control.files[0];
	document.getElementById("image").src = URL.createObjectURL(filename);
}
function setBackgroundColor() {
	document.body.style.backgroundColor = document.getElementById("background-color").value;
}
function setForegroundColor(e) {
	/*document.body.style.color = document.getElementById("foreground-color").value;*/
	document.body.style.color = e.target.value;
}
function setColor(e) {
	document.body.style[e.target.id === 'foreground-color' ? 'color' : 'backgroundColor'] = e.target.value;
}