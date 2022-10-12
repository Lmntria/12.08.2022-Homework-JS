
let sum=1;
let total=0;
let numbers = [];
let check=true;
let input = prompt("Nece eded daxil etmek isdeyirsiniz?");
if(input){
  if (!isNaN(input)) {
    for (let i = 0; i <input; i++) {
      numbers.push(prompt((i+1) + '.reqemi daxil edin:'));
      console.log(numbers);
    }
    
    let proces=prompt('(Vurma(*),Bolme(/),Toplama(+),Cixma(-)) Riyazi proseslerden birinin isaresini daxil edin:')
    if(proces=='*' || proces=='+' || proces=='-' || proces=='/') {
  
      if (proces=='*') {
        console.log(multiply(numbers));
      }
      if(proces=='+'){
        console.log(plus(numbers));
      }
      if(proces=='-'){
        console.log(minus(numbers));
      }
      if(proces=='/'){
        console.log(devide(numbers));
      }
    }
    else{
      alert('Duzgun riyazi prosesi secmediniz!!!')
    }
  
  
  }
  else{
      alert("yalniz reqem daxil edebilersiz!!!");
  }
}


function multiply (numbers) {
  for (let i=0; i<numbers.length; i++) {
      sum = sum * numbers[i];
  } 
  return sum;
}
function plus (numbers) {
  for (let i=0; i<numbers.length; i++) {
      total = total + Number(numbers[i]);
  } 
  return total;
}
function minus (numbers) {
  let lead=Number(numbers[0]);
  for (let i=1; i<numbers.length; i++) {
      lead = lead - Number(numbers[i]);

  } 
  return lead;
}
function devide (numbers) {
  let dev=Number(numbers[0]);
  for (let i=0; i<numbers.length; i++) {
    dev = dev / Number(numbers[i]);
  } 
  return dev;
}