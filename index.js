const ciper = {
  'A': 'aaaaa',
  'B': 'aaaab',
  'C': 'aaaba',
  'D': 'aaabb',
  'E': 'aabaa',
  'F': 'aabab',
  'G': 'aabba',
  'H': 'aabbb',
  'I': 'abaaa',
  'J': 'abaaa',
  'K': 'abaab',
  'L': 'ababa',
  'M': 'ababb',
  'N': 'abbaa',
  'O': 'abbab',
  'P': 'abbba',
  'Q': 'abbbb',
  'R': 'baaaa',
  'S': 'baaab',
  'T': 'baaba',
  'U': 'baabb',
  'V': 'baabb',
  'W': 'babaa',
  'X': 'babab',
  'Y': 'babba',
  'Z': 'babbb',
}



let str1 = 'Strike now';
let str2 = 'baaab baaba baaaa abaaa abaab aabaa abbaa abbab babaa';
let input = process.argv[2];

const baconianEncoder = (str) => {
  // remove empty spaces from str and convert to uppercase
  let trimmedStr = str.replace(' ', '').toUpperCase();

  // convert str into encoded array
  let encodedArr = trimmedStr.split('').map(letter => {
    return ciper[letter];
  });

  // convert encoded array to str 
  let encodedStr = encodedArr.join(' ');
  console.log(encodedStr);
}


const baconianDecoder = (str) => {
  // convert str to array
  let encodedArr = str.split(' ');
  // console.log(Object.keys(ciper));
  // convert encoded array to decoded array
  let decodedArr = encodedArr.map(encodedLetter => {
    return Object.keys(ciper).filter(key => {
      return ciper[key] === encodedLetter;
    });
  });
  // convert decoded array to decoded string
  // method 1
  let decodedStr1 = decodedArr.reduce((a, b) => {
    return a.concat(b);
  }).join('');
  // method 2
  let decodedStr2 = [].concat.apply([], decodedArr).join('');
  console.log(decodedStr1);
  console.log(decodedStr2);
}

// check for user input 
if(process.argv[2] === 'encode') {
  baconianEncoder(process.argv[3]);
}
else {
  baconianDecoder(process.argv[3]);
}