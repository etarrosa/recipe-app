import { getRecipes, getIngredients } from './recipes'
const recipeId = location.hash.substring(1)

// Displays recipes on home page
const generateRecipeDOM = (recipe) => {
	const recipeEl = document.createElement('a')
	const titleEl = document.createElement('h2')

	if (recipe.title.length > 0) {
		titleEl.textContent = recipe.title
	} else {
		titleEl.textContent = 'Unnamed recipe'
	}

	titleEl.classList.add('list-recipe__title')
	recipeEl.appendChild(titleEl)

	// Setup the link
	recipeEl.setAttribute('href', `/edit.html#${recipe.id}`)
	recipeEl.classList.add('list-recipe')

	return recipeEl
}

const renderRecipes = () => {
	const recipesEl = document.querySelector('#recipes')
	const recipes = getRecipes()
	recipes.forEach((recipe) => {
		const recipeElement = generateRecipeDOM(recipe)
		recipesEl.appendChild(recipeElement)
	})
}

const initializeEditPage = (recipeId) => {
	const titleEl = document.querySelector('#title-input')
	const bodyEl = document.querySelector('#body-input')

	const recipes = getRecipes()
	const recipe = recipes.find((recipe) => recipe.id === recipeId)

	if (!recipe) {
		location.assign('/index.html')
	}

	titleEl.value = recipe.title
	bodyEl.value = recipe.body
}

const generateIngredientsDOM = (ingredient) => {
	const ingredientEl = document.querySelector('#ingredients-container')
	const textEl = document.createElement('li')

	if (ingredient.length > 0) {
		textEl.textContent = ingredient
	}
	ingredientEl.appendChild(textEl)
}

const renderIngredient = () => {
	const ingredArr = getIngredients(recipeId)
	ingredArr.forEach((ingredient) => {
		generateIngredientsDOM(ingredient)
	})
}

renderIngredient()

export { renderRecipes, initializeEditPage, renderIngredient, recipeId }
