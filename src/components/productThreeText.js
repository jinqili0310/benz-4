import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class ProductThreeText extends Component {
	state = {};
	render() {
		return (
			<Form.Group className="intro-text-three">
				<Form.Row>
					<Form.Label>
						<b>GLC SUV</b>
					</Form.Label>
				</Form.Row>
                <br />
                <Form.Row>
					<Form.Label>
						The head of the class leaps ahead.
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
                        Benchmarks can't be benched. So the standard-setting GLC SUV enters 2020 with sleeker style and smarter tech. All-LED lighting helps you see and be seen. Fresh details, clean lines and sporty proportions make sure you look great, too.
					</Form.Label>
                </Form.Row>
                <br />
				<Form.Row>
					<Form.Label>
						<b>PERFORMANCE</b>
					</Form.Label>
                </Form.Row>
                <Form.Row>
					<Form.Label>
						The turbo GLC 300 and plug-in hybrid GLC 350e with EQ Power are both energetic and energy-conscious. They embrace the road and your passion for driving with composed comfort and a feeling of confident control. And they reassert the "sport" in SUV.
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
						The GLC's new intelligent voice assistant turns conversational language into cockpit control. The richly tailored cabin wraps state-of-the-art innovation in artful design, pairing sensible benefits with sensory delights.
					</Form.Label>
				</Form.Row>
			</Form.Group>
		);
	}
}

export default ProductThreeText;
