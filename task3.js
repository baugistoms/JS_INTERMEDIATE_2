function cloneObject(object) {
    let resultObject = {};
    const objectKeys = Object.keys(object);
    for (let i = 0; i < objectKeys.length; i++) {
        const propertyName = objectKeys[i];
        const clonedValue = object[propertyName];
        resultObject[propertyName] = clonedValue;
    }
    return resultObject;
}

const testObject = {
    a: 1,
    b: '2',
    c: 'three',
    test: { d: 'four'},
    another: ['e', 'f'],
    g: false
}

const newObj = cloneObject(testObject);
console.log(newObj);