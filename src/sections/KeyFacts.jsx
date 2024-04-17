import KeyFactsTableSmall from "../components/key_facts/KeyFactsTableSmall";
import KeyFactsTableLarge from "../components/key_facts/KeyFactsTableLarge";

export default function KeyFacts() {
	return(
		<div className="py-[25px] px-[20px] md:px-[50px] leading-normal h-screen flex flex-col">
			<p className="leading-none font-inter font-semibold text-medium mb-5 md:pb-[25px]">KEY FACTS</p>

			<KeyFactsTableSmall />
			<KeyFactsTableLarge />
		</div>
	);
}