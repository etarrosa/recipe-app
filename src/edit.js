import { saveRecipe, updateRecipe, recipes } from './recipes'
import { initializeEditPage, renderIngredient, recipeId } from './views'

const titleEl = document.querySelector('#title-input')
const bodyEl = document.querySelector('#body-input')
const ingredientBtn = document.querySelector('#ingredient-add-btn')
const ingredientInput = document.querySelector('#ingredient-input')

const clearIngredients = () => {
	const ingredientEl = document.querySelector('#ingredients-container')
	ingredientEl.textContent = ''
}

initializeEditPage(recipeId)

// Saves title input
titleEl.addEventListener('input', (e) => {
	updateRecipe(recipeId, {
		title: e.target.value,
	})
})

// Saves body input
bodyEl.addEventListener('input', (e) => {
	updateRecipe(recipeId, {
		body: e.target.value,
	})
})

// Event listeners for ingredient input
ingredientInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		const ingredient = ingredientInput.value
		updateRecipe(recipeId, {
			ingredients: ingredient,
		})
		ingredientInput.value = ''
		clearIngredients()
		renderIngredient()
	}
})

ingredientBtn.addEventListener('click', () => {
	const ingredient = ingredientInput.value
	updateRecipe(recipeId, {
		ingredients: ingredient,
	})
	ingredientInput.value = ''
	clearIngredients()
	renderIngredient()
})

const removeIngredient = (clickedItem, recipeId) => {
	const currentRecipe = recipes.find((recipe) => recipe.id === recipeId)
	const itemIndex = currentRecipe.ingredients.findIndex(
		(ingredient) => ingredient === clickedItem.textContent
	)
	if (itemIndex > -1) {
		currentRecipe.ingredients.splice(itemIndex, 1)
		saveRecipe()
		clickedItem.remove()
	}
}

const remove = (e) => {
	if (e.target !== e.currentTarget) {
		const clickedItem = e.target
		removeIngredient(clickedItem, recipeId)
	}
	e.stopPropagation()
}

const parentUl = document.querySelector('#ingredients-container')
parentUl.addEventListener('click', (e) => remove(e))
