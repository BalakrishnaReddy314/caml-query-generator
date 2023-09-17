const convert = require('xml-js');
const utils = require("./utils");
const constants = require("../constants/fields");

const elements = [];

constants.fields.forEach((field) => {
    const element = utils.generateFilterElement(field, "hello", "Eq");

    elements.push(element);
    
    // console.log(convert.json2xml(JSON.stringify(element)));
});

// const inputArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const result = utils.combineFilter(elements, 'Or');
const parentObj = {
    type: "element",
    name: "Query",
    elements: [
        {
            type: "element",
            name: "Where",
            elements: [result]
        }
    ]
}
// console.log(result);
const xml = convert.js2xml(parentObj)
console.log(xml);

// console.log(elements);
