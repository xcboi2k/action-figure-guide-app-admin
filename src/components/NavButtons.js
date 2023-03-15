import React from 'react'
import { Button, Container } from "react-bootstrap";
import { useNavigate} from 'react-router-dom';

const NavButtons = () => {
    const navigate = useNavigate();
    return (
        <div className="p-4 box">
            <Container style={{marginBottom: 10}}>
                <Button 
                    style={{marginRight: 10, backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}} 
                    onClick={() => navigate('/addBA20132014')}>
                        Basic Assortment 2013-2014
                </Button>
                <Button 
                    style={{marginRight: 10, backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}} 
                    onClick={() => navigate('/addBA20142015')}>
                        Basic Assortment 2014-2015
                </Button>
                <Button 
                    style={{marginRight: 10, backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}} 
                    onClick={() => navigate('/addBA20152017')}>
                        Basic Assortment 2015-2017
                </Button>
            </Container>
            <Container>
                <Button
                    style={{marginRight: 10, backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}} 
                    onClick={() => navigate('/addEX20142015')}>
                        Exclusives 2014-2015
                </Button>
                <Button
                    style={{marginRight: 10, backgroundColor: '#F1D00A', borderColor: '#F1D00A', color: '#243447', fontWeight: 'bold'}} 
                    onClick={() => navigate('/addMU20152017')}>
                        Multipacks 2015-2017
                </Button>
            </Container>
        </div>
    )
}

export default NavButtons