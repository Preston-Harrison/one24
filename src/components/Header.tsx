import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import cx from "classnames";

const linkStyle =
	"text-lg font-bold tracking-widest transition-all border-b-2 border-transparent hover:!border-white";

export const Header = () => {
	const router = useRouter();
	const path = router.pathname;

	return (
		<header className="py-10 flex justify-between items-end">
			<h1 className="text-4xl font-bold tracking-widest">One/24</h1>
			<div className="flex gap-8">
				<Link href="#" className={cx(linkStyle, { "!border-white": path === "/" })}>
					Home
				</Link>
				<Link href="#" className={cx(linkStyle, { "!border-white": path === "/about" })}>
					About
				</Link>
			</div>
		</header>
	);
};
