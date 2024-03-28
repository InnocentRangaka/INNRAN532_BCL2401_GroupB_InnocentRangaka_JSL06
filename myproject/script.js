// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [{name: "Garlic Bread", price: 10.99}, {name: "Bruschetta", price: 40.00}],
    MainCourses: [{name: "Margherita Pizza", price: 139.45}, {name: "Spaghetti Carbonara", price: 15.00}],
    Desserts: [{name: "Tiramisu", price: 30.00}, {name: "Cheesecake", price: 99.99}]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');

    // Loop through each category and its items in the menu object

    for (const [category, items] of Object.entries(menu)) {
         // Create an element to represent the category
         // Create an element to represent a list of items
        const [categoryElement, listElement] = ['h3', 'ul'].map(element => document.createElement(element));

        // Set the text content of the category element to the category name
        categoryElement.textContent = category;

        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);
        
        items.map(item => {
            // Create a list item element
            const listItem = document.createElement("li");

            // Set the text content of the list item element to the item name
            listItem.textContent = item.name;

            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener('click', () => addToOrder(item));
            
            // Append the list item to the list of items
            listElement.appendChild(listItem);
        });

        // Append the category list to the menu container
        menuContainer.appendChild(listElement);
    }
            
}

// Callback function for adding an item to the order
function addToOrder(item) {
    // Get the order items list and the order total element from the HTML
    const [orderListContainer, orderTotal] = ['order-items', 'order-total'].map(id => document.getElementById(id));

    // Create a list item for the order
    const orderItem = document.createElement('li');

    // Set the text content of the list item to the item name
    orderItem.textContent = item.name;

    // Attach a click event listener to the list item to add it to the order
    orderItem.addEventListener('click', () => {
        minusFromOrder(item.price);
        orderItem.remove();
    });

    // Append the list item to the order items list
    orderListContainer.appendChild(orderItem);

    // Calculate and update the total price
    const total = (parseFloat(orderTotal.textContent) + parseFloat(item.price)).toFixed(2);

    // Update the text content of the order total element with the new total
    orderTotal.textContent = total;
}

// Callback function for removing an item from the order
function minusFromOrder(price) {
    // Get the order items list and the order total element from the HTML
    const [orderTotal] = ['order-total'].map(id => document.getElementById(id));

    // Calculate and update the total price
    const total = (parseFloat(orderTotal.textContent) - parseFloat(price)).toFixed(2);

    // Update the text content of the order total element with the new total
    orderTotal.textContent = total;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
