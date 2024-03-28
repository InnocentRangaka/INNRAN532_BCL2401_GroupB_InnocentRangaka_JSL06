// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
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
            listItem.textContent = item;

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
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const [orderListContainer, orderTotal] = ['order-items', 'order-total'].map(id => document.getElementById(id));

    // Create a list item for the order
    const orderItem = document.createElement('li');

    // Set the text content of the list item to the item name
    orderItem.textContent = itemName;

    // Append the list item to the order items list
    orderListContainer.appendChild(orderItem);

    // Calculate and update the total price

    function IndexedDetails(params) {
        return Object.entries(params).map(([key, value], index) => {
            // Here, 'key' is the property name, 'value' is the property value, and 'index' is the current index
            return {
              name: key,
              type: value,
              position: index + 1 // Adjust for 1-based indexing (optional)
            };
        });
    }

    // Define a variable to store the calculated price
    let price;
    
    // Call the IndexedDetails function (assuming it retrieves menu details)
    // and iterate over the returned details using map
    IndexedDetails(menu).map((info, i) => {
        // Inside the first map, iterate over each item type within the current 'info' object
        info.type.map(indexedName => {
            // Check if the current item type matches the itemName
            if(indexedName == itemName){
                // Calculate a position-based value (presumably for pricing)
                const makeNumber = (info.position >= 1)? (parseFloat(info.position) + 1) : info.position;
                
                // Calculate a base price based on the makeNumber
                const makePrice = (info.position >= 1)? (9.99 * makeNumber) : 9.99;

                // Calculate the final price considering quantity and type index
                price = (parseFloat(makePrice) * makeNumber) + (parseFloat(makePrice) * info.type.indexOf(itemName))
            }
        });
    });

    // Calculate the total by adding the newly calculated price to the existing order total and format it to two decimal places
    const total = (parseFloat(orderTotal.textContent) + price).toFixed(2);

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
