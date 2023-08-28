# CRUD Operations in React

This repository contains a simple implementation of CRUD (Create, Read, Update, Delete) operations using React. CRUD operations are fundamental to many applications, allowing users to manage data by creating, reading, updating, and deleting records.

## Installation

1. **Clone** this repository to your local machine using:

   ```bash
   git clone https://github.com/your-username/react-crud-demo.git
    ```
# Navigate to the project directory:
   ``` bash
cd react-crud-demo
  ```

# Install the required dependencies:

```bash
npm install
```
# Usage
1 - Start the development server:
 ```bash
npm start
```
2 - Open your browser and navigate to http://localhost:3000 to view the application.

3 - The application will display a list of items fetched from the mock API. You can perform the following operations:

- Create: Click the "Add Item" button, fill in the details, and click "Save" to add a new item to the list.
- Read: View the list of items on the main page.
- Update: Click the "Edit" button next to an item, modify the details, and click "Save" to update the item.
- Delete: Click the "Delete" button next to an item to remove it from the list.
# Project Structure
The project is structured as follows:
src/
- components/: Contains React components used in the application.
- ItemList.js: Displays the list of items and handles delete and edit actions.
- ItemForm.js: Provides a form for creating/editing items.
- data/: Contains a mock API and sample data for demonstration purposes.
- api.js: Simulates API calls for fetching, creating, updating, and deleting items.
- items.js: Contains an array of sample items.
- App.js: The main component that holds the application's layout and handles state.
