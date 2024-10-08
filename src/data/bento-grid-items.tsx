import BentoImg from "@/app/components/BentoGrid/BentoImg/BentoImg";
import {
	IconLock,
	IconHexagonNumber6,
	IconDeviceLaptop,
	IconDeviceMobile,
	IconTableColumn,
	IconQuote,
} from "@tabler/icons-react";

type Item = {
	title: string;
	description: string;
	header: JSX.Element | JSX.Element[];
	icon: JSX.Element;
	link: string;
};

export const items: Item[] = [
	{
		title: "*NIST User Interface",
		description:
			"Ancient wisdom meets modern technology in this innovative interface.",
		header: <BentoImg img="nist_ui.png" />,
		icon: <IconHexagonNumber6 className="h-4 w-4 text-neutral-500" />,
		link: "https://the-next-generation-mnist-challenge.vercel.app/",
	},
	{
		title: "Desktop App Development in Python",
		description: "All my Python app projects in one place.",
		header: <BentoImg img="python_ctkinter.png" />,
		icon: <IconDeviceLaptop className="h-4 w-4 text-neutral-500" />,
		link: "https://github.com/GIMMI42PIASTRATO/learning-tkinter",
	},
	{
		title: "Mobile App Development in Kotlin",
		description: "Explore the world of mobile app development with Kotlin.",
		header: <BentoImg img="kotlin_android.png" />,
		icon: <IconDeviceMobile className="h-4 w-4 text-neutral-500" />,
		link: "#",
	},
	{
		title: "Emulshroom™",
		description: "E-commerce platform for ECO mushrooms emulsifiers.",
		header: <BentoImg img="Emulshroom.png" />,
		icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
		link: "https://emulshroom.vercel.app/",
	},
	{
		title: "quotify.io",
		description:
			"UNDER DEVELOPMENT: quotify.io is a modern SaaS platform that allows you to create beautiful quotes with various styles, download them for free, and even purchase a printed version to be delivered right to your doorstep",
		header: [
			<BentoImg img="quotify.png" key={1} />,
			<BentoImg img="quotify-phone.png" key={2} />,
		],
		icon: <IconQuote className="h-4 w-4 text-neutral-500" />,
		link: "https://github.com/GIMMI42PIASTRATO/quotify.io",
	},
	{
		title: "Text Vault",
		description:
			"Secure your text messages with this powerful encryption tool.",
		header: <BentoImg img="textvault.png" />,
		icon: <IconLock className="h-4 w-4 text-neutral-500" />,
		link: "https://github.com/GIMMI42PIASTRATO/TextVault",
	},
];
