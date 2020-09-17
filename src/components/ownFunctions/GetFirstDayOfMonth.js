// returns the first day of the reqested month i.e Monday, Tuesday....

const getFirstDayOfMonth = (date) => {
    
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
}

export default getFirstDayOfMonth