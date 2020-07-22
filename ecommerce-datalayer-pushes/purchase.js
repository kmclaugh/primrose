/*
 * action:          purchase
 * description:     fire when the user actually completes the purchase
 * required fields: actionField.id, actionField.revenue , product.id, product.name, product.quantity, product.price, product.variant (if applicable)
 * reference: https://www.simoahava.com/analytics/enhanced-ecommerce-guide-for-google-tag-manager/#purchase
 */
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "eec.purchase",
  eecEventName: "Purchase",
  ecommerce: {
    currencyCode: "{{checkout.current_code}}", // USD // the currency of the checkout
    purchase: {
      actionField: {
        id: "{{checkout.order_number}}", // 12345 // The order number or transaction id
        affiliation: "{{shop.name}}", // my shop // Where the order took place (ie your store)
        revenue:
          '{{checkout.total_price |  money_without_currency| remove: ","}}', // 11.00 // the total transaction value
        tax: '{{checkout.tax_price |  money_without_currency| remove: ","}}', // 1.0 // the tax paid
        shipping:
          '{{checkout.shipping_price |  money_without_currency| remove: ","}}', // 2.0 // cost of shipping
        coupon: "{{discount.code}}", // SUMMER2020 // the discount code used
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
