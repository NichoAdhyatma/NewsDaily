import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Pagination from "@/Components/Pagination";
import NewsCollection from "@/Components/News/NewsCollection";
import MainLayout from "@/Components/Layout/MainLayout";
import axios from "axios";
import { Audio } from "react-loader-spinner";

const News = (props) => {
    const [items, setItem] = useState(props.news.data);
    const links = props.news.links;
    const [loader, setLoader] = useState(false);

    function request(value) {
        if (!value) return setItem(props.news.data);
        setLoader(true);

        axios({
            method: "GET",
            url: `/news?key=${value}`,
        })
            .then((res) => setItem(res.data))
            .catch((err) => console.log(err))
            .finally(() => setLoader(false));
    }

    return (
        <MainLayout theme="dark" auth={props.auth}>
            <Head title={props.title} />

            <div className="text-xl py-7 text-center sm:mt-12">
                <p>{props.desc}</p>
                <input
                    type="text"
                    name="key"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    onKeyUp={(e) => request(e.target.value)}
                />
            </div>
            {loader ? (
                <div className="flex justify-center my-auto">
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="aqua"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                        className="none"
                    />
                </div>
            ) : null}

            <NewsCollection items={items} />

            <Pagination link={links} />
        </MainLayout>
    );
};

export default News;
