window.onsubmit=validateResearchForm;

function validateResearchForm() {
		var invalidMsg = "";

		if (validateNumber() !== true) {
				invalidMsg += "Invalid phone number\n";
		}

		var check = validateCheckBox();
		if (check !== "") {
				invalidMsg += check;
		}

		if (validateRadio() !== true) {
				invalidMsg += "No time period selected\n";
		}

		var check2 = validateID();
		if (check2 !== "") {
				invalidMsg += check2;
		} 

		if (invalidMsg != "") {
				alert(invalidMsg);
				return false;
		}
		else {
				var confirmation = "Do you want to submit the form data?";

				if (window.confirm(confirmation)){
						return true;
				}
				else {
						return false;
				}
		}
}

function validateNumber() {
		var number1 = document.getElementById("phoneFirstPart").value;
		var number2 = document.getElementById("phoneSecondPart").value;
		var number3 = document.getElementById("phoneThirdPart").value;

		if ((String(parseInt(number1)) !== number1) || number1.length !== 3) {
				return false;
		}

		if ((String(parseInt(number2)) !== number2) || number2.length !== 3) {
				return false;
		}
		if ((String(parseInt(number3)) !== number3) || number3.length !== 4) {
				return false;
		}

		return true;
}

function validateCheckBox() {
		var box1 = document.getElementById("highBloodPressure");
		var box2 = document.getElementById("diabetes");
		var box3 = document.getElementById("glaucoma");
		var box4 = document.getElementById("asthma");
		var box5 = document.getElementById("none");

		var cond = "";

		if (box1.checked || box2.checked || box3.checked || box4.checked) {
				if (box5.checked) {
						cond += "Invalid conditions selection\n";
						return cond;
				}
				else {
						return cond;
				}
		}
		else if (box5.checked) {
				return cond;
		}
		else {
				cond += "No conditions selected\n";
				return cond;
		}
}

function validateRadio() {
		var period = document.getElementsByName("period");
		var idx;
		
		for (idx = 0; idx < period.length; idx++) {
				if (period[idx].checked) {
					return true;
				}
		}
		return false;
}

function validateID() {
		var p1 = document.getElementById("firstFourDigits").value;
		var p2 = document.getElementById("secondFourDigits").value;
		var msg = "";

		var char1 = p1[0];
		var char2 = p2[0];
		var id1 = p1.substring(1, 4);
		var id2 = p2.substring(1, 4);


		if (char1 !== "A" || char2 !== "B") {
				msg += "Invalid study id\n";
				return msg;
		}
		else if (p1.length > 4 || p2.length > 4) {
				msg += "Invalid study id\n";
				return msg;
		}
		else if (isNaN(id1) || isNaN(id2)){
				msg += "Invalid study id\n";
				return msg;
		}
		else {
				return msg;
		}
}