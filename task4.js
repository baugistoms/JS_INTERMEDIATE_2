const timeData = [
    {number: 1, name: 'one', count: 'minute'},
    {number: 2, name: 'two', count: 'minutes'},
    {number: 3, name: 'three', count: 'minutes'},
    {number: 4, name: 'four', count: 'minutes'},
    {number: 5, name: 'five', count: 'minutes'},
    {number: 6, name: 'six', count: 'minutes'},
    {number: 7, name: 'seven', count: 'minutes'},
    {number: 8, name: 'eight', count: 'minutes'},
    {number: 9, name: 'nine', count: 'minutes'},
    {number: 10, name: 'ten', count: 'minutes'},
    {number: 11, name: 'eleven', count: 'minutes'},
    {number: 12, name: 'twelve', count: 'minutes'},
    {number: 13, name: 'thirteen', count: 'minutes'},
    {number: 14, name: 'fourteen', count: 'minutes'},
    {number: 15, name: 'fifteen', count: 'minutes'},
    {number: 16, name: 'sixteen', count: 'minutes'},
    {number: 17, name: 'seventeen', count: 'minutes'},
    {number: 18, name: 'eighteen', count: 'minutes'},
    {number: 19, name: 'nineteen', count: 'minutes'},
    {number: 20, name: 'twenty', count: 'minutes'},
    {number: 21, name: 'twenty one', count: 'minutes'},
    {number: 22, name: 'twenty two', count: 'minutes'},
    {number: 23, name: 'twenty three', count: 'minutes'},
    {number: 24, name: 'twenty four', count: 'minutes'},
    {number: 25, name: 'twenty five', count: 'minutes'},
    {number: 26, name: 'twenty six', count: 'minutes'},
    {number: 27, name: 'twenty seven', count: 'minutes'},
    {number: 28, name: 'twenty eight', count: 'minutes'},
    {number: 29, name: 'twenty nine', count: 'minutes'}
]
function convertTime(stringTime) {
    const splitTime = stringTime.split(':');
    const hours = parseInt(splitTime[0]);
    let hourString = timeData.find(element => element.number === hours).name
    const minutes = parseInt(splitTime[1]);
    if (minutes === 0) {
        console.log(`${hourString} o'clock`)
    } else if (minutes === 30) {
        console.log(`half past ${hourString}`)
    } else if (minutes < 30) {
        let minutesString = timeData.find(element => element.number === minutes)
        if (minutes === 15) {
            console.log(`quarter past ${hourString}`)
        } else {
            console.log(`${minutesString.name} ${minutesString.count} past ${hourString}`)
        }
    } else if (minutes > 30) {
        let minutesString = timeData.find(element => element.number === 60 - minutes)
        hourString = timeData.find(element => element.number === hours + 1).name
        if (minutes === 45) {
            console.log(`quarter to ${hourString}`)
        } else {
            console.log(`${minutesString.name} ${minutesString.count} to ${hourString}`)
        }
    }
}

convertTime('5:30');