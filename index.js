function validate() {
    let firstName = document.getElementById('first-name').value 
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let batchNo = document.getElementById('batch-no').value
    let currentModule = document.getElementById('current-module').value
    let tnCInput = document.getElementById('tnC').checked
    
    let error = false

    //First Name Validation
    if (
        firstName &&
        firstName.length >= 3
        
        ) {
            document.getElementById('first-name-valid').style.display = 'block'
            document.getElementById('first-name-invalid').style.display = 'none'
        }
    else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }
    //Last Name Validation
    if (
        lastName &&
        lastName.length >=3
    ){
        document.getElementById('last-name-valid').style.display ='block'
        document.getElementById('last-name-invalid').style.display ='none'
    }
    else {
        document.getElementById('last-name-invalid').style.display ='block'
        document.getElementById('last-name-valid').style.display ='none'
        error = true
    }
    //Email Validation 
    if (
        email &&
        email.includes('@') &&
        email.includes('.') &&
        email.lastIndexOf('.') <= email.length - 3 &&
        email.indexOf('@') !== 0
    ) {
        document.getElementById('email-valid').style.display ='block'
        document.getElementById('email-invalid').style.display = 'none'
    }
    else {
        document.getElementById('email-invalid').style.display ='block'
        document.getElementById('email-valid').style.display = 'none'
        error = true
    }
    //Phone Validation
    if(
        phone &&
        phone.length === 10
    ) {
        document.getElementById('phone-valid').style.display = 'block'
        document.getElementById('phone-invalid').style.display = 'none'
    }
    else {
        document.getElementById('phone-invalid').style.display = 'block'
        document.getElementById('phone-valid').style.display = 'none'
        error = true
    }
    //Batch No Validation
    if (
        batchNo !== 'None'
    ){
        document.getElementById('batch-no-valid').style.display = 'block'
        document.getElementById('batch-no-invalid').style.display = 'none'
    }
    else {
        document.getElementById('batch-no-invalid').style.display = 'block'
        document.getElementById('batch-no-valid').style.display = 'none'
        error = true
    }
    //Current Module Validation
    if (
        currentModule !== 'None'
    ){
        document.getElementById('current-module-valid').style.display = 'block'
        document.getElementById('current-module-invalid').style.display = 'none'
    }
    else {
        document.getElementById('current-module-invalid').style.display = 'block'
        document.getElementById('current-module-valid').style.display = 'none'
        error = true
    }
    //TnC Validation 
    if(tnCInput) {
		document.getElementById("tnC-invalid").style.display = "none";
	} else {
		document.getElementById("tnC-invalid").style.display = "block";
		error = true
	}

    if(!error) {
		alert('Your details have been saved successfully!')
		document.getElementById('first-name').value = ''
		document.getElementById('last-name').value = ''
		document.getElementById('email').value = ''
        document.getElementById('phone').value = ''
		document.getElementById('batch-no').value = 'None'
		document.getElementById('current-module').value = 'None'
		document.getElementById('tnC').checked = false

	    document.getElementById('first-name-valid').style.display = 'none'
		document.getElementById('last-name-valid').style.display = 'none'
		document.getElementById("email-valid").style.display = "none"
        document.getElementById("phone-valid").style.display = "none"
		document.getElementById("batch-no-valid").style.display = "none";
		document.getElementById("current-module-valid").style.display = "none";
	}
}