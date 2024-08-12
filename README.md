## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Second, run the production server:

```bash
1. Build
npm run build
# or
yarn build

2. Start
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Additional, test with jest:

```bash
npm run test
# or
yarn test
```

The testing result of current app:

```bash
$ jest
 PASS  src/components/__tests__/Footer.test.tsx
 PASS  src/components/__tests__/Header.test.tsx     
 PASS  src/components/__tests__/ProductCard.test.tsx

Test Suites: 3 passed, 3 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        2.348 s
Ran all test suites.
Done in 3.82s.
```

## Completed

1. Use the latest version of Next.js to create a new project. Set up Tailwind CSS for styling.

2. Fetch product data from the provided JSON API endpoint on the server side (you can use a service like My JSON Server or JSONPlaceholder to host your JSON data). Each page should contain SEO metadata.

3. The code should written in Typescript and should be Type saved. 

4. Create a product listing page that displays the fetched product data in a grid layout. Each product card should include:
    ○ Product image
    ○ Product name
    ○ Product description (truncate to 100 characters)
    ○ Price (formatted with currency)
    ○ Rating (display using stars or a numerical value)

5. Implement infinite scroll for the product listing.  Limit the initial page to display only 10 products, and load more as the user interacts with the page.

6. Add a search bar to filter products by title. The search should be case-insensitive and update the product listing in real-time as the user types.

7. Implement sorting functionality for the products (e.g., by price or rating).

8. Add the ability to add products to a shopping cart and display the total number of items and the total price in a fixed header.

9. Set up Redux for state management.

10. Create a simple responsive design for the product listing page using Tailwind CSS.

11. Write clean, modular, and maintainable code.

Bonus Points:
1. Write tests for the application using a testing library such as Jest and React Testing Library
