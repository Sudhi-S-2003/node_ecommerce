import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function form({ formData, handleChange, handleSubmit,update}) {
  return (
    <Form className="mt-5 m-auto p-4" style={{ maxWidth: '400px', backgroundColor: 'aqua' }} onSubmit={handleSubmit} encType='multipart/form-data'>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name of Product</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Product Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPrice">
      <Form.Label>Price</Form.Label>
      <Form.Control
        type="number"
        placeholder="Enter Product Price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
        min={1}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicQuantity">
      <Form.Label>Quantity</Form.Label>
      <Form.Control
        type="number"
        placeholder="Enter Product Quantity"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        min={1}
        required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicDescription">
      <Form.Label>Description</Form.Label>
     
      <Form.Control
        type="text" as="textarea"
        placeholder="Enter Product Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
   
    </Form.Group>
    {!update &&
        <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          name="image"
          onChange={handleChange}
        />
      </Form.Group>
      }
        
    <Button variant="primary" type="submit">
      {update ? "Update  " : "Add  "} Product
    </Button>
  </Form>
  )
}

export default form