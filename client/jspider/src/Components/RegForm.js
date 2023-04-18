import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row,Col} from "react-bootstrap"

function RegForm() {
    const text = {
        color:"white"
    }
  return (
    <Form className='bg-dark'>
        <h2 style={text}>Registration Form</h2>
    <div style={{width:"90%",textAlign:"left"}}>
    <Row>
      <Col>
      <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
        <Form.Label style={text}>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
        <Form.Label style={text}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
        <Form.Label style={text}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
        <Form.Label style={text}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
        <Form.Label style={text}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
        <Form.Label style={text}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
        <Form.Label style={text}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
        <Form.Label style={text}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
        <Form.Label style={text}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      </Col>
      
      </Row>
      <div style={{textAlign:"right"}}>
      <Button variant="primary" className='mb-5'  type="submit">
        Submit
      </Button>
      </div>
      </div>
    </Form>
  );
}

export default RegForm;