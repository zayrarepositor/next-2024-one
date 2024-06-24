import { Navbar } from "@/components";

export default function PTabsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			<main className="flex flex-col items-center p-24">
				<span className="text-lg">Hola</span>
				{children}
			</main>
		</>
	);
}
