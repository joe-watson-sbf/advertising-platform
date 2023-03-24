import Footer from "@/components/footer";
import Header from "@/components/header";
import InitApp from "./init";
import SliderCoussel from "@/components/slider";
import { Example } from "@/components/slideshow";
import Hero from "@/components/hero";
import About from "@/components/about";
import BlockImages from "@/components/imageblock";
import Testimonials from "@/components/testimonials";
import Stats from "@/components/stats";

export default function Home() {
    return (
        <>
            <InitApp />
            <Header />
            <main>
                <Hero />
                <BlockImages/>
                <About/>
                <Stats/>
                <Testimonials/>
            </main>
            <Footer />
        </>
    );
}
