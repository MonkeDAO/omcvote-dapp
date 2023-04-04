import { proposals } from './data.js';

export function load({ params }) {
	const proposal = proposals.find((proposal) => proposal.id === params.slug);

	// if (!proposal) throw error(404);

	if (!proposal) {
		return {
			data: "hi"
		}
	}
    console.log("yep?");
	return {
		proposal
	};
}
