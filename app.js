
//Controlls the budget
var budgetController = (function(){
    var x = 23;
    
    var add = function(a){
        return a + x;
    }
    return {
        publicTest: function(b){
        var z = add(b);
        return z;

        }
    }
})();

//Controlls the UI
var UIController = (function(){
    
    //Declared object with property and values for DOM elements.
   var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__type',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };
   
    //Public accessible object for UIController module.
    return {
        getInputData: function(){
            return {//Object that will return all the input data
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
       
        //So now we have the 3 input values stored in the above 3 variables.
        //Now we need to find a way for the main controller (appcontroller) to access this input.
        //return and object and make the above constants, properties instead.
        },
        
        //public accessible method that returns the strings.
        getDomString: function(){
            return DOMstrings;
        }
    };
})();

//Controlls both controllers by making them talk to each other.
var appController = (function(budgetctrl, UICtrl){//I am passing the two modules inside of this main one.

    var setUpEventListeners = function(){
        //Calling the public methods for UICtrl module.
        var DOM = UICtrl.getDomString();//Getting the declared and initialized strings.
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);//Event fires once button is pressed.
        document.addEventListener('keypress', function(event){//Event fires once 'enter' is pressed.
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        };

    });
    }
    //var bd = budgetctrl.publicTest(5);//Example of calling methods from classed thats passed in this function.
    
    var ctrlAddItem = function(){
    //1. Get the field input data    
    var inputData = UICtrl.getInputData();
    //** */console.log(inputData);***This was to print the input data to console, just for testing.

    //2. Add the item to the budget controller
    //3. Add the item to the UI
    //4. Calculate the budget
    //5. Display the budget on the UI
    };

    return{
        init: function(){
            console.log('Application has started');
            setUpEventListeners();
        }
    }
    
})(budgetController, UIController);

appController.init();//This is the only line of code that will be used outside. it is called
//once application has started and then starts the event listeners inside of it.