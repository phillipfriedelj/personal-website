import KeyFactsTableSmall from "../components/key_facts/KeyFactsTableSmall";
import KeyFactsTableLarge from "../components/key_facts/KeyFactsTableLarge";

export default function KeyFacts() {
	return(
		<div className="py-[25px] px-[50px] leading-normal h-screen flex flex-col">
			<p className="leading-none font-inter font-medium text-large mb-3 md:pb-[45px]">Key Facts</p>

			<KeyFactsTableSmall />
			<KeyFactsTableLarge />
		</div>
	);
}