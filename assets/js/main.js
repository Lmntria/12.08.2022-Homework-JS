
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
        alert(multiply(numbers));
      }
      if(proces=='+'){
        console.log(plus(numbers));
        alert(plus(numbers));
      }
      if(proces=='-'){
        console.log(minus(numbers));
        alert(minus(numbers));
      }
      if(proces=='/'){
        console.log(devide(numbers));
        alert(devide(numbers));
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
  let sum=1;
  for (let i=0; i<numbers.length; i++) {
      sum = sum * numbers[i];
  } 
  return sum.toFixed(2);
}
function plus (numbers) {
  let total=0;
  for (let i=0; i<numbers.length; i++) {
      total = total + Number(numbers[i]);
  } 
  return total.toFixed(2);
}
function minus (numbers) {
  let lead=Number(numbers[0]);
  for (let i=1; i<numbers.length; i++) {
      lead = lead - Number(numbers[i]);

  } 
  return lead.toFixed(2);
}
function devide (numbers) {
  let dev=Number(numbers[0]);
  for (let i=0; i<numbers.length; i++) {
    dev = dev / Number(numbers[i]);
  } 
  return dev.toFixed(2);
}