const API_URL = "https://dummyjson.com/recipes";
const CARD_FIELDS = "id,name,image,prepTimeMinutes,cookTimeMinutes,cuisine";
const LIST_URL = API_URL + "?limit=12&select=" + CARD_FIELDS;
const recipeList = document.querySelector("#recipe-list");
const statusMessage = document.querySelector("#status");

async function loadRecipes() {
    try {
        // Your existing request, check and rendering.
        const response = await fetch(LIST_URL);
        if (!response.ok) {
            throw new Error("Could not load recipes (" + response.status + ").");
        }

        const data = await response.json();

        renderRecipes(data.recipes);
    } catch (error) {
        console.error(error);
        // Show a short error message in statusMessage.
        console.log("A error has occurred for recipe rendering. (Try/catch loadrecipes())")
    }
}

function renderRecipes(recipes) {
    recipeList.replaceChildren();

    recipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipeList.append(recipeCard);
    });

    statusMessage.textContent = "Recipes shown: " + recipes.length;
}

console.log("The rest of the script is running.");

function createRecipeCard(recipe) {
    const card = document.createElement("article");
    card.className = "recipe-card";

    const image = document.createElement("img");
    image.src = recipe.image;
    image.alt = recipe.name;
    image.loading = "lazy";

    const content = document.createElement("div");
    content.className = "card-body";

    const title = document.createElement("h3");
    // Set the recipe name.
    title.textContent = recipe.name;

    const meta = document.createElement("p");
    meta.className = "card-meta";
    // Set the cuisine and total time.
    const cookTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;
    meta.textContent = "Cuisine: " + recipe.cuisine + " | Time: " + cookTime;

    content.append(title, meta);
    card.append(image, content);
    return card;
}

loadRecipes();