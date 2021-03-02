import { Link } from 'react-router-dom';
import { HomeBackground, HomeContainer }  from './home.styled';
import Banner from '../../Banner';

const Home = () => {
    return (
        <HomeContainer className='center'>
            <HomeBackground className='center home'>
                <Banner />
            </HomeBackground>
            <div className='center container'>
                <h1>WHAT IS CrankCoin?</h1>
                <div className='center'>
                    <p>
                        CrankCoin is a protocol amalgamating two core functions to deliver passive yield generation
                        and increase positive transactional volume. The protocol gains its core inspiration 
                        from several recent successful projects in the space, particularly Trinity Protocol, 
                        however modifications have been made to fuel accelerated growth.
                    </p>
                </div>
                <div className='center'>
                    <button className='btn'>
                        <Link to='/tokenomics'>
                            Learn more
                        </Link>
                    </button>
                </div>
            </div>
            
        </HomeContainer>
    )
}

export default Home;