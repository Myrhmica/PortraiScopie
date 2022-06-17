const fetchData = async () => {
    try {
        const data = await fetch("https://portraiscopie-dev.herokuapp.com/api/technicals/")
        const response = data.json()
        return response 
    } catch(err) {
        console.error(err);
    } 
}

export default fetchData;