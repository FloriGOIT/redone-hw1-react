
import { detailsProcesed } from "./Home"


const MovieSummery = ({ movieId }) => {
        const isMovie = detailsProcesed.filter(movie => movie.id === movieId)
        const isMovieSpread = isMovie[0]
        console.log(isMovieSpread)
//const imgSRC = isMovieSpread.poster_path
        return (<div>



        </div>)
}
export default MovieSummery

/*
                <h2>{isMovie[0].title}</h2><br/>
                <h3>Overview</h3>
                <p>{isMovie[0].overview}</p>*/