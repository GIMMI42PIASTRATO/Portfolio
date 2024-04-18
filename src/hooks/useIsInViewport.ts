import { useState, useEffect, RefObject } from "react";

// Hook to check if an element is in viewport
function useIsInViewport(
	ref: RefObject<HTMLElement>,
	rootMargin: string = "0px"
): boolean {
	const [isInViewport, setIsInViewport] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// Update our state when observer callback fires
				setIsInViewport(entry.isIntersecting);
			},
			{ rootMargin }
		);
		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref, rootMargin]); // Only re-run effect if ref or rootMargin changes

	return isInViewport;
}

export default useIsInViewport;
