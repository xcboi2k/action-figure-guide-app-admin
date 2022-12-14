import React from 'react';
import { Button } from 'semantic-ui-react';
import { useNavigate} from 'react-router-dom';

import NavBar from '../components/NavBar';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <NavBar />
            <Button primary onClick={() => navigate('/addBA20132014')}>Basic Assortment 2013-2014</Button>
            <Button primary onClick={() => navigate('/addBA20142015')}>Basic Assortment 2014-2015</Button>
            <Button primary onClick={() => navigate('/addBA20152017')}>Exclusives 2014-2015</Button>
            <Button primary onClick={() => navigate('/addEX20142015')}>Basic Assortment 2015-2017</Button>
            <Button primary onClick={() => navigate('/addMU20152017')}>Multipacks 2015-2017</Button>
        </div>
    )
}

export default Home