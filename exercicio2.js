function checkLetterA(string) {
    let count = 0
  
    for (let i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() === 'a') {
        count++
      }
    }
  
    if (count > 0) {
      return `A letra 'a' aparece ${count} vezes na string.`
    } else {
      return `A letra 'a' não aparece na string.`
    }
  }
  
  const stringForTest = "Aprendendo JavaScript é muito bacana!"
  console.log(checkLetterA(stringForTest))
  