const eve = require('events');
const emitter = new eve.EventEmitter();
//Listen
emitter.on('message',function(msg){
    console.log('In Eventlistener', msg);
})
// Raise
emitter.emit('message',{
    id:1001,
    name:'Pooja'
});