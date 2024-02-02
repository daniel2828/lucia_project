import React from 'react'
import { OnePic } from './OnePic'
import { Row } from 'react-bootstrap'

export const ListPic = ({ pic }) => {
    console.log('whdcvwegfvcbwljaedbx que lleeegaaaaa', pic)
    return (
        !pic ?
            <h1>Cargando..</h1>
            :
            <>
                <Row>
                    {
                        pic.map(eachPic => (<OnePic eachPic={eachPic} />))
                    }
                </Row>
            </>

    )
}
