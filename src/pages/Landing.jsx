import { Navbar, Hero } from "../components/";

const Landing = () => {
    return (
        <>
            <section className="overflow-hidden w-full h-[100vh] relative  ">
                <Navbar />
                <div className=" -z-10 absolute h-[150%] bottom-[150px]  bg-primary w-[56%] right-0 origin-bottom-left rotate-[32deg] rounded-[200px]"></div>
                <Hero />
            </section>
        </>
    );
};
export default Landing;
