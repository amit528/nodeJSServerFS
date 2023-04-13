import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel slide={false}>
      <Carousel.Item  >
        <img
          className=" w-100 h-20"
          // style={{width:"100vw",height:"90vh"}}
          src="https://scontent-tir2-2.xx.fbcdn.net/v/t1.6435-9/70687783_1278422165653157_3143815322214072320_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=HWYoeU5lAQ0AX8Mpgve&_nc_ht=scontent-tir2-2.xx&oh=00_AfAV3gYsWh37eNRUytowx6AuPRB6aI0TWyIbumr6jwghxw&oe=645FAB36"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 h-50"
          // style={{width:"100vw",height:"90vh"}}
          src="https://pbs.twimg.com/media/ES0CeiJUcAENTF-.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          // style={{width:"100vw",height:"90vh"}}
          src="https://pbs.twimg.com/media/ES0CeiJUcAENTF-.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;