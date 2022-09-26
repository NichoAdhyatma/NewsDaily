import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import MainLayout from "@/Components/Layout/MainLayout";

const Homepage = (props) => {
    return (
        <MainLayout theme="dark" auth={props.auth}>
            <Head title={props.title} />
            <h1 className="text-xl py-7 text-center sm:mt-12">{props.desc}</h1>
            <div className="w-full sm:w-8/12 mx-auto flex flex-col items-center gap-4">
                <div className="hero p-4 bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="mockup-code">
                            <pre data-prefix="$">
                                <code>Welcome to My Site</code>
                            </pre>
                            <pre data-prefix="#" className="text-warning">
                                <code>if ( status )</code>
                            </pre>
                            <pre data-prefix=">" className="text-success">
                                <code>Done!</code>
                            </pre>
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold">Welcome</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat
                                fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id
                                nisi.
                            </p>
                            <button className="btn btn-primary">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="hero"
                    style={{
                        backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">
                                Hello there
                            </h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat
                                fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id
                                nisi.
                            </p>
                            <button className="btn btn-primary">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Homepage;
