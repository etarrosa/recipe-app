import { recipeId, renderIngredient } from './views'
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

	const generateIngredSummery = (ingredient) => {
		const ingredientEl = document.querySelector('#ingredients-summery')
		const ingredientLi = document.createElement('li')

		if (ingredient.length > 0) {
			ingredientLi.textContent = ingredient
			ingredientLi.classList.add('li-summery')
			ingredientEl.appendChild(ingredientLi)
		}
	}

	const renderIngred = () => {
		recipe.ingredients.forEach((ingredient) => {
			generateIngredSummery(ingredient)
		})
	}

	renderIngred()
}

initializeSummeryPage(recipeId)
