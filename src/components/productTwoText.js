import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class ProductTwoText extends Component {
	state = {};
	render() {
		return (
			<Form.Group className="intro-text-two">
				<Form.Row>
					<Form.Label>
						<b>The all-new GLB SUV</b>
					</Form.Label>
				</Form.Row>
                <br />
                <Form.Row>
					<Form.Label>
						Upright design. Downright sporty. And just right for everything you do.
					</Form.Label>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label>
						<b>DESIGN</b>
					</Form.Label>
				</Form.Row>
				<Form.Row>
					<Form.Label>
                        Has any SUV ever fit so much into such a compact package? Accommodating, with seating for up to seven. Rugged in all the right places, with looks to match. So intelligent it can carry on a conversation, and carry out your wishes. And all priced to please.
					</Form.Label>
                </Form.Row>
                <br />
				<Form.Row>
					<Form.Label>
						<b>VERSATILITY</b>
					</Form.Label>
                </Form.Row>
                <Form.Row>
					<Form.Label>
						It can take you new places, or make old favorite roads feel fresh. It can take up to six of your friends, or make easy work of the weekend chores. And wherever you take it, it'll do more than you expect to make every mile memorable.
					</Form.Label>
				</Form.Row>
				<br />
				<Form.Row>
					<Form.Label>
						<b>INNOVATION</b>
					</Form.Label>
                </Form.Row>
                <Form.Row>
					<Form.Label>
						If you like how the GLB looks, you'll love how it listens. The Mercedes-Benz User Experience is your own in-car personal assistant. Just say what you want, and your wish is literally your GLB's command. MBUX can quietly respond to your touch, too.
					</Form.Label>
				</Form.Row>
			</Form.Group>
		);
	}
}

export default ProductTwoText;
