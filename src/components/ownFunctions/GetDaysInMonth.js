// returns no. of days of the requested month 

let getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export default getDaysInMonth;