function titleCase(string) {
    
    let sentence = string.toLowerCase().split(" ");
  
    
    for(let i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    
    return sentence.join(" ");
  }
  let result = titleCase('hà nội việt nam');
console.log(result.toUpperCase());



