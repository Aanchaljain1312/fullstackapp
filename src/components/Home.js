import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from '../images/shopping.jpeg'
import img2 from '../images/shopping.svg'
import car1 from '../images/carousal1.jpg'
import car2 from '../images/car2.jpg'
import car3 from '../images/carousel2.jpg'
import { Card,Button } from 'react-bootstrap'
import Chatbot from './ChatBot'

function Home() {
  return (
    <div>
      
    <Chatbot/>
      {/* imags from pexels website */}
      <Carousel style={{
        background: 'linear-gradient(to bottom right, #ffffff, #e0e0e0, #f0f0f0)'
      }}>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <Carousel.Caption className='my-auto'>
            <h3>Shopping hub</h3>
          </Carousel.Caption>
          <img
            className="d-block mx-auto w-100"
            src={car1}
            alt="First slide"
            style={{ height: '400px' }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={car2}
            alt="First slide"
            style={{ maxHeight: '400px' }}
          />
          <Carousel.Caption >
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={car3}
            alt="First slide"
            style={{ height: '400px' }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h2 style={{ textAlign: 'center', fontWeight: 'bolder' }}>Shopping hub</h2>
      <p style={{ textAlign: 'center', margin: '25px' }}>Lorem ndis repudiandae iusto fuga quas veritatis quod neque doloribus, exercitationem et quo a rerum quibusdam, illo fugit architecto aliquam iste ullam obcaecati! Nostrum mollitia perspiciatis adipisci, quasi maiores architecto atque quos ea laboriosam similique pariatur dignissimos impedit dolores. Recusandae id in eveniet nobis nulla provident voluptate. Saepe odio tempora alias, dolore veritatis eligendi reprehenderit laborum ea. Voluptates necessitatibus maiores tempora ut veniam tenetur aliquid! Neque labore quos eaque numquam,</p>
      
      
      <div className='py-2' style={{ display: 'flex', flexWrap: 'nowrap',gap: '20px',   overflowX: 'scroll', scrollbarWidth: 'none' ,backgroundColor: '#eee'} } >
      <Card style={{ width: '18rem' ,flexShrink: 0}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',flexShrink: 0 }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',flexShrink: 0 }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',flexShrink: 0 }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',flexShrink: 0  }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' ,flexShrink: 0}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' ,flexShrink: 0}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    </div>
      </div>
  )
}

export default Home
