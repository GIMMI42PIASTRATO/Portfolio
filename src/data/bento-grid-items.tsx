import BentoImg from "@/app/components/BentoGrid/BentoImg/BentoImg";
import {
	IconArrowWaveRightUp,
	IconBoxAlignRightFilled,
	IconBoxAlignTopLeft,
	IconHexagonNumber6,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from "@tabler/icons-react";
import { link } from "fs";

export const items = [
	{
		title: "*NIST User Interface",
		description:
			"Ancient wisdom meets modern technology in this innovative interface.",
		header: <BentoImg img="nist_ui.png" />,
		icon: <IconHexagonNumber6 className="h-4 w-4 text-neutral-500" />,
		link: "https://the-next-generation-mnist-challenge.vercel.app/",
	},
	{
		title: "The Digital Revolution",
		description: "Dive into the transformative power of technology.",
		header: <BentoImg img="keyboard-image.jpeg" />,
		icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
		link: "#",
	},
	{
		title: "The Art of Design",
		description: "Discover the beauty of thoughtful and functional design.",
		header: <BentoImg img="keyboard-image.jpeg" />,
		icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
		link: "#",
	},
	{
		title: "The Power of Communication",
		description:
			"Understand the impact of effective communication in our lives.",
		header: <BentoImg img="keyboard-image.jpeg" />,
		icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
		link: "#",
	},
	{
		title: "The Pursuit of Knowledge",
		description: "Join the quest for understanding and enlightenment.",
		header: <BentoImg img="keyboard-image.jpeg" />,
		icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
		link: "#",
	},
	{
		title: "The Joy of Creation",
		description: "Experience the thrill of bringing ideas to life.",
		header: <BentoImg img="keyboard-image.jpeg" />,
		icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
		link: "#",
	},
	{
		title: "The Spirit of Adventure",
		description: "Embark on exciting journeys and thrilling discoveries.",
		header: <BentoImg img="keyboard-image.jpeg" />,
		icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
		link: "#",
	},
];
