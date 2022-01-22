document.getElementById("successMessage").innerHTML = "";
document.getElementById("errorMessage").innerHTML = "";

document.getElementById("btnFormat").addEventListener("click", function(){

	var notes =  document.getElementById("jsonarea").value;
	if(notes==null || notes==""){
		return; //document.getElementById("message").innerHTML = ""
	} else {
		var obj;
		try {
			obj = JSON.parse(notes);
		} catch (e) {
			document.getElementById("successMessage").innerHTML = "";
			document.getElementById("errorMessage").innerHTML = "Invalid JSON : "+e;
			return;
			
		}
		var prettyJson = JSON.stringify(obj, null, 3);
		document.getElementById("jsonarea").value = prettyJson;
		document.getElementById("errorMessage").innerHTML = "";
		document.getElementById("successMessage").innerHTML = "Valid JSON."
	}
});



document.getElementById("btnSingleLine").addEventListener("click", function(){

	var notes =  document.getElementById("jsonarea").value;
	if(notes==null || notes==""){
		return; //document.getElementById("message").innerHTML = ""
	} else {
		var obj;
		try {
			obj = JSON.parse(notes);
		} catch (e) {
			document.getElementById("successMessage").innerHTML = "";
			document.getElementById("errorMessage").innerHTML = "Invalid JSON : "+e;
			return;
			
		}
		var prettyJson = JSON.stringify(obj);
		document.getElementById("jsonarea").value = prettyJson;
		document.getElementById("errorMessage").innerHTML = "";
		document.getElementById("successMessage").innerHTML = "Valid JSON."
	}
});
