const recipes = [
    { recipe_name: 'Lucky Charms' },
    { recipe_name: 'Hawaiian Pizza'},
    { recipe_name: 'Cheeseburger'}
]

const ingredients = [
    { ingredient_name: 'Lucky Charms'},
    { ingredient_name: 'Milk'},
    { ingredient_name: 'Pizza Dough'},
    { ingredient_name: 'Cheese'},
    { ingredient_name: 'Red Sauce'},
    { ingredient_name: 'Ham'},
    { ingredient_name: 'Pineapple'},
    { ingredient_name: 'Hamburger'},
    { ingredient_name: 'Buns'},
    { ingredient_name: 'Pickles'}
]

const steps = [
    { step_number: 1, step_instructions: 'Pour Lucky Charms in bowl', recipe_id: 1 },
    { step_number: 2, step_instructions: 'Pour milk in bowl', recipe_id: 1 },
    { step_number: 3, step_instructions: 'Enjoy!', recipe_id: 1 },
    { step_number: 1, step_instructions: 'Knead dough and flatten', recipe_id: 2 },
    { step_number: 2, step_instructions: 'Spread red sauce on dough', recipe_id: 2 },
    { step_number: 3, step_instructions: 'Place cheese on red sauce', recipe_id: 2 },
    { step_number: 4, step_instructions: 'Place ham on cheese', recipe_id: 2 },
    { step_number: 5, step_instructions: 'Place pineapple on cheese', recipe_id: 2 },
    { step_number: 6, step_instructions: 'Bake in oven for 20 minutes at 350 F', recipe_id: 2 },
    { step_number: 7, step_instructions: 'Enjoy!', recipe_id: 2 },
    { step_number: 1, step_instructions: 'Place hamburger patties on grill on high heat for 3 minutes', recipe_id: 3 },
    { step_number: 2, step_instructions: 'Flip burgers onto other side for 3 more minutes', recipe_id: 3 },
    { step_number: 3, step_instructions: 'Place burger on bun with your choice of toppings', recipe_id: 3 },
    { step_number: 4, step_instructions: 'Enjoy!', recipe_id: 3 },

]

const step_ingredients = [
    { step_id: 1, ingredient_id: 1, quantity: 'as much as you want' },
    { step_id: 2, ingredient_id: 2, quantity: 'as much as you want' },
    { step_id: 4, ingredient_id: 3, quantity: 1 },
    { step_id: 5, ingredient_id: 5, quantity: '1 jar' },
    { step_id: 6, ingredient_id: 4, quantity: '0.5 pounds' },
    { step_id: 7, ingredient_id: 6, quantity: '0.5 pounds' },
    { step_id: 8, ingredient_id: 7, quantity: '0.5 pounds' },
    { step_id: 6, ingredient_id: 2, quantity: '0.5 pounds' },
    { step_id: 11, ingredient_id: 8, quantity: '1 pound' },
    { step_id: 12, ingredient_id: 9, quantity: '1 package' },
]




exports.seed = async function(knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
  
};