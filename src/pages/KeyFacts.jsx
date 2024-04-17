import KeyFactsTableSmall from "../components/key_facts/KeyFactsTableSmall";
import KeyFactsTableLarge from "../components/key_facts/KeyFactsTableLarge";

export default function KeyFacts() {
	return(
		<div className="py-[75px] px-[20px] md:px-[50px] leading-normal flex flex-col">
			<p className="leading-none font-inter font-semibold text-[30px] mb-5">KEY FACTS</p>

			<KeyFactsTableSmall />
			<KeyFactsTableLarge />
		</div>
	);
}