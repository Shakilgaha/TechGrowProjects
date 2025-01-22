import axios from "axios";

const ApiKey = "69Dv3qCKWTGpx5pY2R2bjr6nX8QxeB1mUk6XbaIq8rF4aMmuSrnFRmfv";

const Api = "https://api.pexels.com/v1/search";


export const getApi = () => {
    return axios.get(Api , {
        headers : {
            Authorization : ApiKey 
        }, 
        params : {
            query : 'nature',
            per_page : 80
            //* for fetch up to 100 img per request //* limit is 80 Image
        }

    }

    )
}



/*
//* pexels 
const Api = "https://api.pexels.com/v1/curated?page=2&per_page=100";


//*unslpesh
const Api = "https://api.unsplash.com/photos/?client_id=ZQK1bbjfMvQTYW1bzZnemDpnKupxHkOKqe9sOQba9Iw&per_page=30";


https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
*/