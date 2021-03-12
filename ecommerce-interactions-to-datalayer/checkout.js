/*
 * action:          check out
 * description:     fire for each step of the checkout process (ie view cart, enter shipping info, payment)
 * required fields: actionField.step, product.id and product.name
 * reference: https://www.simoahava.com/analytics/enhanced-ecommerce-guide-for-google-tag-manager/#checkout
 */
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "eec.checkout",
  eecEventName: "Checkout {{checkout.step}}",
  ecommerce: {
    checkout: {
      actionField: {
        step: "{{checkout.step}}", // 1 // The checkout step (starting at 1).
        option: "{{checkout.payment_method}}", // Visa // extra metadata (e.g. shipping or payment method)
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
