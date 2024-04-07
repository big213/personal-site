import { BACKEND_API_KEY } from '$env/static/private';

export async function executeApiRequest(query: any) {
	return fetch('https://api.j8g.com/giraffeql', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': BACKEND_API_KEY
		},
		body: JSON.stringify(query)
	})
		.then((res) => res.json())
		.then((res) => res.data);
}
