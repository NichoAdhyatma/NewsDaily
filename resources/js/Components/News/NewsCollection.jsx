import moment from "moment/moment";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineHistory } from "react-icons/ai";
import { Link } from "@inertiajs/inertia-react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Audio } from "react-loader-spinner";

const NewsCollection = ({ items }) => {
    let url;
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     axios({
    //         method: "GET",
    //         url: "https://chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json&page=1",
    //     })
    //         .then((res) => console.log(res))
    //         .catch((err) => console.log(err))
    //         .finally(() => setLoading(false));
    // }, []);

    // if (loading)
    //     return (
    //         <div className="flex justify-center my-auto">
    //             <Audio
    //                 height="80"
    //                 width="80"
    //                 radius="9"
    //                 color="aqua"
    //                 ariaLabel="loading"
    //                 wrapperStyle
    //                 wrapperClass
    //             />
    //         </div>
    //     );

    if (items.length == 0)
        return (
            <div className="text-red-600 text-center font-bold">
                Berita Yang Anda Cari Tidak Ada...
            </div>
        );

    return (
        <div className="flex items-center justify-center flex-col sm:flex-row sm:flex-wrap sm:items-stretch gap-4 p-4 sm:p-0">
            {items.map((item, i) => {
                url = "/news/" + item.id;
                return (
                    <Link
                        href={url}
                        className="card w-full xs:w-96 bg-base-100 shadow-xl"
                        key={i}
                    >
                        <div className="card-body">
                            <h2 className="card-title font-bold text-2xl">{item.title}</h2>
                            <p>{item.body.substring(0, 50)}</p>

                            <div className="card-actions justify-end items-center">
                                {i < 2 ? (
                                    <div className="badge badge-secondary">
                                        Hot!
                                    </div>
                                ) : (
                                    ""
                                )}{" "}
                                <div className="badge badge-primary">
                                    {item.category.name}
                                </div>
                                <div className="badge badge-outline text-xs">
                                    {item.user.name}
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-4">
                                <div className="flex items-center gap-1">
                                    <BiCommentDetail />
                                    {item.comment.length}
                                </div>
                                <div className="flex items-center gap-1">
                                    <AiOutlineHistory />{" "}
                                    {moment(item.created_at).fromNow()}
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default NewsCollection;
