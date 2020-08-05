import { recipeId } from './views'
import { getRecipes } from './recipes'

const initializeSummeryPage = (recipeId) => {
	const summTitleEl = document.querySelector('#summery__title')
	const bodyEl = document.querySelector('#instructions')

	const recipes = getRecipes()
	const recipe = recipes.find((recipe) => recipe.id === recipeId)

	if (!recipe) {
		location.assign('/index.html')
	}

	summTitleEl.textContent = recipe.title
	bodyEl.textContent = recipe.body
}

initializeSummeryPage(recipeId)
