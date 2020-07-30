import { getRecipes } from './recipes'

const generateRecipeDOM = (recipe) => {
	const recipeEl = document.createElement('a')
	const titleEl = document.createElement('h2')
	const instructionsEl = document.createElement('p')

	if (recipe.title.length > 0) {
		titleEl.textContent = recipe.title
	} else {
		titleEl.textContent = 'Unnamed recipe'
	}

	if (recipe.body.length > 0) {
		instructionsEl.textContent = recipe.body
	} else {
		instructionsEl.textContent = 'Add instructions'
	}
	titleEl.classList.add('list-recipe__title')
	instructionsEl.classList.add('list-recipe__instructions')
	recipeEl.appendChild(titleEl)
	recipeEl.appendChild(instructionsEl)

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
	const titleEl = document.querySelector('#recipe-title')
	const bodyEl = document.querySelector('#recipe-body')

	const recipes = getRecipes()
	const recipe = recipes.find((recipe) => recipe.id === recipeId)

	if (!recipe) {
		location.assign('/index.html')
	}

	titleEl.value = recipe.title
	bodyEl.value = recipe.body
}

export { renderRecipes, initializeEditPage }
