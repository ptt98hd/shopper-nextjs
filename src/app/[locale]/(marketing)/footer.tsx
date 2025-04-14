import Link from "next/link";
import {
	ShoppingBag,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export function Footer() {
	const currentYear = new Date().getFullYear();
	const t = useTranslations("marketing.layout.footer");

	return (
		<footer className="bg-muted/40 border-t mt-auto">
			<Container>
				<div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<Link href="/" className="flex items-center gap-2">
							<ShoppingBag className="h-6 w-6" />
							<span className="text-lg font-bold">Shopper</span>
						</Link>
						<p className="text-sm text-muted-foreground">{t("hero")}</p>
						<div className="flex items-center gap-4">
							<Button
								size="icon"
								variant="ghost"
								className="h-8 w-8 rounded-full"
								asChild
							>
								<Link href="#" aria-label="Facebook">
									<Facebook className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								size="icon"
								variant="ghost"
								className="h-8 w-8 rounded-full"
								asChild
							>
								<Link href="#" aria-label="Twitter">
									<Twitter className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								size="icon"
								variant="ghost"
								className="h-8 w-8 rounded-full"
								asChild
							>
								<Link href="#" aria-label="Instagram">
									<Instagram className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								size="icon"
								variant="ghost"
								className="h-8 w-8 rounded-full"
								asChild
							>
								<Link href="#" aria-label="LinkedIn">
									<Linkedin className="h-4 w-4" />
								</Link>
							</Button>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h3 className="text-sm font-medium">{t("quick-links")}</h3>
						<nav className="flex flex-col space-y-2">
							<Link
								href="/"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								{t("home")}
							</Link>
							<Link
								href="/about"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								{t("about")}
							</Link>
							<Link
								href="/contact"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								{t("contact")}
							</Link>
						</nav>
					</div>

					{/* Contact Info */}
					<div className="space-y-4">
						<h3 className="text-sm font-medium">{t("contact-us")}</h3>
						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
								<span className="text-sm text-muted-foreground">
									123 Shopping Street, Retail District, City, Country
								</span>
							</div>
							<div className="flex items-center gap-3">
								<Phone className="h-4 w-4 text-muted-foreground" />
								<span className="text-sm text-muted-foreground">
									+1 (555) 123-4567
								</span>
							</div>
							<div className="flex items-center gap-3">
								<Mail className="h-4 w-4 text-muted-foreground" />
								<span className="text-sm text-muted-foreground">
									support@shoppe.com
								</span>
							</div>
						</div>
					</div>

					{/* Newsletter */}
					<div className="space-y-4">
						<h3 className="text-sm font-medium">{t("subscribe-title")}</h3>
						<p className="text-sm text-muted-foreground">
							{t("subscribe-message")}
						</p>
						<div className="flex gap-2">
							<Input
								type="email"
								placeholder={t("subscribe-placeholder")}
								className="h-9"
								aria-label="Email for newsletter"
							/>
							<Button size="sm">{t("subscribe-button")}</Button>
						</div>
					</div>
				</div>

				<Separator />

				{/* Bottom Footer */}
				<div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-muted-foreground">
						© {currentYear} Shopper. {t("copyright")}.
					</p>
					<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
						<Link
							href="/privacy"
							className="hover:text-foreground transition-colors"
						>
							{t("privacy-policy")}
						</Link>
						<Link
							href="/terms"
							className="hover:text-foreground transition-colors"
						>
							{t("terms-of-service")}
						</Link>
						<Link
							href="/cookies"
							className="hover:text-foreground transition-colors"
						>
							{t("cookies-policy")}
						</Link>
					</div>
				</div>
			</Container>
		</footer>
	);
}
