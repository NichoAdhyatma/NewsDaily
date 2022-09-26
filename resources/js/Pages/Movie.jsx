import MainLayout from "@/Components/Layout/MainLayout";
import MovieCollection from "@/Components/Movie/MovieCollection";

const Movie = (props) => {
    return (
        <MainLayout theme="dark" auth={props.auth}>
            <p className="text-xl py-7 text-center sm:mt-12">{props.desc}</p>
            <MovieCollection />
        </MainLayout>
    );
};
export default Movie;
