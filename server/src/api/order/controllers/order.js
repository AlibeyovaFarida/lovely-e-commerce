'use strict';

const { create } = require("json-server");

const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({strapi}) => ({
    async create(ctx){
        const {products} = ctx.request.body;
        console.log(products)
        const lineItems = await Promise.all(
            products.map(async(product) => {
                const item = await strapi.service("api::product.product").findOne(product.id)
                console.log(product);

                return {
                  price_data: {
                    currency: "usd",
                    product_data: {
                      name: product.name,
                    },
                    unit_amount: Math.round(product.price * 100),
                  },
                  quantity: product.quantity,
                };
            })
        )
        try {
            const session = await stripe.checkout.sessions.create({
              mode: "payment",
              success_url: `${process.env.CLIENT_URL}?success=true`,
              cancel_url: `${process.env.CLIENT_URL}/404?success=false`,
              line_items: lineItems,
              shipping_address_collection: { allowed_countries: ["US"] },
              payment_method_types: ["card"]
            });
            console.log(session?.id);
            console.log(products)
            await strapi.service("api::order.order").create({
                data: {
                    products,
                    "stripeId": session.id
                }
            })
            console.log('abc');
            return {stripeSession: session.id}
        } catch (err) {
            ctx.response.status = 500;
            return err;
        }
    }
}));
