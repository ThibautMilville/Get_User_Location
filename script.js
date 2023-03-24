const button = document.querySelector("button")

button.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(position => {
        // Getting latitude and longitude from position obj
        const{latitude, longitude} = position.coords
        // Getting location of passed coordinates using geocoding API
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        fetch(url).then(res => res.json()).then(data => {
            console.table(data.address)
        }).catch(() => {
            console.log("Error fetching data from API")
        })
    })
})