# eCommerce Project

## Overview

This is an eCommerce project built with React for the front end, Strapi for the backend, and Stripe for payment processing. The application allows users to browse products, add items to their cart, and complete the checkout process using Stripe.

## Installation

```bash
git clone https://github.com/your-username/ecommerce-project.git
cd ecommerce-project
npm install

# Start the Strapi backend server
cd backend
npm start

# Start the React frontend
cd ../frontend
npm start

The Strapi server will be running on http://localhost:1337, and the React app will be accessible at http://localhost:3000.

Configure Stripe by creating an account and obtaining API keys. Update the Stripe configuration in the frontend code.

Explore the application by navigating to http://localhost:3000 in your browser.