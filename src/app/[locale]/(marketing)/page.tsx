import { Container } from "@/components/layout/container";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { metadata } from "../layout";

metadata.title = "Home | Shopper";
// metadata.

export default function Home() {
	const t = useTranslations("marketing.home-page");

	return (
		<Container className="py-12">
			<div className="space-y-6 text-center my-auto">
				<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
					{t("hero.title")}
				</h1>
				<p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
					{t("hero.description")}
				</p>
				<div className="flex justify-center gap-4">
					<Link
						href="/shopping"
						className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
					>
						{t("hero.shop-now")}
					</Link>
					<Link
						href="/seller"
						className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
					>
						{t("hero.sell-now")}
					</Link>
				</div>
			</div>
		</Container>
	);
}
