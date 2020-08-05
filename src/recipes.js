import { uuid } from 'uuidv4'

let recipes = []

const loadRecipes = () => {
	const recipesJSON = localStorage.getItem('recipe')

	try {
		return recipesJSON ? JSON.parse(recipesJSON) : []
	} catch (e) {
		return []
	}
}

recipes = loadRecipes()

const getIngredients = (id) => {
	const recipe = recipes.find((recipe) => recipe.id === id)

	try {
		return recipe ? recipe.ingredients : []
	} catch (e) {
		return []
	}
}

const saveRecipe = () => {
	localStorage.setItem('recipe', JSON.stringify(recipes))
}

const getRecipes = () => recipes

const createRecipe = () => {
	const id = uuid()

	recipes.push({
		id: id,
		title: '',
		body: '',
		ingredients: [],
	})
	saveRecipe()

	return id
}

const updateRecipe = (id, updates) => {
	const recipe = recipes.find((recipe) => recipe.id === id)

	if (!recipe) {
		return
	}
	if (typeof updates.title === 'string') {
		recipe.title = updates.title
	}
	if (typeof updates.body === 'string') {
		recipe.body = updates.body
	}
	if (typeof updates.ingredients === 'string') {
		recipe.ingredients = [...recipe.ingredients, updates.ingredients]
	}

	saveRecipe()
	return recipe
}

const removeRecipe = (id) => {
	const recipeIndex = recipes.findIndex((recipe) => recipe.id === id)

	if (recipeIndex > -1) {
		recipes.splice(recipeIndex, 1)
		saveRecipe()
	}
}

export { loadRecipes, saveRecipe, getRecipes, createRecipe, updateRecipe, getIngredients, removeRecipe }
