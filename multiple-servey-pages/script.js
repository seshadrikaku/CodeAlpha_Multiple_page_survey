
		function onSubmit1(event) {
			event.preventDefault();

			const password = document.getElementById("password").value;
			const repeatPassword = document.getElementById("R-password").value;
		
			if (password !== repeatPassword) {
				alert("Passwords do not match. Please try again.");
				return;
			}
			
			document.getElementById("f-1").style.display = "none";
			document.getElementById("f-2").style.display = "block";
		}

		function onSubmit2(event) {
			event.preventDefault();
			document.getElementById("f-2").style.display = "none";
			document.getElementById("f-3").style.display = "block";
		}

		function onSubmit3(event) {
			event.preventDefault();
			document.getElementById("f-3").style.display = "none";
			document.getElementById("f-1").style.display = "block";


			alert("Form Done Successfully")

			// Get form values
			const name = document.getElementById("name").value;
			const email = document.getElementById("email").value;
			const mobile = document.getElementById("mobile").value;
			const role = document.getElementById("role").value;
			const experience = document.getElementById("exp").value;
			const ctc = document.getElementById("ctc").value;
			const etc = document.getElementById("etc").value;
			const noticePeriod = document.getElementById("np").value;

			// Create a new table row
			const newRow = userTableBody.insertRow();
			newRow.insertCell().textContent = name;
			newRow.insertCell().textContent = email;
			newRow.insertCell().textContent = mobile;
			newRow.insertCell().textContent = role;
			newRow.insertCell().textContent = experience;
			newRow.insertCell().textContent = ctc;
			newRow.insertCell().textContent = etc;
			newRow.insertCell().textContent = noticePeriod;

			// Clear form fields
			document.getElementById("name").value = "";
			document.getElementById("email").value = "";
			document.getElementById("password").value = "";
			document.getElementById("R-password").value = "";
			document.getElementById("address").value = "";
			document.getElementById("mobile").value = "";
			document.getElementById("age").value = "";
			document.getElementById("gender").value = "";
			document.getElementById("department").value = "";
			document.getElementById("role").value = "";
			document.getElementById("exp").value = "";
			document.getElementById("ctc").value = "";
			document.getElementById("etc").value = "";
			document.getElementById("np").value = "";

		}

		function showPreviousForm1() {
			document.getElementById("f-3").style.display = "none";
			document.getElementById("f-2").style.display = "none";
			document.getElementById("f-1").style.display = "block";
		}

		function showPreviousForm2() {
			document.getElementById("f-1").style.display = "none";
			document.getElementById("f-2").style.display = "block";
			document.getElementById("f-3").style.display = "none";
		}
	