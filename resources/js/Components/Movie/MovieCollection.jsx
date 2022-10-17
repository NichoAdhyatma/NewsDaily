import axios from "axios";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlinePlayCircle, AiFillStar } from "react-icons/ai";

const MovieCollection = () => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url: "https://ghibliapi.herokuapp.com/films",
        })
            .then((res) => {
                setMovie(res.data)
                console.log(res)
            })
                
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading)
        return (
            <div className="flex justify-center my-auto">
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="aqua"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                />
            </div>
        );

    return (
        <div className="flex justify-center items-center flex-wrap gap-4 p-1">
            
            {movie.map((item, i) => {
                return (
                    <div className="card w-96 bg-base-100 shadow-xl" key={i}>
                        <figure>
                            <img
                                src={
                                    item.image ? item.image : item.movie_banner
                                }
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item.title}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Release : {item.release_date}</p>
                            <p>Rate : {item.rt_score} / 100 <AiFillStar className="inline ml-1 text-xl text-yellow-500"/> </p>
                            <p className="flex items-center gap-2">
                                <BiTimeFive className="inline" />{" "}
                                {item.running_time} min
                            </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-ghost">
                                    {item.director}
                                </div>
                                <div className="badge badge-warning">
                                    {item.producer}
                                </div>
                            </div>
                            <a className="btn btn-primary flex items-center gap-1"><AiOutlinePlayCircle className="me-1"/> Watch</a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MovieCollection;
