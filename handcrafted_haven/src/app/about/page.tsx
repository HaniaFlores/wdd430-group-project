import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer";
import Header from "@/components/header";


export default async function Home() {
    return(
        <>
        <Header/>
        <h1>About Us page</h1>
        <AboutUs/>
        <Footer/>
        </>
    )
}