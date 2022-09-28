'use strict';
const { v4: uuidv4 } = require('uuid');
const convertToSlug = require('../utils/slugify');

module.exports = {
  async up(queryInterface, Sequelize) {

    let products = []

    let prices = [2.00, 5.00, 10.00, 20.00, 50.00]

    let brands = await queryInterface.bulkInsert('Brands', [
      {
        id: uuidv4(),
        title: 'Amazon US',
        brandProductId: 5,
        description: 'Amazon.com Gift Cards never expire and can be redeemed towards millions of items at www.amazon.com &#13;To redeem your gift card, follow these steps: &#13;1. Visit www.amazon.com/redeem &#13;2. Enter the Claim Code when prompted. &#13;3. Gift card funds will be applied automatically to eligible orders during the checkout process. &#13;4. You must pay for any remaining balance on your order with another payment method. &#13;Your gift card claim code may also be entered when prompted during checkout. To redeem your gift card using the Amazon.com service, first add the gift card funds to Your Account. If you have questions about redeeming your gift card, please visit www.amazon.com/gc-redeem',
        logo: 'https://cdn.reloadly.com/giftcards/3a70931f-2823-4b2c-ab84-8e075134096d.jpg',
        deliveryFee: 0.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'App Store & iTunes US',
        brandProductId: 21,
        description: 'Use it for purchases at any Apple Store location, on the Apple Store-app, apple.com, the App Store, iTunes, Apple Music, Apple TV, Apple News, Apple Books, Apple Arcade, iCloud, and other Apple properties. &#13;Use the Apple Gift Card for App Store, iTunes, iPhone, iPad, Air-pods, Mac book, accessories, and more. &#13;No returns or refunds on Apple Gift Cards. Terms apply. &#13;The Apple Gift Card can be used two ways: &#13;For online purchases, go to apple.com/redeem to add to your Apple Account balance. &#13;Bring this email to any Apple Store location. &#13;Beware of gift card scams. Do not share your code. Terms & Conditions Valid only for U.S. transactions in Apple properties. For assistance, visit support.apple.com/giftcard or call 1-800-275-2273. Not redeemable at Apple resellers or for cash, and no resale, refunds, or exchanges, except as required by law. Apple is not responsible for unauthorized use. Terms apply',
        logo: "https://cdn.reloadly.com/giftcards/efff4800-085b-463e-818b-64d22c599f8a.jpg",
        deliveryFee: 0.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], { returning: true });

    brands.forEach(element => {
      prices.forEach(price => {
        let product = {
          id: uuidv4(),
          title: element.title,
          amount: Number(price),
          currency: 'USD',
          slug: `${convertToSlug(element.title)}-${uuidv4()}`,
          brandId: element.id,
          productId: element.brandProductId,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        products = [product, ...products]
      })
    });

    return await queryInterface.bulkInsert('Products',
      products
      , {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
