import gridIcon from '../../assets/gridIcon.png'
import gridIconWhite from '../../assets/gridIconWhite.png'
import flexColumnIconWhite from '../../assets/flexColumnIconWhite.png'
import flexColumnIcon from '../../assets/flexColumnIcon.png'


export default function SortByPriceSection({ productNumberFound, setSortBy, displayType, setDisplayType }){

    function handleSortPriceSelectChange(e){
        setSortBy(e.target.value);
    }

    function setDisplay(value){
        setDisplayType(value)
    }

    return(
        <section className="sortByPrice_Section">
            
            <div className='icons'>
                <img 
                    onClick={()=>{setDisplay('gridDisplay')}} 
                    src={displayType === 'gridDisplay' ? gridIcon : gridIconWhite}
                    alt="gridIcon" 
                    className="gridIcon" />
                <img 
                    onClick={()=>{setDisplay('flexColumnDisplay')}} 
                    src={displayType === 'flexColumnDisplay' ? flexColumnIcon : flexColumnIconWhite} 
                    alt="flexColumnIcon" 
                    className="flexColumnIcon" />
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