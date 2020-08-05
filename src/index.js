import { createRecipe } from './recipes'
import { renderRecipes } from './views'
import { setFilter } from './filters'

renderRecipes()

document.querySelector('#recipe-add-btn').addEventListener('click', () => {
	let id = createRecipe()
	location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
	setFilter({
		searchText: e.target.value,
	})
	renderRecipes()
})
