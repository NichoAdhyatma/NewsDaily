import Alert from "@/Components/Alert";
import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import MainLayout from "@/Components/Layout/MainLayout";
import { Head } from "@inertiajs/inertia-react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import moment from "moment/moment";
import { AiOutlineHistory } from "react-icons/ai";

const NewsDetail = (props) => {
    const news = props.news;
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        news_id: news.id,
        body: "",
    });
    
    const handleData = (e) => {
        setData(e.target.name, e.target.value);
    };

    const posts = (e) => {
        e.preventDefault();
        post(route("postComment"));
    };

    return (
        <MainLayout theme="dark" auth={props.auth}>
            <Head title={props.title} />

            <div className="text-xl pt-7 text-center sm:mt-12">
                <p>{props.title}</p>
            </div>

            <div className="flex flex-col items-center gap-4 max-w-5xl mx-auto p-4">
                <h1 className="text-3xl">{news.title}</h1>
                <img
                    src="https://placeimg.com/1200/400/arch"
                    className="w-full rounded-lg shadow-2xl"
                />
                <p>{news.body}</p>
            </div>

            <div className="flex flex-col gap-4 max-w-5xl mx-auto p-4">
                <h2>Comments ✨</h2>
                <form onSubmit={posts}>
                    <textarea
                        className="textarea textarea-primary w-full"
                        placeholder="Text your comment here.."
                        name="body"
                        onKeyUp={(e) => {
                            handleData(e);
                        }}
                    ></textarea>
                    <InputError message={errors.body} className="mt-2" />
                    <Button processing={processing}>Submit</Button>
                </form>

                {flash.message && <Alert message={flash.message} />}

                {news.comment.map((item, i) => {
                    return (
                        <div key={i} className="card  bg-base-100 shadow-xl">
                            <div className="card-body">
                                <p className="font-bold ">
                                    From : {item.user.name}
                                </p>
                                <p>{item.body}</p>
                                <div className="flex items-center gap-1 justify-end">
                                    <AiOutlineHistory />
                                    {moment(item.created_at).fromNow()}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </MainLayout>
    );
};

export default NewsDetail;
