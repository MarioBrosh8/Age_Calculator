var btnEL = document.getElementById("btn");
var birthdayEL = document.getElementById("birthday")
var textcontainer = document.getElementById("result")

function calculateAGE() {
    let birthdayValue = birthdayEL.value;
    if (birthdayValue === "") {
        alert("Please input your Date of birth")
    } else {
        let age = getAge(birthdayValue)
        textcontainer.innerText = `You are ${age} ${age > 1 ? 'years' : 'year'} old`
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let month = currentDate.getMonth() - birthdayDate.getMonth()

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--
    }
    return age;
}


btnEL.addEventListener("click", calculateAGE)
