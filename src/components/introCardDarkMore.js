import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
// import Buttons from './buttons';

class IntroCardDarkMore extends Component {
	state = {
	};
	render() {
		return (
			<Card className="bg-dark text-white card-style more-card">
				<Card.Img src={this.props.src} alt="Card image" className="card-image more-card-image" />
				<Card.ImgOverlay className="more-overlay">
					<Card.Title className="more-title text-black">{this.props.title}</Card.Title>
					<Card.Title className="more-title text-black more-title-more">{this.props.titleMore}</Card.Title>
					<Card.Text className="intro-text text-black">
						{this.props.text}
					</Card.Text>
					{/* <Buttons buttonLabel="Shop" buttonLink="/shop" class="button-style button-dark"></Buttons> */}
				</Card.ImgOverlay>
			</Card>
		);
	}
}

export default IntroCardDarkMore;
