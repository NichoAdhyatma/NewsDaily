import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { BiArrowBack } from "react-icons/bi";

import Button from "@/Components/Button";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Label from "@/Components/Label";

const FormNews = (props) => {
    let datas = {
        id: "",
        title: "",
        category_id: "",
        body: "",
    };

    if (props.news) {
        datas = props.news[0];
    }

    const { data, setData, post, put, processing, errors } = useForm({
        title: datas.title,
        category_id: datas.category_id,
        body: datas.body,
    });

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        if (props.action == "update") {
            put(`/dashboard/mynews/${datas.id}`);
        } else if (props.action == "create") post(route("mynews"));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <div>
                    <Link
                        href="/dashboard/mynews"
                        className="flex items-center"
                    >
                        <BiArrowBack /> Back
                    </Link>
                    <h2 className="font-semibold text-xl leading-tight">
                        {props.title}
                    </h2>
                </div>
            }
        >
            <Head title={props.title} />
            <form onSubmit={submit}>
                <div className="py-12 px-3 ">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <Label forInput="title" value="Title" />

                        <Input
                            type="text"
                            name="title"
                            value={data.title}
                            className="mt-1 block w-full bg-base-200"
                            autoComplete="title"
                            handleChange={onHandleChange}
                            placeholder="Title"
                        />
                        <InputError message={errors.title} className="mt-2" />
                        <Label
                            forInput="category_id"
                            className="mt-4"
                            value="Category"
                        />
                        <div className="flex items-center gap-4">
                            <Input
                                type="radio"
                                name="category_id"
                                value="1"
                                className="mt-1"
                                autoComplete="category"
                                handleChange={onHandleChange}
                                id="1"
                                checked={data.category_id == 1 ? true : false}
                            />
                            <label htmlFor="1">Programming</label>
                            <Input
                                type="radio"
                                name="category_id"
                                value="2"
                                className="mt-1"
                                autoComplete="category"
                                handleChange={onHandleChange}
                                id="2"
                                checked={data.category_id == 2 ? true : false}
                            />
                            <label htmlFor="2">Food</label>
                            <Input
                                type="radio"
                                name="category_id"
                                value="3"
                                className="mt-1"
                                autoComplete="category"
                                handleChange={onHandleChange}
                                id="3"
                                checked={data.category_id == 3 ? true : false}
                            />
                            <label htmlFor="3">Jokes</label>
                        </div>
                        <InputError
                            message={errors.category_id}
                            className="mt-2"
                        />

                        <Label forInput="body" className="mt-4" value="Body" />
                        <Input
                            type="text"
                            name="body"
                            value={data.body}
                            className="mt-1 w-full block bg-base-200"
                            autoComplete="body"
                            handleChange={onHandleChange}
                            placeholder="Text Body"
                        />
                        <InputError message={errors.body} className="mt-2" />
                        <Button className="mt-4" processing={processing}>
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </Authenticated>
    );
};

export default FormNews;
