
import moment from "moment/moment";
import { AiOutlineHistory, AiOutlineClose } from "react-icons/ai";
import Button from "./Button";


const Modal = (props) => {
    return (
        <label htmlFor={props.name} className="modal cursor-pointer">
            <label className="modal-box relative w-12/12 max-w-7xl" htmlFor="">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{props.title}</h3>

                    <label
                        htmlFor={props.name}
                        className="cursor-pointer bg-red-400 rounded-xl p-2 text-white"
                    >
                        <AiOutlineClose />
                    </label>
                </div>
                <p className="py-4 text-left">{props.body}</p>
                <div className="flex flex-col gap-1">
                    <h4 className="font-bold">Comments</h4>
                    <form action="#">
                        <textarea
                            className="textarea textarea-primary w-full"
                            placeholder="Text your comment here.."
                        ></textarea>
                        <Button>Submit</Button>
                        
                    </form>
                    {props.comment.length ? (
                        props.comment.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    className="card  bg-base-100 shadow-xl"
                                >
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
                        })
                    ) : (
                        <p>No Comment Here...</p>
                    )}
                </div>
            </label>
        </label>
    );
};

export default Modal;
