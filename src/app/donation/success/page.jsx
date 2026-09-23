import { redirect } from 'next/navigation'


import Successful from './Successful'
import { stripe } from '@/lib/stripe'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { payment } from '@/lib/payment'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams
   const userSession = await auth.api.getSession({
    headers: await headers()
  });
  
  const user = userSession?.user;
  const userName = user?.name
  const userEmail = user?.email

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
     metadata,
    customer_details: { email: customerEmail }
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })


  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    await payment({...metadata, sessionId: session_id, userName, userEmail   })
    return (
      <section id="success">
        <Successful />
      </section>
    )
  }
}