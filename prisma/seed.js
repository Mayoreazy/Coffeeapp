const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Clear existing data
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();

    // Create User
    const user = await prisma.user.create({
        data: {
            name: 'Michael Rodriguez',
            email: 'michael@antigravity.io',
        },
    });

    // Create Categories
    const hotCategory = await prisma.category.create({
        data: { name: 'Hot Coffee', icon: 'coffee' },
    });

    const coldCategory = await prisma.category.create({
        data: { name: 'Cold Brew', icon: 'snowflake' },
    });

    // Create Products
    await prisma.product.createMany({
        data: [
            {
                name: 'Classic Latte',
                description: 'Rich espresso with steamed milk',
                price: 4.50,
                image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=300&h=300',
                categoryId: hotCategory.id,
                isHot: true,
            },
            {
                name: 'Cappuccino',
                description: 'Double shot with foam',
                price: 3.80,
                image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?auto=format&fit=crop&q=80&w=300&h=300',
                categoryId: hotCategory.id,
                isHot: true,
            },
            {
                name: 'Cold Brew Nitro',
                description: 'Smooth nitrogen infused coffee',
                price: 4.80,
                image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?auto=format&fit=crop&q=80&w=300&h=300',
                categoryId: coldCategory.id,
                isHot: false,
            },
        ],
    });

    console.log('Seed completed!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
