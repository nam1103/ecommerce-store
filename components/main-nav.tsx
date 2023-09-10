"use client";

import { cn } from "@/libs/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
	data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
	const pathname = usePathname();

	const routes = data.map((route) => ({
		href: `/category/${route.id}`,
		label: route.name,
		active: pathname === `/category/${route.id}`,
	}));

	return (
		<div className="mx-6 flex items-center space-x-4 lg:space-x-6">
			{routes.map((route) => (
				<Link
					href={route.href}
					key={route.href}
					className={cn(
						"text-sm font-medium transition-colors hover:text-black",
						route.active ? "text-black" : "text-neutral-500"
					)}
				>
					{route.label}
				</Link>
			))}
			<Link
				href="http://localhost:3000"
				className="text-sm p-2 ml-10 rounded-lg hover:bg-neutral-100 transition"
			>
				Create Your Store
			</Link>
		</div>
	);
};

export default MainNav;
