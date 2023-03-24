import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import cx from "classnames";
import { Logo } from "./Logo";

const linkStyle =
	"text-lg font-bold tracking-widest transition-all border-b-2 border-transparent hover:!border-white";

export const Header = () => {
	const router = useRouter();
	const path = router.pathname;

	return (
		<header className="py-10 flex justify-between items-end">
			<h1 className="flex gap-4">
				<Logo />
				<div className="text-3xl font-bold tracking-widest">ONE / 24</div>
			</h1>
			<div className="flex gap-8">
				<Link href="/" className={cx(linkStyle, { "!border-white": path === "/" })}>
					Home
				</Link>
				<Link href="/visual" className={cx(linkStyle, { "!border-white": path === "/visual" })}>
					Visual
				</Link>
				<Link href="/music" className={cx(linkStyle, { "!border-white": path === "/music" })}>
					Music
				</Link>
				<Link href="/word" className={cx(linkStyle, { "!border-white": path === "/word" })}>
					Word
				</Link>
				<Link href="/about" className={cx(linkStyle, { "!border-white": path === "/about" })}>
					About
				</Link>
			</div>
		</header>
	);
};
