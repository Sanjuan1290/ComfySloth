
export default function formatPrice(priceCents){

    const price = Number((priceCents / 100).toFixed(2))

    return price.toLocaleString('en-US', {
        style: 'currency', 
        currency: 'USD'
    })
}