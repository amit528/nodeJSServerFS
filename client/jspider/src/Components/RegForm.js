import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegForm({data}) {
    console.log(data);
    const text = {
        color:"white"
    }
  return (
    <Form className='bg-dark'>
        <h2 style={text}>Registration Form</h2>
    <div style={{width:"40%",textAlign:"left"}}>
      <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
        <Form.Label style={text}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicPassword">
        <Form.Label style={text}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      {/* <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Form.Group className="mb-3 w-50 m-auto">
        <Form.Label style={text}>Courses</Form.Label>
        <Form.Select>
        {data.map((e)=>{
          return <option>{e.name}</option>
        })}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" className='mb-5 f-right' type="submit">
        Submit
      </Button>
      </div>
    </Form>
  );
}

export default RegForm;