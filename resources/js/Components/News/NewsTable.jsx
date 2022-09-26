import { FiEye } from "react-icons/fi";
import { HiPencilAlt } from "react-icons/hi";
import { BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Modal from "../Modal";

const NewsTabel = ({ items, empty }) => {
    const [id, setId] = useState();
    const [dataM, setDataM] = useState({
        title: "",
        body: "",
        comment: "",
    });

    const deleteNews = (e) => {
        e.preventDefault();
        Inertia.delete(`/dashboard/mynews/${id}`);
    };

    const update = (e) => {
        e.preventDefault();
        Inertia.get(`/dashboard/mynews/${id}/edit`);
    };

    return (
        <div className="flex flex-col items-center py-5 px-3">
            <table className="table table-compact w-1/2">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    <div className="flex items-center space-x-3 flex-wrap">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12 md:none">
                                                <img
                                                    src="https://placeimg.com/400/225/arch"
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold ">
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge bg-pink-500 border-0 badge-sm">
                                        {item.category.name}
                                    </span>
                                </td>

                                <td>
                                    <div className="flex flex-wrap bg-white">
                                        <input
                                            type="checkbox"
                                            id="my-modal-4"
                                            className="modal-toggle"
                                        />
                                        <label
                                            htmlFor="my-modal-5"
                                            onClick={() =>
                                                setDataM({
                                                    title: item.title,
                                                    body: item.body,
                                                    comment: item.comment,
                                                })
                                            }
                                            className="btn btn-warning text-white btn-xs mr-1"
                                        >
                                            <FiEye />
                                        </label>
                                        <form
                                            onSubmit={update}
                                            className="inline"
                                        >
                                            <button
                                                onClick={() => setId(item.id)}
                                                className="btn btn-primary text-white btn-xs mr-1"
                                            >
                                                <HiPencilAlt />
                                            </button>
                                        </form>
                                        <form
                                            onSubmit={deleteNews}
                                            className="inline"
                                        >
                                            <button
                                                onClick={() => setId(item.id)}
                                                className="btn btn-error text-white btn-xs"
                                            >
                                                <BsFillTrashFill />
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <Modal
                title={dataM.title}
                body={dataM.body}
                comment={dataM.comment}
                name="my-modal-5"
            />
            {empty && (
                <div className="block text-red-600 py-4">No News Uploaded</div>
            )}
        </div>
    );
};

export default NewsTabel;
