const json1 = '{"name": "Alice", "age": 30}';
const json2 = '{"age": 30, "name": "Alice"}';
const areEqualJSON =(json1, json2);
 {
    const obj1 = JSON.parse(json1);
    const obj2 = JSON.parse(json2);

    const sortedObj1 = sortObject(obj1);
    const sortedObj2 = sortObject(obj2);

    return JSON.stringify(sortedObj1) === JSON.stringify(sortedObj2);
}

let sortObject=(obj);
 {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => sortObject(item));
    }

    const sortedKeys = Object.keys(obj).sort();
    const sortedObj = {};

    sortedKeys.forEach(key => {
        sortedObj[key] = sortObject(obj[key]);
    });

    return sortedObj;
}

console.log(areEqualJSON(json1, json2));
