// Fire this event when a visitor views a product list or category.

dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: "view_item_list",
  ecommerce: {
    items: [
      {
        item_name: "T-Shirt",
        price: 100.0,
        item_id: "d5f1437c-ecdb-4f6f-8a75-a5219070672a",
        item_list_name: "Featured items",
        item_list_id: "FI1",
        index: 1,
      },
    ],
  },
});
