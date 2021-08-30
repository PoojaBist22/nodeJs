const numbers = (num)=>{
    if (num % 2 == 0){
        console.log(`${num} is a even number`)
    }
    
    if(num % 2 != 0){
        console.log(`${num} is a odd number`)
    }

    if(num == 0){
        console.log(`Number is Zero`)
    }
}

module.exports = numbers