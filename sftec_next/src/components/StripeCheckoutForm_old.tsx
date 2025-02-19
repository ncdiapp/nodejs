"use client"; // Ensure this is a client-side component

import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const StripeCheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setError('Stripe has not loaded yet.');
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { paymentMethod, error: paymentError } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement!,
    });

    if (paymentError) {
      setError(paymentError.message || 'An unknown error occurred.');
      setLoading(false);
    } else {
      // Send the paymentMethod.id to your server for further processing (e.g., create a PaymentIntent)
      //console.log(paymentMethod);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default StripeCheckoutForm;
