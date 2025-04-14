"use client";

import { useState } from "react";
import { Settings, Monitor, Moon, Sun, X, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SettingsButton() {
	const [isOpen, setIsOpen] = useState(false);
	const { theme, setTheme } = useTheme();
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const t = useTranslations("marketing.layout.floating.settings");

	const changeLanguage = (newLocale: string) => {
		router.replace(pathname, { locale: newLocale });
	};

	return (
		<>
			<Button
				data-settings-button
				variant="outline"
				size="icon"
				className="fixed bottom-4 right-4 h-10 w-10 rounded-full shadow-md bg-background z-50"
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? <X className="h-4 w-4" /> : <Settings className="h-4 w-4" />}
			</Button>

			{isOpen && (
				<Card
					data-settings-panel
					className="fixed bottom-16 right-4 w-80 shadow-lg z-50 border border-border animate-in fade-in-50 slide-in-from-bottom-10"
				>
					<CardHeader className="pb-3 border-b">
						<CardTitle>{t("title")}</CardTitle>
					</CardHeader>
					<CardContent className="space-y-6">
						{/* Theme Selection */}
						<div className="space-y-2">
							<h3 className="text-sm font-medium">{t("theme.title")}</h3>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline" className="w-full justify-between">
										{theme === "light" && (
											<>
												<Sun className="h-4 w-4 mr-2" />
												{t("theme.light")}
											</>
										)}
										{theme === "dark" && (
											<>
												<Moon className="h-4 w-4 mr-2" />
												{t("theme.dark")}
											</>
										)}
										{theme === "system" && (
											<>
												<Monitor className="h-4 w-4 mr-2" />
												{t("theme.system")}
											</>
										)}
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end" className="w-[200px]">
									<DropdownMenuItem onClick={() => setTheme("light")}>
										<Sun className="h-4 w-4 mr-2" />
										{t("theme.light")}
									</DropdownMenuItem>
									<DropdownMenuItem onClick={() => setTheme("dark")}>
										<Moon className="h-4 w-4 mr-2" />
										{t("theme.dark")}
									</DropdownMenuItem>
									<DropdownMenuItem onClick={() => setTheme("system")}>
										<Monitor className="h-4 w-4 mr-2" />
										{t("theme.system")}
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>

						{/* Language Selection */}
						<div className="space-y-2">
							<h3 className="text-sm font-medium">{t("language.title")}</h3>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline" className="w-full justify-between">
										<Globe className="h-4 w-4 mr-2" />
										{locale === "en"
											? t("language.english")
											: t("language.vietnamese")}
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end" className="w-[200px]">
									<DropdownMenuItem onClick={() => changeLanguage("en")}>
										{t("language.english")}
									</DropdownMenuItem>
									<DropdownMenuItem onClick={() => changeLanguage("vi")}>
										{t("language.vietnamese")}
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</CardContent>
				</Card>
			)}
		</>
	);
}
