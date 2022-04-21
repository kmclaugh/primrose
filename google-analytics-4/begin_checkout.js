// Fire this event whenever an order/transaction is started.

dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: "begin_checkout",
  ecommerce: {
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
