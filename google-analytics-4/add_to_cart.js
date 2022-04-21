// Fire this event when a visitor adds a product to their shopping cart.

dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: "add_to_cart",
  ecommerce: {
    items: [
      {
        item_id: "d5f1437c-ecdb-4f6f-8a75-a5219070672a",
        price: 100.0,
        quantity: 2,
        item_name: "T-Shirt",
        item_variant: "medium / black",
      },
    ],
  },
});
