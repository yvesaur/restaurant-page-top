import "./menu.css";

function generateMenuPage() {
	return `
    	<div class="food-card">
				<img
					src="https://images.unsplash.com/photo-1581073766947-e8f3ef5393a4?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Image of Frish & Chips" />
				<div class="info">
					<div class="heading">
						<h2>Fries & Chips</h2>
						<p class="price">$199</p>
					</div>
					<p class="desc">
						Non cursus interdum scelerisque bibendum pellentesque amet duis
						egestas e nibh.
					</p>
				</div>
			</div>
			<div class="food-card">
				<img
					src="https://plus.unsplash.com/premium_photo-1667682942148-a0c98d1d70db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Image of Pepperoni Pizza" />
				<div class="info">
					<div class="heading">
						<h2>Pepperoni Pizza</h2>
						<p class="price">$499</p>
					</div>
					<p class="desc">
						A classic favorite featuring a crispy crust, zesty tomato sauce,
						melted mozzarella, and plenty of spicy pepperoni slices.
					</p>
				</div>
			</div>
			<div class="food-card">
				<img
					src="https://plus.unsplash.com/premium_photo-1677686707294-e5f616c39e0b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Image of Tomato Bread" />
				<div class="info">
					<div class="heading">
						<h2>Tomato Bread</h2>
						<p class="price">$249</p>
					</div>
					<p class="desc">
						Freshly toasted bread topped with ripe, juicy tomatoes and a drizzle
						of olive oil for a simple Italian classic.
					</p>
				</div>
			</div>
  `;
}

export default generateMenuPage;
