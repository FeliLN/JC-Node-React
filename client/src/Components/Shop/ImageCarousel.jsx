import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { Carousel } from 'react-bootstrap';


const ImageCarousel = ({item}) => {
  return (
    <div>
        <Carousel>
<Carousel.Item>
            <ReactImageMagnify style={{ marginLeft: '20px'}} {...{
                    smallImage: {
                        alt: '',
                        isFluidWidth: true,
                        src: item.Imagen1,
                        width: 10,
                        height: 1
                    },
                    largeImage: {
                        src: item.Imagen1,
                        width: 1800,
                        height: 1800
                    }
                }} />
            </Carousel.Item>
            {item.Imagen2 !== '' &&  
            <Carousel.Item>
            <ReactImageMagnify style={{ marginLeft: '20px'}} {...{
                    smallImage: {
                        alt: '',
                        isFluidWidth: true,
                        src: item.Imagen2,
                        width: 10,
                        height: 1
                    },
                    largeImage: {
                        src: item.Imagen2,
                        width: 1800,
                        height: 1800
                    }
                }} />
            </Carousel.Item>}
            {item.Imagen3 !== '' &&  
            <Carousel.Item>
            <ReactImageMagnify style={{ marginLeft: '20px'}} {...{
                    smallImage: {
                        alt: '',
                        isFluidWidth: true,
                        src: item.Imagen3,
                        width: 10,
                        height: 1
                    },
                    largeImage: {
                        src: item.Imagen3,
                        width: 1800,
                        height: 1800
                    }
                }} />
            </Carousel.Item>}
            {item.Imagen4 !== '' &&  
            <Carousel.Item>
            <ReactImageMagnify style={{ marginLeft: '20px'}} {...{
                    smallImage: {
                        alt: '',
                        isFluidWidth: true,
                        src: item.Imagen4,
                        width: 10,
                        height: 1
                    },
                    largeImage: {
                        src: item.Imagen4,
                        width: 1800,
                        height: 1800
                    }
                }} />
            </Carousel.Item>}
        </Carousel>
    </div>
  )
}

export default ImageCarousel