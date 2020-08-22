function validateFirstName() { //test input for 2-15 allowed characters
    var fName = document.getElementById("firstName").value;
    var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;

    if(re1.test(fName)) { //if input is valid, update page to show successful entry
        document.getElementById("firstNamePrompt").style.color = "green";
        document.getElementById("firstNamePrompt").innerHTML = "<strong>valid</strong>";
        return true;
    }
    else { //if input is invalid, update page to prompt for new input 
        document.getElementById("firstNamePrompt").style.color = "Red";
        document.getElementById("firstNamePrompt").innerHTML = "<strong>Enter 2-15 characters</strong>";
        return false;
    }
}

function validateLastName() { //test input for 2-15 allowed characters
    var lName = document.getElementById("lastName").value;
    var re2 = /^[a-zA-Z\s\'\-]{2,25}$/;

    if(re2.test(lName)) { //if input is valid, update page to show successful entry
        document.getElementById("lastNamePrompt").style.color = "green";
        document.getElementById("lastNamePrompt").innerHTML = "<strong>valid</strong>";
        return true;
    }
    else { //if input is invalid, update page to prompt for new input 
        document.getElementById("lastNamePrompt").style.color = "Red";
        document.getElementById("lastNamePrompt").innerHTML = "<strong>Enter 2-25 characters</strong>";
        return false;
    }
}

function validatePhone() { //test input for 10 allowed digits
    var pNo = document.getElementById("phone").value;
    var re3 = /^\d{3}-\d{3}-\d{4}$/;

    if(re3.test(pNo)) { //if input is valid, update page to show successful entry
        document.getElementById("phonePrompt").style.color = "green";
        document.getElementById("phonePrompt").innerHTML = "<strong>valid</strong>";
        return true;
    }
    else { //if input is invalid, update page to prompt for new input 
        document.getElementById("phonePrompt").style.color = "Red";
        document.getElementById("phonePrompt").innerHTML = "<strong>Use xxx-xxx-xxxx format</strong>";
        return false;
    }
}

function validateQuantity() { //if input quantity is available
    var qUant = document.getElementById("quantity").value;
    if(qUant < 56 && qUant > 0) {
       document.getElementById("quantityPrompt").style.color = "green";
       document.getElementById("quantityPrompt").innerHTML = "<strong>Available</strong>";
       return true;
    }
    else {
        document.getElementById("quantityPrompt").style.color = "Red";
        document.getElementById("quantityPrompt").innerHTML = "<strong>Please enter between (1-55)</strong>";
        return false;
    }
}

function DisplayFormValues() {
    var str = "";
    var elem = document.getElementById("WidgetForm").elements;
    for(var i = 0; i< elem.length; i++) {
        str += "<b>Type: </b>" + elem[i].type + "&nbsp;&nbsp;";
        str += "<b>Name: </b>" + elem[i].name + "&nbsp;&nbsp;";
        str += "<b>Value: </b><i>" + elem[i].value + "</i>&nbsp;&nbsp;";
        str += "<BR>";
    }
    document.getElementById("formElements").innerHTML = str;
}

function calcOrder() { //calculate order and print all the details
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userName = firstName + " " + lastName;
    var phone = document.getElementById("phone").value;
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;
    
    document.getElementById("orderConfirm").innerHTML = "<h2>Order Summary:</h2>";
    document.getElementById("orderConfirm").innerHTML += "<p>" + userName.toUpperCase() + "<br>" + phone + "</p>";
    document.getElementById("orderConfirm").innerHTML += "<p>Order total: $" + price * quantity + "</p>";
    document.getElementById("total").value = "$" + price * quantity;
}