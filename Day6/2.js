
function findFactorialUsingFor(number) {
      if (number === 0) {
      console.log(`The factorial of ${number} is 1.`);
      return;
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
  
    console.log(` ${factorial}.`);
  }
  

  findFactorialUsingFor(19); 
  