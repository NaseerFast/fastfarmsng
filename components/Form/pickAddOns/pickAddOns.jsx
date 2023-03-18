import utilStyles from "../../../styles/Utils.module.css";
import AddOnsCheckbox from "./addOnsCheckbox";

export default function PickAddOns({ addOns, setAddOns, yearly }) {
	const checkboxData = [
		{
			isChecked: addOns["Online service"],
			title: "Dressing",
			description: "Access to multiplayer games",
			price: 200,
		},
		{
			isChecked: addOns["Larger storage"],
			title: "Cutting ",
			description: "Extra 1TB of cloud save",
			price: 200,
		},
		{
			isChecked: addOns["Customizable profile"],
			title: "Delivery",
			description: "Custom theme on your profile",
			price: 300,
		},
	];
	function updateAddOns(nextAddOns, isChecked) {
		setAddOns({
			...addOns,
			[`${nextAddOns}`]: !isChecked,
		});
	}
	return (
		<>
			<h1 className={`${utilStyles.title} ${utilStyles.colorText}`}>
				Pick add-ons
			</h1>
			<fieldset className={utilStyles.noBorder}>
				<legend className={utilStyles.description}>
					Add-ons help enhance your gaming experience.
				</legend>

				{checkboxData.map((c) => {
					return (
						<AddOnsCheckbox
							key={c.title}
							isChecked={c.isChecked}
							title={c.title}
							description={c.description}
							price={c.price}
							updateAddOns={updateAddOns}
							yearly={yearly}
						/>
					);
				})}
			</fieldset>
		</>
	);
}