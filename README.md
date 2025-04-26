# Shopper
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prerequisites
- **Runtime**: [BunJS](https://bun.sh/docs) or [NodeJS](https://nodejs.org/en)
- **Package Manager**: Bun or NPM
- **Container Managment**: Podman or Docker

## Getting Started

- Clone this repository and change directory to project directory.

- Install dependencies:

```bash
npm install
# or
bun install
```

- Run required containers:

```bash
docker compose up -d
# or
podman compose up -d
```

- Migrate database:

```bash
npx prisma migrate dev
# or
bunx prisma migrate dev
```

- Run the development server:

```bash
npm run dev
# or
bun run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

- **NextJS**: To learn more about Next.js, take a look at the following resources:
	- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
	- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- **Prisma**: To learn more about Prisma ORM, take a look at [Prisma ORM Docs](https://www.prisma.io/docs/orm)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
