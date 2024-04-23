const productsList = [
    {
        id: 1,
        title: "Lemonade - 1ltr",
        price: 100,
    },
    {
        id: 2,
        title: "Lemonade - 2ltr",
        price: 200,
    },
    {
        id: 3,
        title: "Lemonade - 3ltr",
        price: 300,
    },
];

const productsContainer = document.querySelector('#products');
const cartContainer = document.querySelector('#cart');

const cartItems = [];
function renderCart(productsList) {
    const productTitle = productsList.title;
    const el = document.createElement('h3');
    el.textContent = productTitle;
    cartContainer.append(el);
}

const cartJson = localStorage.getItem('cart');
if (cartJson) {
    const initialItems = JSON.parse(cartJson);
    // in order to change that into string, we use JSON.stringify()
    // in order to get the raw data, we use JSON.parse()
    for (let i = 0; i < initialItems.length; i++) {
        cartItems.push(initialItems[i]);
        renderCart(initialItems[i]);
    }
}

productsList.forEach((product) => {
    const productDiv = document.createElement('div');

    productDiv.innerHTML = `
        <h1>${product.title}</h1>
        <p>${product.price}</p>
    `;

    const button = document.createElement('button');
    button.textContent = "Add to Cart";
    productDiv.appendChild(button);
    
    productsContainer.append(productDiv);

    button.addEventListener('click', () => {
        cartItems.push(product);
        renderCart(product);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        // localStorage.setItem(string, string)
        // 2nd parameter is an object
        // in order to change that into string, we use JSON.stringify()
    });
});