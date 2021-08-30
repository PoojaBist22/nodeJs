module.exports = function(){
    // convert arguments object to an array
    var args = Array.prototype.slice.call(arguments);

    //Throw error if argumnets contain non- finite number values
    if (!args.every(Number.isFinite)){
        throw new TypeError('sum() expects only numbers.')
    }

    //Return the sum of the arguments
    return args.reduce(function(a,b){
        return a+ b
    }, 0);
}