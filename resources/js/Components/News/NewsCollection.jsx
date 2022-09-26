import moment from "moment/moment";
import { useState } from "react";
import Modal from "../Modal";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineHistory } from "react-icons/ai";

const NewsCollection = ({ items }) => {
    const [dataM, setDataM] = useState({
        title: "",
        body: "",
        comment: "",
    });

    if (items.length == 0)
        return (
            <div class="text-red-600 text-center font-bold">
                Berita Yang Anda Cari Tidak Ada...
            </div>
        );

    return (
        <div className="flex items-center justify-center flex-col sm:flex-row sm:flex-wrap sm:items-stretch gap-4 p-4 sm:p-0">
            {items.map((item, i) => {
                return (
                    <label
                        htmlFor="my-modal-4"
                        onClick={() =>
                            setDataM({
                                title: item.title,
                                body: item.body,
                                comment: item.comment,
                            })
                        }
                        className="card w-full xs:w-96 bg-base-100 shadow-xl"
                        key={i}
                    >
                        
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
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
                    </label>
                );
            })}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <Modal
                title={dataM.title}
                body={dataM.body}
                comment={dataM.comment}
                name="my-modal-4"
            />
        </div>
    );
};

export default NewsCollection;
