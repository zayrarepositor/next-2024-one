import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Page",
	description: "About Page",
	keywords: ["next", "next project", "zayra velasco rosillo", "developer"],
};

export default function AboutPage() {
	return (
		<>
			<span className="text-7xl">About</span>
		</>
	);
}
