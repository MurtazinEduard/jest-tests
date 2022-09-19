const axios = require('axios')
const mapArrToStrings = require('../arr2str/mapArrToStrings')
const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const userIds = response.data.map(item => item.id)
        return mapArrToStrings(userIds)
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = getData