
export function getCart(){
    return JSON.parse(localStorage.getItem('comfySloth_Cart')) || []
}

export function saveCart(cart){
    localStorage.setItem('comfySloth_Cart', JSON.stringify(cart))
}