import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Page",
	description: "Contact Page",
	keywords: ["next", "next project", "zayra velasco rosillo", "developer"],
};

export default function ContactPage() {
	return (
		<>
			<span className="text-7xl">Contact</span>
		</>
	);
}
