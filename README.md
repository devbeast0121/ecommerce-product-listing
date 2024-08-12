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