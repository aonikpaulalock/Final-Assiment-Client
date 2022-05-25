import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';

const CheckoutForm = ({ orders }) => {
  const stripe = useStripe()
  const elements = useElements();
  const [success, setSuccess] = useState('');
  const [cardError, setCardError] = useState("")
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [processing, setProcessing] = useState(false);
  const { _id, price, email, name } = orders;
  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ price })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });

  }, [price])

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
    setSuccess('');
    setProcessing(true);
    // Confirm card
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email
          },
        },
      },
    );
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    }
    else {
      setCardError('');
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      setSuccess('Congrats! Your payment is completed.')

      // Send Database
      const payment = {
        order: _id,
        transactionId: paymentIntent.id
      }
      fetch(`http://localhost:5000/orders/${_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
      })
      .then(res => res.json())
        .then(data => {
          setProcessing(false);
          console.log(data);
        })


    }


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
        <button type="submit" className='bg-secondary px-12 py-2 rounded-full text-white font-bold mt-6 mb-4' disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {
        cardError && <h5 className='font-medium text-red-500 mt-2'>{cardError}</h5>
      }
      {
        success &&
        <div className="">
          <p className='text-green-500 font-medium pb-2'>{success}  </p>
          <p className='text-accent font-medium'>Your transaction id <span className="text-orange-300 font-bold"> {transactionId}</span> </p>
        </div>
      }
    </div>
  );
};

export default CheckoutForm;