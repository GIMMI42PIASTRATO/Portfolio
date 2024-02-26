import { cn } from "../../utils/cn";
import PropTypes from "prop-types";

export const BentoGrid = ({ className, children }) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
				className
			)}
		>
			{children}
		</div>
	);
};

BentoGrid.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export const BentoGridItem = ({
	className,
	title,
	description,
	header,
	icon,
}) => {
	return (
		<div
			className={cn(
				"row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
				className
			)}
		>
			{header}
			<div className="group-hover/bento:translate-x-2 transition duration-200">
				{icon}
				<div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
					{title}
				</div>
				<div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
					{description}
				</div>
			</div>
		</div>
	);
};

BentoGridItem.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	header: PropTypes.node,
	icon: PropTypes.node,
};
