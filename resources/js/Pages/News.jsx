import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import Pagination from "@/Components/Pagination";
import NewsCollection from "@/Components/News/NewsCollection";
import MainLayout from "@/Components/Layout/MainLayout";

const News = (props) => {
    const items = props.news.data;
    const links = props.news.links;

    return (
        <MainLayout theme="dark" auth={props.auth}>
            <Head title={props.title} />

            <p className="text-xl py-7 text-center sm:mt-12">{props.desc}</p>

            <NewsCollection items={items} />
            

            <Pagination link={links} />
        </MainLayout>
    );
};

export default News;
