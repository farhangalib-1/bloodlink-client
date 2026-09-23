import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'
import { auth } from '@/lib/auth'

export async function POST() {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')
    const userSession = await auth.api.getSession({
  headers: await headers()
});

    const user = userSession?.user;
    const PRICE_ID = 'price_1U7ugWEXitkjlCGEbyC45mSw'
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: PRICE_ID, 
          quantity: 1,
        },
      ],
      metadata:{
        priceId: PRICE_ID,
        userName: user.name,
        userId: user.id,
        userEmail: user.email,
        createAt: new Date().toLocaleString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
})
        
      },
      mode: 'subscription',
      success_url: `${origin}/donation/success?session_id={CHECKOUT_SESSION_ID}`,

    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}