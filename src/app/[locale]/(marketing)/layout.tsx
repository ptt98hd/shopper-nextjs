import { Header } from "./header";
import { Footer } from "./footer";
import { SettingsButton } from "./floating";

export default function MarketingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="">{children}</main>
			<Footer />
			<SettingsButton />
		</div>
	);
}
