function findDistanceToNode(obj, target) {
    if (obj === null) {
        return -1;
    }
    let distance = -1;
    const value = obj.value;
    const right = obj.right;
    const left = obj.left;
    if ((value === target) || (distance = findDistanceToNode(left, target)) >= 0  || (distance = findDistanceToNode(right, target)) >= 0 ){
        return distance + 1;
    }
    return distance - 1;
}

const binaryTree = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 6,
            "left": {
                "value": 23,
                "left": null,
                "right": null
            },
            "right": null
        },
        "right": null
    } 
}

console.log(findDistanceToNode(binaryTree, 23));