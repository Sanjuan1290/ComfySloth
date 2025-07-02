
export default function sortAsc_Desc(filteredProducts, sortName){ // it takes price-asc, price-desc, name-asc, name-desc

    if(sortName === 'price-asc'){
        return filteredProducts.sort((a, b) => a.priceCents - b.priceCents)
    }else if(sortName === 'price-desc'){
        return filteredProducts.sort((a, b) => b.priceCents - a.priceCents)
    }else if(sortName === 'name-asc'){
        return filteredProducts.sort((a, b) => a.name.localeCompare(b.name) )
    }else if(sortName === 'name-desc'){
        return filteredProducts.sort((a, b) => b.name.localeCompare(a.name) )
    }

}