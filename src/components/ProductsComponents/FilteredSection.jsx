import { NavLink } from "react-router-dom"
import { formatPrice } from '../../util/formatPrice'
import { useEffect, useState } from "react"

export default function FilteredSection(
    { 
        category, setCategory, 
        setSearch, 
        setCompany, 
        color, setColor,
        priceRange, setPriceRange 
    }
){
    const [rawPriceRange, setRawpriceRange] = useState(3099.99)

    useEffect(() => { // use with PriceChange to smoothen UI changes
        let raf = requestAnimationFrame(() => {
            setPriceRange(rawPriceRange)
        })

        return () => cancelAnimationFrame(raf)
    }, [rawPriceRange])

    function handleSearch(e){
        setSearch(String(e.target.value).toLowerCase())
    }

    function handleCategoryClick(e){
        setCategory(e.target.innerText)
    }

    function handleCompanyChange(e){
        setCompany(e.target.value)
    }

    function handleColorClick(e){
        console.log(e.target.value);
        console.log(color);
        setColor(e.target.value)
    }

    function handlePriceChange(e){
        setRawpriceRange(e.target.value);
    }

    return(
        <section className="filter_Section">
            <input onChange={handleSearch} type="text" placeholder="Search" className="filterSearch"/>

            <section className="category">
                <h3>Category</h3>
                <button onClick={handleCategoryClick} className={`categoryAllBtn ${category === 'All'? 'categoryActive' : ''}`}>All</button>
                <button onClick={handleCategoryClick} className={`OfficeBtn ${category === 'Office'? 'categoryActive' : ''}`}>Office</button>
                <button onClick={handleCategoryClick} className={`LivingRoomBtn ${category === 'Living Room'? 'categoryActive' : ''}`}>Living Room</button>
                <button onClick={handleCategoryClick} className={`KitchenBtn ${category === 'Kitchen'? 'categoryActive' : ''}`}>Kitchen</button>
                <button onClick={handleCategoryClick} className={`BedroomBtn ${category === 'Bedroom'? 'categoryActive' : ''}`}>Bed Room</button>
                <button onClick={handleCategoryClick} className={`DiningBtn ${category === 'Dining'? 'categoryActive' : ''}`}>Dining</button>
                <button onClick={handleCategoryClick} className={`KidsBtn ${category === 'Kids'? 'categoryActive' : ''}`}>Kids</button>
            </section>

            <section className="company">
                <h3>Company</h3>
                
                <select onChange={handleCompanyChange} name="companySelect" id="companySelect">
                    <option value="All">All</option>
                    <option value="Marcos">Marcos</option>
                    <option value="Liddy">Liddy</option>
                    <option value="Ikea">Ikea</option>
                    <option value="Caressa">Caressa</option>
                </select>
            </section>

            <section className="colors">
                <h3>Colors</h3>

                <div>
                    <button onClick={handleColorClick} value={`All`} className={`All colorsAllBtn ${color === 'All' ? 'colorsActive' : ''}`}>All</button>
                    <button onClick={handleColorClick} value={`red`} className={`red ${color === 'red' ? 'primaryColorActive' : ''}`}></button>
                    <button onClick={handleColorClick} value={`green`} className={`green ${color === 'green' ? 'primaryColorActive' : ''}`}></button>
                    <button onClick={handleColorClick} value={`blue`} className={`blue ${color === 'blue' ? 'primaryColorActive' : ''}`}></button>
                    <button onClick={handleColorClick} value={`black`} className={`black ${color === 'black' ? 'primaryColorActive' : ''}`}></button>
                    <button onClick={handleColorClick} value={`yellow`} className={`yellow ${color === 'yellow' ? 'primaryColorActive' : ''}`}></button>
                </div>
            </section>

            <section className="price">
                <h3>Price</h3>
                <p>{formatPrice(Number(priceRange * 100))}</p>
                <input onChange={handlePriceChange} type="range" min={0} max={3099.99} step={.01} value={Number(priceRange)}/>
            </section>

            <label className="freeShipping">
                Free Shipping
                <input type="checkbox" />
            </label>

            <button className="clearFilterBtn">Clear Filters</button>
        </section>
    )
}