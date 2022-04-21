// Fire this event when a visitor views a shopping cart.

dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: "view_cart",
  ecommerce: {
    currency: "USD",
    value: 25,
    items: [
      {
        quantity: 2,
        item_name: "T-Shirt",
        price: 100.0,
        item_id: "d5f1437c-ecdb-4f6f-8a75-a5219070672a",
        coupon: "MAY_DEALS_3",
        discount: 10.0,
        item_variant: "medium / black",
      },
    ],
  },
});
