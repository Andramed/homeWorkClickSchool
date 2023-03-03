function getromanToArab  (x) {
    let result = 0
  for(let i = 0; i < x.length; i ++) {
    switch (x[i]) {
        case 'I': result+=1; break;
        case 'V': x[i -1] == 'I'? result+= 3 : result+=5;  break;
        case 'X': x[i -1] == 'I' ? result += 8 : result += 10; break;
        case 'L': x[i - 1] == 'V' ? result += 40 : x[i - 1] == 'X'? result += 30: result+= 50; break;
        case 'C': x[i - 1] == 'X' ? result += 80 : result += 100; break;
        case 'D': x[i - 1] == 'C' ? result += 300 : result += 500; break; 
        case 'M': x[i - 1] == 'C' ? result += 800 : result += 1000; break; 
        default:  
            break;
    }
  }
  return result
};

console.log(getromanToArab("DCCCLXII"));