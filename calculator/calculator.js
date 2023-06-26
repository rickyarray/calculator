function calculate(){
    var num1 = Number(prompt("Enter the num1"));
    var op = prompt("select an operation")
    var num2 = Number(prompt("Enter the num2"));

    if(op =="+"){
        var sum = num1 + num2;
        document.getElementById("results").innerHTML=`
    <p> ${num1} + ${num2} = ${sum}</p>
    `;
    }

    if(op =="-"){
        var sub = num1 - num2;
        document.getElementById("results").innerHTML=`
        <p> ${num1} - ${num2} = ${sub}</p>
        `;
    }

    if(op =="*"){
        var mul = num1 * num2;
        document.getElementById("results").innerHTML=`
        <p> ${num1} * ${num2} = ${mul}</p>
        `;
    }

    if(op =="/"){
        var div = num1 / num2;
        document.getElementById("results").innerHTML=`
    <p> ${num1} / ${num2} = ${div}</p>
    `;
    }

    


    // document.getElementById("results").innerHTML=`
    // <p> ${num1} + ${num2} = ${sum}</p>
    // <p> ${num1} - ${num2} = ${sub}</p>
    // <p> ${num1} * ${num2} = ${mul}</p>
    // <p> ${num1} / ${num2} = ${div}</p>
    // `;
    // // display the results of each
}
