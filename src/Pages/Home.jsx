
import ShopNow from "../components/HomeComponents/ShopNow"
import Featured from "../components/HomeComponents/Featured"
import Custom from "../components/HomeComponents/Custom"
import Newsletter from "../components/HomeComponents/Newsletter"

export default function Home(){
    
    return(
        <>
            <ShopNow />
            <Featured />
            <Custom />
            <Newsletter />
        </>
    )
}