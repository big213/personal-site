import { executeApiRequest } from '$lib/services/api';

export async function load({ params }) {
	return executeApiRequest({
		getArticle: {
			id: true,
			imageUrl: true,
			title: true,
			content: true,
			createdAt: true,
			updatedAt: true,
			__args: {
				handle: params.handle
			}
		}
	}).then((res) => ({
		article: res
	}));
}
