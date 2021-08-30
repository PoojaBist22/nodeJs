const name = (str)=>{
   

    if (str.match(/[0-9]/)){
        console.log('Name cannot contain a number');
    }
    if (str.match([/!@#%&_-/])){
        console.log('Name cannot contain a special character')
    }
    else{
        console.log('No of Characters :' + str.length );
        console.log(str.toUpperCase());
        console.log(str.toLowerCase());
    }

}
module.exports= name