import { NavLink } from "react-router-dom"

export default function FilteredSection({ category, setCategory, setSearch, setCompany }){

    function handleSearch(e){
        setSearch(String(e.target.value).toLowerCase())
    }

    function handleCategoryClick(e){
        setCategory(e.target.innerText)
    }

    function handleCompanyChange(e){
        setCompany(e.target.value)
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
                    <button className="colorsAllBtn colorsActive">All</button>
                    <button className="red"></button>
                    <button className="green primaryColorActive"></button>
                    <button className="blue"></button>
                    <button className="black"></button>
                    <button className="yellow"></button>
                </div>
            </section>

            <section className="price">
                <h3>Price</h3>
                <p>$3,099.99</p>
                <input type="range" min={0} max={3099.99} step={1}/>
            </section>

            <label className="freeShipping">
                Free Shipping
                <input type="checkbox" />
            </label>

            <button className="clearFilterBtn">Clear Filters</button>
        </section>
    )
}