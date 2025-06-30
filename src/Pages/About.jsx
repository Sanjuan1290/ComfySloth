
import { NavLink } from "react-router-dom"
import HeaderNav from '../components/HeaderNav'

export default function About(){

    return(
        <>
            <HeaderNav navLocation={'About'}/>

            <section className="about_Section">
                <div>
                    <img src="/HomeImages/ShopNowImage/niceTable.png" alt="nice table" />

                    <div className="ourStory">
                        <h1>Our Story</h1>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                    </div>
                </div>
            </section>
        </>
    )
}