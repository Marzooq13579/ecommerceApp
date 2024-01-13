# eCommerce Project

## Overview

This is an eCommerce project built with React for the front end, Strapi for the backend, and Stripe for payment processing. The application allows users to browse products, add items to their cart, and complete the checkout process using Stripe.

## Installation

```bash
git clone https://github.com/your-username/ecommerce-project.git
cd ecommerce-project

# Start the Strapi backend server
cd backend
npm install
npm run develop

# Start the React frontend
cd ../frontend
npm install
npm run dev
```

The Strapi server will be running on http://localhost:1337, and the React app will be accessible at http://localhost:5173.

Configure Stripe by creating an account and obtaining API keys. Update the Stripe configuration in the frontend code.

Explore the application by navigating to http://localhost:5173 in your browser.
