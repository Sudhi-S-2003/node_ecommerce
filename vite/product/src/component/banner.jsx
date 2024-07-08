import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';
import lap from "../assets/lap.jfif"

export default function App() { 
return ( 
	<div style={{ display: 'block', width: '100%' }}> 
	<Carousel> 
		<Carousel.Item interval={1500}> 
		<img className="d-block w-100" style={{height:"600px"}} src={lap} alt="Image One"/> 
		<Carousel.Caption> 
			<h3>Label for first slide</h3> 
			<p>Sample Text for Image One</p> 
		</Carousel.Caption> 
		</Carousel.Item> 
		<Carousel.Item interval={500}> 
		<img className="d-block w-100" style={{height:"600px"}} src={lap} alt="Image One"/> 
		<Carousel.Caption> 
			<h3>Label for second slide</h3> 
			<p>Sample Text for Image Two</p> 
		</Carousel.Caption> 
		</Carousel.Item> 
	</Carousel> 
	</div> 
); 
}
