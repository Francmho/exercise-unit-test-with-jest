const sum = (a, b) => {
    return a + b
}
console.log(sum(7,3));




// Declaramos una función con el nombre exacto "formEuroToDollar"
//function fromEuroToDollar()

    const fromEuroToDollar = function(valueInEuro){
        // Convertimos el valor a dólares
        let valueDollar = valueInEuro * 1.07;
        // Retornamos el valor en dólares
        return valueDollar;
    }

// Declaramos una función con el nombre exacto "formDollarToYen"

    const formDollarToYen = function(valueInDolar){
        // Convertimos el valor a Yen
        let valueYen = valueInDolar * 158.10;
        // Retornamos el valor en Yen
        return valueYen;
    }

// Declaramos una función con el nombre exacto "formYenToPound"

    const formYenToPound = function(valueInYen){
        // Convertimos el valor a Pound
        let valuePound = valueInYen * 0.0051;
        // Retornamos el valor en Pounds
        return valuePound;
    }


    module.exports = {sum, fromEuroToDollar, formDollarToYen, formYenToPound};

