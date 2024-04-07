import { executeApiRequest } from '$lib/services/api';

export async function load() {
	return executeApiRequest({
		getArticle: {
			id: true,
			imageUrl: true,
			title: true,
			content: true,
			createdAt: true,
			updatedAt: true,
			__args: {
				handle: 'me'
			}
		}
	}).then((res) => ({
		article: res
	}));
}
