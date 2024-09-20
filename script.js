function insert(char){
    var valor = document.querySelector("#result").innerHTML;
    document.querySelector("#result").innerHTML = valor + char;
}

function clean(){
    document.querySelector("#result").innerHTML =""
}

function back(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, 
result.length -1)
}

function calculate(){
    var result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result)
    }
    else{
        document.getElementById('result').innerHTML="..."
    }
}
