import { updateRecipe } from './recipes'
import { initializeEditPage } from './views'

const titleEl = document.querySelector('#recipe-title')
const bodyEl = document.querySelector('#recipe-body')
const recipeId = location.hash.substring(1)

initializeEditPage(recipeId)

titleEl.addEventListener('input', (e) => {
	updateRecipe(recipeId, {
		title: e.target.value,
	})
})

bodyEl.addEventListener('input', (e) => {
	updateRecipe(recipeId, {
		body: e.target.value,
	})
})
