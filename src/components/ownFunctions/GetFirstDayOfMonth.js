const getFirstDayOfMonth = (date) => {
    
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
}

export default getFirstDayOfMonth