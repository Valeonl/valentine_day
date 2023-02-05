//Регулярное выражение для проверки кода
const regexp = /\d[A-Z,a-z]\d\d[A-Z,a-z][A-Z,a-z]\d/
function getWunch(){
    code = document.getElementById('code_value').value.toUpperCase(); 
    if(code.length != 7 || !regexp.test(code))  
        {
            alert('Введённый код не соответсвует формату: 0А00АА0');
            return;
        } 
    
    alert(`Ваше пожелание: ${CodeArray[code]}`);
       
}