import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import cx from "classnames";
import { Logo } from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const linkStyle =
	"text-lg font-bold tracking-widest transition-all border-b-2 border-transparent hover:!border-white";

const mobileStyle = "py-2";

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const router = useRouter();
	const path = router.pathname;

	return (
		<header className="py-10 flex justify-between items-end">
			<div
				hidden={!isMenuOpen}
				className="lg:hidden fixed h-screen w-screen top-0 left-0 z-10 bg-background p-10"
			>
				<div className="flex justify-between items-center w-full mb-4">
					<h1 className="flex gap-4">
						<Logo />
						<div className="text-3xl font-bold tracking-widest">ONE / 24</div>
					</h1>
					<div
						onClick={() => setIsMenuOpen((o) => !o)}
						className="w-[1.875rem] lg:hidden ml-auto"
					>
						<FontAwesomeIcon icon={faTimes} />
					</div>
				</div>
				<div className="flex flex-col gap-2 text-center">
					<Link
						href="/"
						className={cx(linkStyle, mobileStyle, {
							"!bg-white text-background": path === "/",
						})}
					>
						Home
					</Link>
					<Link
						href="/visual"
						className={cx(linkStyle, mobileStyle, {
							"!bg-white text-background": path === "/visual",
						})}
					>
						Visual
					</Link>
					<Link
						href="/music"
						className={cx(linkStyle, mobileStyle, {
							"!bg-white text-background": path === "/music",
						})}
					>
						Music
					</Link>
					<Link
						href="/word"
						className={cx(linkStyle, mobileStyle, {
							"!bg-white text-background": path === "/word",
						})}
					>
						Word
					</Link>
					<Link
						href="/about"
						className={cx(linkStyle, mobileStyle, {
							"!bg-white text-background": path === "/about",
						})}
					>
						About
					</Link>
				</div>
			</div>
			<div className="flex justify-between items-center w-full">
				<h1 className="flex gap-4">
					<Logo />
					<div className="text-3xl font-bold tracking-widest">ONE / 24</div>
				</h1>
				<div onClick={() => setIsMenuOpen((o) => !o)} className="w-[1.875rem] lg:hidden">
					<FontAwesomeIcon icon={faBars} />
				</div>
			</div>
			<div className="flex gap-8 max-lg:hidden">
				<Link href="/" className={cx(linkStyle, { "!border-white": path === "/" })}>
					Home
				</Link>
				<Link
					href="/visual"
					className={cx(linkStyle, { "!border-white": path === "/visual" })}
				>
					Visual
				</Link>
				<Link
					href="/music"
					className={cx(linkStyle, { "!border-white": path === "/music" })}
				>
					Music
				</Link>
				<Link href="/word" className={cx(linkStyle, { "!border-white": path === "/word" })}>
					Word
				</Link>
				<Link
					href="/about"
					className={cx(linkStyle, { "!border-white": path === "/about" })}
				>
					About
				</Link>
			</div>
		</header>
	);
};
