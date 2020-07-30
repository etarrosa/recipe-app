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

	saveRecipe()
	return recipe
}

recipes = loadRecipes()

export { loadRecipes, saveRecipe, getRecipes, createRecipe, updateRecipe }
