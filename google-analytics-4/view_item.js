// Fire this event when a visitor views a product. That view might happen on a page, screen, or preview modal.

dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: "view_item",
  ecommerce: {
    items: [
      {
        item_id: "d5f1437c-ecdb-4f6f-8a75-a5219070672a",
        price: 100.0,
        item_name: "T-Shirt",
        item_variant: "medium / black",
      },
    ],
  },
});
