import {encoded, translations} from './data.js'

function decodeFields(encoded, translations) {
    let decodedList = [];
    let uniqueIds = new Set();

    encoded.forEach(item => {
        let decodedItem = {};
        Object.entries(item).forEach(([key, value]) => {
            if (key.endsWith("Id")) {
                decodedItem[key] = translations[value] || value;
                uniqueIds.add(value);
            } else {
                decodedItem[key] = value;
            }
        });
        decodedList.push(decodedItem);
    });

    return [decodedList, Array.from(uniqueIds)];
}


const [decoded, uniqueIds] = decodeFields(encoded, translations);

console.log("Decoded List:");
decoded.forEach(item => console.log(item));

console.log("\nUnique IDs:", uniqueIds);



// console.log(decoded)
