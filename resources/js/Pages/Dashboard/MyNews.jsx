import { React, useState, useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { AiOutlinePlus } from "react-icons/ai";
import NewsTabel from "@/Components/News/NewsTable";
import { usePage } from "@inertiajs/inertia-react";
import Alert from "@/Components/Alert";

const MyNews = (props) => {
    const { flash } = usePage().props;
    const [empty, setEmpty] = useState(false);
    const news = props.news;

    useEffect(() => {
        if (news.length < 1) {
            setEmpty(true);
        } else {
            setEmpty(false);
        }
    });

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl leading-tight">MyNews</h2>
            }
        >
            <Head title={props.title} />
            <div className="flex justify-center items-center py-5">
                <Link href="mynews/create" className="badge badge-primary font-bold">
                    <AiOutlinePlus /> Add New News
                </Link>
            </div>

            {flash.message && <Alert message={flash.message} />}

            <NewsTabel items={props.news} empty={empty} />
        </Authenticated>
    );
};

export default MyNews;
