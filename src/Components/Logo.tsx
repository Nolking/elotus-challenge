import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../Context/movieContext';


const Logo: React.FC = () => {
    const {setIsLoading} = useContext(MovieContext);
    const clickHanlder = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }
    return (<h2 className='logo col-light'>
        <Link to={"/"} onClick={clickHanlder}>MOVIES</Link>
    </h2>)
}
export default Logo