"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ItemsTypes } from "../types";

import style from "../styles.module.css";

export const ActiveLink = ({ path, text }: ItemsTypes) => {
	// Get page path
	const pathName = usePathname();

	return (
		<Link
			className={`${style.link} ${pathName === path && style["active-link"]}`}
			href={path}
		>
			{text}
		</Link>
	);
};
