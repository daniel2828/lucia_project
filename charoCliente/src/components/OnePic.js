import React from 'react'
import { Col } from 'react-bootstrap'

export const OnePic = ({ eachPic }) => {

    return (
            <Col lg={{ span: 3 }} md={{ span: 6 }}>
                <p>{eachPic.PictureName}</p>
                <img style={{width: '60%'}} src={`/images/${eachPic.PictureImg}`} alt='image-of-the-picture' />
                <p>{eachPic.PictureDescription}</p>

            </Col>

    )
}
