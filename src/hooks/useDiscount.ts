export const getPriceWithDiscount = (price: number, discount: number): number => {
    return Math.floor(price * (1 - discount / 100));
};
