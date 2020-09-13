const Fetch2019EventsApi = async (date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    if(year===2019){
        const url = `https://holidayapi.com/v1/holidays?pretty&key=196a8e90-c701-42a3-8f42-5d29a16b9727&country=IN&year=2019&public&month=${month+1}`
        try{
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data.holidays[0].date)
            return data
            
        }catch(error){
            console.error(error)
        }
    }

    return []
}

export default Fetch2019EventsApi;

// try {
//     const res = await fetch(url);
//     const data  = await res.json();
//     console.log(data);
// }catch(err){
//     console.error(err);
// }