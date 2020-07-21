/*
 * action:          product impressions
 * description:     fire whenever a sees a product impression in some listing, such as Search Results, Recently Viewed Products, or Related Products.
 * required fields: product.id, product.name, product.position, product.list
 * reference: https://www.simoahava.com/analytics/enhanced-ecommerce-guide-for-google-tag-manager/#impression-views
 */
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "eec.impressions",
  eecEventName: "Impression Views",
  ecommerce: {
    impressions: [
      // list of products that are shown to the user
      {
        // built-in enhanced ecommerce fields:
        id: "{{ product.id }}", // 'P12345' // use product id not variant id
        name: "{{product.title}}", // 'awesome t-shirt'
        list: "{{list.title}}", //  'realated prducts' // The list name where the impression was viewed. could be search results, collect, related products, etc
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
        comparePrice: "{{product.compare_at_price_max|money_without_currency}}", // 15.00
        categories: '{{product.collections|map:"title"|json}}', // ['mens', 't-shirts']
        currentCategory: "{{collection.title}}", // 't-shirts'
        variantId: "{{product.selected_variant.variant.id}}", // 'l101'
      },
    ],
  },
});
