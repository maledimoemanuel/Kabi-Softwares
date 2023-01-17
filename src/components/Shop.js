import {Container, Row,Col} from 'react-bootstrap'

export const Shop=()=>{
    

    return(
        <section className="shop" id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <h2><span className='tagline'>Shop</span></h2>
                        <p>Store Is Currently Empty</p>
                        <div style={{display:'flex', justifyContent: 'space-between'}}></div>
                        </Col>
                    <Col xs={1} md={2} xl={5}>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}