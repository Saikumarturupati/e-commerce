const productsContainer = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.className = "product";
      
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <a href="fake0.html" onclick="viewProduct(${product.id})">View Details</a>
        <a href = "cart"/>
        <p onclick = "cart" > + add cart - </p>
      <a href = "login.html"></a>
      `;
      productsContainer.appendChild(productElement);
      
    });
  });

function viewProduct(id) {
  localStorage.setItem("selectedProductId", id);
   
}




