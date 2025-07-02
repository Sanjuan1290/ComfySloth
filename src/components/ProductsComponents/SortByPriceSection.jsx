import gridIcon from '../../assets/gridIcon.png'
import flexColumnIcon from '../../assets/flexColumnIcon.png'


export default function SortByPriceSection({ productNumberFound, setSortBy }){

    function handleSortPriceSelectChange(e){
        setSortBy(e.target.value);
    }

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

                <select onChange={handleSortPriceSelectChange} name="sortPriceSelect" id="sortPriceSelect">
                    <option value="price-asc">Price (Lowest)</option>
                    <option value="price-desc">Price (highest)</option>
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                </select>
            </div>

        </section>
    )
}