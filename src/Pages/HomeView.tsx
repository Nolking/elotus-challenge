import PageWrapper from '../Layout/PageWrapper'
import MovieList from '../Components/MovieList';

const HomeView = function() {
    return (
        <PageWrapper>
            <MovieList configSpace={true} grid={true}></MovieList>
        </PageWrapper>
    )
}

export default HomeView;