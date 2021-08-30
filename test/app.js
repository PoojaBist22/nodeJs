var app={
    sayWelcome:function(name) {
        if(name===null)
        return null;
        else
        return "welcome "+name;
    },
 
    findSum:function(a,b) {
        return a+b;
    }
};

module.exports =app;