import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

let Sunrise = {
  updateQuantity(line, qty) {
    fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ quantity: qty, line: line }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.dispatchEvent(new Event('cart-updated'));
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  },
};

window.Sunrise = Sunrise;
