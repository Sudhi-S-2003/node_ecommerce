function createProduct(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const form = document.querySelector('#productForm');
    const formData = new FormData(form);

    console.log(formData); 
    //  fetch
    fetch('http://localhost:3000/api/product', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        form.reset(); // Clear the form fields
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

const form = document.querySelector('#productForm');
form.addEventListener('submit', createProduct);






























////use JSON.stringify()


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Create Product</title>
//     <!-- Include Bootstrap CSS for styling (optional) -->
//     <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
// </head>
// <body>
//     <div class="container">
//         <h2>Create Product</h2>
//         <form id="productForm">
//             <div class="form-group">
//                 <label for="name">Name:</label>
//                 <input type="text" class="form-control" id="name" name="name" required>
//             </div>
//             <div class="form-group">
//                 <label for="description">Description:</label>
//                 <input type="text" class="form-control" id="description" name="description" required>
//             </div>
//             <div class="form-group">
//                 <label for="price">Price:</label>
//                 <input type="number" class="form-control" id="price" name="price" required>
//             </div>
//             <div class="form-group">
//                 <label for="image">Image URL:</label>
//                 <input type="text" class="form-control" id="image" name="image">
//             </div>
//             <button type="submit" class="btn btn-primary">Create Product</button>
//         </form>
//     </div>

//     <script>
//         document.getElementById('productForm').addEventListener('submit', function(event) {
//             event.preventDefault();

//             const product = {
//                 name: document.getElementById('name').value,
//                 description: document.getElementById('description').value,
//                 price: document.getElementById('price').value,
//                 image: document.getElementById('image').value
//             };

//             fetch('http://localhost:3000/api/product', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(product)
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Product created:', data);
//                 // Optionally clear the form fields
//                 document.getElementById('productForm').reset();
//                 // Optionally display a success message
//                 alert('Product created successfully!');
//             })
//             .catch(error => console.error('Error creating product:', error));
//         });
//     </script>
// </body>
// </html>
