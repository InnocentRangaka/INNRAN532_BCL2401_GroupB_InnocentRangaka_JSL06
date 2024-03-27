// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [{name: "Garlic Bread", price: ""}, {name: "Bruschetta", price: ""}],
    MainCourses: [{name: "Margherita Pizza", price: ""}, {name: "Spaghetti Carbonara", price: ""}],
    Desserts: [{name: "Tiramisu", price: ""}, {name: "Cheesecake", price: ""}]
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
            listItem.addEventListener('click', () => addToOrder(item.name, item.price));
            
            // Append the list item to the list of items
            listElement.appendChild(listItem);
        });

        // Append the category list to the menu container
        menuContainer.appendChild(listElement);
    }

}

// Callback function for adding an item to the order
function addToOrder(itemName, itemPrice) {
    // Get the order items list and the order total element from the HTML
    const menuContainer = document.getElementById('order');

    console.log(itemName)

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
