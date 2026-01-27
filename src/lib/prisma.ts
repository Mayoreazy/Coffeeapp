import { PrismaClient } from '@prisma/client';

const mockPrisma = new Proxy({} as any, {
    get: (target, prop) => {
        if (prop === 'user') {
            return {
                findUnique: async () => ({ id: '1', name: 'Michael Rodriguez', email: 'michael@antigravity.io' })
            };
        }
        return () => ({});
    }
});

let prisma: PrismaClient = mockPrisma;

try {
    const globalForPrisma = global as unknown as { prisma: PrismaClient };
    if (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('[YOUR-PASSWORD]')) {
        prisma =
            globalForPrisma.prisma ||
            new PrismaClient({
                log: ['query'],
            });
        if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
    } else {
        console.warn("Prisma: Invalid DATABASE_URL, using mock client for demo.");
    }
} catch (error) {
    console.error("Prisma initialization error:", error);
}

export { prisma };
