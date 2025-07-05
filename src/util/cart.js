let cart = JSON.parse(localStorage.getItem('comfySloth_Cart')) || []

export function getCart(){
    return cart
}

export function saveCart(){
    localStorage.setItem('comfySloth_Cart', JSON.stringify(cart))
}

export function addToCart(item){

    if(cart.length === 0){
        cart.push(item)
        return
    }

    const existingItem = cart.find(cartItem => item.SKU === cartItem.SKU && item.color === cartItem.color)

    if(existingItem){
        existingItem.quantity += item.quantity
    }else{
        cart.push(item)
    }

    saveCart()
}

export function getCartQuantity(){
    console.table(cart);
    let quantity = 0;

    if(!cart || cart.length === 0) return quantity

    cart.forEach(item => {
        quantity += item.quantity
    })
    
    return quantity
}