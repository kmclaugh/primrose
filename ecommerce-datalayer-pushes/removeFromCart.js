/*
 * action:          remove from cart
 * description:     fire whenever a user removes something from the cart
 * required fields: product.id and product.name
 * reference: https://www.simoahava.com/analytics/enhanced-ecommerce-guide-for-google-tag-manager/#remove-from-cart
 */
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "eec.remove",
  eecEventName: "Remove from Cart",
  ecommerce: {
    remove: {
      actionField: {
        list: "{{collection.title}} || product detail page", // 'fall collection' // Where the add to cart happened. use 'product detail page' if not from a list
      },
      products: [
        {
          // built-in enhanced ecommerce fields:
          id: "{{ product.id }}", // 'P12345' // use product id not variant id
          name: "{{product.title}}", // 'awesome t-shirt'
          quantity: "{{product.quantity}}", // 1 // the quantity REMOVED from the cart (not the quantity remaining in the cart)
          brand: "{{shop.name}}", // my-store // if there are multiple brands use the brand variable here
          price: '{{product.price | money_without_currency | remove: ","}}', // 10.0 // make sure the price is a number ie 10.00 not $10.00
          variant: "{{product.selected_variant.variant.name}}", // 'large - yellow'
          category: "{{product.taxonomy}}", // 'clothes/shirts/t-shirts' // max five levels of hierarchy
          // requires product-scoped custom dimensions:
          sku: "{{product.selected_variant.sku}}",
          description:
            "{{product.description | strip_newlines | strip_html | escape }}",
          imageURL: "https:{{product.featured_image.src|img_url:'grande'}}",
          productURL: "{{shop.secure_url}}{{product.url}}",
          comparePrice:
            "{{product.compare_at_price_max|money_without_currency}}", // 15.00
          categories: '{{product.collections|map:"title"|json}}', // ['mens', 't-shirts']
          currentCategory: "{{collection.title}}", // 't-shirts'
          variantId: "{{product.selected_variant.variant.id}}", // 'l101'
        },
      ],
    },
  },
});
