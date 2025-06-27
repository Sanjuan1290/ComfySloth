

export default function Featured(){

    return(
        <section className="feature_Section">
            <h1>Featured Products</h1>

            <div className="featured-products-container">

                <div className="feature-product">
                    <img src="/HomeImages/FeaturesImages/product7.png" alt="" />
                    
                    <div>
                        <p>Entertainment Center</p>
                        <p>$599.99</p>
                    </div>
                </div>

                <div className="feature-product">
                    <img src="/HomeImages/FeaturesImages/product8.png" alt="" />
                    
                    <div>
                        <p>high-back bench</p>
                        <p>$399.99</p>
                    </div>
                </div>

                <div className="feature-product">
                    <img src="/HomeImages/FeaturesImages/product11.png" alt="" />
                    
                    <div>
                        <p>modern bookshelf</p>
                        <p>$319.99</p>
                    </div>
                </div>
            </div>

            <button>ALL PRODUCTS</button>
        </section>
    )
}