const productDetailsContainer = document.getElementById("product-details");

const productId = localStorage.getItem("selectedProductId");

if (productId) {
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => res.json())
    .then((product) => {
      productDetailsContainer.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Price:</strong> $${product.price}</p>
      `;
    });
} else {
  productDetailsContainer.innerHTML = `<p>No product selected.</p>`;
}
