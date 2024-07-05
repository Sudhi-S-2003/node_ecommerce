function displayProducts() {
    fetch('http://localhost:8000/api/products')
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error fetching products:', error));
}

function displayData(products) {
    const productContainer = document.getElementById('productcontainer');
    products.forEach(product => {
        productContainer.insertAdjacentHTML('beforeend', `
            <div class="col-md-3 col-sm-6 mb-3">
                <div class="container">
                    <div class="card text-center border-2 border-warning" style="max-width: 300px; height:375px">
                        <div class="card-body">
                            <img src="http://localhost:8000/${product.image}" alt="${product.name}" class="card-img-top" style="height:150px">
                            <h2 class="card-title">${product.name}</h2>
                            <p class="card-text">${product.description}<br>
                                <a href="#" class="fw-light text-decoration-none"><span>Price: ${product.price}</span></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});
