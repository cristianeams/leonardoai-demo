# Leonardo.Ai Web Team Technical Challenge

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`.

This project uses next/font to automatically optimize and load Inter, a custom Google Font.
```

## GraphQL and Code Generation
This project utilizes GraphQL for data fetching. Run the following command to generate types based on your GraphQL schema:

```bash
npm run codegen
# or
yarn codegen
# or
pnpm codegen
# or
bun codegen
```

# Welcome Modal and User Information

The project features a welcome modal designed to guide users through setting up their profile with two slides.

## Username Slide

1. **Description:**
   On the first modal slide, users can set their desired username.

2. **User Input:**
   Users are prompted to input their desired username.

## Job Title Slide

1. **Description:**
   On the second modal slide, users can input their job title.

2. **User Input:**
   Users are prompted to input their job title.

# Information Page

Access the Information Page once you have set your user information.

The Information Page fetches and displays data from a public GraphQL API available at [api.react-finland.fi/graphql](https://api.react-finland.fi/graphql) representing the list of React conferences in Finland.

Explore content presented on the Information Page, which is designed to be mobile and tablet compatible.

## Features

1. **GraphQL API Data:**
   The page showcases data retrieved from the GraphQL API, providing valuable information.

2. **Interactive Items:**
   Clicking on an item within the Information Page opens a modal, presenting detailed information about that specific item.
   

