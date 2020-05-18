import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_UDSy9JNhGbKE8n1248rXqvlY00jXcaCkgt";

	const onToken = async (token) => {
		try {
			await axios({
				url: "payment",
				method: "post",
				data: {
					amount: priceForStripe,
					token,
				},
			});
			alert("Payment successful!");
		} catch (error) {
			console.log("Payment error: ", JSON.parse(error));
			alert(
				"There was an issue with your payment. Please make sure you use provided credit card."
			);
		}
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
