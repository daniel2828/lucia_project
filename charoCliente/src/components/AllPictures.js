import React, { useEffect, useState } from 'react'
import pictureServices from '../services/pic.services'
import { ListPic } from './ListPic'


export const AllPictures = () => {

    const [pic, setPic] = useState([])

    const getAllPictures = () => {

        pictureServices
            .getPic()
            .then(({ data }) => setPic(data))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        getAllPictures()
    }, [])

    return (
        <div className='galleryPage'>
            <ListPic pic={pic} />
        </div>

    )
}
