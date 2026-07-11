# Sales Dashboard

This is a simple sales dashboard built with Next.js 15, TypeScript, Tailwind CSS, and Recharts. The application displays sales data for 2022, 2023, and 2024. Users can filter the data by a minimum sales value and switch between different chart types.

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Recharts

## Features

- Display sales data for 2022, 2023, and 2024
- Filter sales using a minimum threshold
- Switch between Bar, Line, and Pie charts
- Fetch data from a Next.js API route
- Responsive layout

## Project Structure

```text
src
├── app
│   ├── api
│   ├── dashboard
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── atoms
│   ├── molecules
│   ├── organisms
│   └── templates
│
├── lib
│   └── data
│
└── types
```

## Getting Started

Clone the repository.

```bash
git clone https://github.com/your-username/sales-dashboard.git
```

Go to the project folder.

```bash
cd sales-dashboard
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## API

The application fetches sales data from the following API route.

```text
/api/sales
```

The API returns mock sales data for 2022, 2023, and 2024.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Notes

This project was created as part of a front-end training assignment. It follows an Atomic Design component structure and uses mock sales data served through a Next.js API route.

## Author

Jubaid Islam

