// code your solution here

const record = [
    {
        year: "2015",
        result: "W"
    },
    {
        year: "2014",
        result: "N/A"
    },
    {
        year: "2013",
        result: "L"
    }

];

function superbowlWin(array) {
    // test variable stores the objects containing the index of when Denver Broncos won the Superbowl
    // If an array contains an object the parameter inside the find function should be as follows (({OBJECTKEY}))
    let test = array.find(({ result }) => result === 'W');

    return test !== undefined ? test.year : test;
}

console.log(superbowlWin(record));