import { updateRecipe } from './recipes'
import { initializeEditPage } from './views'

const titleEl = document.querySelector('#title-input')
const bodyEl = document.querySelector('#body-input')
const ingredientBtn = document.querySelector('#ingredient-add-btn')
const ingredientInput = document.querySelector('#ingredient-input')
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

ingredientInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		const ingredient = ingredientInput.value
		updateRecipe(recipeId, {
			ingredients: ingredient,
		})
		ingredientInput.value = ''
	}
})

ingredientBtn.addEventListener('click', () => {
	const ingredient = ingredientInput.value
	updateRecipe(recipeId, {
		ingredients: ingredient,
	})
	ingredientInput.value = ''
})
