let current_expression='';
function appendNumber(number){
    current_expression+=number;
    document.getElementById("result").value=current_expression;
}
function appendOperator(operator){
    current_expression+=operator;
    document.getElementById("result").value=current_expression;
}
function calculateResult(){
    try{
        current_expression=eval(current_expression);
        document.getElementById("result").value=current_expression;
    }catch{
        document.getElementById("result").value="ERROR!!!";
    }
}
function clearResult(){
    current_expression='';
    document.getElementById("result").value = current_expression;
}