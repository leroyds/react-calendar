const Fetch2019EventsApi = (date) => {
    const year =date.getFullYear();

    let events2019 = []

    if (year===2019){
        fetch('https://holidayapi.com/v1/holidays?pretty&key=196a8e90-c701-42a3-8f42-5d29a16b9727&country=IN&year=2019')
        .then(resp => resp.json())
        .then(events => {
            let events2019 = []
            for (const event of events) {
                if(events.holidays.public===true){
                    events2019 += event
                }
            }
            console.log('hit'+ events2019)
            return events2019;
        })
    }else{
        return []
    }
}

export default Fetch2019EventsApi;

// fetch('https://holidayapi.com/v1/holidays?pretty&key=196a8e90-c701-42a3-8f42-5d29a16b9727&country=IN&year=2019')
//         .then(resp => resp.json())
//         .then(events => {
//             let events2019 = []
//             for (const event of events.holidays) {
//                 if(event.public===true){
//                     events2019 += event
//                 }
//             }
//             events2019.forEach(event => {
//                 console.log(event)
//             });
//         })