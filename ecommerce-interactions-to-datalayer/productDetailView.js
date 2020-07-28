/*
 * action:          product detail
 * description:     fire whenever a user views the details of a product
 * required fields: product.id and product.name
 * reference: https://www.simoahava.com/analytics/enhanced-ecommerce-guide-for-google-tag-manager/#product-detail-views
 * notes: the products list should include ONLY the single product that the user is viewing
 */
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "eec.detail",
  eecEventName: "Product Detail View",
  ecommerce: {
    detail: {
      actionField: {
        list: "{{collection.title}}", // 'fall collection' // This should be empty if the page is just a single product detail page and not a list like search results or collections
      },
      products: [
        {
          // built-in enhanced ecommerce fields:
          id: "{{ product.id }}", // 'P12345' // use product id not variant id
          name: "{{product.title}}", // 'awesome t-shirt'
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
