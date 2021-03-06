import { getRecipes, getIngredients } from './recipes'
import { getFilter } from './filters'
const recipeId = location.hash.substring(1)

// Displays recipes on home page
const generateRecipeDOM = (recipe) => {
	const recipeEl = document.createElement('div')
	const titleEl = document.createElement('h2')
	const editBtn = document.createElement('button')
	const viewBtn = document.createElement('button')
	const btnContainer = document.createElement('div')

	if (recipe.title.length > 0) {
		titleEl.textContent = recipe.title
	} else {
		titleEl.textContent = 'Unnamed recipe'
	}

	titleEl.classList.add('list-recipe__title')
	recipeEl.classList.add('list-recipe')
	recipeEl.appendChild(titleEl)
	recipeEl.appendChild(btnContainer)

	viewBtn.classList.add('button')
	viewBtn.classList.add('button--tertiary')
	viewBtn.textContent = 'View'

	editBtn.classList.add('button')
	editBtn.classList.add('button--tertiary')
	editBtn.textContent = 'Edit'

	btnContainer.appendChild(viewBtn)
	btnContainer.appendChild(editBtn)

	viewBtn.addEventListener('click', () => location.assign(`/summery.html#${recipe.id}`))
	editBtn.addEventListener('click', () => location.assign(`/edit.html#${recipe.id}`))

	return recipeEl
}

const renderRecipes = () => {
	const recipesEl = document.querySelector('#recipes')
	const recipes = getRecipes()
	const filters = getFilter()
	const filteredRecipes = recipes.filter((recipe) =>
		recipe.title.toLowerCase().includes(filters.searchText.toLowerCase())
	)

	recipesEl.innerHTML = ''

	if (filteredRecipes.length > 0) {
		filteredRecipes.forEach((recipe) => {
			const recipeEl = generateRecipeDOM(recipe)
			recipesEl.appendChild(recipeEl)
		})
	} else {
		const emptyMessage = document.createElement('p')
		emptyMessage.textContent = 'No recipes to show'
		emptyMessage.classList.add('empty-message')
		recipesEl.appendChild(emptyMessage)
	}
}

// Edit page
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
		ingredientEl.appendChild(textEl)
	}
}

const renderIngredient = () => {
	const ingredArr = getIngredients(recipeId)
	ingredArr.forEach((ingredient) => {
		generateIngredientsDOM(ingredient)
	})
}

export { renderRecipes, initializeEditPage, renderIngredient, recipeId }
