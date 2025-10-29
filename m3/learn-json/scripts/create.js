function addme() {
    const person = {};
    person.firstName = document.getElementById("fname").value;
    person.lastName = document.getElementById("lname").value;
    person.email = document.getElementById("email").value;
    person.phone = document.getElementById("phone").value;

    document.getElementById("json-value").innerHTML = `${JSON.stringify(person)}`;
}