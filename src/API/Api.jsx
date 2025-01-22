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
            per_page : 50
            //* for fetch up to 100 img per request //* limit is 80 Image
        }

    }

    )
}



