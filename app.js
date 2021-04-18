function validate() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var pwd = document.getElementById('password').value;
    var age = document.getElementById('age').value;

    var bio = document.getElementById('bio').value;
    var job = document.getElementById('job').value;

    var dev = document.getElementById('development');
    var design = document.getElementById('design');
    var business = document.getElementById('business');

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

    if (!nameRegex.test(name)) {
        document.getElementById("nameError").innerHTML = "Invalid Name"
        setTimeout(function () {
            document.getElementById("nameError").innerHTML = ""
        }, 3000)
    } else if (!emailRegex.test(email)) {
        document.getElementById("mailError").innerHTML = "Invalid Email"
        setTimeout(function () {
            document.getElementById("mailError").innerHTML = ""
        }, 3000)
    } else if (!emailRegex.test(email)) {
        document.getElementById("mailError").innerHTML = "Invalid Email"
        setTimeout(function () {
            document.getElementById("mailError").innerHTML = ""
        }, 3000)
    }


    var data = {
        name: name,
        email: email,
        password: pwd,
        age: age,
        bio: bio,
        job,
        job,
        interested: {
            development: dev.checked,
            design: design.checked,
            business: business.checked,
        }
    };



    localStorage.setItem("userData", JSON.stringify(data))

    window.location.href = "./login.html";

}