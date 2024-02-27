window.addEventListener("keydown",(e)=>{
    if (e.keyCode===13){
        calculate()
    }
})

function calculate() {
    var expression = document.getElementById('expression').value;

    try {
       
        var result = eval(expression);
        document.getElementById('result').innerText = result;
    } catch(e) {
        alert("Expresión inválida, por favor inserte números y sus respectivas operaciones");
    }
}