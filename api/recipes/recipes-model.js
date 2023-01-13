const db = require('../../data/db-config')
/*
select recipe_name, step_id, step_number, step_instructions, ingredient_id, ingredient_name, quantity from recipes as r
left join steps as s On r.recipe_id=s.recipe_id
left join step_ingredients as si on si.step_id=s.step_id
left join ingredients as i on si.ingredient_id=i.ingredient_id
where r.recipe_id = 1
*/
async function getRecipeById(recipe_id) {
    const uniqueRecipe = db('recipes as r')
    .select('r.recipe_name', 's.step_id', 's.step_number', 's.step_instructions', 'i.ingredient_id', 'i.ingredient_name', 'si.quantity')
    .leftJoin('steps as s', 'r.recipe_id','s.recipe_id')
    .leftJoin('step_ingredients as si', 'si.step_id', 's.step_id')
    .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
    .where('r.recipe_id', recipe_id)

    return uniqueRecipe
}

module.exports = {
    getRecipeById
}