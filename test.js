// Import the function sum from the app.js file
const { expect, sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// 1 Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

     // 3 We expect the sum of those 2 numbers to be 23
     expect(total).toBe(23);
});

// 2. Test for Euro to Dollar conversion
test("One euro should be 1.07 dollars", function() {
    //Import the function from app.js

    //Use the funcion like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    //If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    //This is the comparison for the unit test
    expect(dollars(3.5)).toBe(expected);// 3.5 euros should be 3.745
});

// 3. Test for Dollar to Yen conversion
test("One dollar should be 158.10 Yen", function() {

    //Use the funcion like its supposed to be used
    const yen = fromDollarToYen(3.5);

    //If 1 Dollar is 158.10 Yen, then 3.5 euros should be (3.5 * 158.10)
    const expected = 3.5 * 158.10;

    //This is the comparison for the unit test
    expect(yen).toBe(expected);// 3.5 dollars should be 553.35
});

test("One Yen should be 0.0051 Pounds", function() {
    //Use the function like its supposed to be used
    const pounds = fromYenToPound(3.5);
    
    //If one Yen is 0.0051 Pounds, then 3.5 Yen should be (3.5 * 0.0051)
    const expected = 3.5 * 0.0051;

    //This is the coparison for the unit test
    expect(pounds).toBe(expected); //1 Yen is 0.0051 Pound, then 3.5 Yen should be = (3.5 * 0.0051)

});