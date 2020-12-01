import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Buttons from './buttons';
import NavBar from './navBar';
// import IntroCard from './introCard';
import SimpleCard from './simpleCard';
import ProductCard from './productCard';
import IntroCardDark from './introCardDark';
// import SimpleCardDark from './simpleCardDark';
// import BestSellers from './bestSellers';
import Footer from './footer';
import ProductOneText from './productOneText';
import ProductTwoText from './productTwoText';
import ProductThreeText from './productThreeText';
import mbOne from '../assets/images/HKW_SE2_DR.jpg';
import mbTwo from '../assets/images/19C0840_005_FVP.jpg';
import mbThree from '../assets/images/Accessory-Vehicle-XL-865x600.jpg';
import mbFour from '../assets/images/accessories_865x600.jpg';
import pdtOne from '../assets/images/2021-GLA-SUV-CH-1-1-DR.jpg';
import pdtTwo from '../assets/images/2020-GLB-SUV-CH-1-1-DR.jpg';
import pdtThree from '../assets/images/2020-GLC-SUV-CH-1-1-DR.jpg';
import IntroCardDarkMore from './introCardDarkMore';

class Home extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Container className="container-style">
					<Row lg={1}>
						<Col>
							<NavBar />
						</Col>
					</Row>
					<Row lg={1} className="card-area intro-card">
						<Col className="card-col">
							<IntroCardDark
								src={mbOne}
								title="Don't let the sun set "
								titleMore="on this opportunity."
								text="Take advantage of the Summer Sales Event going on now."
							/>
						</Col>
					</Row>
					<Row lg={1} className="latest-label">
						<Col>
							<div>
								<span className="latest-title">Upcoming Releases</span>
							</div>
						</Col>
					</Row>
					<Row lg={1} className="card-area">
						<Col className="card-col">
							<IntroCardDarkMore
								src={mbTwo}
								title="The new 2021"
								titleMore="Mercedes-AMG GLS 63"
								text="A masterclass in performance, comfort and style."
							/>
						</Col>
					</Row>
					<Row lg={1} className="latest-label">
						<Col>
							<div>
								<span className="latest-title">For You and Your Vehicle</span>
							</div>
						</Col>
					</Row>
					<Row lg={2} className="card-area">
						<Col className="simple-card-left">
							<SimpleCard src={mbThree} text="Genuine Mercedes-Benz Vehicle Accessories" />
						</Col>
						<Col className="simple-card-right">
							<SimpleCard src={mbFour} text="This year, add the three-pointed star to your everyday life." />
						</Col>
					</Row>
					<Row lg={2} className="best-label">
						<Col>
							<div>
								<span className="intro-text">Items made with greater personalization and added protection in mind.</span>
							</div>
						</Col>
						<Col>
							<div>
								<span className="intro-text">Craftsmanship and timeless style should extend beyond your vehicle. The Lifestyle Collection lets you express your passion wherever you go.</span>
							</div>
						</Col>
					</Row>
					<Row lg={1} className="latest-label">
						<Col>
							<div>
								<span className="latest-title">Recommended for You</span>
							</div>
						</Col>
					</Row>
					<Row className="product-intro product-intro-start">
						<Col md={7} className="product-intro-image">
							<ProductCard
								src={pdtOne}
							/>
						</Col>
						<Col md={5} className="product-intro-text">
							<ProductOneText />
						</Col>
					</Row>
					<Row className="product-intro ">
						<Col md={7} className="product-intro-image">
							<ProductCard
								src={pdtTwo}
							/>
						</Col>
						<Col md={5} className="product-intro-text">
							<ProductTwoText />
						</Col>
					</Row>
					<Row className="product-intro">
						<Col md={7} className="product-intro-image">
							<ProductCard
								src={pdtThree}
							/>
						</Col>
						<Col md={5} className="product-intro-text">
							<ProductThreeText />
						</Col>
					</Row>
					<Footer />
				</Container>
			</React.Fragment>
		);
	}
}

export default Home;
