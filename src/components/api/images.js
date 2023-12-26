import { api } from './api'


export const getAllImages = async (page, value) => {
	let url = `api/?key=40315175-cc9353fc56e9f03e64344f082&image_type=photo&per_page=12&page=${page}`;

	if (value) {
		url += `&q=${value}`;
	}

	const { data } = await api(url)
	return data
}
