import axios from 'axios'

class PictureServices {
    constructor(){
        this.api = axios.create({
            baseURL: `http://localhost:5005/pic`
        })
    }
    getPic(){
        return this.api.get('/getAll')
    }
}

const pictureServices = new PictureServices()
export default pictureServices