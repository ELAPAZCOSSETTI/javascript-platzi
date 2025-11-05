function calculatedDiscountedPrice (price, discountPercentage){
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount;
}

const originalPrice = 1000;
const discountPercentage = 15
const finalprice = calculatedDiscountedPrice(originalPrice, discountPercentage)

console.log(`Original price: $` + originalPrice)
console.log(`Discount ` + discountPercentage + "%")
console.log(`Price with discount: $` + finalprice)