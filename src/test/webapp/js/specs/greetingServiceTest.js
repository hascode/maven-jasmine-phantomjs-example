describe("the greeting service", function () {
	var greetingService;
	
	beforeEach(greetingService = new GreetingService());

    it("should load scope", function () {
    	var greet = greetingService.greet("foo");
        expect(greet).toBe("Hello, foo");
    });
});
