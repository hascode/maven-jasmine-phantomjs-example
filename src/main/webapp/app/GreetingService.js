function GreetingService(){}

GreetingService.prototype.greeting = "Hello";

GreetingService.prototype.greet = function(name){
	return this.greeting+", "+name; 
};