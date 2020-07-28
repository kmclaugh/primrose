# primrose

Scripts to push
[properly formatted](https://www.simoahava.com/analytics/enhanced-ecommerce-guide-for-google-tag-manager/#populate-the-data-layer)
[google analytics enhanced ecommerce interactions](https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#product-detail-view)
to the datalayer.

Once installation is complete, the datalayer will contain all data required to
fire google analytics enhanced ecommerce events with google tag manager. That
same data can be used to fire accurate ecommerce events for other marketing
tools, such as facebook and google ads.

## summary

Google analytics enhanced ecommerce measures user interactions with products on
ecommerce sites. These interactions include:

1. `product impressions` - the user views a product in a list. For instance, in
   search results or catelogue pages

2. `product detail view` - the user views the details of a product. For
   instance, on a product details page.

3. `add to cart` - the user adds a product to their cart.

4. `remove from cart` - the user removes a product from their cart.

5. `checkout step(s)` - the user start any step of a checkout. For instance,
   viewing the cart, shipping details, payment details, and approval would all
   be different checkout steps.

6. `purchase` - the user completes a transaction.

Each of the interactions includes different data. For instance, the
`add to cart` interaction includes which product or products were added to the
cart, while the `purchase` interaction includes all of the purchased products
and the id, total, shipping, and tax for the entire transaction.

## installation

### custom ecommerce sites

Custom ecommerce sites, ie those not built Shopify, must add and update the
javascript snippets for each interaction contained in the
ecommerce-interactions-to-datalayer.

#### interaction scripts

Each interaction script contains all required and optional data required for its
respective enhanced ecommerce interaction.

At the top of each script, you'll find a description of when to fire the
interaction, required fields, and reference link.

#### how to fire scripts

Where and when these scripts should fire will depend on your site. For instance,
the `product detail view` should fire whenever a user views the details of a
product, which will likely be on the page load of the product's detail page.

But the `add to cart` script should fire whenever a user adds something to the
cart, which may occur on a button click on either the product's detail page or
in a list of products.

Each interaction script contains a qualitative description about when to fire
the script that should easily map onto an user action on your site.

#### filling in variables

To use the scripts, you will have to fill in the variables in the script. All
variables are surrounded by `{{ variable }}` with descriptions and formatting
requirements provided in inline comments. For instance, the
`product detail view` requires a product id and is displayed in the script like
so:

```
id: "{{ product.id }}", // 'P12345' // use product id not variant id
```

How you fill in the variable will depends on what framework you site is built
with. For instance, ruby sites may use templating to fill in the variables
(similar to format used in the scripts) but react sites may require a purer
javascript implementation.

#### product lists

Some interactions, such as the `checkout` and `purchase` should contain a list
of all products in the cart

## shopify

Shopify sites should not install the interaction scripts individually. Instead,
they should use the following:

install gtm and datalayer snippet according to
[these isntructions](https://github.com/kmclaugh/dataLayer-shopify)
