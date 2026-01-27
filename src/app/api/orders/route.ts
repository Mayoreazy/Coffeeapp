import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendOrderConfirmation } from '@/lib/email';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { userId, items, total, address } = body;

        // 1. Create Order in Database
        const order = await prisma.order.create({
            data: {
                userId,
                total,
                address,
                status: 'BREWING',
                eta: '8-12 minutes',
                items: {
                    create: items.map((item: any) => ({
                        productId: item.productId,
                        quantity: item.quantity,
                        price: item.price,
                    })),
                },
            },
            include: {
                user: true,
            }
        });

        // 2. Trigger Email Confirmation
        if (order.user?.email) {
            await sendOrderConfirmation(order.user.email, {
                id: order.id,
                itemName: items[0]?.name || 'Coffee Selection',
                total: order.total,
                eta: order.eta,
            });
        }

        // 3. (Optional) Trigger Pusher/Real-time update here if configured

        return NextResponse.json({ success: true, order });
    } catch (error) {
        console.error('Order Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to place order' }, { status: 500 });
    }
}
