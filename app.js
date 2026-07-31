const studentInfo = document.getElementById('studentInfo');
studentInfo.textContent = 'Vrushil Panchal | Roll No. 200628377';

class Pizza {
  constructor(name, size, crust, sauce, cheese, toppings, instructions) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
    this.instructions = instructions;
  }

  getSummary() {
    return `${this.name}, your ${this.size} pizza has ${this.crust} crust, ${this.sauce} sauce, ${this.cheese} cheese, and toppings: ${this.toppings.join(', ')}. Special instructions: ${this.instructions || 'None'}.`;
  }
}
const form = document.getElementById('pizzaForm');
const output = document.getElementById('output');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const size = document.getElementById('size').value;
  const crust = document.getElementById('crust').value;
  const sauce = document.getElementById('sauce').value;
  const cheese = document.querySelector('input[name="cheese"]:checked');
  const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(item => item.value);
  const instructions = document.getElementById('instructions').value.trim();

  if (name === '' || size === '' || crust === '' || sauce === '' || !cheese || toppings.length < 2) {
    output.innerHTML = '<p>Please fill all fields and choose at least 2 toppings.</p>';
    return;
  }

  const pizza = new Pizza(name, size, crust, sauce, cheese.value, toppings, instructions);
  output.innerHTML = `<p>${pizza.getSummary()}</p>`;
});