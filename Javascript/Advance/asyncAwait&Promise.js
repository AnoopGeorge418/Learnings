function fetchData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject( {
                name: "Anoop", 
                url: "https://github/anoopgeorge418"
            } )
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log('Fetching user data....');
        const userData = await fetchData()
        console.log("User data: ", userData);
        
    } catch (error) {
        console.log("Error fetching data: ", error);
        
    }
}

getUserData()


