// 1 Import the function sum from the app.js file
const { sum, formDollarToYen } = require('./app.js');

// 2 Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

     // 3 We expect the sum of those 2 numbers to be 23
     expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() => {
    //Import the function from app.js
    const {fromEuroToDollar} = require('./app.js');
    
    //Use the funcion like its supposed to be used
    const {dollars} = fromEuroToDollar(3.5);

    //If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const {expected} = 3.5 * 1.07;

    //This is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(3.745);// 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07) 
});

test("One dollar should be 158.10 Yen", function() => {
    //Import the function from app.js
    const {formDollarToYen} = require('./app.js');

    //Use the funcion like its supposed to be used
    const {Yen} = fromEuroToYen(3.5);

    //If 1 Dollar is 158.10 Yen, then 3.5 euros should be (3.5 * 158.10)
    const {expected} = 3.5 * 158.10;

    //This is the comparison for the unit test
    expect(formDollarToYen(3.5)).toBe(553.35);// 1 dollar is 158.10 Yen, then 3.5 dollar should be = (3.5 * 158.10) 
});

test("One Yen should be 0.0051 Pounds", function() => {
    //Import the function from app.js
    const {fromYentoPound} = require('./app.js');

    //Use the function like its supposed to be used
    const {Pound} = fromYentoPound(3.5);
    
    //If one Yen is 0.0051 Pounds, then 3.5 Yen should be (3.5 * 0.0051)
    const {expected} = 3.5 * 0.0051;

    //This is the coparison for the unit test
    expect(fromYentoPound(3.5)).toBe(0.01785); //1 Yen is 0.0051 Pound, then 3.5 Yen should be = (3.5 * 0.0051)

)};