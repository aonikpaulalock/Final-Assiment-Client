import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements();
  const [cardError, setCardError] = useState("")
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });
    setCardError(error?.message || '')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className='bg-secondary px-12 py-2 rounded-full text-white font-bold mt-6' disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        cardError && <h5 className='font-medium text-red-500 mt-2'>{cardError}</h5>
      }
    </div>
  );
};

export default CheckoutForm;