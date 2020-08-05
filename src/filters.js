const filter = {
	searchText: '',
}

const getFilter = () => filter

const setFilter = (updates) => {
	if (typeof updates.searchText === 'string') {
		filter.searchText = updates.searchText
	}
}

export { getFilter, setFilter }
