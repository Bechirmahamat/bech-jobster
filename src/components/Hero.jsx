import { Form } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div className="static-width grid md:grid-cols-2 items-center mt-16 ">
                <div className="grid gap-4 items-center  ">
                    <h1 className="text-5xl mb-8 font-semibold">
                        Find the Perfect Job for Your
                    </h1>
                    <p className="font-semibold text-lg">
                        Search Your career opportunity over
                        <span className="text-primary">1200</span> jobs
                    </p>
                    <Form className="form w-72">
                        <div className="form-control w-full">
                            <input
                                type="search"
                                placeholder="Search for Any position"
                                className=" input-lg rounded-full input 
                                input-bordered"
                            />
                            <button className="btn w-44 my-2 mt-4 btn-primary btn-md rounded-full">
                                Search
                            </button>
                        </div>
                    </Form>
                </div>
                <div className=" hidden md:grid md:justify-end md:-mt-8 ">
                    <div className="card w-96 bg-base-100 text-base-content shadow-md">
                        <div className="card-body">
                            <article className=" my-2 ">
                                <h1 className="text-xl capitalize font-semibold">
                                    <span className="text-4xl mr-2">219</span>{" "}
                                    job offers
                                </h1>
                                <p className="text-md text-slate-400 capitalize">
                                    in business development
                                </p>
                            </article>
                            <article className=" my-2 ">
                                <h1 className="text-xl capitalize font-semibold">
                                    <span className="text-4xl mr-2">219</span>{" "}
                                    job offers
                                </h1>
                                <p className="text-md text-slate-400 capitalize">
                                    in business development
                                </p>
                            </article>
                            <article className=" my-2 ">
                                <h1 className="text-xl capitalize font-semibold">
                                    <span className="text-4xl mr-2">219</span>{" "}
                                    job offers
                                </h1>
                                <p className="text-md text-slate-400 capitalize">
                                    in business development
                                </p>
                            </article>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary text-lg">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Hero;
