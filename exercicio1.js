function isFibonacci(number) {
    let primaryNumber = 0
    let secondaryNumber = 1
  
    if (number === primaryNumber || number === secondaryNumber) {
      return `${number} pertence à sequência de Fibonacci.`
    }
  
    let nextNumber = primaryNumber + secondaryNumber

    while (nextNumber <= number) {
      if (nextNumber === number) {
        return `${number} pertence à sequência de Fibonacci.`
      }
      primaryNumber = secondaryNumber
      secondaryNumber = nextNumber
      nextNumber = primaryNumber + secondaryNumber
    }
  
    return `${number} não pertence à sequência de Fibonacci.`
  }
  
  const number = 5
  console.log(isFibonacci(number))
