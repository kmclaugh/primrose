// Fire this event whenever an order/transaction was successfully completed by the customer.

dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: "purchase",
  user_id: "e20acb7e-262c-4a2f-8ed6-b7f9d40761b5", // customer id
  ecommerce: {
    value: 180.0,
    coupon: "PREPAID100",
    tax: 1.1,
    shipping: 0.0,
    currency: "USD",
    transaction_id: "61729619-9840-47f5-be12-1dd5af26fdf3",
    items: [
      {
        item_id: "d5f1437c-ecdb-4f6f-8a75-a5219070672a",
        price: 100.0,
        quantity: 2,
        item_name: "T-Shirt",
        coupon: "MAY_DEALS_3",
        item_variant: "medium / black",
        discount: 10.0,
      },
    ],
  },
});
