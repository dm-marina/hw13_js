let num = +prompt('Enter number:');
let i=2;
if(num<1){
    console.log('NaN');
    // break
}else{
    if(num%i===0){
        while(num%i===0){
            console.log(i);
            break
        }

    }else if(num===1){
        console.log(num);
    }
    else{
             while (num%i!=0){
                i+=1;
        }
        console.log(i);
    }
}
