let display = document.getElementById("display");

//on / off
const onOff = function () {
	const buttons = document.querySelectorAll("input");
	display.classList.toggle("off");
	if (display.classList.contains("off")) {
		display.setAttribute("placeholder", "");
		buttons.forEach(e => {
			if (e.id == "onOff") {
				return;
			} else {
				e.disabled = true;
			}
		});
		display.value = "";
	} else {
		buttons.forEach(e => e.disabled = false);
		display.setAttribute("placeholder", "0");
	}
}

//wyświetlanie na ekranie
const addToDisplay = function (num) {
	const regExp = /[\.\+\-\*\/\%]/;
	const nums = /[0-9]/;
	const operators = /[\+\-\*\/]/g;
	
	if (nums.test(num) && display.value === "0") {
		return;
	}
	
	if (regExp.test(num)) {
		if (display.value === "") {
			return;
		} else if (regExp.test(display.value.charAt(display.value.length - 1))) {
			return;
		} 
	} 
	
	if (num === ".") {
		if (display.value.includes(".")){
			const slice = display.value.slice(display.value.lastIndexOf("."), display.value.length);

			if (!slice.match(operators)) {
				return;
			}
		}
	}
	
	display.value += num;
}

//czyszczenie ostatniego wprowadzonego znaku
const clearLastCharacter = function () {
	const value = display.value;
	display.value = value.slice(0, value.length - 1);
}

//całkowite czyszczenie ekranu
const clearDisplayPanel = function () {
	display.value = "";
}

//wykonanie działania
const result = function () {
	const value = display.value;
	if (value === "") {
		return;
	}
	display.value = eval(value);
	display.value = display.value.slice(0, 16);
}

//zmiana na liczbę ujemną/dodatnią
const positiveNegative = function () {
	if (eval(display.value) >= 0) {
		display.value = "-" + display.value;
	} else {
		display.value = display.value.slice(1);
	}
}
