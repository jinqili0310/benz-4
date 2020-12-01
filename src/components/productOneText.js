import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class ProductOneText extends Component {
	state = {};
	render() {
		return (
			<Form.Group className="intro-text-one">
				<Form.Row>
					<Form.Label>
						<b>The all-new 2021 GLA SUV</b>
					</Form.Label>
				</Form.Row>
                <br />
                <Form.Row>
					<Form.Label>
						Drive further. Ride higher. Live better.
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
                        More than a commanding view of the road ahead, the new second-generation GLA offers a rewarding view of what's next. It not only puts more sport in compact SUVs, it puts more you.
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
						From a tight corner of the city, to a tight corner of a back road, the GLA is agile and easy to maneuver. Turbo power and a solid stance make it quick on its feet, confident in your hands.
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
						People are talking. The Mercedes-Benz User Experience (MBUX) drives a new generation of user-friendly tech. Its natural, intuitive speech interface is easy to learn because it can learn you.
					</Form.Label>
				</Form.Row>
			</Form.Group>
		);
	}
}

export default ProductOneText;
