import React, { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
	href: string;
}

export const HomeTile: React.FC<PropsWithChildren<Props>> = ({ children, href }) => {
	return (
		<Link href={href} className="flex-1">
			<div className="flex flex-col transition-all hover:scale-[1.01] hover:shadow-2xl cursor-pointer h-full">
				<div className="relative h-40">
					<Image alt="splash video placeholder" src="/images/home-1.jpeg" fill />
				</div>
				<div>{children}</div>
			</div>
		</Link>
	);
};
