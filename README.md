# Admin Dashboard

## Overview
This project is a responsive admin dashboard that integrates with a RESTful API to display user and product data. Built as a Single Page Application (SPA), it provides seamless navigation between different sections.

## Features
- **Dashboard Overview**
  - A single-page application (SPA) serving as an admin dashboard.
  - Sidebar navigation for managing Users and Products.
  
- **Data Display & Management**
  - Fetch and display a list of users from the RESTful API.
  - Display user information such as name, email, and city.
  - Option to view full details of a selected user.
  - Fetch and display a list of products from the API.
  - Add new products via a POST request.
  - Search for products using a GET request.
  - Delete a product via a DELETE request.

- **Technical Implementation**
  - Developed using **React.js**.
  - Styled using **Tailwind CSS**.
  - Fully responsive design for different screen sizes.
  - Version control using **Git**.
  - Codebase hosted on **GitHub**.
  
- **Bonus Implementations**
  - Implemented search and filtering functionalities for Users and Products.
  - User authentication with basic role-based access control.

## Technologies Used
- React.js
- Tailwind CSS
- RESTful API integration
- Git & GitHub

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd admin-dashboard
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open `http://localhost:5173/` in your browser.

## API Endpoints Used
- Fetch Users: `GET https://jsonplaceholder.typicode.com/users`
- Fetch Products: `GET https://api.restful-api.dev/objects`
- Add Product: `POST https://api.restful-api.dev/objects`
- Search Product: `GET https://api.restful-api.dev/objects/:id`
- Delete Product: `DELETE https://api.restful-api.dev/objects/:id`

## Deployment
Projet Live Link: [link](https://admin-dashboard-e1bbb.web.app/users).

## Future Enhancements
- Implement sorting functionality for Users and Products.
- Add role-based authentication for different levels of access.
- Improve UI/UX design.


## Author
Developed by [Saiful Islam].
