//ES 5
(() => {
    var
        SomeClass = function () {
            //Private field and method               
            this.someotherPrivateField = 36;
            this.somePrivateField = "Yo I'm a private string field";
            this.privateUpdater = (value) => {
                if (value && value.length) {
                    this.somePrivateField = value;
                }
                return this.somePrivateField;
            }
            return {
                accessPrivateMethod: this.privateUpdater
            };
        },
        instantiatedClass = new SomeClass();

    console.log(`Before I update, the internal private field is: ${instantiatedClass.accessPrivateMethod()}`);

    //Update the privat field
    instantiatedClass.accessPrivateMethod("I've been updated with an external method that is associated with the internal method");

    console.log(`After I have been updated, the internal private field is: ${instantiatedClass.accessPrivateMethod()}`);

    //This will display undefined.  You cannot access the field someotherPrivateField, because it has not been exposed 

    instantiatedClass.somePrivateField = 44;
    console.log(`Trying to update the field someotherPrivateField ${instantiatedClass.moo}`);

})();