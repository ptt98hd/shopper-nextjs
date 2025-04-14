"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslations } from "next-intl";

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const isMobile = useIsMobile();

	const t = useTranslations("marketing.layout.header");
	const navItems = [
		{ label: t("home"), href: "/" },
		{ label: t("about"), href: "/about" },
		{ label: t("contact"), href: "/contact" },
	];

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md mb-auto">
			<Container>
				<div className="flex h-16 items-center justify-between">
					{/* Logo and desktop navigation */}
					<div className="flex items-center gap-6">
						<Link href="/" className="flex items-center gap-2">
							{/* <ShoppingBag className="h-6 w-6" /> */}
							<span className="text-lg font-bold">Shopper</span>
						</Link>
						{!isMobile && (
							<nav className="flex items-center gap-6">
								{navItems.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className="text-sm font-medium transition-colors hover:text-primary"
									>
										{item.label}
									</Link>
								))}
							</nav>
						)}
					</div>

					{/* Desktop auth buttons */}
					{!isMobile && (
						<div className="flex items-center gap-4">
							<Button variant="ghost" asChild>
								<Link href="/login">{t("login")}</Link>
							</Button>
							<Button asChild>
								<Link href="/signup">{t("signup")}</Link>
							</Button>
						</div>
					)}

					{/* Mobile menu button */}
					{isMobile && (
						<button
							type="button"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
						>
							{mobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					)}
				</div>

				{/* Mobile menu */}
				{isMobile && mobileMenuOpen && (
					<div className="border-t py-4">
						<nav className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="text-sm font-medium transition-colors hover:text-primary"
									onClick={() => setMobileMenuOpen(false)}
								>
									{item.label}
								</Link>
							))}
							<div className="flex flex-col gap-2 pt-2">
								<Button variant="outline" asChild className="w-full">
									<Link href="/login">{t("login")}</Link>
								</Button>
								<Button asChild className="w-full">
									<Link href="/signup">{t("signup")}</Link>
								</Button>
							</div>
						</nav>
					</div>
				)}
			</Container>
		</header>
	);
}
