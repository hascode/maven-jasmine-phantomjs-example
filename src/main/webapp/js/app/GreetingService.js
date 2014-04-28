function GreetingService(){}

GreetingService.prototype.greeting = "Hello";

GreetingService.prototype.greet = function(name){
    'use strict';
    if(!name){
        throw "no name given";
    }
	return this.greeting+", "+name;
};