// Promises does the same job as async
// It will be on 1 of the state - pending, fullfilled, rejected

function fetchData() {
    return new Promise((resolve, reject) => { // params - accepted or not
        setTimeout(() => {
            let success = true
            if ( success ) {
                resolve("Data fetched successfully")
            } else {
                reject("Error fetching data")
            }
        }, 3000);
    })
}

fetchData()
    .then( ( data ) => { console.log(data) })
    .catch( ( error  ) => { console.log(error) })

