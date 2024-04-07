import { executeApiRequest } from '$lib/services/api';

export async function load() {
	return executeApiRequest({
		getNavigationItemPaginator: {
			edges: {
				node: {
					id: true,
					path: true,
					article: {
						id: true,
						handle: true
					},
					text: true
				}
			},
			__args: {
				first: 10,
				sortBy: [
					{
						field: 'sortIndex',
						desc: false
					}
				]
			}
		}
	}).then((res) => ({
		layout: res
	}));
}
