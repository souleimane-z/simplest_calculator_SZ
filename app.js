let result = document.getElementById("sumInput");

let compute=(number)=>{
    result.value += number;
};

let Result = () => {
    try {
        result.value = eval(result.value);
    }
    catch(err){
        alert("calcul non valide!");
    }
} 

function clear(){
    result.value= " ";
}

function del(){
    result.value = result.value.slice(0, -1);
}