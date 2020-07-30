import { createRecipe } from './recipes'
import { renderRecipes } from './views'

renderRecipes()

document.querySelector('#recipe-add-btn').addEventListener('click', () => {
	let id = createRecipe()
	location.assign(`/edit.html#${id}`)
})
