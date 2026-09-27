# Online Shop

A responsive online store built with React, TypeScript, and Vite. Products are loaded from the Noroff Online Shop API, and users can search, sort, view product details, manage a shopping cart, complete a simulated checkout, and submit a validated contact form.

## Live Site

[Open the deployed shop](https://halanhub.github.io/Hampus_Lang_JSF_JAN25FT/)

The deployed application uses hash-based routes so navigation works correctly on GitHub Pages.

## Features

- Product list loaded from the Noroff API
- Product search with matching links
- Sorting by price or rating
- Individual product pages with images, prices, tags, and reviews
- Discounted and original price display
- Shopping cart with quantity controls, removal, and total price
- Simulated checkout with a success page
- Contact form with client-side validation
- About, terms, privacy, and not-found pages
- Responsive layout for desktop and mobile screens

## Technology

- React
- TypeScript
- React Router
- Vite
- CSS
- Noroff Online Shop API
- GitHub Actions and GitHub Pages

## Run Locally

### Requirements

- Node.js 22.12 or newer
- npm
- An internet connection to load products from the API

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/halanhub/Hampus_Lang_JSF_JAN25FT.git
   ```

2. Enter the project directory:

   ```bash
   cd Hampus_Lang_JSF_JAN25FT
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local address shown in the terminal, normally `http://localhost:5173/`.

## How to Test the Application

1. On the home page, wait for the product list to load.
2. Search for a product or use the menu to sort products by price or rating.
3. Select a product to view its details and reviews.
4. Select **Add to Cart**.
5. Open the cart from the header.
6. Increase or decrease quantities, remove an item, and confirm that the total changes.
7. Select **Checkout** to open the order confirmation page and clear the cart.
8. Open the contact page and test its validation rules.

The contact form requires:

- A full name containing at least 3 characters
- A subject containing at least 3 characters
- A valid email address
- A message containing at least 10 characters

Checkout and contact submission are demonstrations only. No payment is processed and no message is sent to a server. Cart state is stored in React state and resets when the page is refreshed.

## Available Commands

```bash
npm run dev      # Start the local development server
npm run build    # Type-check and create a production build
npm run preview  # Preview the production build locally
```

The production files are generated in `dist/`.

## Project Structure

```text
src/
|-- components/   Reusable header, footer, search, hero, and product cards
|-- context/      Shopping cart state and actions
|-- pages/        Route-level pages
|-- services/     Noroff API requests
|-- styles/       Global styling
|-- types/        TypeScript data types
|-- App.tsx       Application routes
`-- main.tsx      React entry point and providers
```

## API

Product data comes from the Noroff Online Shop API:

```text
https://v2.api.noroff.dev/online-shop
```

The application fetches the complete product list for the home page and fetches individual products by ID for product pages.

## Deployment

Pushing to the `main` branch triggers the workflow in `.github/workflows/deploy.yml`. The workflow installs dependencies, builds the application, uploads the `dist/` directory, and deploys it to GitHub Pages.

In the GitHub repository settings, **Settings > Pages > Build and deployment > Source** must be set to **GitHub Actions**.
