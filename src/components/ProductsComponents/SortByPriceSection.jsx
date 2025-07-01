import gridIcon from '../../assets/gridIcon.png'
import flexColumnIcon from '../../assets/flexColumnIcon.png'
import { useEffect } from 'react'


export default function SortByPriceSection({ productNumberFound}){

    return(
        <section className="sortByPrice_Section">
            
            <div className='icons'>
                <img src={gridIcon} alt="gridIcon" className="gridIcon" />
                <img src={flexColumnIcon} alt="flexColumnIcon" className="flexColumnIcon" />
            </div>

            <p>{productNumberFound} products found</p>

            <div className='line'></div>

            <div className="priceSorter">
                <p>Sort By</p>

                <select name="sortPriceSelect" id="sortPriceSelect">
                    <option value="price-asc">Price (Lowest)</option>
                    <option value="price-desc">Price (highest)</option>
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                </select>
            </div>

        </section>
    )
}