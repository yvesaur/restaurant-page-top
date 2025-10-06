import locationIcon from "../../assets/imgs/location.svg";
import "./home.css";

function generateHomepage() {
	const MAPIMAGE =
		"https://images.unsplash.com/photo-1584972191378-d70853fc47fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

	return `
      <div class="home-introduction">
				<p>
					Welcome to Dewy Berry, where the rich flavors of Italy come alive in
					every dish. From handcrafted pastas to wood-fired pizzas, we serve
					fresh, authentic meals made to bring people together.
				</p>
				<p>
					At Dewy Berry, we bring you the warmth and flavor of authentic Italian
					cuisine in a cozy, welcoming atmosphere. Join us on weekdays from 11
					AM to 10 PM and savor every moment with us.
				</p>
			</div>
			<table class="operating-hours-table">
				<thead>
					<tr>
						<th colspan="2">Operating Hours</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Monday</td>
						<td>11am - 10pm</td>
					</tr>
					<tr>
						<td>Tuesday</td>
						<td>11am - 10pm</td>
					</tr>
					<tr>
						<td>Wednesday</td>
						<td>11am - 10pm</td>
					</tr>
					<tr>
						<td>Thursday</td>
						<td>11am - 10pm</td>
					</tr>
					<tr>
						<td>Friday</td>
						<td>11am - 10pm</td>
					</tr>
					<tr class="closed">
						<td>Saturday</td>
						<td>Closed</td>
					</tr>
					<tr class="closed">
						<td>Sunday</td>
						<td>Closed</td>
					</tr>
				</tbody>
			</table>
			<div class="reservation flex-column">
				<p>
					Reserve your table at Dewy Berry to enjoy an authentic Italian dining
					experience without the wait. Booking is quick and easy—secure your
					spot by clicking the button below.
				</p>
				<button class="primary-btn reservation-btn">Book a Reservation</button>
			</div>
			<div class="location">
				<h2>
					<img
						src="${locationIcon}"
						alt="location icon" />
					<p>Location</p>
				</h2>
				<img
					src="${MAPIMAGE}"
					alt="Location of Dewy Berry" />
			</div>
  `;
}

export default generateHomepage;
