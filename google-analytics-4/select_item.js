// This event should fire when a visitor clicks a product to view its details.

dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: "select_item",
  ecommerce: {
    items: [
      {
        item_name: "T-Shirt",
        price: 100.0,
        item_id: "d5f1437c-ecdb-4f6f-8a75-a5219070672a",
        item_list_name: "Featured items",
        item_list_id: "FI1",
        index: 3,
      },
    ],
  },
});
