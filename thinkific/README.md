# Thinkific

How to install enhanced ecommerce tracking using GTM and the datalayer on a
Thinkific site.

All changes are made on the
`https://course.YOURSITE.com/manage/settings#tab-code-analytics` page.

Test your changes by
[creating a free coupon](https://support.thinkific.com/hc/en-us/articles/360041869133-Test-Your-Course-Checkout).

## GTM Container Setup

Install your
[GTM container](https://support.thinkific.com/hc/en-us/articles/360030368974-Installing-Google-Tag-Manager)
using the
[Site Footer](https://support.thinkific.com/hc/en-us/articles/360030724953-Site-Footer-Code).
See `site-footer.html` file.

## Purchase event tracking

Install the purchase event (`ecommerce-interactions-to-datalayer/purchase.js`)
using the
[Order and Signup Tracking Code](https://support.thinkific.com/hc/en-us/articles/360030731613-Order-and-Signup-Tracking-Code).
See `order-tracking.html` file.

## Signup event tracking

Add a signup event using the
[Order and Signup Tracking Code](https://support.thinkific.com/hc/en-us/articles/360030731613-Order-and-Signup-Tracking-Code).
See `signup.html` file.
