/*myArr = ["ROel", "eel"];
text = myArr[0].toLowerCase();
test = myArr[1].toLowerCase();

function testLetters(){
	for (i=0; i<test.length; i++) {
		if (text.indexOf(test[i]) === -1) {
			document.write("false ");
			return false;
		}
	}
	document.write("true ");
	return true;
}

testLetters();
document.write(text+" / "+test+"</br>");*/



//form

var par = document.getElementById("mypar");

function loading() {
	par.style.animationName = "loading";
	setTimeout(function(){
		par.style.animationName -= "loading";
	}, 2000);
}

function formCalc() {

	loading();

	var input1 = document.getElementById("input1").value.toLowerCase();
	var input2 = document.getElementById("input2").value.toLowerCase();

	if (input1 == "" | input2 == "") {
		par.innerHTML = "Fill the areas please...";
		return;
	};

	for (i=0; i<input2.length; i++) {
		if (input1.indexOf(input2[i]) === -1) {
			par.innerHTML = "I'ts not!";
			return false;
		}
	}

par.innerHTML = "It is!";
return true;
}






//alert("JS is working");