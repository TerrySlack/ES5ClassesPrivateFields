// The parent class
var AdderClass = function() {
    var privateData = {
        a: 1,
        b: 1,
        add: function() { return this.a + this.b }
    };

    this.getData = function() {
        return privateData;
    }

    this.setA = function(newA) {
        privateData.a = newA;
    }

    this.setB = function(newB) {
        privateData.b = newB;
    }
    
    this.add = function() {
        return privateData.a + privateData.b;
    }
}

// The child class
var AdderSubtractorClass = function() {
    // We need to do this to make sure closure scope is preserved
    AdderClass.apply(this);

    // This is a necessary evil if we want to preserve inheritance
    var privateData = this.getData();
    
    this.subtract = function() {
        return privateData.a - privateData.b;
    }
};

// Set prototype chain.
AdderSubtractorClass.prototype = AdderClass.prototype;

var adder = new AdderClass();
var subtractor = new AdderSubtractorClass();

// TESTING ADDER
console.log('Prototype chain is maintained', adder instanceof AdderClass);
console.log('Adding works', adder.add() === 2); // 1+1=2
adder.setA(4);
console.log('Changing the variable works', adder.add() === 5); //4+1=2

// TESTING SUBTRACTOR
console.log('Prototype chain is maintained', (subtractor instanceof AdderClass) && subtractor instanceof AdderSubtractorClass);
console.log('Subtracting works', subtractor.subtract() === 0);
subtractor.setA(100);
subtractor.setB(50);
console.log('Setting variables works', subtractor.subtract() === 50 && subtractor.add() === 150);

// TESTING SEPARATION
console.log('Instances are totally separate', adder.add() !== subtractor.add());
