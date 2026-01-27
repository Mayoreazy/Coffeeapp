# Brew & Bean - Mobile Coffee Application

A premium mobile-first coffee ordering application built with Next.js, Tailwind CSS, and Prisma.

## Features
- **Mobile Frame Layout**: Mimics a high-end mobile device experience.
- **Hierarchical Menu**: Categorized menu system (Hot Coffee, Cold Brew, Pastries, etc.).
- **Real-time Order Tracking**: Interactive progress bar and courier tracking simulation.
- **Thermal Efficiency Logistics**: Integrated thermal guarantee indicators.
- **SMTP Email Confirmation**: Automated confirmation emails sent upon order placement.
- **PostgreSQL Database**: Persistent storage for products, users, and orders.
- **Authentication**: Secure sign-in using NextAuth.js.

## Getting Started

### 1. Requirements
- Node.js 18+
- PostgreSQL database

### 2. Installation
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file (copied from `.env.template` or provided) and fill in your details:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/coffee_db"
SMTP_HOST="smtp.your-provider.com"
SMTP_PORT=587
SMTP_USER="your-email"
SMTP_PASS="your-password"
NEXTAUTH_SECRET="your-secret"
```

### 4. Database Setup
```bash
npx prisma generate
npx prisma db push
npm run seed # To populate initial categories and products
```

### 5. Run the App
```bash
npm run dev
```

## Architecture
- **Layer 1: Discovery**: Main menu and search.
- **Layer 2: Customization**: Product detail and add-ons overlay.
- **Layer 3: Transaction**: Checkout and payment.
- **Layer 4: Fulfillment**: Order tracking and status updates.

## Technical Stack
- **Frontend**: Next.js 15 (App Router), Tailwind CSS 4, Lucide React.
- **Backend**: Next.js API Routes, Prisma ORM, Nodemailer (SMTP).
- **Authentication**: NextAuth.js.
