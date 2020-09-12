const getFirstDayOfMonth = (year, month) => {
    
    return new Date(year, month, 1).getDay()
}

export default getFirstDayOfMonth