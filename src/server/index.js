import axios from 'axios';



const GetCards = axios.create({
    baseUrl: 'https://api.disneyapi.dev/characters'
})

export default GetCards;