
function isprime(n){
    
    
    let flag = 1;

    if (n <2) return flag = 0; 
    
    
    let i = 2;
    while(i <n){
        if( n%i==0 ) {
            flag = 0;
            break; 
        }
        i++;
    }

    return flag;
}

let array = [0,1,2,3,4,5,6,7,8,9,10];


for (let i = 0; i < array.length; i++){
  if (isprime(array[i]) == 1)  console.log( array[i] );
}
