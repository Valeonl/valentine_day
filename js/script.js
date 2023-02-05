const CodeArray = {
    "1234567": "Ты молодец!",
    "2345678": "Ты не молодец("
}


function getWunch(){
    code = document.getElementById('code_value').value.toUpperCase();
    if(code !== "")
    {
        alert(`Ваше пожелание: ${CodeArray[code]}`);
    }
    else alert("Вы не ввели код!")
}