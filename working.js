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

// Search Bar Functionality
document.querySelector('.search-bar button').addEventListener('click', () => {
    const searchInput = document.querySelector('.search-bar input').value.toLowerCase().trim();
    const products = document.querySelectorAll('.product');
    let found = false;

    products.forEach((product) => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = 'block';
            found = true;
        } else {
            product.style.display = 'none';
        }
    });

    if (!found) {
        alert('No products found matching your search.');
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

// Sticky Header Functionality
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
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

// Back to Top Button Functionality
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑ Top';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});