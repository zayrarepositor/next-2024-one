import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ItemsTypes } from "../types";
import { ActiveLink } from "../active_link/ActiveLink";

const tabItems: ItemsTypes[] = [
	{ path: "/about", text: "About" },
	{ path: "/pricing", text: "Pricing" },
	{ path: "/contact", text: "Contact" },
];

export const Navbar = () => {
	return (
		<nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
			{/* home */}
			<Link href={"/"} className="flex items-center">
				<HomeIcon className="mr-2" />
				<span>Navbar</span>
			</Link>
			{/* div to fill the gap */}
			<div className="flex flex-1"></div>
			{/* public tabs */}
			{tabItems.map(({ path, text }: ItemsTypes) => (
				<ActiveLink key={path} path={path} text={text} />
			))}
		</nav>
	);
};
