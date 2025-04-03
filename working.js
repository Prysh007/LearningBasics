// Dropdown Menu Functionality
document.querySelectorAll('.nav li').forEach((menuItem) => {
    menuItem.addEventListener('mouseenter', () => {
        const dropdown = menuItem.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'block';
        }
    });

    menuItem.addEventListener('mouseleave', () => {
        const dropdown = menuItem.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    });
});

// Enhanced Search Bar Functionality with Dropdown
const searchInput = document.querySelector('.search-bar input');
const searchDropdown = document.querySelector('.search-dropdown');
const products = document.querySelectorAll('.product');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    searchDropdown.innerHTML = ''; // Clear previous results

    if (query) {
        let matches = 0;
        products.forEach((product) => {
            const productName = product.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(query)) {
                const listItem = document.createElement('li');
                listItem.textContent = product.querySelector('h3').textContent;
                listItem.addEventListener('click', () => {
                    searchInput.value = listItem.textContent;
                    searchDropdown.style.display = 'none';
                    product.scrollIntoView({ behavior: 'smooth' });
                });
                searchDropdown.appendChild(listItem);
                matches++;
            }
        });

        searchDropdown.style.display = matches > 0 ? 'block' : 'none';
    } else {
        searchDropdown.style.display = 'none';
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-bar')) {
        searchDropdown.style.display = 'none';
    }
});

// Add to Cart Functionality
let cartCount = 0;
document.querySelectorAll('.product button').forEach((button) => {
    button.addEventListener('click', () => {
        cartCount++;
        const cartElement = document.querySelector('.account-cart a:last-child');
        if (cartElement) {
            cartElement.textContent = `🛒 Cart (${cartCount})`;
        }
        alert('Product added to cart!');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        const targetId = e.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});