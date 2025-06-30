import { NavLink } from "react-router-dom"

export default function FilteredSection(){

    return(
        <section className="filter_Section">
            <input type="text" placeholder="Search"/>

            <section className="category">
                <h3>Category</h3>
                <button className="categoryAllBtn">All</button>
                <button className="OfficeBtn">Office</button>
                <button className="LivingRoomBtn">Living Room</button>
                <button className="KitchenBtn">Kitchen</button>
                <button className="BedroomBtn">Bedroom</button>
                <button className="DiningBtn">Dining</button>
                <button className="KidsBtn">Kids</button>
            </section>

            <section className="company">
                <h3>Company</h3>
                
                <select name="company" id="company">
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
                    <button className="colorsAllBtn"></button>
                    <button className="red"></button>
                    <button className="green"></button>
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