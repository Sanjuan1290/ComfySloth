import { NavLink } from "react-router-dom"
import searchIcon from '../../assets/searchIcon.png'

export default function Featured(){

    return(
        <section className="feature_Section">
            <h1>Featured Products</h1>

            <div className="featured-products-container">

                <div className="feature-product">
                    <img src="/HomeImages/FeaturesImages/product7.png" alt="product images" />
                    
                    <div>
                        <p>Entertainment Center</p>
                        <p>$599.99</p>
                    </div>

                    <div className="searchIcon">
                        <NavLink><img src={searchIcon} alt="search icon" /></NavLink>
                    </div>
                </div>

                <div className="feature-product">
                    <img src="/HomeImages/FeaturesImages/product8.png" alt="product images" />
                    
                    <div>
                        <p>high-back bench</p>
                        <p>$399.99</p>
                    </div>

                    <div className="searchIcon">
                        <NavLink><img src={searchIcon} alt="search icon" /></NavLink>
                    </div>
                </div>

                <div className="feature-product">
                    <img src="/HomeImages/FeaturesImages/product11.png" alt="product images" />
                    
                    <div>
                        <p>modern bookshelf</p>
                        <p>$319.99</p>
                    </div>

                    <div className="searchIcon">
                        <NavLink><img src={searchIcon} alt="search icon" /></NavLink>
                    </div>
                </div>
            </div>

            <NavLink to='/products'>ALL PRODUCTS</NavLink>
        </section>
    )
}