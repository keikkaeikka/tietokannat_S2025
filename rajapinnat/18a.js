function numerot() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    if (num1 > num2){
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else { 
        return "The numbers are equal.";
    }
  }  
  
console.log("The bigger number is:", numerot());