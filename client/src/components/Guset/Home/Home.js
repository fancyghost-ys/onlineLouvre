import React from 'react'
import { useSelector } from 'react-redux'
import Menu from '../../AssetsPieces/Menu/Menu'
import Slideshow from '../../AssetsPieces/SlideShow/SlideShow'
import ArtsList from './ArtList/ArtsList'
import Footer from './Footer/Footer'

const Home = ({ history }) => {
    // const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.user)

    return (
        <div>
            <Menu user={user} />
            <Slideshow />
            <br />
            <ArtsList />
            <Footer />
        </div>
    );
}

export default Home