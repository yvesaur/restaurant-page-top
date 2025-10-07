import menuIcon from "../../assets/imgs/menu.svg";
import deliveryIcon from "../../assets/imgs/moped.svg";
import "./contact.css";

function generateContactPage() {
	return `
    <p class="contact-desc">
				Have questions or need support? Our team is here to help—reach out to us
				anytime and we’ll get back to you as soon as possible.
			</p>
			<div class="contact-info">
				<div class="delivery-contact flex-column">
					<h2>
						<img
							src="${deliveryIcon}"
							alt="Delivery icon" />
						Delivery Concerns
					</h2>
					<p>+1 (202) 555-0134</p>
					<p>+44 7700 900123</p>
					<p>+63 917 123 4567</p>
					<p>+61 412 345 678</p>
				</div>
				<div class="food-contact flex-column">
					<h2>
						<img
							src="${menuIcon}"
							alt="Menu icon" />Food Inquiries
					</h2>
					<p>+1 (202) 555-0134</p>
					<p>+44 7700 900123</p>
					<p>+63 917 123 4567</p>
					<p>+61 412 345 678</p>
				</div>
			</div>
  
  `;
}

export default generateContactPage;
