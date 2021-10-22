function checker (a) {
    let message = String;
    if(a%2!=0){
        message = "Is Odd";
    }else{
        message = "Is Even";
    }
    return message;
    } 

let names = ['hello', 'no', 'oFF'];

function reversing(names){
    let revnames = []
    for(let i = names.length-1; i>=0; i--){
        revnames.push(names[i])
    }
    return revnames

}

console.log(reversing(names))