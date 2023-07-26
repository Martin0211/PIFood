import { GET_RECIPE_BY_NAME, GET_RECIPE_BY_ID, GET_RECIPE_ALL, POST_CREATE_RECIPE, GET_DIETS_ALL } from './actions';


const initialState = {
    recipes: [	/* {
		"vegetarian": true,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": false,
		"veryHealthy": false,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 7,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 127,
		"healthScore": 49,
		"creditsText": "Jen West",
		"sourceName": "Pink When",
		"pricePerServing": 221.91,
		"id": 765011,
		"title": "Snap Pea and Green Bean Salad with Arugula Pesto",
		"readyInMinutes": 45,
		"servings": 6,
		"sourceUrl": "http://www.pinkwhen.com/snap-pea-green-bean-salad-arugula-pesto/",
		"image": "https://spoonacular.com/recipeImages/765011-312x231.jpg",
		"imageType": "jpg",
		"summary": "If you want to add more <b>gluten free, lacto ovo vegetarian, and primal</b> recipes to your recipe box, Snap Pean and Green Bean Salad with Arugula Pesto might be a recipe you should try. This side dish has <b>314 calories</b>, <b>12g of protein</b>, and <b>22g of fat</b> per serving. This recipe serves 6. For <b>$2.22 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. This recipe is liked by 127 foodies and cooks. Head to the store and pick up wax beans, basil leaves, cilantro, and a few other things to make it today. It is brought to you by Pink When. Taking all factors into account, this recipe <b>earns a spoonacular score of 96%</b>, which is amazing. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/snap-peas-and-green-beans-with-arugula-mint-pesto-875123\">Snap Peas and Green Beans with Arugula-Mint Pesto</a>, <a href=\"https://spoonacular.com/recipes/snap-peas-and-green-beans-with-arugula-mint-pesto-1229543\">Snap Peas and Green Beans with Arugula-Mint Pesto</a>, and <a href=\"https://spoonacular.com/recipes/snap-peas-and-green-beans-with-arugula-mint-pesto-1295733\">Snap Peas and Green Beans with Arugula-Mint Pesto</a>.",
		"cuisines": [],
		"dishTypes": [
			"side dish"
		],
		"diets": [
			"gluten free",
			"lacto ovo vegetarian",
			"primal"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Bring a large pot of salted water to a boil.While your water is coming to a boil, prepare your arugula pesto and cilantro cream drizzle.In the bowl of your food processor, add the almonds, pistachios, garlic, lemon zest, baby arugula and basil leaves. Pulse 8-9 times until completely broken up. With the food processor running, slowly pour in the olive oil until the pesto just comes together. Season to taste with salt and black pepper and transfer to a large bowl.In the same food processor bowl (wipe clean if you wish), combine the yogurt and cilantro. Pulse until the two ingredients come together. Season to taste with salt and black pepper and set aside.Have an ice bath ready.",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 10011959,
								"name": "baby arugula",
								"localizedName": "baby arugula",
								"image": "arugula-or-rocket-salad.jpg"
							},
							{
								"id": 2044,
								"name": "fresh basil",
								"localizedName": "fresh basil",
								"image": "fresh-basil.jpg"
							},
							{
								"id": 9156,
								"name": "lemon zest",
								"localizedName": "lemon zest",
								"image": "zest-lemon.jpg"
							},
							{
								"id": 12151,
								"name": "pistachio nuts",
								"localizedName": "pistachio nuts",
								"image": "pistachios.jpg"
							},
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							},
							{
								"id": 11165,
								"name": "cilantro",
								"localizedName": "cilantro",
								"image": "cilantro.png"
							},
							{
								"id": 12061,
								"name": "almonds",
								"localizedName": "almonds",
								"image": "almonds.jpg"
							},
							{
								"id": 11959,
								"name": "arugula",
								"localizedName": "arugula",
								"image": "arugula-or-rocket-salad.jpg"
							},
							{
								"id": 11215,
								"name": "garlic",
								"localizedName": "garlic",
								"image": "garlic.png"
							},
							{
								"id": 1116,
								"name": "yogurt",
								"localizedName": "yogurt",
								"image": "plain-yogurt.jpg"
							},
							{
								"id": 1053,
								"name": "cream",
								"localizedName": "cream",
								"image": "fluid-cream.jpg"
							},
							{
								"id": 93698,
								"name": "pesto",
								"localizedName": "pesto",
								"image": "basil-pesto.png"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							},
							{
								"id": 10014412,
								"name": "ice",
								"localizedName": "ice",
								"image": "ice-cubes.png"
							}
						],
						"equipment": [
							{
								"id": 404771,
								"name": "food processor",
								"localizedName": "food processor",
								"image": "food-processor.png"
							},
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							},
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "Add the snap peas and beans to the boiling water and blanch for about 1 minute and 30 seconds.",
						"ingredients": [
							{
								"id": 10011300,
								"name": "sugar snap peas",
								"localizedName": "sugar snap peas",
								"image": "sugar-snap-peas.jpg"
							},
							{
								"id": 0,
								"name": "beans",
								"localizedName": "beans",
								"image": "kidney-beans.jpg"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": [],
						"length": {
							"number": 1,
							"unit": "minutes"
						}
					},
					{
						"number": 3,
						"step": "Drain and transfer immediately to the ice bath to cool down.",
						"ingredients": [
							{
								"id": 10014412,
								"name": "ice",
								"localizedName": "ice",
								"image": "ice-cubes.png"
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Drain again once the veggies are cool, and pat them dry.",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 5,
						"step": "Add the veggies to the bowl with the pesto and toss to coat.",
						"ingredients": [
							{
								"id": 93698,
								"name": "pesto",
								"localizedName": "pesto",
								"image": "basil-pesto.png"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 6,
						"step": "Pour the veggies onto a large platter and drizzle with the cilantro cream. Top with micro greens and sliced almonds. Enjoy immediately or place in the refrigerator to chill.",
						"ingredients": [
							{
								"id": 10112061,
								"name": "sliced almonds",
								"localizedName": "sliced almonds",
								"image": "almonds.jpg"
							},
							{
								"id": 11165,
								"name": "cilantro",
								"localizedName": "cilantro",
								"image": "cilantro.png"
							},
							{
								"id": 21052,
								"name": "greens",
								"localizedName": "greens",
								"image": "mixed-greens-or-mesclun.jpg"
							},
							{
								"id": 1053,
								"name": "cream",
								"localizedName": "cream",
								"image": "fluid-cream.jpg"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/snap-pea-and-green-bean-salad-with-arugula-pesto-765011"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": false,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 2,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 10,
		"healthScore": 81,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 105.92,
		"id": 660228,
		"title": "Skinny Kale Basil Pesto",
		"readyInMinutes": 45,
		"servings": 3,
		"sourceUrl": "https://www.foodista.com/recipe/6K5LNQ7F/skinny-kale-basil-pesto",
		"image": "https://spoonacular.com/recipeImages/660228-312x231.jpg",
		"imageType": "jpg",
		"summary": "Skinny Kale Basil Pesto requires about <b>45 minutes</b> from start to finish. For <b>$1.06 per serving</b>, you get a condiment that serves 3. Watching your figure? This gluten free recipe has <b>81 calories</b>, <b>4g of protein</b>, and <b>5g of fat</b> per serving. A few people made this recipe, and 10 would say it hit the spot. It is brought to you by Foodista. A mixture of parmesan cheese, olive oil, walnuts, and a handful of other ingredients are all it takes to make this recipe so delicious. With a spoonacular <b>score of 97%</b>, this dish is great. <a href=\"https://spoonacular.com/recipes/kale-basil-mint-parsley-pesto-1018918\">Kale Basil Mint Parsley Pesto</a>, <a href=\"https://spoonacular.com/recipes/kale-basil-mint-parsley-pesto-1353273\">Kale Basil Mint Parsley Pesto</a>, and <a href=\"https://spoonacular.com/recipes/kale-spinach-and-basil-pesto-baked-pasta-1099896\">Kale, Spinach and Basil Pesto Baked Pasta</a> are very similar to this recipe.",
		"cuisines": [],
		"dishTypes": [
			"condiment",
			"dip",
			"sauce",
			"spread"
		],
		"diets": [
			"gluten free"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Remove the kale and basil leaves from the stem and rinse.",
						"ingredients": [
							{
								"id": 2044,
								"name": "fresh basil",
								"localizedName": "fresh basil",
								"image": "fresh-basil.jpg"
							},
							{
								"id": 11233,
								"name": "kale",
								"localizedName": "kale",
								"image": "kale.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 2,
						"step": "Roughly chop the kale leaves so that they fit inside a food processor.",
						"ingredients": [
							{
								"id": 11233,
								"name": "kale",
								"localizedName": "kale",
								"image": "kale.jpg"
							}
						],
						"equipment": [
							{
								"id": 404771,
								"name": "food processor",
								"localizedName": "food processor",
								"image": "food-processor.png"
							}
						]
					},
					{
						"number": 3,
						"step": "Place the kale and basil leaves into a food processor and chop until the leaves turn into small pieces.",
						"ingredients": [
							{
								"id": 2044,
								"name": "fresh basil",
								"localizedName": "fresh basil",
								"image": "fresh-basil.jpg"
							},
							{
								"id": 11233,
								"name": "kale",
								"localizedName": "kale",
								"image": "kale.jpg"
							}
						],
						"equipment": [
							{
								"id": 404771,
								"name": "food processor",
								"localizedName": "food processor",
								"image": "food-processor.png"
							}
						]
					},
					{
						"number": 4,
						"step": "Add the rest of the ingredients into the food processor and mix until everything is well blended.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404771,
								"name": "food processor",
								"localizedName": "food processor",
								"image": "food-processor.png"
							}
						]
					},
					{
						"number": 5,
						"step": "Pour out all the ingredients into a dish and enjoy with your favorite dishes!",
						"ingredients": [],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/skinny-kale-basil-pesto-660228"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": false,
		"veryHealthy": false,
		"cheap": false,
		"veryPopular": true,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 8,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 396,
		"healthScore": 42,
		"creditsText": "Full Belly Sisters",
		"license": "CC BY-SA 3.0",
		"sourceName": "Full Belly Sisters",
		"pricePerServing": 303.59,
		"id": 716408,
		"title": "Greek-Style Baked Fish: Fresh, Simple, and Delicious",
		"readyInMinutes": 30,
		"servings": 4,
		"sourceUrl": "http://fullbellysisters.blogspot.com/2012/04/greek-style-baked-fish-fresh-simple-and.html",
		"image": "https://spoonacular.com/recipeImages/716408-312x231.jpg",
		"imageType": "jpg",
		"summary": "Greek-Style Baked Fish: Fresh, Simple, and Delicious might be just the <b>Mediterranean</b> recipe you are searching for. For <b>$3.04 per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains roughly <b>28g of protein</b>, <b>12g of fat</b>, and a total of <b>343 calories</b>. This recipe serves 4. Plenty of people made this recipe, and 396 would say it hit the spot. It works well as a main course. Head to the store and pick up pepper, white wine, basil, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. It is a good option if you're following a <b>gluten free and pescatarian</b> diet. It is brought to you by fullbellysisters.blogspot.com. Overall, this recipe earns a <b>tremendous spoonacular score of 98%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/simple-greek-style-baked-fish-557560\">Simple Greek Style Baked Fish</a>, <a href=\"https://spoonacular.com/recipes/greek-style-baked-fish-526858\">Greek Style Baked Fish</a>, and <a href=\"https://spoonacular.com/recipes/delicious-greek-pastitsio-casserole-style-569500\">Delicious Greek Pastitsio {Casserole-Style}</a>.",
		"cuisines": [
			"Mediterranean",
			"European",
			"Greek"
		],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"pescatarian"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Preheat the oven to 450 degrees F. Choose an oven-proof baking dish that your fish will fit in without overlapping and spray it with cooking spray.",
						"ingredients": [
							{
								"id": 4679,
								"name": "cooking spray",
								"localizedName": "cooking spray",
								"image": "cooking-spray.png"
							},
							{
								"id": 10115261,
								"name": "fish",
								"localizedName": "fish",
								"image": "fish-fillet.jpg"
							}
						],
						"equipment": [
							{
								"id": 404646,
								"name": "baking pan",
								"localizedName": "baking pan",
								"image": "roasting-pan.jpg"
							},
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg",
								"temperature": {
									"number": 450,
									"unit": "Fahrenheit"
								}
							}
						]
					},
					{
						"number": 2,
						"step": "Lay the fish fillets in the baking pan in a single layer, season with salt and pepper, then top the fish with red onion and bell pepper.",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 10115261,
								"name": "fish fillets",
								"localizedName": "fish fillets",
								"image": "fish-fillet.jpg"
							},
							{
								"id": 10211821,
								"name": "bell pepper",
								"localizedName": "bell pepper",
								"image": "bell-pepper-orange.png"
							},
							{
								"id": 10011282,
								"name": "red onion",
								"localizedName": "red onion",
								"image": "red-onion.png"
							},
							{
								"id": 10115261,
								"name": "fish",
								"localizedName": "fish",
								"image": "fish-fillet.jpg"
							}
						],
						"equipment": [
							{
								"id": 404646,
								"name": "baking pan",
								"localizedName": "baking pan",
								"image": "roasting-pan.jpg"
							}
						]
					},
					{
						"number": 3,
						"step": "Sprinkle with dried basil and oregano, the tomato, and the feta cheese, then drizzle the white wine and olive oil over top. Grind some fresh pepper over the top.",
						"ingredients": [
							{
								"id": 2003,
								"name": "dried basil",
								"localizedName": "dried basil",
								"image": "basil.jpg"
							},
							{
								"id": 1019,
								"name": "feta cheese",
								"localizedName": "feta cheese",
								"image": "feta.png"
							},
							{
								"id": 14106,
								"name": "white wine",
								"localizedName": "white wine",
								"image": "white-wine.jpg"
							},
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							},
							{
								"id": 2027,
								"name": "oregano",
								"localizedName": "oregano",
								"image": "oregano.jpg"
							},
							{
								"id": 1002030,
								"name": "pepper",
								"localizedName": "pepper",
								"image": "pepper.jpg"
							},
							{
								"id": 11529,
								"name": "tomato",
								"localizedName": "tomato",
								"image": "tomato.png"
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Bake uncovered for about 12 – 15 minutes or until the fish flakes easily with a fork. Squeeze the lemon wedges over the cooked fish, garnish with the fresh basil and/or oregano and serve with hot cooked rice.",
						"ingredients": [
							{
								"id": 1029150,
								"name": "lemon wedge",
								"localizedName": "lemon wedge",
								"image": "lemon-wedge.png"
							},
							{
								"id": 10220445,
								"name": "cooked rice",
								"localizedName": "cooked rice",
								"image": "uncooked-white-rice.png"
							},
							{
								"id": 2044,
								"name": "fresh basil",
								"localizedName": "fresh basil",
								"image": "fresh-basil.jpg"
							},
							{
								"id": 2027,
								"name": "oregano",
								"localizedName": "oregano",
								"image": "oregano.jpg"
							},
							{
								"id": 10115261,
								"name": "fish",
								"localizedName": "fish",
								"image": "fish-fillet.jpg"
							}
						],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						],
						"length": {
							"number": 15,
							"unit": "minutes"
						}
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/greek-style-baked-fish-fresh-simple-and-delicious-716408"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": false,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 8,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 15,
		"healthScore": 79,
		"creditsText": "foodista.com",
		"sourceName": "foodista.com",
		"pricePerServing": 338.97,
		"id": 661340,
		"title": "Spinach Salad with Strawberry Vinaigrette",
		"readyInMinutes": 45,
		"servings": 1,
		"sourceUrl": "http://www.foodista.com/recipe/5HT32BN5/spinach-salad-with-strawberry-vinaigrette",
		"image": "https://spoonacular.com/recipeImages/661340-312x231.jpg",
		"imageType": "jpg",
		"summary": "Need a <b>gluten free and primal main course</b>? Spinach Salad with Strawberry Vinaigrette could be a great recipe to try. This recipe makes 1 servings with <b>322 calories</b>, <b>22g of protein</b>, and <b>13g of fat</b> each. For <b>$3.39 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. A mixture of water, balsamic vinegar, ground pepper, and a handful of other ingredients are all it takes to make this recipe so delicious. It will be a hit at your <b>Mother's Day</b> event. 15 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/strawberry-avocado-spinach-salad-with-strawberry-vinaigrette-583232\">Strawberry Avocado Spinach Salad with Strawberry Vinaigrette</a>, <a href=\"https://spoonacular.com/recipes/strawberry-avocado-spinach-salad-with-strawberry-vinaigrette-1231959\">Strawberry Avocado Spinach Salad with Strawberry Vinaigrette</a>, and <a href=\"https://spoonacular.com/recipes/spinach-strawberry-salad-with-strawberry-vinaigrette-1296303\">Spinach Strawberry Salad with Strawberry Vinaigrette</a>.",
		"cuisines": [],
		"dishTypes": [
			"side dish",
			"lunch",
			"main course",
			"salad",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"primal"
		],
		"occasions": [
			"mother's day"
		],
		"analyzedInstructions": [
			{
				"name": "For Salad",
				"steps": [
					{
						"number": 1,
						"step": "Place everything on a plate!  :)",
						"ingredients": [],
						"equipment": []
					}
				]
			},
			{
				"name": "Serves 1Calories for salad without dressing  139,  Fat  4,  Sodium  215, Potassium 456, Carbs  7,  Fiber 3,  Protein 20Directions for Dressing",
				"steps": [
					{
						"number": 1,
						"step": "Place all ingredient in a blender and process until smooth, about 30 seconds",
						"ingredients": [],
						"equipment": [
							{
								"id": 404726,
								"name": "blender",
								"localizedName": "blender",
								"image": "blender.png"
							}
						]
					},
					{
						"number": 2,
						"step": "Makes 1 cup",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 3,
						"step": "Calories per Tbsp.  3,  Fat:  .01,  Sodium:  10,  Potassium:  13,  Carbs:  1,  Fiber:  .01,  Sugar:  .03,  Protein:  .01",
						"ingredients": [
							{
								"id": 19335,
								"name": "sugar",
								"localizedName": "sugar",
								"image": "sugar-in-bowl.png"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/spinach-salad-with-strawberry-vinaigrette-661340"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": true,
		"weightWatcherSmartPoints": 8,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 5,
		"healthScore": 100,
		"creditsText": "Full Belly Sisters",
		"license": "CC BY-SA 3.0",
		"sourceName": "Full Belly Sisters",
		"pricePerServing": 149.68,
		"id": 782622,
		"title": "Chocolate Peanut Butter Cinnamon Smoothie",
		"readyInMinutes": 45,
		"servings": 1,
		"sourceUrl": "http://fullbellysisters.blogspot.com/2016/06/chocolate-peanut-butter-cinnamon.html",
		"image": "https://spoonacular.com/recipeImages/782622-312x231.png",
		"imageType": "png",
		"summary": "Chocolate Peanut Butter Cinnamon Smoothie is a <b>gluten free, dairy free, and fodmap friendly</b> breakfast. This recipe serves 1 and costs $1.5 per serving. One portion of this dish contains roughly <b>27g of protein</b>, <b>21g of fat</b>, and a total of <b>420 calories</b>. If you have ice cubes, banana, jif cinnamon peanut butter, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Only a few people really liked this Southern dish. 5 people found this recipe to be tasty and satisfying. It is brought to you by fullbellysisters.blogspot.com. With a spoonacular <b>score of 96%</b>, this dish is super. <a href=\"https://spoonacular.com/recipes/cinnamon-apple-peanut-butter-smoothie-1177081\">Cinnamon Apple Peanut Butter Smoothie</a>, <a href=\"https://spoonacular.com/recipes/peanut-butter-chocolate-chip-protein-smoothie-with-kura-smoothie-starter-629513\">Peanut Butter Chocolate Chip Protein Smoothie with Kura Smoothie Starter</a>, and <a href=\"https://spoonacular.com/recipes/chocolate-peanut-butter-smoothie-113511\">Chocolate-Peanut butter Smoothie</a> are very similar to this recipe.",
		"cuisines": [
			"Southern"
		],
		"dishTypes": [
			"morning meal",
			"brunch",
			"beverage",
			"breakfast",
			"drink"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"fodmap friendly"
		],
		"occasions": [],
		"analyzedInstructions": [],
		"spoonacularSourceUrl": "https://spoonacular.com/chocolate-peanut-butter-cinnamon-smoothie-782622"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": false,
		"cheap": false,
		"veryPopular": true,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 6,
		"gaps": "no",
		"preparationMinutes": 10,
		"cookingMinutes": 120,
		"aggregateLikes": 32767,
		"healthScore": 33,
		"creditsText": "pinkwhen.com",
		"sourceName": "pinkwhen.com",
		"pricePerServing": 206.6,
		"id": 715424,
		"title": "The Best Chili",
		"readyInMinutes": 130,
		"servings": 8,
		"sourceUrl": "http://www.pinkwhen.com/the-best-chili-recipe/",
		"image": "https://spoonacular.com/recipeImages/715424-312x231.jpg",
		"imageType": "jpg",
		"summary": "Need a <b>gluten free and dairy free main course</b>? The Best Chili could be an excellent recipe to try. This recipe makes 8 servings with <b>326 calories</b>, <b>33g of protein</b>, and <b>7g of fat</b> each. For <b>$2.07 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. This recipe from Pink When has 32767 fans. <b>The Super Bowl</b> will be even more special with this recipe. From preparation to the plate, this recipe takes roughly <b>2 hours and 10 minutes</b>. This recipe is typical of American cuisine. If you have tomato paste, oregano, cumin, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is excellent. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/5th-annual-chili-contest-entry-chili-con-carne-y-frijoles-618022\">5th Annual Chili Contest: Entry – Chili Con Carne y Frijoles</a>, <a href=\"https://spoonacular.com/recipes/5th-annual-chili-contest-entry-chili-mac-weekly-menu-1215721\">5th Annual Chili Contest: Entry – Chili Mac + Weekly Menu</a>, and <a href=\"https://spoonacular.com/recipes/10th-annual-chili-contest-entry-weeknight-white-chicken-chili-1145314\">10th Annual Chili Contest: Entry – Weeknight White Chicken Chili</a>.",
		"cuisines": [
			"American"
		],
		"dishTypes": [
			"soup",
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free"
		],
		"occasions": [
			"super bowl"
		],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Brown the lean ground beef in a deep skillet. Cook over medium heat until cooked all the way through, and then drain.In a large pan over high heat add in all of your additional ingredients: cooked ground beef, tomato juice, kidney beans, pinto beans, water, tomato paste, chili powder, cumin, black pepper, oregano, sugar, cayenne pepper, bell pepper, and chopped onions.Bring to a boil.Once your large pot of chili has started to boil, lower the heat and simmer for 2 hours uncovered.",
						"ingredients": [
							{
								"id": 23557,
								"name": "lean ground beef",
								"localizedName": "lean ground beef",
								"image": "fresh-ground-beef.jpg"
							},
							{
								"id": 2031,
								"name": "cayenne pepper",
								"localizedName": "cayenne pepper",
								"image": "chili-powder.jpg"
							},
							{
								"id": 1002030,
								"name": "black pepper",
								"localizedName": "black pepper",
								"image": "pepper.jpg"
							},
							{
								"id": 2009,
								"name": "chili powder",
								"localizedName": "chili powder",
								"image": "chili-powder.jpg"
							},
							{
								"id": 16033,
								"name": "kidney beans",
								"localizedName": "kidney beans",
								"image": "kidney-beans.jpg"
							},
							{
								"id": 11886,
								"name": "tomato juice",
								"localizedName": "tomato juice",
								"image": "tomato-juice.jpg"
							},
							{
								"id": 11887,
								"name": "tomato paste",
								"localizedName": "tomato paste",
								"image": "tomato-paste.jpg"
							},
							{
								"id": 10211821,
								"name": "bell pepper",
								"localizedName": "bell pepper",
								"image": "bell-pepper-orange.png"
							},
							{
								"id": 10023572,
								"name": "ground beef",
								"localizedName": "ground beef",
								"image": "fresh-ground-beef.jpg"
							},
							{
								"id": 16043,
								"name": "pinto beans",
								"localizedName": "pinto beans",
								"image": "pinto-beans.jpg"
							},
							{
								"id": 2027,
								"name": "oregano",
								"localizedName": "oregano",
								"image": "oregano.jpg"
							},
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							},
							{
								"id": 11819,
								"name": "chili pepper",
								"localizedName": "chili pepper",
								"image": "red-chili.jpg"
							},
							{
								"id": 1002014,
								"name": "cumin",
								"localizedName": "cumin",
								"image": "ground-cumin.jpg"
							},
							{
								"id": 19335,
								"name": "sugar",
								"localizedName": "sugar",
								"image": "sugar-in-bowl.png"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							},
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						],
						"length": {
							"number": 120,
							"unit": "minutes"
						}
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/the-best-chili-715424"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 10,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 7,
		"healthScore": 100,
		"creditsText": "foodista.com",
		"sourceName": "foodista.com",
		"pricePerServing": 520.46,
		"id": 659135,
		"title": "Salmon with roasted vegetables",
		"readyInMinutes": 45,
		"servings": 2,
		"sourceUrl": "https://www.foodista.com/recipe/7TTSVX56/salmon-with-roasted-vegetables",
		"image": "https://spoonacular.com/recipeImages/659135-312x231.jpg",
		"imageType": "jpg",
		"summary": "Salmon with roasted vegetables takes approximately <b>45 minutes</b> from beginning to end. For <b>$5.2 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. One serving contains <b>496 calories</b>, <b>39g of protein</b>, and <b>18g of fat</b>. Head to the store and pick up lemon juice, salt, carrot, and a few other things to make it today. Not a lot of people made this recipe, and 7 would say it hit the spot. It works well as a main course. It is a good option if you're following a <b>gluten free, dairy free, whole 30, and pescatarian</b> diet. It is brought to you by Foodista. Overall, this recipe earns a <b>great spoonacular score of 94%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/roasted-salmon-vegetables-1312689\">Roasted Salmon & Vegetables</a>, <a href=\"https://spoonacular.com/recipes/roasted-salmon-vegetables-36765\">Roasted Salmon & Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/salmon-with-roasted-vegetables-1333407\">Salmon with roasted vegetables</a>.",
		"cuisines": [],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"whole 30",
			"pescatarian"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Season the salmon fillets with some salt, pepper and a pinch of paprika and keep aside.",
						"ingredients": [
							{
								"id": 10115076,
								"name": "salmon fillets",
								"localizedName": "salmon fillets",
								"image": "salmon.png"
							},
							{
								"id": 2028,
								"name": "paprika",
								"localizedName": "paprika",
								"image": "paprika.jpg"
							},
							{
								"id": 1002030,
								"name": "pepper",
								"localizedName": "pepper",
								"image": "pepper.jpg"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 2,
						"step": "Preheat the oven to 200 C.  Roughly dice the potatoes, parsnips and carrots and add to a roasting tray.",
						"ingredients": [
							{
								"id": 11298,
								"name": "parsnip",
								"localizedName": "parsnip",
								"image": "parsnip.jpg"
							},
							{
								"id": 11352,
								"name": "potato",
								"localizedName": "potato",
								"image": "potatoes-yukon-gold.png"
							},
							{
								"id": 11124,
								"name": "carrot",
								"localizedName": "carrot",
								"image": "sliced-carrot.png"
							}
						],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg",
								"temperature": {
									"number": 200,
									"unit": "Celsius"
								}
							}
						]
					},
					{
						"number": 3,
						"step": "Drizzle over the olive oil and season with salt and pepper.",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Mix well and roast for 15 minutes.",
						"ingredients": [],
						"equipment": [],
						"length": {
							"number": 15,
							"unit": "minutes"
						}
					},
					{
						"number": 5,
						"step": "Add in the onion and roast for a further 10-15 minutes",
						"ingredients": [
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							}
						],
						"equipment": []
					},
					{
						"number": 6,
						"step": "Place the salmon fillets and tomatoes between the veg.",
						"ingredients": [
							{
								"id": 10115076,
								"name": "salmon fillets",
								"localizedName": "salmon fillets",
								"image": "salmon.png"
							},
							{
								"id": 11529,
								"name": "tomato",
								"localizedName": "tomato",
								"image": "tomato.png"
							}
						],
						"equipment": []
					},
					{
						"number": 7,
						"step": "Drizzle the lemon juice and sprinkle over the rosemary and thyme. Season lightly with salt and pepper and roast for 10-15 minutes or until the salmon and veg is cooked through.",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 9152,
								"name": "lemon juice",
								"localizedName": "lemon juice",
								"image": "lemon-juice.jpg"
							},
							{
								"id": 2036,
								"name": "rosemary",
								"localizedName": "rosemary",
								"image": "rosemary.jpg"
							},
							{
								"id": 15076,
								"name": "salmon",
								"localizedName": "salmon",
								"image": "salmon.png"
							},
							{
								"id": 2049,
								"name": "thyme",
								"localizedName": "thyme",
								"image": "thyme.jpg"
							}
						],
						"equipment": [],
						"length": {
							"number": 15,
							"unit": "minutes"
						}
					},
					{
						"number": 8,
						"step": "Serve with some green salad.",
						"ingredients": [],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/salmon-with-roasted-vegetables-659135"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 18,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 14,
		"healthScore": 83,
		"creditsText": "foodista.com",
		"sourceName": "foodista.com",
		"pricePerServing": 626.14,
		"id": 639851,
		"title": "Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes",
		"readyInMinutes": 45,
		"servings": 2,
		"sourceUrl": "http://www.foodista.com/recipe/GNSQNH5W/cod-with-tomatoes-olives-and-chorizo",
		"image": "https://spoonacular.com/recipeImages/639851-312x231.jpg",
		"imageType": "jpg",
		"summary": "If you want to add more <b>gluten free, dairy free, and whole 30</b> recipes to your collection, Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes might be a recipe you should try. This recipe serves 2 and costs $6.26 per serving. This main course has <b>733 calories</b>, <b>56g of protein</b>, and <b>40g of fat</b> per serving. This recipe is liked by 14 foodies and cooks. Head to the store and pick up lemon juice, parsley leaves, parsley, and a few other things to make it today. It is perfect for <b>Thanksgiving</b>. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is awesome. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cod-stew-with-chorizo-leeks-potatoes-2655\">Cod Stew With Chorizo, Leeks & Potatoes</a>, <a href=\"https://spoonacular.com/recipes/tuna-steaks-in-spicy-tomato-sauce-with-mashed-potatoes-1204417\">Tuna Steaks In Spicy Tomato Sauce With Mashed Potatoes</a>, and <a href=\"https://spoonacular.com/recipes/tuna-steaks-in-spicy-tomato-sauce-with-mashed-potatoes-668002\">Tuna Steaks In Spicy Tomato Sauce With Mashed Potatoes</a>.",
		"cuisines": [],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"whole 30"
		],
		"occasions": [
			"thanksgiving",
			"christmas"
		],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "If frozen, thaw completely the cod fillets, and dry them with paper towels. season with salt and set aside.Peel and quarter the potatoes, and cook in lightly salted water until tender.Meanwhile, fry the pepper in olive oil for 3-4 minutes.",
						"ingredients": [
							{
								"id": 15015,
								"name": "cod fillets",
								"localizedName": "cod fillets",
								"image": "cod-fillet.jpg"
							},
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							},
							{
								"id": 11352,
								"name": "potato",
								"localizedName": "potato",
								"image": "potatoes-yukon-gold.png"
							},
							{
								"id": 1002030,
								"name": "pepper",
								"localizedName": "pepper",
								"image": "pepper.jpg"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							}
						],
						"equipment": [
							{
								"id": 405895,
								"name": "paper towels",
								"localizedName": "paper towels",
								"image": "paper-towels.jpg"
							}
						],
						"length": {
							"number": 4,
							"unit": "minutes"
						}
					},
					{
						"number": 2,
						"step": "Add cubed sausage, saut for another 2-3 minutes.",
						"ingredients": [
							{
								"id": 1017063,
								"name": "sausage",
								"localizedName": "sausage",
								"image": "raw-pork-sausage.png"
							}
						],
						"equipment": [],
						"length": {
							"number": 3,
							"unit": "minutes"
						}
					},
					{
						"number": 3,
						"step": "Add the whole plum tomatoes,  halve them with a flat end of a wooden spoon.Stir in olives and parsley, cook the sauce gently for 2 minutes. Set aside.",
						"ingredients": [
							{
								"id": 10411529,
								"name": "plum tomato",
								"localizedName": "plum tomato",
								"image": "plum-tomatoes.png"
							},
							{
								"id": 11297,
								"name": "parsley",
								"localizedName": "parsley",
								"image": "parsley.jpg"
							},
							{
								"id": 9195,
								"name": "olives",
								"localizedName": "olives",
								"image": "olives-mixed.jpg"
							},
							{
								"id": 0,
								"name": "sauce",
								"localizedName": "sauce",
								"image": ""
							}
						],
						"equipment": [
							{
								"id": 404732,
								"name": "wooden spoon",
								"localizedName": "wooden spoon",
								"image": "wooden-spoon.jpg"
							}
						],
						"length": {
							"number": 2,
							"unit": "minutes"
						}
					},
					{
						"number": 4,
						"step": "Drain the potatoes and season with parsley, olive oil and lemon juice. Use a hand masher to mix and mash. Leave in a warm place.",
						"ingredients": [
							{
								"id": 9152,
								"name": "lemon juice",
								"localizedName": "lemon juice",
								"image": "lemon-juice.jpg"
							},
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							},
							{
								"id": 11352,
								"name": "potato",
								"localizedName": "potato",
								"image": "potatoes-yukon-gold.png"
							},
							{
								"id": 11297,
								"name": "parsley",
								"localizedName": "parsley",
								"image": "parsley.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 5,
						"step": "Place the cod fillets into a hot oiled non-stick pan and cook over a high heat for 5 minutes on each side or until golden brown.",
						"ingredients": [
							{
								"id": 15015,
								"name": "cod fillets",
								"localizedName": "cod fillets",
								"image": "cod-fillet.jpg"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						],
						"length": {
							"number": 5,
							"unit": "minutes"
						}
					},
					{
						"number": 6,
						"step": "Serve with mashed potatoes and sauce.",
						"ingredients": [
							{
								"id": 11352,
								"name": "potato",
								"localizedName": "potato",
								"image": "potatoes-yukon-gold.png"
							},
							{
								"id": 0,
								"name": "sauce",
								"localizedName": "sauce",
								"image": ""
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/cod-with-tomato-olive-chorizo-sauce-and-mashed-potatoes-639851"
	},
	{
		"vegetarian": true,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": false,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 4,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 1,
		"healthScore": 100,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 183.58,
		"id": 664547,
		"title": "Vegetable Dip",
		"readyInMinutes": 45,
		"servings": 3,
		"sourceUrl": "http://www.foodista.com/recipe/WMHFXKKF/vegetable-dip",
		"image": "https://spoonacular.com/recipeImages/664547-312x231.jpg",
		"imageType": "jpg",
		"summary": "Vegetable Dip might be just the hor d'oeuvre you are searching for. This recipe serves 3. Watching your figure? This gluten free, lacto ovo vegetarian, and primal recipe has <b>210 calories</b>, <b>16g of protein</b>, and <b>4g of fat</b> per serving. For <b>$1.84 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It will be a hit at your <b>The Super Bowl</b> event. If you have vegetables, onion, lowfat yogurt, and a few other ingredients on hand, you can make it. Overall, this recipe earns a <b>spectacular spoonacular score of 96%</b>. <a href=\"https://spoonacular.com/recipes/vegetable-dip-407029\">Vegetable Dip</a>, <a href=\"https://spoonacular.com/recipes/italian-vegetable-dip-268772\">Italian Vegetable Dip</a>, and <a href=\"https://spoonacular.com/recipes/roasted-vegetable-dip-444123\">Roasted Vegetable Dip</a> are very similar to this recipe.",
		"cuisines": [],
		"dishTypes": [
			"antipasti",
			"condiment",
			"starter",
			"snack",
			"appetizer",
			"dip",
			"antipasto",
			"hor d'oeuvre",
			"spread"
		],
		"diets": [
			"gluten free",
			"lacto ovo vegetarian",
			"primal"
		],
		"occasions": [
			"super bowl"
		],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "In a medium bowl combine all ingredients (except raw vegetables for dipping). Cover and refrigerate until ready to serve.",
						"ingredients": [
							{
								"id": 11583,
								"name": "vegetable",
								"localizedName": "vegetable",
								"image": "mixed-vegetables.png"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "Serve as a dip for raw vegetables. Makes approximately 3 cups.",
						"ingredients": [
							{
								"id": 11583,
								"name": "vegetable",
								"localizedName": "vegetable",
								"image": "mixed-vegetables.png"
							},
							{
								"id": 0,
								"name": "dip",
								"localizedName": "dip",
								"image": ""
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/vegetable-dip-664547"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 8,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 28,
		"healthScore": 82,
		"creditsText": "foodista.com",
		"sourceName": "foodista.com",
		"pricePerServing": 443.76,
		"id": 633921,
		"title": "Balsamic & Honey Glazed Salmon with Lemony Asparagus",
		"readyInMinutes": 60,
		"servings": 2,
		"sourceUrl": "http://www.foodista.com/recipe/CK5NCLGT/balsamic-honey-glazed-salmon-with-lemony-asparagus",
		"image": "https://spoonacular.com/recipeImages/633921-312x231.jpg",
		"imageType": "jpg",
		"summary": "If you want to add more <b>gluten free, dairy free, and pescatarian</b> recipes to your recipe box, Balsamic & Honey Glazed Salmon with Lemony Asparagus might be a recipe you should try. For <b>$4.44 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains approximately <b>25g of protein</b>, <b>14g of fat</b>, and a total of <b>301 calories</b>. This recipe serves 2. 28 people were impressed by this recipe. From preparation to the plate, this recipe takes roughly <b>1 hour</b>. It is brought to you by Foodista. It works well as a pretty expensive main course. Head to the store and pick up juice of lemon, herbs de provence, salmon fillet, and a few other things to make it today. Taking all factors into account, this recipe <b>earns a spoonacular score of 96%</b>, which is great. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/balsamic-honey-glazed-salmon-with-lemony-asparagus-1501683\">Balsamic & Honey Glazed Salmon with Lemony Asparagus</a>, <a href=\"https://spoonacular.com/recipes/balsamic-honey-glazed-salmon-with-lemony-asparagus-1614063\">Balsamic & Honey Glazed Salmon with Lemony Asparagus</a>, and <a href=\"https://spoonacular.com/recipes/balsamic-honey-glazed-salmon-with-lemony-asparagus-1363909\">Balsamic & Honey Glazed Salmon with Lemony Asparagus</a>.",
		"cuisines": [],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"pescatarian"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "In a small mixing bowl or blender, combine all of the ingredients for the balsamic marinade except for the lemon juice (balsamic vinegar, apple cider vinegar, 1 tbsp grapeseed oil, honey, dried dill, herbs de provence, salt and pepper).",
						"ingredients": [
							{
								"id": 2048,
								"name": "apple cider vinegar",
								"localizedName": "apple cider vinegar",
								"image": "apple-cider-vinegar.jpg"
							},
							{
								"id": 1012042,
								"name": "herbes de provence",
								"localizedName": "herbes de provence",
								"image": "dried-herbs.png"
							},
							{
								"id": 2069,
								"name": "balsamic vinegar",
								"localizedName": "balsamic vinegar",
								"image": "balsamic-vinegar.jpg"
							},
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 4517,
								"name": "grape seed oil",
								"localizedName": "grape seed oil",
								"image": "vegetable-oil.jpg"
							},
							{
								"id": 9152,
								"name": "lemon juice",
								"localizedName": "lemon juice",
								"image": "lemon-juice.jpg"
							},
							{
								"id": 2017,
								"name": "dried dill",
								"localizedName": "dried dill",
								"image": "dill.jpg"
							},
							{
								"id": 0,
								"name": "marinade",
								"localizedName": "marinade",
								"image": "seasoning.png"
							},
							{
								"id": 19296,
								"name": "honey",
								"localizedName": "honey",
								"image": "honey.png"
							}
						],
						"equipment": [
							{
								"id": 405907,
								"name": "mixing bowl",
								"localizedName": "mixing bowl",
								"image": "mixing-bowl.jpg"
							},
							{
								"id": 404726,
								"name": "blender",
								"localizedName": "blender",
								"image": "blender.png"
							}
						]
					},
					{
						"number": 2,
						"step": "Whisk or blend until oil and vinegar are well incorporated and no longer separate.",
						"ingredients": [
							{
								"id": 2053,
								"name": "vinegar",
								"localizedName": "vinegar",
								"image": "vinegar-(white).jpg"
							},
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": [
							{
								"id": 404661,
								"name": "whisk",
								"localizedName": "whisk",
								"image": "whisk.png"
							}
						]
					},
					{
						"number": 3,
						"step": "Place salmon fillet in a baking dish (I use a small casserole dish).",
						"ingredients": [
							{
								"id": 10115076,
								"name": "salmon fillets",
								"localizedName": "salmon fillets",
								"image": "salmon.png"
							}
						],
						"equipment": [
							{
								"id": 404635,
								"name": "casserole dish",
								"localizedName": "casserole dish",
								"image": "casserole-dish.png"
							},
							{
								"id": 404646,
								"name": "baking pan",
								"localizedName": "baking pan",
								"image": "roasting-pan.jpg"
							}
						]
					},
					{
						"number": 4,
						"step": "Pour the marinade over the salmon and allow it to marinate for at least 15 minutes (or up to 24 hours covered in the refrigerator).  Turn your oven on high broil. Just before putting the salmon in the oven, drizzle the lemon juice over the fish.",
						"ingredients": [
							{
								"id": 9152,
								"name": "lemon juice",
								"localizedName": "lemon juice",
								"image": "lemon-juice.jpg"
							},
							{
								"id": 0,
								"name": "marinade",
								"localizedName": "marinade",
								"image": "seasoning.png"
							},
							{
								"id": 15076,
								"name": "salmon",
								"localizedName": "salmon",
								"image": "salmon.png"
							},
							{
								"id": 10115261,
								"name": "fish",
								"localizedName": "fish",
								"image": "fish-fillet.jpg"
							}
						],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						],
						"length": {
							"number": 1455,
							"unit": "minutes"
						}
					},
					{
						"number": 5,
						"step": "Bake for 10 to 12 minutes on the top rack or until salmon is glazed, browned and sizzling.While the salmon is baking, prepare the asparagus.  Wash the asparagus and cut off the bottom inch and a half of each stalk and discard.",
						"ingredients": [
							{
								"id": 11011,
								"name": "asparagus",
								"localizedName": "asparagus",
								"image": "asparagus.png"
							},
							{
								"id": 15076,
								"name": "salmon",
								"localizedName": "salmon",
								"image": "salmon.png"
							}
						],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						],
						"length": {
							"number": 10,
							"unit": "minutes"
						}
					},
					{
						"number": 6,
						"step": "Spread the asparagus on in a large skillet.",
						"ingredients": [
							{
								"id": 11011,
								"name": "asparagus",
								"localizedName": "asparagus",
								"image": "asparagus.png"
							},
							{
								"id": 0,
								"name": "spread",
								"localizedName": "spread",
								"image": ""
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						]
					},
					{
						"number": 7,
						"step": "Drizzle the grapeseed oil over the asparagus and spread the oil on the asparagus with your hands so that all stalks are completely coated.",
						"ingredients": [
							{
								"id": 4517,
								"name": "grape seed oil",
								"localizedName": "grape seed oil",
								"image": "vegetable-oil.jpg"
							},
							{
								"id": 11011,
								"name": "asparagus",
								"localizedName": "asparagus",
								"image": "asparagus.png"
							},
							{
								"id": 0,
								"name": "spread",
								"localizedName": "spread",
								"image": ""
							},
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 8,
						"step": "Sprinkle asparagus with desired amount of salt and pepper.",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 11011,
								"name": "asparagus",
								"localizedName": "asparagus",
								"image": "asparagus.png"
							}
						],
						"equipment": []
					},
					{
						"number": 9,
						"step": "Saute over medium heat for 5 minutes.",
						"ingredients": [],
						"equipment": [],
						"length": {
							"number": 5,
							"unit": "minutes"
						}
					},
					{
						"number": 10,
						"step": "Add the two tablespoons of vegetable stock and cover the skillet.",
						"ingredients": [
							{
								"id": 6615,
								"name": "vegetable stock",
								"localizedName": "vegetable stock",
								"image": "chicken-broth.png"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						]
					},
					{
						"number": 11,
						"step": "Saute 4 minutes.",
						"ingredients": [],
						"equipment": [],
						"length": {
							"number": 4,
							"unit": "minutes"
						}
					},
					{
						"number": 12,
						"step": "Remove lid and add the minced garlic.",
						"ingredients": [
							{
								"id": 0,
								"name": "minced garlic",
								"localizedName": "minced garlic",
								"image": "garlic.png"
							}
						],
						"equipment": []
					},
					{
						"number": 13,
						"step": "Place cover back over the asparagus. Continue cooking an additional 3 to 5 minutes until asparagus is cooked but not too soft.  Grate lemon zest over the top of the asparagus.",
						"ingredients": [
							{
								"id": 9156,
								"name": "lemon zest",
								"localizedName": "lemon zest",
								"image": "zest-lemon.jpg"
							},
							{
								"id": 11011,
								"name": "asparagus",
								"localizedName": "asparagus",
								"image": "asparagus.png"
							}
						],
						"equipment": [],
						"length": {
							"number": 3,
							"unit": "minutes"
						}
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/balsamic-honey-glazed-salmon-with-lemony-asparagus-633921"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 7,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 6,
		"healthScore": 100,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 366.31,
		"id": 658579,
		"title": "Roasted Endive Salad With Prosciutto, Figs and Pistachios",
		"readyInMinutes": 45,
		"servings": 4,
		"sourceUrl": "https://www.foodista.com/recipe/YGDYNYBG/roasted-endive-salad-with-prosciutto-figs-and-pistachios",
		"image": "https://spoonacular.com/recipeImages/658579-312x231.jpg",
		"imageType": "jpg",
		"summary": "Roasted Endive Salad With Prosciutto, Figs and Pistachios might be just the main course you are searching for. One serving contains <b>388 calories</b>, <b>14g of protein</b>, and <b>10g of fat</b>. For <b>$3.66 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. It is brought to you by Foodista. 6 people were glad they tried this recipe. If you have pistachio nuts, olive oil, figs, and a few other ingredients on hand, you can make it. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and primal</b> diet. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Overall, this recipe earns an <b>outstanding spoonacular score of 96%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/frise-salad-with-prosciutto-roasted-figs-and-walnuts-96484\">Frisée Salad with Prosciutto, Roasted Figs, and Walnuts</a>, <a href=\"https://spoonacular.com/recipes/chicory-and-endive-salad-with-spiced-pistachios-12783\">Chicory and Endive Salad with Spiced Pistachios</a>, and <a href=\"https://spoonacular.com/recipes/prosciutto-roasted-figs-130081\">Prosciutto Roasted Figs</a>.",
		"cuisines": [],
		"dishTypes": [
			"side dish",
			"lunch",
			"main course",
			"salad",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"paleolithic",
			"primal"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Preheat your oven (*ding, this is a great toaster oven candidate) to 350F.  Line a rimmed baking sheet with aluminum foil.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404765,
								"name": "aluminum foil",
								"localizedName": "aluminum foil",
								"image": "aluminum-foil.png"
							},
							{
								"id": 404727,
								"name": "baking sheet",
								"localizedName": "baking sheet",
								"image": "baking-sheet.jpg"
							},
							{
								"id": 404674,
								"name": "toaster",
								"localizedName": "toaster",
								"image": "toaster.jpg"
							},
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg",
								"temperature": {
									"number": 350,
									"unit": "Fahrenheit"
								}
							}
						]
					},
					{
						"number": 2,
						"step": "Wash the endive and remove any unsightly outer leaves.  Slice each endive head in half from the stem to the tip.  Arrange the endive cut side up on the foil-lined baking sheet.  Coat the endive generously with olive oil.",
						"ingredients": [
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							},
							{
								"id": 11213,
								"name": "endive",
								"localizedName": "endive",
								"image": "escarole.jpg"
							}
						],
						"equipment": [
							{
								"id": 404727,
								"name": "baking sheet",
								"localizedName": "baking sheet",
								"image": "baking-sheet.jpg"
							},
							{
								"id": 404765,
								"name": "aluminum foil",
								"localizedName": "aluminum foil",
								"image": "aluminum-foil.png"
							}
						]
					},
					{
						"number": 3,
						"step": "Bake at 350F for 30 minutes, or until the outer edges are golden brown.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg",
								"temperature": {
									"number": 350,
									"unit": "Fahrenheit"
								}
							}
						],
						"length": {
							"number": 30,
							"unit": "minutes"
						}
					},
					{
						"number": 4,
						"step": "Meanwhile, fry the prosciutto in a skillet until crispy.",
						"ingredients": [
							{
								"id": 10010123,
								"name": "prosciutto",
								"localizedName": "prosciutto",
								"image": "proscuitto.jpg"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						]
					},
					{
						"number": 5,
						"step": "Drain onto paper towels, then crumble the prosciutto and set it aside.",
						"ingredients": [
							{
								"id": 10010123,
								"name": "prosciutto",
								"localizedName": "prosciutto",
								"image": "proscuitto.jpg"
							}
						],
						"equipment": [
							{
								"id": 405895,
								"name": "paper towels",
								"localizedName": "paper towels",
								"image": "paper-towels.jpg"
							}
						]
					},
					{
						"number": 6,
						"step": "When the endive is done roasting, arrange three pieces on a plate alongside a handful of sliced dried figs and pistachio nuts.",
						"ingredients": [
							{
								"id": 12151,
								"name": "pistachio nuts",
								"localizedName": "pistachio nuts",
								"image": "pistachios.jpg"
							},
							{
								"id": 9094,
								"name": "dried figs",
								"localizedName": "dried figs",
								"image": "figs-dried.jpg"
							},
							{
								"id": 11213,
								"name": "endive",
								"localizedName": "endive",
								"image": "escarole.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 7,
						"step": "Drizzle a spoonful of honey over the plate, then sprinkle the endive with about 1/4th of the crumbled prosciutto.",
						"ingredients": [
							{
								"id": 10010123,
								"name": "prosciutto",
								"localizedName": "prosciutto",
								"image": "proscuitto.jpg"
							},
							{
								"id": 11213,
								"name": "endive",
								"localizedName": "endive",
								"image": "escarole.jpg"
							},
							{
								"id": 19296,
								"name": "honey",
								"localizedName": "honey",
								"image": "honey.png"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/roasted-endive-salad-with-prosciutto-figs-and-pistachios-658579"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": false,
		"dairyFree": false,
		"veryHealthy": false,
		"cheap": false,
		"veryPopular": true,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 28,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 992,
		"healthScore": 45,
		"creditsText": "pinkwhen.com",
		"sourceName": "pinkwhen.com",
		"pricePerServing": 283.4,
		"id": 715385,
		"title": "Slow Cooker Baked Potato Soup",
		"readyInMinutes": 540,
		"servings": 3,
		"sourceUrl": "http://www.pinkwhen.com/slow-cooker-baked-potato-soup-recipe/",
		"image": "https://spoonacular.com/recipeImages/715385-312x231.jpg",
		"imageType": "jpg",
		"summary": "Slow Cooker Baked Potato Soup might be a good recipe to expand your main course collection. This recipe serves 3. One portion of this dish contains approximately <b>35g of protein</b>, <b>33g of fat</b>, and a total of <b>884 calories</b>. For <b>$2.83 per serving</b>, this recipe <b>covers 36%</b> of your daily requirements of vitamins and minerals. 992 people were glad they tried this recipe. It is brought to you by Pink When. It is perfect for <b>Autumn</b>. If you have green onion tops, cream, water, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly <b>9 hours</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is excellent. Try <a href=\"https://spoonacular.com/recipes/slow-cooker-baked-potato-soup-569219\">Slow cooker baked potato soup</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-baked-potato-soup-1399117\">Slow Cooker Baked Potato Soup</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-baked-potato-soup-731389\">Slow Cooker Baked Potato Soup</a> for similar recipes.",
		"cuisines": [],
		"dishTypes": [
			"soup",
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [],
		"occasions": [
			"fall",
			"winter"
		],
		"analyzedInstructions": [
			{
				"name": "Coat the cubed potatoes with the flour and then place in the slow cooker.Step 2",
				"steps": []
			},
			{
				"name": "Add red onion, bouillon cubes, bacon bits, and pepper over the potatoes.Step 3",
				"steps": []
			},
			{
				"name": "Pour water over the mixture and cook on low for 8 hours.Step 4",
				"steps": [
					{
						"number": 1,
						"step": "Add half-and-half, stirring well, and cook for another 30 minutes to thicken.Step 5: Ladle soup into bowls and serve topped with green onion tops, cheddar cheese, and sour cream.",
						"ingredients": [
							{
								"id": 11291,
								"name": "green onions",
								"localizedName": "green onions",
								"image": "spring-onions.jpg"
							},
							{
								"id": 1009,
								"name": "cheddar cheese",
								"localizedName": "cheddar cheese",
								"image": "cheddar-cheese.png"
							},
							{
								"id": 1056,
								"name": "sour cream",
								"localizedName": "sour cream",
								"image": "sour-cream.jpg"
							},
							{
								"id": 0,
								"name": "soup",
								"localizedName": "soup",
								"image": ""
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							},
							{
								"id": 404630,
								"name": "ladle",
								"localizedName": "ladle",
								"image": "ladle.jpg"
							}
						],
						"length": {
							"number": 30,
							"unit": "minutes"
						}
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/slow-cooker-baked-potato-soup-715385"
	},
	{
		"vegetarian": true,
		"vegan": true,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 1,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 9,
		"healthScore": 81,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 141.44,
		"id": 641057,
		"title": "Curried Butternut Squash and Apple Soup",
		"readyInMinutes": 45,
		"servings": 1,
		"sourceUrl": "https://www.foodista.com/recipe/FKQCYKYR/curried-butternut-squash-and-apple-soup",
		"image": "https://spoonacular.com/recipeImages/641057-312x231.jpg",
		"imageType": "jpg",
		"summary": "If you want to add more <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipes to your recipe box, Curried Butternut Squash and Apple Soup might be a recipe you should try. For <b>$1.41 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. This recipe serves 1. One serving contains <b>134 calories</b>, <b>7g of protein</b>, and <b>3g of fat</b>. A mixture of a squirt sriracha, butternut squash, apple, and a handful of other ingredients are all it takes to make this recipe so yummy. It is perfect for <b>Autumn</b>. It works well as a hor d'oeuvre. This recipe from Foodista has 9 fans. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Overall, this recipe earns an <b>awesome spoonacular score of 89%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/curried-apple-butternut-squash-soup-620121\">Curried Apple + Butternut Squash Soup</a>, <a href=\"https://spoonacular.com/recipes/curried-butternut-squash-and-apple-soup-836936\">Curried Butternut Squash and Apple Soup</a>, and <a href=\"https://spoonacular.com/recipes/curried-butternut-squash-apple-soup-crock-pot-94742\">Curried Butternut Squash & Apple Soup - Crock Pot</a>.",
		"cuisines": [],
		"dishTypes": [
			"soup",
			"antipasti",
			"starter",
			"snack",
			"appetizer",
			"antipasto",
			"hor d'oeuvre"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"lacto ovo vegetarian",
			"vegan"
		],
		"occasions": [
			"fall",
			"winter"
		],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Get ready two small saucepans.",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 2,
						"step": "In one have together 1/2 of the squash and 1/2 of the apple  bring to a simmer, and simmer until just tender when pierced with a fork.",
						"ingredients": [
							{
								"id": 10011485,
								"name": "squash",
								"localizedName": "squash",
								"image": "butternut-squash.jpg"
							},
							{
								"id": 9003,
								"name": "apple",
								"localizedName": "apple",
								"image": "apple.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 3,
						"step": "In the other, add in the rest of the vegetables along with 1 cup of water  bring this to a rolling boil, reduce to a simmer, and simmer until very very tender. When very tender, remove the vegetables from the heat, and blend these vegetables together (without draining) with the Braggs, spices, sriracha and the additional 1/2 cup water.",
						"ingredients": [
							{
								"id": 11583,
								"name": "vegetable",
								"localizedName": "vegetable",
								"image": "mixed-vegetables.png"
							},
							{
								"id": 1016168,
								"name": "sriracha",
								"localizedName": "sriracha",
								"image": "hot-sauce-or-tabasco.png"
							},
							{
								"id": 2035,
								"name": "spices",
								"localizedName": "spices",
								"image": "spices.png"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Mix the blended part of the soup with the simmered squash and apples.",
						"ingredients": [
							{
								"id": 9003,
								"name": "apple",
								"localizedName": "apple",
								"image": "apple.jpg"
							},
							{
								"id": 10011485,
								"name": "squash",
								"localizedName": "squash",
								"image": "butternut-squash.jpg"
							},
							{
								"id": 0,
								"name": "soup",
								"localizedName": "soup",
								"image": ""
							}
						],
						"equipment": []
					},
					{
						"number": 5,
						"step": "Mix in the cubed tofu, gently re-heat and serve.",
						"ingredients": [
							{
								"id": 16213,
								"name": "tofu",
								"localizedName": "tofu",
								"image": "tofu.png"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/curried-butternut-squash-and-apple-soup-641057"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": false,
		"dairyFree": false,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 6,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 3,
		"healthScore": 100,
		"creditsText": "foodista.com",
		"sourceName": "foodista.com",
		"pricePerServing": 66.19,
		"id": 655575,
		"title": "Penne Pasta with Broccoli and Cheese",
		"readyInMinutes": 45,
		"servings": 4,
		"sourceUrl": "https://www.foodista.com/recipe/SJS46FPS/penne-pasta-with-broccoli-and-cheese",
		"image": "https://spoonacular.com/recipeImages/655575-312x231.jpg",
		"imageType": "jpg",
		"summary": "Penne Pasta with Broccoli and Cheese might be just the main course you are searching for. This recipe serves 4 and costs 66 cents per serving. One portion of this dish contains roughly <b>13g of protein</b>, <b>2g of fat</b>, and a total of <b>269 calories</b>. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Not a lot of people made this recipe, and 3 would say it hit the spot. It is brought to you by Foodista. If you have ground pepper, water, chicken broth, and a few other ingredients on hand, you can make it. With a spoonacular <b>score of 94%</b>, this dish is awesome. Try <a href=\"https://spoonacular.com/recipes/penne-pasta-with-broccoli-and-cheese-1403877\">Penne Pasta with Broccoli and Cheese</a>, <a href=\"https://spoonacular.com/recipes/penne-pasta-with-broccoli-and-cheese-1400035\">Penne Pasta with Broccoli and Cheese</a>, and <a href=\"https://spoonacular.com/recipes/cheesy-broccoli-penne-pasta-547454\">Cheesy Broccoli Penne Pasta</a> for similar recipes.",
		"cuisines": [],
		"dishTypes": [
			"side dish",
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "In a large pot add water and bring to a boil.",
						"ingredients": [
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": [
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "Add pasta and cook until done, about 6 minutes.",
						"ingredients": [
							{
								"id": 20420,
								"name": "pasta",
								"localizedName": "pasta",
								"image": "fusilli.jpg"
							}
						],
						"equipment": [],
						"length": {
							"number": 6,
							"unit": "minutes"
						}
					},
					{
						"number": 3,
						"step": "Meanwhile, heat the broth, basil, black pepper, garlic and broccoli in a large skillet over medium heat bring to a boil. Reduce the heat to low. Cover and cook until the broccoli is tender-crisp.",
						"ingredients": [
							{
								"id": 1002030,
								"name": "black pepper",
								"localizedName": "black pepper",
								"image": "pepper.jpg"
							},
							{
								"id": 11090,
								"name": "broccoli",
								"localizedName": "broccoli",
								"image": "broccoli.jpg"
							},
							{
								"id": 11215,
								"name": "garlic",
								"localizedName": "garlic",
								"image": "garlic.png"
							},
							{
								"id": 2044,
								"name": "basil",
								"localizedName": "basil",
								"image": "basil.jpg"
							},
							{
								"id": 1006615,
								"name": "broth",
								"localizedName": "broth",
								"image": "chicken-broth.png"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						]
					},
					{
						"number": 4,
						"step": "Add the pasta to the broccoli mixture and toss to coat.",
						"ingredients": [
							{
								"id": 11090,
								"name": "broccoli",
								"localizedName": "broccoli",
								"image": "broccoli.jpg"
							},
							{
								"id": 20420,
								"name": "pasta",
								"localizedName": "pasta",
								"image": "fusilli.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 5,
						"step": "Add cheese to the pasta mixture",
						"ingredients": [
							{
								"id": 1041009,
								"name": "cheese",
								"localizedName": "cheese",
								"image": "cheddar-cheese.png"
							},
							{
								"id": 20420,
								"name": "pasta",
								"localizedName": "pasta",
								"image": "fusilli.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 6,
						"step": "Serve and enjoy!",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 7,
						"step": "Makes 4 servings, about 2 cups or so",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 8,
						"step": "Calories per serving:  235,  Fat:  2.",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 9,
						"step": "Cholesterol:  5,  Sodium:  138,  Carbs:  40.3,  Fiber:  8.5,  Sugar:  3.3,  Protein:  12",
						"ingredients": [
							{
								"id": 19335,
								"name": "sugar",
								"localizedName": "sugar",
								"image": "sugar-in-bowl.png"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/penne-pasta-with-broccoli-and-cheese-655575"
	},
	{
		"vegetarian": true,
		"vegan": true,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 10,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 5,
		"healthScore": 100,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 246.69,
		"id": 632269,
		"title": "Amaranth and Roast Veggie Salad",
		"readyInMinutes": 45,
		"servings": 2,
		"sourceUrl": "http://www.foodista.com/recipe/BPXZ2RCY/amaranth-and-roast-veggie-salad",
		"image": "https://spoonacular.com/recipeImages/632269-312x231.jpg",
		"imageType": "jpg",
		"summary": "Amaranth and Roast Veggie Salad could be just the <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipe you've been looking for. This recipe serves 2 and costs $2.47 per serving. This hor d'oeuvre has <b>361 calories</b>, <b>9g of protein</b>, and <b>18g of fat</b> per serving. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. This recipe from Foodista requires amaranth, punnet baby tomatoes, bell pepper, and pumpkin. 5 people have tried and liked this recipe. Overall, this recipe earns an <b>outstanding spoonacular score of 95%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/mums-roast-veggie-salad-12573\">Mum’s Roast Veggie Salad</a>, <a href=\"https://spoonacular.com/recipes/amaranth-yogurt-parfait-popped-amaranth-parfait-with-fruits-1235383\">amaranth yogurt parfait – popped amaranth parfait with fruits</a>, and <a href=\"https://spoonacular.com/recipes/amaranth-yogurt-parfait-popped-amaranth-parfait-with-fruits-1238997\">amaranth yogurt parfait – popped amaranth parfait with fruits</a>.",
		"cuisines": [],
		"dishTypes": [
			"side dish",
			"antipasti",
			"salad",
			"starter",
			"snack",
			"appetizer",
			"antipasto",
			"hor d'oeuvre"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"lacto ovo vegetarian",
			"vegan"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Cook the amaranth with about a cup of water until it reaches a sticky consistency",
						"ingredients": [
							{
								"id": 20001,
								"name": "amaranth",
								"localizedName": "amaranth",
								"image": "amaranth.jpg"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": []
					},
					{
						"number": 2,
						"step": "Cut the onion roughly into chunks",
						"ingredients": [
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							}
						],
						"equipment": []
					},
					{
						"number": 3,
						"step": "Add the onion and diced pumpkin to a tinfoil lined baking tray",
						"ingredients": [
							{
								"id": 11422,
								"name": "pumpkin",
								"localizedName": "pumpkin",
								"image": "pumpkin.png"
							},
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							}
						],
						"equipment": [
							{
								"id": 404646,
								"name": "baking pan",
								"localizedName": "baking pan",
								"image": "roasting-pan.jpg"
							}
						]
					},
					{
						"number": 4,
						"step": "Drizzled over the olive oil and sprinkle with the herbal salt and pepper",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 5,
						"step": "Put into a hot oven and roast until the edges of the pumpkin go crispy",
						"ingredients": [
							{
								"id": 11422,
								"name": "pumpkin",
								"localizedName": "pumpkin",
								"image": "pumpkin.png"
							}
						],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						]
					},
					{
						"number": 6,
						"step": "Just before the veggies are done, throw in the baby tomatoes",
						"ingredients": [
							{
								"id": 11529,
								"name": "tomato",
								"localizedName": "tomato",
								"image": "tomato.png"
							}
						],
						"equipment": []
					},
					{
						"number": 7,
						"step": "Coat the veggies in the cooked amaranth",
						"ingredients": [
							{
								"id": 20002,
								"name": "cooked amaranth",
								"localizedName": "cooked amaranth",
								"image": "amaranth.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 8,
						"step": "Tear a few rocket leaves",
						"ingredients": [
							{
								"id": 11959,
								"name": "arugula",
								"localizedName": "arugula",
								"image": "arugula-or-rocket-salad.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 9,
						"step": "Toss together and there you have it, an unusual roast veggie salad!",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 10,
						"step": "Serve warm",
						"ingredients": [],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/amaranth-and-roast-veggie-salad-632269"
	},
	{
		"vegetarian": true,
		"vegan": true,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": true,
		"weightWatcherSmartPoints": 3,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 4,
		"healthScore": 100,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 139.83,
		"id": 637162,
		"title": "Carrot and Cabbage Salad With Coriander+cumin Dry Rub",
		"readyInMinutes": 25,
		"servings": 1,
		"sourceUrl": "http://www.foodista.com/recipe/MB7NYM87/carrot-and-cabbage-salad-with-coriandercumin-dry-rub",
		"image": "https://spoonacular.com/recipeImages/637162-312x231.jpg",
		"imageType": "jpg",
		"summary": "If you want to add more <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipes to your repertoire, Carrot and Cabbage Salad With Coriander+cumin Dry Rub might be a recipe you should try. This recipe serves 1. One portion of this dish contains about <b>6g of protein</b>, <b>10g of fat</b>, and a total of <b>222 calories</b>. For <b>$1.4 per serving</b>, this recipe <b>covers 27%</b> of your daily requirements of vitamins and minerals. 4 people have made this recipe and would make it again. Head to the store and pick up sunflower seeds, cumin seed powder, juice of lime, and a few other things to make it today. It works well as an affordable hor d'oeuvre. From preparation to the plate, this recipe takes roughly <b>25 minutes</b>. It is brought to you by Foodista. Overall, this recipe earns a <b>super spoonacular score of 96%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-1230725\">Carrot and Cabbage Salad With Coriander+cumin Dry Rub</a>, <a href=\"https://spoonacular.com/recipes/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-1350633\">Carrot and Cabbage Salad With Coriander+cumin Dry Rub</a>, and <a href=\"https://spoonacular.com/recipes/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-1253443\">Carrot and Cabbage Salad With Coriander+cumin Dry Rub</a>.",
		"cuisines": [],
		"dishTypes": [
			"side dish",
			"antipasti",
			"salad",
			"starter",
			"snack",
			"appetizer",
			"antipasto",
			"hor d'oeuvre"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"paleolithic",
			"lacto ovo vegetarian",
			"primal",
			"fodmap friendly",
			"whole 30",
			"vegan"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Chop up the carrots and the cabbage into slivers of roughly the same size.",
						"ingredients": [
							{
								"id": 11109,
								"name": "cabbage",
								"localizedName": "cabbage",
								"image": "cabbage.jpg"
							},
							{
								"id": 11124,
								"name": "carrot",
								"localizedName": "carrot",
								"image": "sliced-carrot.png"
							}
						],
						"equipment": []
					},
					{
						"number": 2,
						"step": "Add the ground coriander, cumin seed, lime juice, and olive oil and massage it into the veggies.",
						"ingredients": [
							{
								"id": 1002013,
								"name": "ground coriander",
								"localizedName": "ground coriander",
								"image": "ground-coriander.jpg"
							},
							{
								"id": 2014,
								"name": "cumin seeds",
								"localizedName": "cumin seeds",
								"image": "ground-cumin.jpg"
							},
							{
								"id": 9160,
								"name": "lime juice",
								"localizedName": "lime juice",
								"image": "lime-juice.png"
							},
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 3,
						"step": "Add the fresh coriander and sunflower seeds on top.Leave aside for a couple of hours for the spices to seep into the veggies for added flavor.",
						"ingredients": [
							{
								"id": 11165,
								"name": "fresh cilantro",
								"localizedName": "fresh cilantro",
								"image": "cilantro.png"
							},
							{
								"id": 12036,
								"name": "sunflower seeds",
								"localizedName": "sunflower seeds",
								"image": "sunflower-seeds.jpg"
							},
							{
								"id": 2035,
								"name": "spices",
								"localizedName": "spices",
								"image": "spices.png"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-637162"
	},
	{
		"vegetarian": true,
		"vegan": true,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 10,
		"gaps": "no",
		"preparationMinutes": 2,
		"cookingMinutes": 11,
		"aggregateLikes": 1,
		"healthScore": 100,
		"creditsText": "pinkwhen.com",
		"sourceName": "pinkwhen.com",
		"pricePerServing": 301.67,
		"id": 982371,
		"title": "Instant Pot Quinoa Grain Bowl",
		"readyInMinutes": 13,
		"servings": 4,
		"sourceUrl": "https://www.pinkwhen.com/instant-pot-quinoa-grain-bowl/",
		"image": "https://spoonacular.com/recipeImages/982371-312x231.jpg",
		"imageType": "jpg",
		"summary": "Instant Pot Quinoa Grain Bowl might be a good recipe to expand your main course recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>416 calories</b>, <b>16g of protein</b>, and <b>10g of fat</b> per serving. This recipe serves 4 and costs $3.02 per serving. From preparation to the plate, this recipe takes roughly <b>13 minutes</b>. A mixture of baby brussell sprouts, broccoli, salt and pepper, and a handful of other ingredients are all it takes to make this recipe so tasty. 1 person has made this recipe and would make it again. It is brought to you by Pink When. With a spoonacular <b>score of 96%</b>, this dish is super. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/instant-pot-quinoa-grain-bowl-1693765\">Instant Pot Quinoa Grain Bowl</a>, <a href=\"https://spoonacular.com/recipes/instant-pot-sausage-cabbage-bowl-with-quinoa-or-stovetop-901463\">Instant Pot Sausage Cabbage Bowl with Quinoa (or Stovetop)</a>, and <a href=\"https://spoonacular.com/recipes/crock-pot-chicken-fajita-bowl-grain-free-paleo-1224627\">Crock Pot Chicken Fajita Bowl (Grain-Free, Paleo)</a>.",
		"cuisines": [],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"lacto ovo vegetarian",
			"vegan"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Rinse and drain the quinoa to remove the bitter and sometimes mildly soapy taste that can linger if not rinsed.",
						"ingredients": [
							{
								"id": 20035,
								"name": "quinoa",
								"localizedName": "quinoa",
								"image": "uncooked-quinoa.png"
							}
						],
						"equipment": []
					},
					{
						"number": 2,
						"step": "Combine the quinoa, stock and seasonings in the Instant Pot together and then twist to lock the lid shut. Set the pot to Manual for 1 minute.",
						"ingredients": [
							{
								"id": 1042027,
								"name": "seasoning",
								"localizedName": "seasoning",
								"image": "seasoning.png"
							},
							{
								"id": 20035,
								"name": "quinoa",
								"localizedName": "quinoa",
								"image": "uncooked-quinoa.png"
							},
							{
								"id": 1006615,
								"name": "stock",
								"localizedName": "stock",
								"image": "chicken-broth.png"
							}
						],
						"equipment": [
							{
								"id": 414093,
								"name": "instant pot",
								"localizedName": "instant pot",
								"image": ""
							},
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						],
						"length": {
							"number": 1,
							"unit": "minutes"
						}
					},
					{
						"number": 3,
						"step": "At the end of the cook time, let the pot to natural pressure release for 10 minutes before carefully releasing the remaining pressure.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						],
						"length": {
							"number": 10,
							"unit": "minutes"
						}
					},
					{
						"number": 4,
						"step": "Fluff the cooked quinoa with a fork. Now you have Instant Pot Quinoa!",
						"ingredients": [
							{
								"id": 20137,
								"name": "cooked quinoa",
								"localizedName": "cooked quinoa",
								"image": "cooked-quinoa.png"
							},
							{
								"id": 20035,
								"name": "quinoa",
								"localizedName": "quinoa",
								"image": "uncooked-quinoa.png"
							}
						],
						"equipment": [
							{
								"id": 414093,
								"name": "instant pot",
								"localizedName": "instant pot",
								"image": ""
							}
						]
					},
					{
						"number": 5,
						"step": "Add fruits and vegetables over a scoop of cooked quinoa and make an amazing quinoa grain bowl.",
						"ingredients": [
							{
								"id": 20137,
								"name": "cooked quinoa",
								"localizedName": "cooked quinoa",
								"image": "cooked-quinoa.png"
							},
							{
								"id": 11583,
								"name": "vegetable",
								"localizedName": "vegetable",
								"image": "mixed-vegetables.png"
							},
							{
								"id": 9431,
								"name": "fruit",
								"localizedName": "fruit",
								"image": "mixed-fresh-fruit.jpg"
							},
							{
								"id": 20035,
								"name": "quinoa",
								"localizedName": "quinoa",
								"image": "uncooked-quinoa.png"
							},
							{
								"id": 0,
								"name": "grains",
								"localizedName": "grains",
								"image": ""
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/instant-pot-quinoa-grain-bowl-982371"
	},
	{
		"vegetarian": true,
		"vegan": true,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 13,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 1,
		"healthScore": 100,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 305.89,
		"id": 1095753,
		"title": "Roasted Cauliflower Detox Bowl with Tahini Sauce",
		"readyInMinutes": 50,
		"servings": 2,
		"sourceUrl": "https://www.foodista.com/recipe/6J6KLYH6/roasted-cauliflower-detox-bowl-with-tahini-sauce",
		"image": "https://spoonacular.com/recipeImages/1095753-312x231.jpg",
		"imageType": "jpg",
		"summary": "Roasted Cauliflower Detox Bowl with Tahini Sauce might be just the main course you are searching for. One serving contains <b>549 calories</b>, <b>18g of protein</b>, and <b>30g of fat</b>. This recipe serves 2 and costs $3.06 per serving. 1 person were glad they tried this recipe. A mixture of kale leaves, garlic, ground cumin, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes around <b>50 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is awesome. <a href=\"https://spoonacular.com/recipes/quinoa-bowl-with-roasted-cauliflower-and-tahini-dressing-862308\">Quinoa Bowl with Roasted Cauliflower and Tahini Dressing</a>, <a href=\"https://spoonacular.com/recipes/quinoa-bowl-with-roasted-cauliflower-and-tahini-dressing-1667949\">Quinoa Bowl with Roasted Cauliflower and Tahini Dressing</a>, and <a href=\"https://spoonacular.com/recipes/roasted-cauliflower-with-tahini-sauce-658541\">Roasted Cauliflower with Tahini Sauce</a> are very similar to this recipe.",
		"cuisines": [],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"lacto ovo vegetarian",
			"vegan"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Soak the cashews overnight in water.Preheat the oven to 200C/~395 F. Chop the cauliflower into florets and toss with the olive oil and ground cumin. Roast for 20-25 minutes until golden.To make the sauce, add all ingredients except the water and salt to a food processor. While blending, drizzle in the water a little at a time until the sauce starts to become smooth. Continue processing, scraping down the sides or adding additional water as needed, until the sauce is as smooth as your food processor can make it.",
						"ingredients": [
							{
								"id": 1012014,
								"name": "ground cumin",
								"localizedName": "ground cumin",
								"image": "ground-cumin.jpg"
							},
							{
								"id": 11135,
								"name": "cauliflower",
								"localizedName": "cauliflower",
								"image": "cauliflower.jpg"
							},
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							},
							{
								"id": 12087,
								"name": "cashews",
								"localizedName": "cashews",
								"image": "cashews.jpg"
							},
							{
								"id": 0,
								"name": "sauce",
								"localizedName": "sauce",
								"image": ""
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							}
						],
						"equipment": [
							{
								"id": 404771,
								"name": "food processor",
								"localizedName": "food processor",
								"image": "food-processor.png"
							},
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg",
								"temperature": {
									"number": 200,
									"unit": "Celsius"
								}
							}
						],
						"length": {
							"number": 25,
							"unit": "minutes"
						}
					},
					{
						"number": 2,
						"step": "Add salt to taste.Boil the quinoa in a saucepan for 10 minutes then drain and set aside. Meanwhile, chop the kale and red cabbage into thin strips and saute in a frying pan with the minced garlic clove over a medium heat until wilted.",
						"ingredients": [
							{
								"id": 0,
								"name": "minced garlic",
								"localizedName": "minced garlic",
								"image": "garlic.png"
							},
							{
								"id": 11112,
								"name": "red cabbage",
								"localizedName": "red cabbage",
								"image": "red-cabbage.png"
							},
							{
								"id": 20035,
								"name": "quinoa",
								"localizedName": "quinoa",
								"image": "uncooked-quinoa.png"
							},
							{
								"id": 1002011,
								"name": "clove",
								"localizedName": "clove",
								"image": "cloves.jpg"
							},
							{
								"id": 11233,
								"name": "kale",
								"localizedName": "kale",
								"image": "kale.jpg"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							},
							{
								"id": 404669,
								"name": "sauce pan",
								"localizedName": "sauce pan",
								"image": "sauce-pan.jpg"
							}
						],
						"length": {
							"number": 10,
							"unit": "minutes"
						}
					},
					{
						"number": 3,
						"step": "Add in the quinoa and toss so everything is mixed together.",
						"ingredients": [
							{
								"id": 20035,
								"name": "quinoa",
								"localizedName": "quinoa",
								"image": "uncooked-quinoa.png"
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Place some of the kale mixture in the bottom of a bowl and top with sliced avocado, some of the roasted cauliflower, a drizzle of the tahini sauce and if desired, sprinkle some cress on the top.",
						"ingredients": [
							{
								"id": 11135,
								"name": "cauliflower",
								"localizedName": "cauliflower",
								"image": "cauliflower.jpg"
							},
							{
								"id": 9037,
								"name": "avocado",
								"localizedName": "avocado",
								"image": "avocado.jpg"
							},
							{
								"id": 12698,
								"name": "tahini",
								"localizedName": "tahini",
								"image": "tahini-paste.png"
							},
							{
								"id": 11203,
								"name": "garden cress",
								"localizedName": "garden cress",
								"image": "watercress.jpg"
							},
							{
								"id": 0,
								"name": "sauce",
								"localizedName": "sauce",
								"image": ""
							},
							{
								"id": 11233,
								"name": "kale",
								"localizedName": "kale",
								"image": "kale.jpg"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/roasted-cauliflower-detox-bowl-with-tahini-sauce-1095753"
	},
	{
		"vegetarian": true,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 8,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 5,
		"healthScore": 100,
		"creditsText": "foodista.com",
		"sourceName": "foodista.com",
		"pricePerServing": 262.42,
		"id": 660405,
		"title": "Smoky Black Bean Soup With Sweet Potato & Kale",
		"readyInMinutes": 630,
		"servings": 6,
		"sourceUrl": "http://www.foodista.com/recipe/B8SQD87X/smoky-black-bean-soup-with-sweet-potato-kale",
		"image": "https://spoonacular.com/recipeImages/660405-312x231.jpg",
		"imageType": "jpg",
		"summary": "You can never have too many main course recipes, so give Smoky Black Bean Soup With Sweet Potato & Kale a try. One serving contains <b>555 calories</b>, <b>23g of protein</b>, and <b>7g of fat</b>. This recipe serves 6. For <b>$2.62 per serving</b>, this recipe <b>covers 41%</b> of your daily requirements of vitamins and minerals. 5 people have tried and liked this recipe. This recipe from Foodista requires chicken broth, onion, black beans, and salt & pepper. From preparation to the plate, this recipe takes around <b>10 hours and 30 minutes</b>. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. It is a good option if you're following a <b>gluten free, dairy free, and lacto ovo vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is amazing. Similar recipes include <a href=\"https://spoonacular.com/recipes/smoky-sweet-potato-and-black-bean-tacos-524599\">Smoky Sweet Potato and Black Bean Tacos</a>, <a href=\"https://spoonacular.com/recipes/smoky-sweet-potato-and-black-bean-tacos-1316245\">Smoky Sweet Potato and Black Bean Tacos</a>, and <a href=\"https://spoonacular.com/recipes/sweet-and-smoky-sriracha-black-bean-soup-557795\">Sweet and Smoky Sriracha Black Bean Soup</a>.",
		"cuisines": [],
		"dishTypes": [
			"soup",
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"lacto ovo vegetarian"
		],
		"occasions": [
			"fall",
			"winter"
		],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Spread the dry beans out on a baking sheet and pick out any pebbles.",
						"ingredients": [
							{
								"id": 0,
								"name": "spread",
								"localizedName": "spread",
								"image": ""
							},
							{
								"id": 0,
								"name": "beans",
								"localizedName": "beans",
								"image": "kidney-beans.jpg"
							}
						],
						"equipment": [
							{
								"id": 404727,
								"name": "baking sheet",
								"localizedName": "baking sheet",
								"image": "baking-sheet.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "Place the beans in a big soup pot, cover with water by 3 inches and allow them to soak overnight or for 6-8 hours, then discard that water. Return the soaked beans to the pot and cover with 3 inches of water again, bring to a boil. Reduce heat to medium low, put the cover on and allow to cook until the beans start to get tender but still firm, about 1 1/2 hours.",
						"ingredients": [
							{
								"id": 0,
								"name": "beans",
								"localizedName": "beans",
								"image": "kidney-beans.jpg"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							},
							{
								"id": 0,
								"name": "soup",
								"localizedName": "soup",
								"image": ""
							}
						],
						"equipment": [
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						],
						"length": {
							"number": 600,
							"unit": "minutes"
						}
					},
					{
						"number": 3,
						"step": "Drain the beans.",
						"ingredients": [
							{
								"id": 0,
								"name": "beans",
								"localizedName": "beans",
								"image": "kidney-beans.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Heat the oil in a soup pot over med-high heat.",
						"ingredients": [
							{
								"id": 0,
								"name": "soup",
								"localizedName": "soup",
								"image": ""
							},
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": [
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						]
					},
					{
						"number": 5,
						"step": "Add the onion along with a pinch of salt and saute until softened and golden. Stir in 1 tbsp of ground cumin, add the beans along with the broth or water and bring to a boil. Reduce heat to medium-low, cover and cook for 30 min. Meanwhile peel and chop the sweet potatoes. Wash the kale, remove the stems and chop the leaves.",
						"ingredients": [
							{
								"id": 11507,
								"name": "sweet potato",
								"localizedName": "sweet potato",
								"image": "sweet-potato.png"
							},
							{
								"id": 1012014,
								"name": "ground cumin",
								"localizedName": "ground cumin",
								"image": "ground-cumin.jpg"
							},
							{
								"id": 0,
								"name": "beans",
								"localizedName": "beans",
								"image": "kidney-beans.jpg"
							},
							{
								"id": 1006615,
								"name": "broth",
								"localizedName": "broth",
								"image": "chicken-broth.png"
							},
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							},
							{
								"id": 11233,
								"name": "kale",
								"localizedName": "kale",
								"image": "kale.jpg"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							}
						],
						"equipment": [],
						"length": {
							"number": 30,
							"unit": "minutes"
						}
					},
					{
						"number": 6,
						"step": "Remove half of the beans and liquid and set aside to cool a bit.",
						"ingredients": [
							{
								"id": 0,
								"name": "beans",
								"localizedName": "beans",
								"image": "kidney-beans.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 7,
						"step": "Add the sweet potatoes and kale to the pot with some salt and pepper. Cover and cook for 10 minutes.",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 11507,
								"name": "sweet potato",
								"localizedName": "sweet potato",
								"image": "sweet-potato.png"
							},
							{
								"id": 11233,
								"name": "kale",
								"localizedName": "kale",
								"image": "kale.jpg"
							}
						],
						"equipment": [
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						],
						"length": {
							"number": 10,
							"unit": "minutes"
						}
					},
					{
						"number": 8,
						"step": "Transfer the cooled beans to a blender and puree until smooth, then return them to the pot. Stir in the remaining 1 tbsp of ground cumin. Now add 1 tbsp of the chipotles in adobo. Taste and continue to add more until it has a spice level that you like. Adjust the salt &amp; pepper as needed.",
						"ingredients": [
							{
								"id": 99223,
								"name": "canned chipotle chiles in adobo",
								"localizedName": "canned chipotle chiles in adobo",
								"image": "canned-chipotle.png"
							},
							{
								"id": 1012014,
								"name": "ground cumin",
								"localizedName": "ground cumin",
								"image": "ground-cumin.jpg"
							},
							{
								"id": 1002030,
								"name": "pepper",
								"localizedName": "pepper",
								"image": "pepper.jpg"
							},
							{
								"id": 0,
								"name": "beans",
								"localizedName": "beans",
								"image": "kidney-beans.jpg"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							}
						],
						"equipment": [
							{
								"id": 404726,
								"name": "blender",
								"localizedName": "blender",
								"image": "blender.png"
							},
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						]
					},
					{
						"number": 9,
						"step": "Serve with a dollop of sour cream.",
						"ingredients": [
							{
								"id": 1056,
								"name": "sour cream",
								"localizedName": "sour cream",
								"image": "sour-cream.jpg"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/smoky-black-bean-soup-with-sweet-potato-kale-660405"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": false,
		"veryHealthy": false,
		"cheap": false,
		"veryPopular": true,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 19,
		"gaps": "no",
		"preparationMinutes": 20,
		"cookingMinutes": 10,
		"aggregateLikes": 1254,
		"healthScore": 34,
		"creditsText": "pinkwhen.com",
		"sourceName": "pinkwhen.com",
		"pricePerServing": 369.37,
		"id": 715523,
		"title": "Chorizo and Beef Quinoa Stuffed Pepper",
		"readyInMinutes": 30,
		"servings": 4,
		"sourceUrl": "http://www.pinkwhen.com/chorizo-and-beef-quinoa-stuffed-pepper-recipe/",
		"image": "https://spoonacular.com/recipeImages/715523-312x231.jpg",
		"imageType": "jpg",
		"summary": "Chorizo and Beef Quinoa Stuffed Pepper is a <b>gluten free</b> main course. One portion of this dish contains approximately <b>51g of protein</b>, <b>37g of fat</b>, and a total of <b>685 calories</b>. This recipe serves 4 and costs $3.69 per serving. Plenty of people made this recipe, and 1254 would say it hit the spot. It is brought to you by Pink When. If you have bell peppers, chorizo, chili powder, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>30 minutes</b>. With a spoonacular <b>score of 93%</b>, this dish is super. Similar recipes include <a href=\"https://spoonacular.com/recipes/pepper-stuffed-peppers-with-chorizo-498937\">Pepper-Stuffed Peppers with Chorizo</a>, <a href=\"https://spoonacular.com/recipes/chorizo-red-pepper-stuffed-potatoes-with-roasted-garlic-aioli-22379\">Chorizo & Red Pepper Stuffed Potatoes With Roasted Garlic Aioli</a>, and <a href=\"https://spoonacular.com/recipes/quinoa-and-ground-turkey-stuffed-pepper-1318051\">QUINOAn AND GROUND TURKEY STUFFED PEPPER</a>.",
		"cuisines": [],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "The first thing you will want to do is heat the oven to 350, boil the water for the quinoa, and in a separate skillet brown the beef and chorizo together.",
						"ingredients": [
							{
								"id": 99233,
								"name": "chorizo",
								"localizedName": "chorizo",
								"image": "chorizo.jpg"
							},
							{
								"id": 20035,
								"name": "quinoa",
								"localizedName": "quinoa",
								"image": "uncooked-quinoa.png"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							},
							{
								"id": 23572,
								"name": "beef",
								"localizedName": "beef",
								"image": "beef-cubes-raw.png"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							},
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "Drain the meat mixture well, and then place into a medium mixing bowl.Once your quinoa is fully cooked, add it to the mixing bowl.",
						"ingredients": [
							{
								"id": 20035,
								"name": "quinoa",
								"localizedName": "quinoa",
								"image": "uncooked-quinoa.png"
							},
							{
								"id": 1065062,
								"name": "meat",
								"localizedName": "meat",
								"image": "whole-chicken.jpg"
							}
						],
						"equipment": [
							{
								"id": 405907,
								"name": "mixing bowl",
								"localizedName": "mixing bowl",
								"image": "mixing-bowl.jpg"
							}
						]
					},
					{
						"number": 3,
						"step": "Add the green onion tops, cumin, cayenne, chili powder, and monterrey jack and cheddar cheese.",
						"ingredients": [
							{
								"id": 11291,
								"name": "green onions",
								"localizedName": "green onions",
								"image": "spring-onions.jpg"
							},
							{
								"id": 1009,
								"name": "cheddar cheese",
								"localizedName": "cheddar cheese",
								"image": "cheddar-cheese.png"
							},
							{
								"id": 2009,
								"name": "chili powder",
								"localizedName": "chili powder",
								"image": "chili-powder.jpg"
							},
							{
								"id": 2031,
								"name": "ground cayenne pepper",
								"localizedName": "ground cayenne pepper",
								"image": "chili-powder.jpg"
							},
							{
								"id": 1002014,
								"name": "cumin",
								"localizedName": "cumin",
								"image": "ground-cumin.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Mix well.",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 5,
						"step": "Cut the tops from your bell peppers and scoop out any remaining seeds.Then take your meat mixture and start stuffing the bell peppers until they are full.",
						"ingredients": [
							{
								"id": 10211821,
								"name": "bell pepper",
								"localizedName": "bell pepper",
								"image": "bell-pepper-orange.png"
							},
							{
								"id": 18082,
								"name": "stuffing",
								"localizedName": "stuffing",
								"image": "stuffing-mix.png"
							},
							{
								"id": 93818,
								"name": "seeds",
								"localizedName": "seeds",
								"image": "sunflower-seeds.jpg"
							},
							{
								"id": 1065062,
								"name": "meat",
								"localizedName": "meat",
								"image": "whole-chicken.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 6,
						"step": "Sprinkle with a little cheese and then bake in the oven for about 10 minutes until the bell pepper has softened.",
						"ingredients": [
							{
								"id": 10211821,
								"name": "bell pepper",
								"localizedName": "bell pepper",
								"image": "bell-pepper-orange.png"
							},
							{
								"id": 1041009,
								"name": "cheese",
								"localizedName": "cheese",
								"image": "cheddar-cheese.png"
							}
						],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						],
						"length": {
							"number": 10,
							"unit": "minutes"
						}
					},
					{
						"number": 7,
						"step": "Serve immediately.",
						"ingredients": [],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/chorizo-and-beef-quinoa-stuffed-pepper-715523"
	},
	{
		"vegetarian": true,
		"vegan": true,
		"glutenFree": false,
		"dairyFree": true,
		"veryHealthy": false,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 0,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 11,
		"healthScore": 52,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 150.29,
		"id": 632252,
		"title": "Alouette® Stuffed Mushroom Caps",
		"readyInMinutes": 45,
		"servings": 8,
		"sourceUrl": "http://www.foodista.com/recipe/8LZ2BYQT/alouette-stuffed-mushroom-caps",
		"image": "https://spoonacular.com/recipeImages/632252-312x231.jpg",
		"imageType": "jpg",
		"summary": "You can never have too many hor d'oeuvre recipes, so give Alouette® Stuffed Mushroom Caps a try. Watching your figure? This dairy free, lacto ovo vegetarian, and vegan recipe has <b>30 calories</b>, <b>2g of protein</b>, and <b>0g of fat</b> per serving. This recipe serves 8. For <b>$1.5 per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes about <b>45 minutes</b>. A couple people made this recipe, and 11 would say it hit the spot. Head to the store and pick up seasoned bread crumbs, mushroom caps, alouette spinach & artichoke spread, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 96%</b>, which is great. Try <a href=\"https://spoonacular.com/recipes/stuffed-mushroom-caps-118382\">Stuffed Mushroom Caps</a>, <a href=\"https://spoonacular.com/recipes/stuffed-mushroom-caps-558817\">Stuffed Mushroom Caps</a>, and <a href=\"https://spoonacular.com/recipes/stuffed-white-mushroom-caps-313457\">Stuffed White Mushroom Caps</a> for similar recipes.",
		"cuisines": [],
		"dishTypes": [
			"antipasti",
			"starter",
			"snack",
			"appetizer",
			"antipasto",
			"hor d'oeuvre"
		],
		"diets": [
			"dairy free",
			"lacto ovo vegetarian",
			"vegan"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Preheat oven to 375 F.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg",
								"temperature": {
									"number": 375,
									"unit": "Fahrenheit"
								}
							}
						]
					},
					{
						"number": 2,
						"step": "Place mushroom caps hollow side up on baking sheet. Fill each cap with 1 tsp. Alouette Garlic & Herbs",
						"ingredients": [
							{
								"id": 11260,
								"name": "mushrooms",
								"localizedName": "mushrooms",
								"image": "mushrooms.png"
							},
							{
								"id": 11215,
								"name": "garlic",
								"localizedName": "garlic",
								"image": "garlic.png"
							},
							{
								"id": 1002044,
								"name": "herbs",
								"localizedName": "herbs",
								"image": "mixed-fresh-herbs.jpg"
							}
						],
						"equipment": [
							{
								"id": 404727,
								"name": "baking sheet",
								"localizedName": "baking sheet",
								"image": "baking-sheet.jpg"
							}
						]
					},
					{
						"number": 3,
						"step": "Spreadable Cheese and sprinkle with seasoned bread crumbs.",
						"ingredients": [
							{
								"id": 18376,
								"name": "seasoned breadcrumbs",
								"localizedName": "seasoned breadcrumbs",
								"image": "breadcrumbs.jpg"
							},
							{
								"id": 0,
								"name": "spreadable cheese",
								"localizedName": "spreadable cheese",
								"image": ""
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Bake 12-15 minutes.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						],
						"length": {
							"number": 15,
							"unit": "minutes"
						}
					},
					{
						"number": 5,
						"step": "Garnish and serve.",
						"ingredients": [],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/alouette-stuffed-mushroom-caps-632252"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 19,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 6,
		"healthScore": 100,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 704.87,
		"id": 639891,
		"title": "Coffee-braised Short Ribs",
		"readyInMinutes": 45,
		"servings": 5,
		"sourceUrl": "http://www.foodista.com/recipe/8ZDDXLKG/coffee-braised-short-ribs",
		"image": "https://spoonacular.com/recipeImages/639891-312x231.jpg",
		"imageType": "jpg",
		"summary": "Need a <b>gluten free and dairy free main course</b>? Coffee-braised Short Ribs could be a great recipe to try. One portion of this dish contains approximately <b>74g of protein</b>, <b>42g of fat</b>, and a total of <b>877 calories</b>. For <b>$7.05 per serving</b>, this recipe <b>covers 64%</b> of your daily requirements of vitamins and minerals. This recipe serves 5. 6 people have made this recipe and would make it again. A mixture of strong freshly coffee, short, brown sugar, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 90%</b>, which is spectacular. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/coffee-braised-short-ribs-492600\">Coffee-Braised Short Ribs</a>, <a href=\"https://spoonacular.com/recipes/coffee-braised-short-ribs-1547523\">Coffee-braised Short Ribs</a>, and <a href=\"https://spoonacular.com/recipes/coffee-braised-short-ribs-386092\">Coffee-Braised Short Ribs</a>.",
		"cuisines": [],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Food",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 2,
						"step": "Preheat oven to 300F.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg",
								"temperature": {
									"number": 300,
									"unit": "Fahrenheit"
								}
							}
						]
					},
					{
						"number": 3,
						"step": "Heat oil in a large heavy stockpot over medium-high heat.",
						"ingredients": [
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": [
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						]
					},
					{
						"number": 4,
						"step": "Sprinkle short ribs with salt and pepper. Working in batches, add ribs to pot and cook until browned, about 4 minutes per side.",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 10013149,
								"name": "beef short ribs",
								"localizedName": "beef short ribs",
								"image": "beef-short-ribs.jpg"
							},
							{
								"id": 23236,
								"name": "ribs",
								"localizedName": "ribs",
								"image": "ribs.png"
							}
						],
						"equipment": [
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						],
						"length": {
							"number": 4,
							"unit": "minutes"
						}
					},
					{
						"number": 5,
						"step": "Transfer to platter.",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 6,
						"step": "Add onion, red bell pepper, and jalapeo to drippings in stockpot. Reduce heat to medium, cover, and cook until onion is tender, stirring occasionally, about 6 minutes.Stir in garlic and saut uncovered 1 minute.",
						"ingredients": [
							{
								"id": 11821,
								"name": "red pepper",
								"localizedName": "red pepper",
								"image": "red-pepper.jpg"
							},
							{
								"id": 11215,
								"name": "garlic",
								"localizedName": "garlic",
								"image": "garlic.png"
							},
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							}
						],
						"equipment": [
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						],
						"length": {
							"number": 7,
							"unit": "minutes"
						}
					},
					{
						"number": 7,
						"step": "Add brown sugar, ancho chile powder, oregano, and cumin; stir 15 seconds. Stir in coffee, tomatoes with juice, and tomato paste. Bring to boil, scraping up browned bits. Return ribs and any juices to pot; bring to boil.Cover and bake until meat is very tender, about 1 hour 45 minutes. Spoon fat from surface of sauce. Season sauce to taste with salt and pepper.",
						"ingredients": [
							{
								"id": 10111693,
								"name": "tomatoes in juice",
								"localizedName": "tomatoes in juice",
								"image": "tomatoes-canned.png"
							},
							{
								"id": 1022009,
								"name": "ancho chili powder",
								"localizedName": "ancho chili powder",
								"image": "chili-powder.jpg"
							},
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 11887,
								"name": "tomato paste",
								"localizedName": "tomato paste",
								"image": "tomato-paste.jpg"
							},
							{
								"id": 19334,
								"name": "brown sugar",
								"localizedName": "brown sugar",
								"image": "dark-brown-sugar.png"
							},
							{
								"id": 2027,
								"name": "oregano",
								"localizedName": "oregano",
								"image": "oregano.jpg"
							},
							{
								"id": 14209,
								"name": "coffee",
								"localizedName": "coffee",
								"image": "brewed-coffee.jpg"
							},
							{
								"id": 1002014,
								"name": "cumin",
								"localizedName": "cumin",
								"image": "ground-cumin.jpg"
							},
							{
								"id": 0,
								"name": "sauce",
								"localizedName": "sauce",
								"image": ""
							},
							{
								"id": 1065062,
								"name": "meat",
								"localizedName": "meat",
								"image": "whole-chicken.jpg"
							},
							{
								"id": 23236,
								"name": "ribs",
								"localizedName": "ribs",
								"image": "ribs.png"
							}
						],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							},
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						],
						"length": {
							"number": 105,
							"unit": "minutes"
						}
					},
					{
						"number": 8,
						"step": "Transfer ribs to a platter and spoon sauce over top.",
						"ingredients": [
							{
								"id": 0,
								"name": "sauce",
								"localizedName": "sauce",
								"image": ""
							},
							{
								"id": 23236,
								"name": "ribs",
								"localizedName": "ribs",
								"image": "ribs.png"
							}
						],
						"equipment": []
					},
					{
						"number": 9,
						"step": "Sprinkle with chopped cilantro.",
						"ingredients": [
							{
								"id": 11165,
								"name": "cilantro",
								"localizedName": "cilantro",
								"image": "cilantro.png"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/coffee-braised-short-ribs-639891"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": false,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 11,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 9,
		"healthScore": 81,
		"creditsText": "foodista.com",
		"sourceName": "foodista.com",
		"pricePerServing": 312.55,
		"id": 646651,
		"title": "Herb chicken with sweet potato mash and sautéed broccoli",
		"readyInMinutes": 45,
		"servings": 4,
		"sourceUrl": "http://www.foodista.com/recipe/NHZKT2K8/serve-a-sensationally-seasoned-chicken-dish",
		"image": "https://spoonacular.com/recipeImages/646651-312x231.jpg",
		"imageType": "jpg",
		"summary": "Herb chicken with sweet potato mash and sautéed broccoli might be a good recipe to expand your main course recipe box. One portion of this dish contains roughly <b>47g of protein</b>, <b>25g of fat</b>, and a total of <b>710 calories</b>. For <b>$3.13 per serving</b>, this recipe <b>covers 50%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. 9 people have made this recipe and would make it again. Head to the store and pick up broccoli, butter, pepper and salt, and a few other things to make it today. It is a good option if you're following a <b>gluten free</b> diet. It is brought to you by Foodista. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 95%</b>, which is awesome. Try <a href=\"https://spoonacular.com/recipes/herb-chicken-with-sweet-potato-mash-and-sauted-broccoli-1263701\">Herb chicken with sweet potato mash and sautéed broccoli</a>, <a href=\"https://spoonacular.com/recipes/herb-chicken-with-sweet-potato-mash-and-sauted-broccoli-1516743\">Herb chicken with sweet potato mash and sautéed broccoli</a>, and <a href=\"https://spoonacular.com/recipes/herb-chicken-with-sweet-potato-mash-and-sauted-broccoli-1337501\">Herb chicken with sweet potato mash and sautéed broccoli</a> for similar recipes.",
		"cuisines": [],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Preheat the oven to 350F (180C) or 320F (160C) for convection oven and cook the chicken according to the pack instructions. About 15 minutes before the end of the chicken cooking time, place the diced potato into boiling water for 5 minutes, then add the sweet potato and cook until the potatoes are tender. Roughly mash, adding butter, salt, and pepper to taste, then mash thoroughly.",
						"ingredients": [
							{
								"id": 11507,
								"name": "sweet potato",
								"localizedName": "sweet potato",
								"image": "sweet-potato.png"
							},
							{
								"id": 11352,
								"name": "potato",
								"localizedName": "potato",
								"image": "potatoes-yukon-gold.png"
							},
							{
								"id": 5006,
								"name": "whole chicken",
								"localizedName": "whole chicken",
								"image": "whole-chicken.jpg"
							},
							{
								"id": 1001,
								"name": "butter",
								"localizedName": "butter",
								"image": "butter-sliced.jpg"
							},
							{
								"id": 1002030,
								"name": "pepper",
								"localizedName": "pepper",
								"image": "pepper.jpg"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							}
						],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg",
								"temperature": {
									"number": 350,
									"unit": "Fahrenheit"
								}
							}
						],
						"length": {
							"number": 20,
							"unit": "minutes"
						}
					},
					{
						"number": 2,
						"step": "Heat the oil in a pan and quickly saut the broccoli until tender. Cover to keep warm.",
						"ingredients": [
							{
								"id": 11090,
								"name": "broccoli",
								"localizedName": "broccoli",
								"image": "broccoli.jpg"
							},
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						]
					},
					{
						"number": 3,
						"step": "Remove the chicken from the oven, leave to cool for a minute then cut the bag open and gently tip the contents into a dish. Slice the chicken breasts into chunky pieces on a board, keeping the chicken breast shape together.",
						"ingredients": [
							{
								"id": 5062,
								"name": "chicken breast",
								"localizedName": "chicken breast",
								"image": "chicken-breasts.png"
							},
							{
								"id": 5006,
								"name": "whole chicken",
								"localizedName": "whole chicken",
								"image": "whole-chicken.jpg"
							}
						],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						]
					},
					{
						"number": 4,
						"step": "Serve the mash potato topped with the chicken and remaining sauce with a side of broccoli.",
						"ingredients": [
							{
								"id": 11090,
								"name": "broccoli",
								"localizedName": "broccoli",
								"image": "broccoli.jpg"
							},
							{
								"id": 5006,
								"name": "whole chicken",
								"localizedName": "whole chicken",
								"image": "whole-chicken.jpg"
							},
							{
								"id": 11352,
								"name": "potato",
								"localizedName": "potato",
								"image": "potatoes-yukon-gold.png"
							},
							{
								"id": 0,
								"name": "sauce",
								"localizedName": "sauce",
								"image": ""
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/herb-chicken-with-sweet-potato-mash-and-sauted-broccoli-646651"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 4,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 19,
		"healthScore": 68,
		"creditsText": "Afrolems",
		"license": "CC BY 4.0",
		"sourceName": "Afrolems",
		"pricePerServing": 450.95,
		"id": 716330,
		"title": "Chicken and Mango Skewer",
		"readyInMinutes": 45,
		"servings": 1,
		"sourceUrl": "http://www.afrolems.com/2013/03/29/easter-special-chicken-and-mango-skewer/",
		"image": "https://spoonacular.com/recipeImages/716330-312x231.jpg",
		"imageType": "jpg",
		"summary": "Chicken and Mango Skewer takes roughly <b>45 minutes</b> from beginning to end. This recipe serves 1 and costs $4.51 per serving. One portion of this dish contains about <b>31g of protein</b>, <b>8g of fat</b>, and a total of <b>479 calories</b>. It is brought to you by Afrolems. A few people made this recipe, and 19 would say it hit the spot. A mixture of pepper, suya seasoning mix, mangos, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a pretty expensive main course. It is a good option if you're following a <b>gluten free, dairy free, and whole 30</b> diet. Overall, this recipe earns a <b>spectacular spoonacular score of 95%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/grilled-chicken-caesar-on-a-skewer-338979\">Grilled Chicken Caesar on a Skewer</a>, <a href=\"https://spoonacular.com/recipes/thai-chicken-skewer-appetizers-with-sweet-and-spicy-chili-sauce-621582\">Thai Chicken Skewer Appetizers with Sweet and Spicy Chili Sauce</a>, and <a href=\"https://spoonacular.com/recipes/smore-skewer-bites-568008\">S’more Skewer Bites</a>.",
		"cuisines": [],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"whole 30"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Chop chicken breast into cubes and place on sticks. Set fire to your grill or oven.",
						"ingredients": [
							{
								"id": 5062,
								"name": "chicken breast",
								"localizedName": "chicken breast",
								"image": "chicken-breasts.png"
							}
						],
						"equipment": [
							{
								"id": 404706,
								"name": "grill",
								"localizedName": "grill",
								"image": "grill.jpg"
							},
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "Place the chicken breast on the grill to heat up a little",
						"ingredients": [
							{
								"id": 5062,
								"name": "chicken breast",
								"localizedName": "chicken breast",
								"image": "chicken-breasts.png"
							}
						],
						"equipment": [
							{
								"id": 404706,
								"name": "grill",
								"localizedName": "grill",
								"image": "grill.jpg"
							}
						]
					},
					{
						"number": 3,
						"step": "Mix all your seasoning in a bowl with your vegetable oil.With a brush, smear the mix on the chicken breast on both sides.Flip occasionally as it browns till its cooked. Stack your mangoes after the chicken is done but if your mangoes are firm, you can grill them as well.",
						"ingredients": [
							{
								"id": 5062,
								"name": "chicken breast",
								"localizedName": "chicken breast",
								"image": "chicken-breasts.png"
							},
							{
								"id": 4669,
								"name": "vegetable oil",
								"localizedName": "vegetable oil",
								"image": "vegetable-oil.jpg"
							},
							{
								"id": 1042027,
								"name": "seasoning",
								"localizedName": "seasoning",
								"image": "seasoning.png"
							},
							{
								"id": 5006,
								"name": "whole chicken",
								"localizedName": "whole chicken",
								"image": "whole-chicken.jpg"
							},
							{
								"id": 9176,
								"name": "mango",
								"localizedName": "mango",
								"image": "mango.jpg"
							}
						],
						"equipment": [
							{
								"id": 404706,
								"name": "grill",
								"localizedName": "grill",
								"image": "grill.jpg"
							},
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 4,
						"step": "Serve on its own as an appetizer or with rice.",
						"ingredients": [
							{
								"id": 20444,
								"name": "rice",
								"localizedName": "rice",
								"image": "uncooked-white-rice.png"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/chicken-and-mango-skewer-716330"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": false,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 8,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 8,
		"healthScore": 88,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 590.1,
		"id": 640318,
		"title": "Crab Salad Stuffed Pita Pockets",
		"readyInMinutes": 25,
		"servings": 2,
		"sourceUrl": "http://www.foodista.com/recipe/4NJDB7X2/crab-salad-stuffed-pita-pockets",
		"image": "https://spoonacular.com/recipeImages/640318-312x231.jpg",
		"imageType": "jpg",
		"summary": "Crab Salad Stuffed Pita Pockets takes roughly <b>25 minutes</b> from beginning to end. One serving contains <b>418 calories</b>, <b>39g of protein</b>, and <b>6g of fat</b>. For <b>$5.9 per serving</b>, this recipe <b>covers 52%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. 8 people found this recipe to be yummy and satisfying. If you have wholewheat pita breads, crabmeat, coriander leaves, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It is a good option if you're following a <b>dairy free and pescatarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 80%</b>. This score is good. Try <a href=\"https://spoonacular.com/recipes/crab-salad-in-pita-pockets-698353\">Crab Salad in Pita Pockets</a>, <a href=\"https://spoonacular.com/recipes/stuff-it-cobb-salad-stuffed-pita-pockets-510066\">Stuff It {: Cobb Salad Stuffed Pita Pockets}</a>, and <a href=\"https://spoonacular.com/recipes/zucchini-salad-pita-pockets-1095849\">Zucchini Salad Pita Pockets</a> for similar recipes.",
		"cuisines": [],
		"dishTypes": [],
		"diets": [
			"dairy free",
			"pescatarian"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Mix crabmeat, apple and bell pepper together in a bowl.Season to taste, add coriander and fold mayonnaise through.Toast pita breads until puffed up, then cut open on one side.Stuff with some watercress, then the crab mixture.",
						"ingredients": [
							{
								"id": 10211821,
								"name": "bell pepper",
								"localizedName": "bell pepper",
								"image": "bell-pepper-orange.png"
							},
							{
								"id": 18413,
								"name": "pita",
								"localizedName": "pita",
								"image": "pita-bread.jpg"
							},
							{
								"id": 4025,
								"name": "mayonnaise",
								"localizedName": "mayonnaise",
								"image": "mayonnaise.png"
							},
							{
								"id": 11591,
								"name": "watercress",
								"localizedName": "watercress",
								"image": "watercress.jpg"
							},
							{
								"id": 1012013,
								"name": "coriander",
								"localizedName": "coriander",
								"image": "ground-coriander.jpg"
							},
							{
								"id": 10015136,
								"name": "crabmeat",
								"localizedName": "crabmeat",
								"image": "crabmeat.jpg"
							},
							{
								"id": 9003,
								"name": "apple",
								"localizedName": "apple",
								"image": "apple.jpg"
							},
							{
								"id": 0,
								"name": "sandwich bread",
								"localizedName": "sandwich bread",
								"image": "white-bread.jpg"
							},
							{
								"id": 15136,
								"name": "crab",
								"localizedName": "crab",
								"image": "crabmeat.jpg"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "Serve immediately.",
						"ingredients": [],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/crab-salad-stuffed-pita-pockets-640318"
	},
	{
		"vegetarian": true,
		"vegan": true,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 8,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 3,
		"healthScore": 100,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 127.7,
		"id": 642085,
		"title": "Easy Roasted Vegetables",
		"readyInMinutes": 45,
		"servings": 4,
		"sourceUrl": "https://www.foodista.com/recipe/RFJQ5QGF/easy-roasted-vegetables",
		"image": "https://spoonacular.com/recipeImages/642085-312x231.jpg",
		"imageType": "jpg",
		"summary": "Easy Roasted Vegetables is a <b>gluten free, dairy free, lacto ovo vegetarian, and whole 30</b> recipe with 4 servings. One portion of this dish contains about <b>9g of protein</b>, <b>4g of fat</b>, and a total of <b>358 calories</b>. For <b>$1.28 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. 3 people have tried and liked this recipe. This recipe from Foodista requires butternut squash, paprika, salt & pepper, and olive oil. It works well as a side dish. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 94%</b>. This score is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/easy-roasted-vegetables-379674\">Easy Roasted Vegetables</a>, <a href=\"https://spoonacular.com/recipes/easy-roasted-vegetables-1378833\">Easy Roasted Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/easy-roasted-summer-vegetables-590293\">Easy Roasted Summer Vegetables</a>.",
		"cuisines": [],
		"dishTypes": [
			"side dish"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"lacto ovo vegetarian",
			"whole 30",
			"vegan"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Preheat oven to 200 degrees Celsius (fan: 180 degrees Celsius)",
						"ingredients": [],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg",
								"temperature": {
									"number": 200,
									"unit": "Celsius"
								}
							}
						]
					},
					{
						"number": 2,
						"step": "Peel and cut the vegetables into bite size pieces (the potatoes dont necessarily need to be peeled).",
						"ingredients": [
							{
								"id": 11583,
								"name": "vegetable",
								"localizedName": "vegetable",
								"image": "mixed-vegetables.png"
							},
							{
								"id": 11352,
								"name": "potato",
								"localizedName": "potato",
								"image": "potatoes-yukon-gold.png"
							}
						],
						"equipment": []
					},
					{
						"number": 3,
						"step": "Mix the olive oil, paprika, dried basil, salt and pepper in a large bowl before adding the vegetables.",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 2003,
								"name": "dried basil",
								"localizedName": "dried basil",
								"image": "basil.jpg"
							},
							{
								"id": 11583,
								"name": "vegetable",
								"localizedName": "vegetable",
								"image": "mixed-vegetables.png"
							},
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							},
							{
								"id": 2028,
								"name": "paprika",
								"localizedName": "paprika",
								"image": "paprika.jpg"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 4,
						"step": "Mix everything together well.",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 5,
						"step": "Place the vegetables on a large baking tray/baking dish. Make sure they are spread out evenly. Aim for single layer.",
						"ingredients": [
							{
								"id": 11583,
								"name": "vegetable",
								"localizedName": "vegetable",
								"image": "mixed-vegetables.png"
							},
							{
								"id": 0,
								"name": "spread",
								"localizedName": "spread",
								"image": ""
							}
						],
						"equipment": [
							{
								"id": 404646,
								"name": "baking pan",
								"localizedName": "baking pan",
								"image": "roasting-pan.jpg"
							}
						]
					},
					{
						"number": 6,
						"step": "Cook the vegetables in the oven for about 30 minutes. They should be tender but still have a slight bite to them.",
						"ingredients": [
							{
								"id": 11583,
								"name": "vegetable",
								"localizedName": "vegetable",
								"image": "mixed-vegetables.png"
							}
						],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						],
						"length": {
							"number": 30,
							"unit": "minutes"
						}
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/easy-roasted-vegetables-642085"
	},
	{
		"vegetarian": true,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": false,
		"veryHealthy": false,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 3,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 171,
		"healthScore": 40,
		"creditsText": "Full Belly Sisters",
		"license": "CC BY-SA 3.0",
		"sourceName": "Full Belly Sisters",
		"pricePerServing": 209.51,
		"id": 716437,
		"title": "Chilled Cucumber Avocado Soup with Yogurt and Kefir",
		"readyInMinutes": 45,
		"servings": 3,
		"sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/chilled-cucumber-avocado-soup-with.html",
		"image": "https://spoonacular.com/recipeImages/716437-312x231.jpg",
		"imageType": "jpg",
		"summary": "Chilled Cucumber Avocado Soup with Yogurt and Kefir is a <b>gluten free, lacto ovo vegetarian, and primal</b> hor d'oeuvre. This recipe serves 3 and costs $2.1 per serving. One portion of this dish contains approximately <b>9g of protein</b>, <b>7g of fat</b>, and a total of <b>189 calories</b>. 171 person were impressed by this recipe. A mixture of avocado, kefir, onion, and a handful of other ingredients are all it takes to make this recipe so yummy. <b>Autumn</b> will be even more special with this recipe. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by fullbellysisters.blogspot.com. Overall, this recipe earns an <b>outstanding spoonacular score of 97%</b>. <a href=\"https://spoonacular.com/recipes/chilled-cucumber-avocado-and-yogurt-soup-21553\">Chilled Cucumber, Avocado, and Yogurt Soup</a>, <a href=\"https://spoonacular.com/recipes/chilled-cucumber-yogurt-soup-499125\">Chilled Cucumber-Yogurt Soup</a>, and <a href=\"https://spoonacular.com/recipes/chilled-cucumber-mint-yogurt-soup-608062\">Chilled Cucumber Mint Yogurt Soup</a> are very similar to this recipe.",
		"cuisines": [],
		"dishTypes": [
			"soup",
			"antipasti",
			"starter",
			"snack",
			"appetizer",
			"antipasto",
			"hor d'oeuvre"
		],
		"diets": [
			"gluten free",
			"lacto ovo vegetarian",
			"primal"
		],
		"occasions": [
			"fall",
			"winter"
		],
		"analyzedInstructions": [],
		"spoonacularSourceUrl": "https://spoonacular.com/chilled-cucumber-avocado-soup-with-yogurt-and-kefir-716437"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": false,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 13,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 9,
		"healthScore": 82,
		"creditsText": "foodista.com",
		"sourceName": "foodista.com",
		"pricePerServing": 447.82,
		"id": 664090,
		"title": "Turkish Chicken Salad with Home-made Cacik Yogurt Sauce",
		"readyInMinutes": 45,
		"servings": 4,
		"sourceUrl": "http://www.foodista.com/recipe/XYFWSH25/a-turkish-inspired-chicken-salad-with-tomato-cucumber-red-onion-salsa-charred-green-peppers-and-home-made-cacik-delicious-and-healthy",
		"image": "https://spoonacular.com/recipeImages/664090-312x231.jpg",
		"imageType": "jpg",
		"summary": "You can never have too many main course recipes, so give Turkish Chicken Salad with Home-made Cacik Yogurt Sauce a try. This recipe serves 4 and costs $4.48 per serving. Watching your figure? This gluten free recipe has <b>643 calories</b>, <b>67g of protein</b>, and <b>30g of fat</b> per serving. 9 people found this recipe to be tasty and satisfying. Head to the store and pick up lebanese cucumber, roast chicken, garlic, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is outstanding. Similar recipes include <a href=\"https://spoonacular.com/recipes/spicy-lamb-kabobs-with-turkish-cacik-97380\">Spicy Lamb Kabobs With Turkish Cacik</a>, <a href=\"https://spoonacular.com/recipes/jerk-rubbed-chicken-thighs-with-home-made-mango-habanero-hot-sauce-313780\">Jerk Rubbed Chicken Thighs with Home-Made Mango-Habanero Hot Sauce</a>, and <a href=\"https://spoonacular.com/recipes/yogurt-and-cucumber-dip-cacik-891875\">Yogurt and Cucumber Dip Cacik</a>.",
		"cuisines": [],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "First prepare the Cacik: For the Cacik: Chop the cucumber into tiny pieces, as small as you can, and place in a bowl. Cover the cucumber with salt and set aside for 30 minutes. The cucumbers will start to exude their juices which will flavour the yogurt nicely.",
						"ingredients": [
							{
								"id": 11206,
								"name": "cucumber",
								"localizedName": "cucumber",
								"image": "cucumber.jpg"
							},
							{
								"id": 1116,
								"name": "yogurt",
								"localizedName": "yogurt",
								"image": "plain-yogurt.jpg"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						],
						"length": {
							"number": 30,
							"unit": "minutes"
						}
					},
					{
						"number": 2,
						"step": "Put a griddle pan on medium  high heat, cover the peppers with olive oil and start to char.",
						"ingredients": [
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							},
							{
								"id": 10111333,
								"name": "peppers",
								"localizedName": "peppers",
								"image": "green-pepper.jpg"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						]
					},
					{
						"number": 3,
						"step": "Cut the tomato and cucumber into medium pieces. Slice the red onion as thin as you can. Chop the parsley fine.",
						"ingredients": [
							{
								"id": 10011282,
								"name": "red onion",
								"localizedName": "red onion",
								"image": "red-onion.png"
							},
							{
								"id": 11206,
								"name": "cucumber",
								"localizedName": "cucumber",
								"image": "cucumber.jpg"
							},
							{
								"id": 11297,
								"name": "parsley",
								"localizedName": "parsley",
								"image": "parsley.jpg"
							},
							{
								"id": 11529,
								"name": "tomato",
								"localizedName": "tomato",
								"image": "tomato.png"
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Place all ingredients in a bowl and cover with a the juice of 1 lemon. Season with salt and pepper.",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 1019016,
								"name": "juice",
								"localizedName": "juice",
								"image": "apple-juice.jpg"
							},
							{
								"id": 9150,
								"name": "lemon",
								"localizedName": "lemon",
								"image": "lemon.png"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 5,
						"step": "Let it sit in the fridge for 30 minutes  1 hour, stirring a couple times, so it starts to exude juice.",
						"ingredients": [
							{
								"id": 1019016,
								"name": "juice",
								"localizedName": "juice",
								"image": "apple-juice.jpg"
							}
						],
						"equipment": [],
						"length": {
							"number": 90,
							"unit": "minutes"
						}
					},
					{
						"number": 6,
						"step": "Tear the lettuce into mouth-siazed peices.",
						"ingredients": [
							{
								"id": 11252,
								"name": "lettuce",
								"localizedName": "lettuce",
								"image": "iceberg-lettuce.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 7,
						"step": "Cut the red cabbage into thin slices. Grate the carrot.",
						"ingredients": [
							{
								"id": 11112,
								"name": "red cabbage",
								"localizedName": "red cabbage",
								"image": "red-cabbage.png"
							},
							{
								"id": 11124,
								"name": "carrot",
								"localizedName": "carrot",
								"image": "sliced-carrot.png"
							}
						],
						"equipment": []
					},
					{
						"number": 8,
						"step": "Mix together in a bowl.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 9,
						"step": "Tear the chicken into large pieces and add to the salad.",
						"ingredients": [
							{
								"id": 5006,
								"name": "whole chicken",
								"localizedName": "whole chicken",
								"image": "whole-chicken.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 10,
						"step": "Remove the tomato salsa from the fridge.",
						"ingredients": [
							{
								"id": 11529,
								"name": "tomato",
								"localizedName": "tomato",
								"image": "tomato.png"
							},
							{
								"id": 6164,
								"name": "salsa",
								"localizedName": "salsa",
								"image": "salsa.png"
							}
						],
						"equipment": []
					},
					{
						"number": 11,
						"step": "Drain the juice and keep for later. Now add the tomato, cucumber, parsley onion mix to the chicken salad, as well as the sliced gherkin.",
						"ingredients": [
							{
								"id": 11206,
								"name": "cucumber",
								"localizedName": "cucumber",
								"image": "cucumber.jpg"
							},
							{
								"id": 5006,
								"name": "whole chicken",
								"localizedName": "whole chicken",
								"image": "whole-chicken.jpg"
							},
							{
								"id": 11297,
								"name": "parsley",
								"localizedName": "parsley",
								"image": "parsley.jpg"
							},
							{
								"id": 11529,
								"name": "tomato",
								"localizedName": "tomato",
								"image": "tomato.png"
							},
							{
								"id": 1019016,
								"name": "juice",
								"localizedName": "juice",
								"image": "apple-juice.jpg"
							},
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							}
						],
						"equipment": []
					},
					{
						"number": 12,
						"step": "Lay out the salad on a large plate or chopping board.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404716,
								"name": "cutting board",
								"localizedName": "cutting board",
								"image": "cutting-board.jpg"
							}
						]
					},
					{
						"number": 13,
						"step": "Serve with the charred peppers, cacik, salsa vinaigrette and some chilli sauce.",
						"ingredients": [
							{
								"id": 4135,
								"name": "vinaigrette",
								"localizedName": "vinaigrette",
								"image": "vinaigrette.jpg"
							},
							{
								"id": 10111333,
								"name": "peppers",
								"localizedName": "peppers",
								"image": "green-pepper.jpg"
							},
							{
								"id": 11819,
								"name": "chili pepper",
								"localizedName": "chili pepper",
								"image": "red-chili.jpg"
							},
							{
								"id": 6164,
								"name": "salsa",
								"localizedName": "salsa",
								"image": "salsa.png"
							},
							{
								"id": 0,
								"name": "sauce",
								"localizedName": "sauce",
								"image": ""
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/turkish-chicken-salad-with-home-made-cacik-yogurt-sauce-664090"
	},
	{
		"vegetarian": true,
		"vegan": true,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 6,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 5,
		"healthScore": 86,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 124.5,
		"id": 636602,
		"title": "Butternut Squash Soup (In Half An Hour!)",
		"readyInMinutes": 30,
		"servings": 8,
		"sourceUrl": "http://www.foodista.com/recipe/24DYGNYL/butternut-squash-soup-in-half-an-hour",
		"image": "https://spoonacular.com/recipeImages/636602-312x231.jpg",
		"imageType": "jpg",
		"summary": "Butternut Squash Soup (In Half An Hour!) requires about <b>30 minutes</b> from start to finish. For <b>$1.25 per serving</b>, you get a hor d'oeuvre that serves 8. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>252 calories</b>, <b>9g of protein</b>, and <b>6g of fat</b> per serving. It will be a hit at your <b>Autumn</b> event. 5 people have made this recipe and would make it again. It is brought to you by Foodista. Head to the store and pick up salt and pepper, black-eyed peas, collard greens, and a few other things to make it today. With a spoonacular <b>score of 95%</b>, this dish is great. Try <a href=\"https://spoonacular.com/recipes/half-hour-chili-1336421\">Half-Hour Chili</a>, <a href=\"https://spoonacular.com/recipes/half-hour-chili-1268407\">Half-Hour Chili</a>, and <a href=\"https://spoonacular.com/recipes/half-hour-chili-695480\">Half-Hour Chili</a> for similar recipes.",
		"cuisines": [],
		"dishTypes": [
			"soup",
			"antipasti",
			"starter",
			"snack",
			"appetizer",
			"antipasto",
			"hor d'oeuvre"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"lacto ovo vegetarian",
			"vegan"
		],
		"occasions": [
			"fall",
			"winter"
		],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "In large pot, saute onion in butter, ghee or olive oil until soft",
						"ingredients": [
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							},
							{
								"id": 1001,
								"name": "butter",
								"localizedName": "butter",
								"image": "butter-sliced.jpg"
							},
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							},
							{
								"id": 93632,
								"name": "ghee",
								"localizedName": "ghee",
								"image": "ghee.jpg"
							}
						],
						"equipment": [
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "Add cubed squash and saute for a couple of minutes",
						"ingredients": [
							{
								"id": 10011485,
								"name": "squash",
								"localizedName": "squash",
								"image": "butternut-squash.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 3,
						"step": "Add vegetable stock and 1 3 inch piece of kombu and bring to a boil",
						"ingredients": [
							{
								"id": 6615,
								"name": "vegetable stock",
								"localizedName": "vegetable stock",
								"image": "chicken-broth.png"
							},
							{
								"id": 11445,
								"name": "kombu",
								"localizedName": "kombu",
								"image": "kombu.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Reduce heat and simmer until squash is soft (about 15 minutes)Using a slotted spoon, remove squash and puree in blender",
						"ingredients": [
							{
								"id": 10011485,
								"name": "squash",
								"localizedName": "squash",
								"image": "butternut-squash.jpg"
							}
						],
						"equipment": [
							{
								"id": 404636,
								"name": "slotted spoon",
								"localizedName": "slotted spoon",
								"image": "slotted-spoon.jpg"
							},
							{
								"id": 404726,
								"name": "blender",
								"localizedName": "blender",
								"image": "blender.png"
							}
						],
						"length": {
							"number": 15,
							"unit": "minutes"
						}
					},
					{
						"number": 5,
						"step": "Return squash to pot and stir in black-eyed peas and cooked quinoa.",
						"ingredients": [
							{
								"id": 20137,
								"name": "cooked quinoa",
								"localizedName": "cooked quinoa",
								"image": "cooked-quinoa.png"
							},
							{
								"id": 10011485,
								"name": "squash",
								"localizedName": "squash",
								"image": "butternut-squash.jpg"
							},
							{
								"id": 11304,
								"name": "peas",
								"localizedName": "peas",
								"image": "peas.jpg"
							}
						],
						"equipment": [
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						]
					},
					{
						"number": 6,
						"step": "Add greens for about five minutes until soft",
						"ingredients": [
							{
								"id": 21052,
								"name": "greens",
								"localizedName": "greens",
								"image": "mixed-greens-or-mesclun.jpg"
							}
						],
						"equipment": [],
						"length": {
							"number": 5,
							"unit": "minutes"
						}
					},
					{
						"number": 7,
						"step": "Add nutmeg, sea salt and pepper to taste",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 2025,
								"name": "nutmeg",
								"localizedName": "nutmeg",
								"image": "ground-nutmeg.jpg"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/butternut-squash-soup-in-half-an-hour-636602"
	},
	{
		"vegetarian": true,
		"vegan": false,
		"glutenFree": false,
		"dairyFree": false,
		"veryHealthy": false,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 14,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 205,
		"healthScore": 35,
		"creditsText": "Afrolems",
		"license": "CC BY 4.0",
		"sourceName": "Afrolems",
		"pricePerServing": 67.93,
		"id": 716276,
		"title": "Doughnuts",
		"readyInMinutes": 45,
		"servings": 2,
		"sourceUrl": "http://www.afrolems.com/2014/03/25/doughnuts-recipe/",
		"image": "https://spoonacular.com/recipeImages/716276-312x231.jpg",
		"imageType": "jpg",
		"summary": "If you have around <b>45 minutes</b> to spend in the kitchen, Doughnuts might be an amazing <b>lacto ovo vegetarian</b> recipe to try. For <b>68 cents per serving</b>, you get a breakfast that serves 2. One serving contains <b>445 calories</b>, <b>13g of protein</b>, and <b>2g of fat</b>. If you have warm water, honey, powdered milk, and a few other ingredients on hand, you can make it. It is brought to you by Afrolems. Several people made this recipe, and 205 would say it hit the spot. With a spoonacular <b>score of 96%</b>, this dish is tremendous. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/how-to-make-doughnuts-with-video-and-coffee-biscoff-bacon-doughnuts-573590\">How to make doughnuts (with video) and Coffee-Biscoff-Bacon Doughnuts</a>, <a href=\"https://spoonacular.com/recipes/everything-doughnuts-742597\">Everything Doughnuts</a>, and <a href=\"https://spoonacular.com/recipes/cranberry-doughnuts-428199\">Cranberry Doughnuts</a>.",
		"cuisines": [],
		"dishTypes": [
			"morning meal",
			"brunch",
			"breakfast"
		],
		"diets": [
			"lacto ovo vegetarian"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "In a bowl mix the water with the yeast and honey, whisk and allow to sit for 15 minutes or until the mixture is foamy.",
						"ingredients": [
							{
								"id": 19296,
								"name": "honey",
								"localizedName": "honey",
								"image": "honey.png"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							},
							{
								"id": 18375,
								"name": "yeast",
								"localizedName": "yeast",
								"image": "yeast-granules.jpg"
							}
						],
						"equipment": [
							{
								"id": 404661,
								"name": "whisk",
								"localizedName": "whisk",
								"image": "whisk.png"
							},
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						],
						"length": {
							"number": 15,
							"unit": "minutes"
						}
					},
					{
						"number": 2,
						"step": "Mix the flour with the salt and powdered milk and pour the yeast mixture into the bowl.Knead the dough till its elastic and not sticky and cover and leave to double in size. This could take 1-2 hours.On a lightly floured surface, roll out your dough but not to thin so your doughnuts are not flat and cut the dough into circles. If You have a doughnut cutter use that, if not use a small round shaped cover or bowl to make your circles and a smaller container for the middle hole. You can improvise and use the mouth of a plastic bottle to make the hole in the middle.Leave to rise for another 45 minutes.",
						"ingredients": [
							{
								"id": 1090,
								"name": "powdered milk",
								"localizedName": "powdered milk",
								"image": "milk-powdered.jpg"
							},
							{
								"id": 0,
								"name": "dough",
								"localizedName": "dough",
								"image": "pizza-dough"
							},
							{
								"id": 20081,
								"name": "all purpose flour",
								"localizedName": "all purpose flour",
								"image": "flour.png"
							},
							{
								"id": 18375,
								"name": "yeast",
								"localizedName": "yeast",
								"image": "yeast-granules.jpg"
							},
							{
								"id": 12135,
								"name": "nuts",
								"localizedName": "nuts",
								"image": "nuts-mixed.jpg"
							},
							{
								"id": 0,
								"name": "roll",
								"localizedName": "roll",
								"image": "dinner-yeast-rolls.jpg"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						],
						"length": {
							"number": 165,
							"unit": "minutes"
						}
					},
					{
						"number": 3,
						"step": "Heat up your oil and fry the doughnuts till they are brown on both sides.Vanilla Glaze",
						"ingredients": [
							{
								"id": 1052050,
								"name": "vanilla",
								"localizedName": "vanilla",
								"image": "vanilla.jpg"
							},
							{
								"id": 0,
								"name": "glaze",
								"localizedName": "glaze",
								"image": ""
							},
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Mix 1 cup of powdered sugar with 30 ml of milk and 1 teaspoon of vanilla.",
						"ingredients": [
							{
								"id": 19336,
								"name": "powdered sugar",
								"localizedName": "powdered sugar",
								"image": "powdered-sugar.jpg"
							},
							{
								"id": 1052050,
								"name": "vanilla",
								"localizedName": "vanilla",
								"image": "vanilla.jpg"
							},
							{
								"id": 1077,
								"name": "milk",
								"localizedName": "milk",
								"image": "milk.png"
							}
						],
						"equipment": []
					},
					{
						"number": 5,
						"step": "Whisk till its properly mixed and drizzle the doughnuts with it.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404661,
								"name": "whisk",
								"localizedName": "whisk",
								"image": "whisk.png"
							}
						]
					},
					{
						"number": 6,
						"step": "Add sprinkles for garnishing",
						"ingredients": [
							{
								"id": 93645,
								"name": "sprinkles",
								"localizedName": "sprinkles",
								"image": "colorful-sprinkles.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 7,
						"step": "Chocolate GlazeI used a chocolate sauce and drizzled over the doughnuts with sprinkles to top it.",
						"ingredients": [
							{
								"id": 10019348,
								"name": "hot fudge sauce",
								"localizedName": "hot fudge sauce",
								"image": "chocolate-glaze.png"
							},
							{
								"id": 19081,
								"name": "chocolate",
								"localizedName": "chocolate",
								"image": "milk-chocolate.jpg"
							},
							{
								"id": 93645,
								"name": "sprinkles",
								"localizedName": "sprinkles",
								"image": "colorful-sprinkles.jpg"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/doughnuts-716276"
	},
	{
		"vegetarian": true,
		"vegan": true,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 5,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 3,
		"healthScore": 100,
		"creditsText": "foodista.com",
		"sourceName": "foodista.com",
		"pricePerServing": 159.25,
		"id": 649944,
		"title": "Lentil Mango Salad",
		"readyInMinutes": 45,
		"servings": 4,
		"sourceUrl": "http://www.foodista.com/recipe/TTBNDB7Q/lentill-mango-salad",
		"image": "https://spoonacular.com/recipeImages/649944-312x231.jpg",
		"imageType": "jpg",
		"summary": "Lentil Mango Salad is a main course that serves 4. One serving contains <b>253 calories</b>, <b>12g of protein</b>, and <b>6g of fat</b>. For <b>$1.59 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 3 people found this recipe to be tasty and satisfying. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. Head to the store and pick up cilantro, white wine vinegar, onion, and a few other things to make it today. Taking all factors into account, this recipe <b>earns a spoonacular score of 94%</b>, which is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/lentil-burger-with-mango-salsa-509088\">LENTIL BURGER with Mango Salsa</a>, <a href=\"https://spoonacular.com/recipes/plumcot-orange-lentil-salad-fave-five-friday-lovely-lentil-dishes-529696\">Plumcot, Orange & Lentil Salad… & Fave Five Friday: Lovely Lentil Dishes</a>, and <a href=\"https://spoonacular.com/recipes/simple-coconut-quinoa-and-lentil-curry-with-lime-mango-705061\">Simple Coconut Quinoan and Lentil Curry with Lime Mango</a>.",
		"cuisines": [],
		"dishTypes": [
			"side dish",
			"lunch",
			"main course",
			"salad",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"lacto ovo vegetarian",
			"vegan"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Clean and chop the onion, red pepper, garlic, Cilantro",
						"ingredients": [
							{
								"id": 11821,
								"name": "red pepper",
								"localizedName": "red pepper",
								"image": "red-pepper.jpg"
							},
							{
								"id": 11165,
								"name": "cilantro",
								"localizedName": "cilantro",
								"image": "cilantro.png"
							},
							{
								"id": 11215,
								"name": "garlic",
								"localizedName": "garlic",
								"image": "garlic.png"
							},
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							}
						],
						"equipment": []
					},
					{
						"number": 2,
						"step": "Peel and chop mango",
						"ingredients": [
							{
								"id": 9176,
								"name": "mango",
								"localizedName": "mango",
								"image": "mango.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 3,
						"step": "Place all salad ingredients in a bowl, add the oil, vinegar, season with salt and pepper",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 2053,
								"name": "vinegar",
								"localizedName": "vinegar",
								"image": "vinegar-(white).jpg"
							},
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 4,
						"step": "Mix well and leave in the refrigerator for 1 / 2 hour",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 5,
						"step": "This salad is left to eat alone or to accompany meat and poultry dishes, enjoy ...",
						"ingredients": [
							{
								"id": 0,
								"name": "poultry",
								"localizedName": "poultry",
								"image": "whole-chicken.jpg"
							},
							{
								"id": 1065062,
								"name": "meat",
								"localizedName": "meat",
								"image": "whole-chicken.jpg"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/lentil-mango-salad-649944"
	},
	{
		"vegetarian": true,
		"vegan": true,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 11,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 3,
		"healthScore": 100,
		"creditsText": "foodista.com",
		"sourceName": "foodista.com",
		"pricePerServing": 164.1,
		"id": 646043,
		"title": "Gujarati Dry Mung Bean Curry",
		"readyInMinutes": 45,
		"servings": 4,
		"sourceUrl": "http://www.foodista.com/recipe/G6ZJW56S/gujarati-dry-mung-bean-curry",
		"image": "https://spoonacular.com/recipeImages/646043-312x231.jpg",
		"imageType": "jpg",
		"summary": "Gujarati Dry Mung Bean Curry takes about <b>45 minutes</b> from beginning to end. This main course has <b>376 calories</b>, <b>20g of protein</b>, and <b>5g of fat</b> per serving. This recipe serves 4 and costs $1.64 per serving. A mixture of baking powder, cumin seeds, garlic, and a handful of other ingredients are all it takes to make this recipe so flavorful. This recipe from Foodista has 3 fans. This recipe is typical of Indian cuisine. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 95%</b>, which is outstanding. <a href=\"https://spoonacular.com/recipes/gujarati-dry-mung-bean-curry-1353775\">Gujarati Dry Mung Bean Curry</a>, <a href=\"https://spoonacular.com/recipes/gujarati-dry-mung-bean-curry-1520647\">Gujarati Dry Mung Bean Curry</a>, and <a href=\"https://spoonacular.com/recipes/uncle-bills-mung-bean-curry-1283881\">Uncle Bill's Mung Bean Curry</a> are very similar to this recipe.",
		"cuisines": [
			"Indian",
			"Asian"
		],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"lacto ovo vegetarian",
			"vegan"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Wash the mung beans and boil them in plenty of hot water with a pinch of baking powder until al-dente. If you have a pressure cooker thats about 6-7 whistles.",
						"ingredients": [
							{
								"id": 18369,
								"name": "baking powder",
								"localizedName": "baking powder",
								"image": "white-powder.jpg"
							},
							{
								"id": 16080,
								"name": "mung beans",
								"localizedName": "mung beans",
								"image": "mung-beans.png"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": [
							{
								"id": 404658,
								"name": "pressure cooker",
								"localizedName": "pressure cooker",
								"image": "pressure-cooker.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "Drain and set aside.In a large pan heat the oil and add the mustard seeds (wait for them to pop) then add the cumin seeds, asafoetida, curry leaves, garlic and chillies. Saut until aromatic. Obviously dont let it burn.",
						"ingredients": [
							{
								"id": 2024,
								"name": "mustard seeds",
								"localizedName": "mustard seeds",
								"image": "mustard-seeds.png"
							},
							{
								"id": 93604,
								"name": "curry leaves",
								"localizedName": "curry leaves",
								"image": "curry-leaves.jpg"
							},
							{
								"id": 2014,
								"name": "cumin seeds",
								"localizedName": "cumin seeds",
								"image": "ground-cumin.jpg"
							},
							{
								"id": 1032035,
								"name": "asafoetida",
								"localizedName": "asafoetida",
								"image": "curry-powder.jpg"
							},
							{
								"id": 11819,
								"name": "chili pepper",
								"localizedName": "chili pepper",
								"image": "red-chili.jpg"
							},
							{
								"id": 11215,
								"name": "garlic",
								"localizedName": "garlic",
								"image": "garlic.png"
							},
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							},
							{
								"id": 0,
								"name": "pop",
								"localizedName": "soft drink",
								"image": ""
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						]
					},
					{
						"number": 3,
						"step": "Add the tomatoes, turmeric and mung beans and cook for two minutes. Be careful not to mash it up as you stir.",
						"ingredients": [
							{
								"id": 16080,
								"name": "mung beans",
								"localizedName": "mung beans",
								"image": "mung-beans.png"
							},
							{
								"id": 11529,
								"name": "tomato",
								"localizedName": "tomato",
								"image": "tomato.png"
							},
							{
								"id": 2043,
								"name": "turmeric",
								"localizedName": "turmeric",
								"image": "turmeric.jpg"
							}
						],
						"equipment": [],
						"length": {
							"number": 2,
							"unit": "minutes"
						}
					},
					{
						"number": 4,
						"step": "Add the salt, sugar, lemon juice and cinnamon powder and cook for a further two minutes.Throw in the chopped coriander, combine and serve.",
						"ingredients": [
							{
								"id": 1012010,
								"name": "ground cinnamon",
								"localizedName": "ground cinnamon",
								"image": "cinnamon.jpg"
							},
							{
								"id": 9152,
								"name": "lemon juice",
								"localizedName": "lemon juice",
								"image": "lemon-juice.jpg"
							},
							{
								"id": 1012013,
								"name": "coriander",
								"localizedName": "coriander",
								"image": "ground-coriander.jpg"
							},
							{
								"id": 19335,
								"name": "sugar",
								"localizedName": "sugar",
								"image": "sugar-in-bowl.png"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							}
						],
						"equipment": [],
						"length": {
							"number": 2,
							"unit": "minutes"
						}
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/gujarati-dry-mung-bean-curry-646043"
	},
	{
		"vegetarian": true,
		"vegan": true,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 4,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 4,
		"healthScore": 100,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 407.11,
		"id": 634437,
		"title": "Basil Tagliatelle with Roasted Red Bell Pepper Salad",
		"readyInMinutes": 45,
		"servings": 4,
		"sourceUrl": "https://www.foodista.com/recipe/B6VWDFWJ/basil-tagliatelle-with-roasted-red-bell-pepper-salad",
		"image": "https://spoonacular.com/recipeImages/634437-312x231.jpg",
		"imageType": "jpg",
		"summary": "Basil Tagliatelle with Roasted Red Bell Pepper Salad might be a good recipe to expand your hor d'oeuvre repertoire. This recipe serves 4 and costs $4.07 per serving. One serving contains <b>200 calories</b>, <b>5g of protein</b>, and <b>12g of fat</b>. A mixture of extra virgin olive oil, horseradish, garlic cloves, and a handful of other ingredients are all it takes to make this recipe so tasty. 4 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. Overall, this recipe earns an <b>outstanding spoonacular score of 93%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/roasted-red-bell-pepper-and-basil-sauce-22150\">Roasted Red Bell Pepper and Basil Sauce</a>, <a href=\"https://spoonacular.com/recipes/roasted-red-bell-pepper-and-fennel-salad-21985\">Roasted Red Bell Pepper And Fennel Salad</a>, and <a href=\"https://spoonacular.com/recipes/roasted-sweet-potato-salad-with-red-bell-pepper-22026\">Roasted Sweet Potato Salad With Red Bell Pepper</a>.",
		"cuisines": [],
		"dishTypes": [
			"side dish",
			"antipasti",
			"starter",
			"snack",
			"appetizer",
			"antipasto",
			"hor d'oeuvre"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"paleolithic",
			"lacto ovo vegetarian",
			"primal",
			"whole 30",
			"vegan"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Go to my blog for the full instructions: http://gourmandelle.com/basil-tagliatelle-with-roasted-red-bell-pepper-salad/",
						"ingredients": [
							{
								"id": 10220409,
								"name": "tagliatelle",
								"localizedName": "tagliatelle",
								"image": "tagliatelle.jpg"
							},
							{
								"id": 1002030,
								"name": "pepper",
								"localizedName": "pepper",
								"image": "pepper.jpg"
							},
							{
								"id": 2044,
								"name": "basil",
								"localizedName": "basil",
								"image": "basil.jpg"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/basil-tagliatelle-with-roasted-red-bell-pepper-salad-634437"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": false,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": true,
		"weightWatcherSmartPoints": 26,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 58,
		"healthScore": 33,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 144.77,
		"id": 655235,
		"title": "Peanut Butter and Jelly Smoothie",
		"readyInMinutes": 45,
		"servings": 2,
		"sourceUrl": "http://www.foodista.com/recipe/K5KVRWVR/peanut-butter-and-jelly-smoothie",
		"image": "https://spoonacular.com/recipeImages/655235-312x231.jpg",
		"imageType": "jpg",
		"summary": "Peanut Butter and Jelly Smoothie might be a good recipe to expand your breakfast repertoire. Watching your figure? This gluten free, dairy free, and fodmap friendly recipe has <b>779 calories</b>, <b>20g of protein</b>, and <b>36g of fat</b> per serving. For <b>$1.45 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. 58 people were impressed by this recipe. This recipe from Foodista requires almond milk, bananas, peanut butter, and strawberries. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 95%</b>, which is super. Try <a href=\"https://spoonacular.com/recipes/peanut-butter-and-jelly-smoothie-609137\">Peanut Butter and Jelly Smoothie</a>, <a href=\"https://spoonacular.com/recipes/peanut-butter-and-jelly-smoothie-1419673\">Peanut Butter and Jelly Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/peanut-butter-and-jelly-smoothie-1201725\">Peanut Butter and Jelly Smoothie</a> for similar recipes.",
		"cuisines": [],
		"dishTypes": [
			"morning meal",
			"brunch",
			"beverage",
			"breakfast",
			"drink"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"fodmap friendly"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Place ingredients in a high speed blender like Blendtec for super smooth texture, blend on high.If using a regular blender put milk and strawberries in then blend.Next, add banana pieces and peanut butter, process until smooth.",
						"ingredients": [
							{
								"id": 16098,
								"name": "peanut butter",
								"localizedName": "peanut butter",
								"image": "peanut-butter.png"
							},
							{
								"id": 9316,
								"name": "strawberries",
								"localizedName": "strawberries",
								"image": "strawberries.png"
							},
							{
								"id": 9040,
								"name": "banana",
								"localizedName": "banana",
								"image": "bananas.jpg"
							},
							{
								"id": 1077,
								"name": "milk",
								"localizedName": "milk",
								"image": "milk.png"
							}
						],
						"equipment": [
							{
								"id": 404726,
								"name": "blender",
								"localizedName": "blender",
								"image": "blender.png"
							}
						]
					},
					{
						"number": 2,
						"step": "Garnish with crushed peanuts and serve.",
						"ingredients": [
							{
								"id": 16091,
								"name": "peanuts",
								"localizedName": "peanuts",
								"image": "peanuts.png"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/peanut-butter-and-jelly-smoothie-655235"
	},
	{
		"vegetarian": true,
		"vegan": true,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 9,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 2,
		"healthScore": 100,
		"creditsText": "foodista.com",
		"sourceName": "foodista.com",
		"pricePerServing": 74.36,
		"id": 652393,
		"title": "Moosewood Lentil Soup",
		"readyInMinutes": 45,
		"servings": 6,
		"sourceUrl": "http://www.foodista.com/recipe/TNZ67L5Y/moosewood-lentil-soup",
		"image": "https://spoonacular.com/recipeImages/652393-312x231.jpg",
		"imageType": "jpg",
		"summary": "Moosewood Lentil Soup might be a good recipe to expand your main course recipe box. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>74 cents per serving</b>. One portion of this dish contains roughly <b>26g of protein</b>, <b>4g of fat</b>, and a total of <b>396 calories</b>. A mixture of pepper, lentils, salt, and a handful of other ingredients are all it takes to make this recipe so yummy. 2 people found this recipe to be flavorful and satisfying. It is perfect for <b>Autumn</b>. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/moosewood-lentil-soup-1319699\">Moosewood Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/moosewood-mushroom-barley-soup-143909\">Moosewood Mushroom Barley Soup!</a>, and <a href=\"https://spoonacular.com/recipes/hungarian-mushroom-soup-from-the-moosewood-cookbook-143242\">Hungarian Mushroom Soup, from the Moosewood Cookbook</a>.",
		"cuisines": [],
		"dishTypes": [
			"soup",
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"lacto ovo vegetarian",
			"vegan"
		],
		"occasions": [
			"fall",
			"winter"
		],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Place lentils and water in a soup pot or Dutch oven.Bring to a boil, lower heat to a simmer, and let cook until lentils are mushy (about 45 minutes).",
						"ingredients": [
							{
								"id": 10316069,
								"name": "lentils",
								"localizedName": "lentils",
								"image": "lentils-brown.jpg"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							},
							{
								"id": 0,
								"name": "soup",
								"localizedName": "soup",
								"image": ""
							}
						],
						"equipment": [
							{
								"id": 404667,
								"name": "dutch oven",
								"localizedName": "dutch oven",
								"image": "dutch-oven.jpg"
							}
						],
						"length": {
							"number": 45,
							"unit": "minutes"
						}
					},
					{
						"number": 2,
						"step": "Add more water as needed, until the soup is your favorite consistency.",
						"ingredients": [
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							},
							{
								"id": 0,
								"name": "soup",
								"localizedName": "soup",
								"image": ""
							}
						],
						"equipment": []
					},
					{
						"number": 3,
						"step": "Heat oil or melt butter in a medium-sized skillet.",
						"ingredients": [
							{
								"id": 1001,
								"name": "butter",
								"localizedName": "butter",
								"image": "butter-sliced.jpg"
							},
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						]
					},
					{
						"number": 4,
						"step": "Add onion, celery, and carrots, and saut over medium heat for about 10 minutes.",
						"ingredients": [
							{
								"id": 11124,
								"name": "carrot",
								"localizedName": "carrot",
								"image": "sliced-carrot.png"
							},
							{
								"id": 11143,
								"name": "celery",
								"localizedName": "celery",
								"image": "celery.jpg"
							},
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							}
						],
						"equipment": [],
						"length": {
							"number": 10,
							"unit": "minutes"
						}
					},
					{
						"number": 5,
						"step": "Add garlic, salt, pepper, and herbs of your choice, and saut about 5 minutes longer.",
						"ingredients": [
							{
								"id": 11215,
								"name": "garlic",
								"localizedName": "garlic",
								"image": "garlic.png"
							},
							{
								"id": 1002030,
								"name": "pepper",
								"localizedName": "pepper",
								"image": "pepper.jpg"
							},
							{
								"id": 1002044,
								"name": "herbs",
								"localizedName": "herbs",
								"image": "mixed-fresh-herbs.jpg"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							}
						],
						"equipment": [],
						"length": {
							"number": 5,
							"unit": "minutes"
						}
					},
					{
						"number": 6,
						"step": "Transfer to lentils.Stir in wine, if desired, lemon juice and molasses or brown sugar.Taste to correct seasonings, then simmer for",
						"ingredients": [
							{
								"id": 19334,
								"name": "brown sugar",
								"localizedName": "brown sugar",
								"image": "dark-brown-sugar.png"
							},
							{
								"id": 9152,
								"name": "lemon juice",
								"localizedName": "lemon juice",
								"image": "lemon-juice.jpg"
							},
							{
								"id": 1042027,
								"name": "seasoning",
								"localizedName": "seasoning",
								"image": "seasoning.png"
							},
							{
								"id": 19304,
								"name": "molasses",
								"localizedName": "molasses",
								"image": "molasses.jpg"
							},
							{
								"id": 10316069,
								"name": "lentils",
								"localizedName": "lentils",
								"image": "lentils-brown.jpg"
							},
							{
								"id": 14084,
								"name": "wine",
								"localizedName": "wine",
								"image": "red-wine.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 7,
						"step": "At least 15 minutes longer.",
						"ingredients": [],
						"equipment": [],
						"length": {
							"number": 15,
							"unit": "minutes"
						}
					},
					{
						"number": 8,
						"step": "Serve hot, with a little vinegar drizzled onto each serving, and a sprinkling of minced",
						"ingredients": [
							{
								"id": 2053,
								"name": "vinegar",
								"localizedName": "vinegar",
								"image": "vinegar-(white).jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 9,
						"step": "Scallions or parsley on top, if desired.",
						"ingredients": [
							{
								"id": 11291,
								"name": "green onions",
								"localizedName": "green onions",
								"image": "spring-onions.jpg"
							},
							{
								"id": 11297,
								"name": "parsley",
								"localizedName": "parsley",
								"image": "parsley.jpg"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/moosewood-lentil-soup-652393"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": false,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 9,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 4,
		"healthScore": 100,
		"creditsText": "foodista.com",
		"sourceName": "foodista.com",
		"pricePerServing": 416.31,
		"id": 640828,
		"title": "Crispy Panko and Herb Crusted Salmon",
		"readyInMinutes": 45,
		"servings": 6,
		"sourceUrl": "https://www.foodista.com/recipe/THDLRSLW/crispy-panko-and-herb-crusted-salmon",
		"image": "https://spoonacular.com/recipeImages/640828-312x231.jpg",
		"imageType": "jpg",
		"summary": "Crispy Panko and Herb Crusted Salmon takes around <b>45 minutes</b> from beginning to end. For <b>$4.16 per serving</b>, this recipe <b>covers 31%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. One serving contains <b>390 calories</b>, <b>33g of protein</b>, and <b>22g of fat</b>. This recipe from Foodista has 4 fans. If you have lemon zest, extra virgin olive oil, bell pepper, and a few other ingredients on hand, you can make it. It works well as a main course. It is a good option if you're following a <b>dairy free and pescatarian</b> diet. With a spoonacular <b>score of 93%</b>, this dish is super. Similar recipes are <a href=\"https://spoonacular.com/recipes/dijon-and-herb-panko-crusted-halibut-497157\">Dijon and Herb Panko-Crusted Halibut</a>, <a href=\"https://spoonacular.com/recipes/mustard-herb-panko-crusted-chicken-breasts-497256\">Mustard-Herb Panko Crusted Chicken Breasts</a>, and <a href=\"https://spoonacular.com/recipes/panko-herb-crusted-rack-of-lamb-with-vegetables-628109\">Panko Herb Crusted Rack of Lamb with Vegetables</a>.",
		"cuisines": [],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"dairy free",
			"pescatarian"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "In a skillet heat 2-3 tablespoons of extra virgin olive oil.",
						"ingredients": [
							{
								"id": 1034053,
								"name": "extra virgin olive oil",
								"localizedName": "extra virgin olive oil",
								"image": "olive-oil.jpg"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						]
					},
					{
						"number": 2,
						"step": "Add the chopped onions and leeks.",
						"ingredients": [
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							},
							{
								"id": 11246,
								"name": "leek",
								"localizedName": "leek",
								"image": "leeks.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 3,
						"step": "Saute until translucent about 4 minutes.",
						"ingredients": [],
						"equipment": [],
						"length": {
							"number": 4,
							"unit": "minutes"
						}
					},
					{
						"number": 4,
						"step": "Add the chopped red peppers and tomatoes and continue cooking until soft.",
						"ingredients": [
							{
								"id": 11821,
								"name": "red pepper",
								"localizedName": "red pepper",
								"image": "red-pepper.jpg"
							},
							{
								"id": 11529,
								"name": "tomato",
								"localizedName": "tomato",
								"image": "tomato.png"
							}
						],
						"equipment": []
					},
					{
						"number": 5,
						"step": "Set aside and allow to cool before adding to the panko breadcrumb mixture.",
						"ingredients": [
							{
								"id": 18079,
								"name": "breadcrumbs",
								"localizedName": "breadcrumbs",
								"image": "breadcrumbs.jpg"
							},
							{
								"id": 10018079,
								"name": "panko",
								"localizedName": "panko",
								"image": "panko.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 6,
						"step": "Using a food processor, finely chop the parsley, garlic clove, and the lemon zest.",
						"ingredients": [
							{
								"id": 10211215,
								"name": "whole garlic cloves",
								"localizedName": "whole garlic cloves",
								"image": "garlic.jpg"
							},
							{
								"id": 9156,
								"name": "lemon zest",
								"localizedName": "lemon zest",
								"image": "zest-lemon.jpg"
							},
							{
								"id": 11297,
								"name": "parsley",
								"localizedName": "parsley",
								"image": "parsley.jpg"
							}
						],
						"equipment": [
							{
								"id": 404771,
								"name": "food processor",
								"localizedName": "food processor",
								"image": "food-processor.png"
							}
						]
					},
					{
						"number": 7,
						"step": "Add the panko breadcrumbs,salt and pepper, pulse to blend.",
						"ingredients": [
							{
								"id": 10018079,
								"name": "panko",
								"localizedName": "panko",
								"image": "panko.jpg"
							},
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 8,
						"step": "Transfer to a bowl and toss in the the onion, leek, tomato and red pepper mixture, which has been cooled. Blend in 3 tablespoons of extra virgin oil, enough to coat the bread mixture.",
						"ingredients": [
							{
								"id": 11821,
								"name": "red pepper",
								"localizedName": "red pepper",
								"image": "red-pepper.jpg"
							},
							{
								"id": 11529,
								"name": "tomato",
								"localizedName": "tomato",
								"image": "tomato.png"
							},
							{
								"id": 18064,
								"name": "bread",
								"localizedName": "bread",
								"image": "white-bread.jpg"
							},
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							},
							{
								"id": 11246,
								"name": "leek",
								"localizedName": "leek",
								"image": "leeks.jpg"
							},
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 9,
						"step": "Place the salmon flat side down on a cookie sheet, which has been lined with parchment paper.",
						"ingredients": [
							{
								"id": 10118192,
								"name": "cookies",
								"localizedName": "cookies",
								"image": "shortbread-cookies.jpg"
							},
							{
								"id": 15076,
								"name": "salmon",
								"localizedName": "salmon",
								"image": "salmon.png"
							}
						],
						"equipment": [
							{
								"id": 404770,
								"name": "baking paper",
								"localizedName": "baking paper",
								"image": "baking-paper.jpg"
							},
							{
								"id": 404727,
								"name": "baking sheet",
								"localizedName": "baking sheet",
								"image": "baking-sheet.jpg"
							}
						]
					},
					{
						"number": 10,
						"step": "Spread the breadcrumb mixture on top of the fish to cover.",
						"ingredients": [
							{
								"id": 18079,
								"name": "breadcrumbs",
								"localizedName": "breadcrumbs",
								"image": "breadcrumbs.jpg"
							},
							{
								"id": 0,
								"name": "spread",
								"localizedName": "spread",
								"image": ""
							},
							{
								"id": 10115261,
								"name": "fish",
								"localizedName": "fish",
								"image": "fish-fillet.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 11,
						"step": "Bake in a preheated 375F for 25- 35 minutes, depending on the thickness of the salmon fillet.",
						"ingredients": [
							{
								"id": 10115076,
								"name": "salmon fillets",
								"localizedName": "salmon fillets",
								"image": "salmon.png"
							}
						],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg",
								"temperature": {
									"number": 375,
									"unit": "Fahrenheit"
								}
							}
						],
						"length": {
							"number": 35,
							"unit": "minutes"
						}
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/crispy-panko-and-herb-crusted-salmon-640828"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 2,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 4,
		"healthScore": 76,
		"creditsText": "Jen West",
		"sourceName": "Pink When",
		"pricePerServing": 929.89,
		"id": 769774,
		"title": "Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO)",
		"readyInMinutes": 45,
		"servings": 4,
		"sourceUrl": "http://www.pinkwhen.com/shredded-roast-beef-stuffed-sweet-potatoes/",
		"image": "https://spoonacular.com/recipeImages/769774-312x231.jpg",
		"imageType": "jpg",
		"summary": "If you have roughly <b>45 minutes</b> to spend in the kitchen, Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO) might be an awesome <b>gluten free, dairy free, paleolithic, and primal</b> recipe to try. One portion of this dish contains about <b>48g of protein</b>, <b>5g of fat</b>, and a total of <b>417 calories</b>. For <b>$9.3 per serving</b>, this recipe <b>covers 39%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. It works well as a side dish. This recipe is liked by 4 foodies and cooks. If you have beef broth, sweet potatoes, salt/pepper and favorite healthy seasonings, and a few other ingredients on hand, you can make it. It is brought to you by Pink When. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is excellent. Similar recipes include <a href=\"https://spoonacular.com/recipes/paleo-s-chicken-stuffed-sweet-potatoes-592982\">Paleo s: Chicken Stuffed Sweet Potatoes</a>, <a href=\"https://spoonacular.com/recipes/whole30-paleo-stuffed-sweet-potatoes-1162795\">Whole30 & Paleo Stuffed Sweet Potatoes</a>, and <a href=\"https://spoonacular.com/recipes/harvest-paleo-vegan-stuffed-sweet-potatoes-1043992\">Harvest Paleo Vegan Stuffed Sweet Potatoes</a>.",
		"cuisines": [],
		"dishTypes": [
			"side dish"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"paleolithic",
			"primal",
			"whole 30"
		],
		"occasions": [],
		"analyzedInstructions": [],
		"spoonacularSourceUrl": "https://spoonacular.com/shredded-roast-beef-stuffed-sweet-potatoes-whole-30-paleo-769774"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": false,
		"veryHealthy": false,
		"cheap": false,
		"veryPopular": true,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 13,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 400,
		"healthScore": 37,
		"creditsText": "Jen West",
		"sourceName": "Pink When",
		"pricePerServing": 420.62,
		"id": 715533,
		"title": "Filet Mignon Soft Tacos",
		"readyInMinutes": 45,
		"servings": 2,
		"sourceUrl": "http://www.pinkwhen.com/filet-mignon-soft-tacos-recipe/",
		"image": "https://spoonacular.com/recipeImages/715533-312x231.jpg",
		"imageType": "jpg",
		"summary": "The recipe Filet Mignon Soft Tacos is ready <b>in roughly 45 minutes</b> and is definitely a tremendous <b>gluten free and pescatarian</b> option for lovers of Mexican food. This recipe makes 2 servings with <b>514 calories</b>, <b>49g of protein</b>, and <b>29g of fat</b> each. For <b>$4.21 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. It works well as a pretty expensive main course. This recipe is liked by 400 foodies and cooks. Head to the store and pick up corn tortillas, cracked pepper, guacamole, and a few other things to make it today. It is brought to you by Pink When. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/the-secret-to-easy-skillet-filet-mignon-steak-tacos-1063645\">The Secret to Easy Skillet Filet Mignon Steak Tacos</a>, <a href=\"https://spoonacular.com/recipes/the-secret-to-easy-skillet-filet-mignon-steak-tacos-1375033\">The Secret to Easy Skillet Filet Mignon Steak Tacos</a>, and <a href=\"https://spoonacular.com/recipes/the-secret-to-easy-skillet-filet-mignon-steak-tacos-1369305\">The Secret to Easy Skillet Filet Mignon Steak Tacos</a>.",
		"cuisines": [
			"Mexican"
		],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"pescatarian"
		],
		"occasions": [],
		"analyzedInstructions": [],
		"spoonacularSourceUrl": "https://spoonacular.com/filet-mignon-soft-tacos-715533"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 9,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 19,
		"healthScore": 68,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 881.11,
		"id": 639411,
		"title": "Cilantro Lime Halibut",
		"readyInMinutes": 45,
		"servings": 2,
		"sourceUrl": "http://www.foodista.com/recipe/W2C6K48J/cilantro-lime-halibut",
		"image": "https://spoonacular.com/recipeImages/639411-312x231.jpg",
		"imageType": "jpg",
		"summary": "Cilantro Lime Halibut might be a good recipe to expand your main course recipe box. This recipe serves 2. One portion of this dish contains roughly <b>44g of protein</b>, <b>22g of fat</b>, and a total of <b>422 calories</b>. For <b>$8.81 per serving</b>, this recipe <b>covers 29%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista requires chicken stock, juice of lime, green onions, and salt and pepper. 19 people found this recipe to be delicious and satisfying. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and primal</b> diet. Overall, this recipe earns an <b>outstanding spoonacular score of 95%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/cilantro-ginger-halibut-1281969\">Cilantro-Ginger Halibut</a>, <a href=\"https://spoonacular.com/recipes/cilantro-ginger-halibut-86400\">Cilantro-Ginger Halibut</a>, and <a href=\"https://spoonacular.com/recipes/halibut-with-citrus-and-cilantro-3296\">Halibut With Citrus And Cilantro</a>.",
		"cuisines": [],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"paleolithic",
			"primal",
			"pescatarian"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Heat the oil in a large frying pan over medium heat. Coat the filets with garlic pepper on the flesh side. When pan is heated, add filet flesh side down to pan to sear that side. Allow to cook for about 30 seconds. Then flip filets over with tongs.",
						"ingredients": [
							{
								"id": 11215,
								"name": "garlic",
								"localizedName": "garlic",
								"image": "garlic.png"
							},
							{
								"id": 1002030,
								"name": "pepper",
								"localizedName": "pepper",
								"image": "pepper.jpg"
							},
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							},
							{
								"id": 404641,
								"name": "tongs",
								"localizedName": "tongs",
								"image": "tongs.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "Add white wine to pan and cover to steam. After about 2 minutes, much of the wine will have evaporated.",
						"ingredients": [
							{
								"id": 14106,
								"name": "white wine",
								"localizedName": "white wine",
								"image": "white-wine.jpg"
							},
							{
								"id": 14084,
								"name": "wine",
								"localizedName": "wine",
								"image": "red-wine.jpg"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						],
						"length": {
							"number": 2,
							"unit": "minutes"
						}
					},
					{
						"number": 3,
						"step": "Add the chicken stock gradually. Allow the filets to steam for another couple of minutes. Then add the lime juice. When bubbling and both filets are opaque all the way through, add the green onions to the pan and swirl in the sauce for a moment.",
						"ingredients": [
							{
								"id": 6172,
								"name": "chicken stock",
								"localizedName": "chicken stock",
								"image": "chicken-broth.png"
							},
							{
								"id": 11291,
								"name": "green onions",
								"localizedName": "green onions",
								"image": "spring-onions.jpg"
							},
							{
								"id": 9160,
								"name": "lime juice",
								"localizedName": "lime juice",
								"image": "lime-juice.png"
							},
							{
								"id": 0,
								"name": "sauce",
								"localizedName": "sauce",
								"image": ""
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						]
					},
					{
						"number": 4,
						"step": "Remove filets to beds of lettuce.",
						"ingredients": [
							{
								"id": 11252,
								"name": "lettuce",
								"localizedName": "lettuce",
								"image": "iceberg-lettuce.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 5,
						"step": "Add a tsp of the Blood Orange Olive, swirl the green onions in the sauce one more time and then pour equal parts over the fish.",
						"ingredients": [
							{
								"id": 1009200,
								"name": "blood orange",
								"localizedName": "blood orange",
								"image": "blood-orange.jpg"
							},
							{
								"id": 11291,
								"name": "green onions",
								"localizedName": "green onions",
								"image": "spring-onions.jpg"
							},
							{
								"id": 9195,
								"name": "olives",
								"localizedName": "olives",
								"image": "olives-mixed.jpg"
							},
							{
								"id": 0,
								"name": "sauce",
								"localizedName": "sauce",
								"image": ""
							},
							{
								"id": 10115261,
								"name": "fish",
								"localizedName": "fish",
								"image": "fish-fillet.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 6,
						"step": "Garnish with fresh cilantro and lime wedges.",
						"ingredients": [
							{
								"id": 11165,
								"name": "fresh cilantro",
								"localizedName": "fresh cilantro",
								"image": "cilantro.png"
							},
							{
								"id": 1029159,
								"name": "lime wedge",
								"localizedName": "lime wedge",
								"image": "lime-wedge.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 7,
						"step": "Sprinkle with salt and pepper to taste.",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 8,
						"step": "Serve immediately.",
						"ingredients": [],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/cilantro-lime-halibut-639411"
	},
	{
		"vegetarian": true,
		"vegan": true,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 1,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 4,
		"healthScore": 89,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 105.84,
		"id": 636228,
		"title": "Broccoli Tartar",
		"readyInMinutes": 45,
		"servings": 12,
		"sourceUrl": "http://www.foodista.com/recipe/364Q5CSN/broccoli-tartar",
		"image": "https://spoonacular.com/recipeImages/636228-312x231.jpg",
		"imageType": "jpg",
		"summary": "Broccoli Tartar is a side dish that serves 12. One serving contains <b>140 calories</b>, <b>6g of protein</b>, and <b>6g of fat</b>. For <b>$1.06 per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 4 foodies and cooks. This recipe from Foodista requires hand blender, colorful tartar on a bed of vegetables. also an touch, chili powder, and parsley. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 84%</b>, which is great. Similar recipes include <a href=\"https://spoonacular.com/recipes/broccoli-tartar-1370837\">Broccoli Tartar</a>, <a href=\"https://spoonacular.com/recipes/rollo-de-salmon-ahumado-con-salsa-tartar-y-lentejas-smoked-salmon-roll-with-tartar-sauce-and-lentils-334769\">Rollo De Salmon Ahumado Con Salsa Tartar Y Lentejas (Smoked Salmon Roll with Tartar Sauce and Lentils)</a>, and <a href=\"https://spoonacular.com/recipes/tartar-sauce-30090\">Tartar Sauce</a>.",
		"cuisines": [],
		"dishTypes": [
			"side dish"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"lacto ovo vegetarian",
			"vegan"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Soak arame (seaweed can be found in a health-food store) in a bowl of pure water.",
						"ingredients": [
							{
								"id": 11445,
								"name": "seaweed",
								"localizedName": "seaweed",
								"image": "kombu.jpg"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "Put the grill of the oven and put a pot of water on the fire with a pinch of sea salt.Wash the pepper, broccoli, parsley and tomatoes. Carve a cross down the tomatoes, halve the peppers and remove the seeds and cut the broccoli into chunks.When the water boils you immerse the tomatoes and leave them for a swim, get them and let them scare in cold water. They are now ready to go out of their jackets.Meanwhile, the broccoli  can be swimming for 6 minutes in the boiling water. Note: The water will cool off and when back to a boil, then add 5 minutes. Get them dry and cool under cold water, then they stay nice and green.The pepper may be under the grill until it sees black.",
						"ingredients": [
							{
								"id": 11090,
								"name": "broccoli",
								"localizedName": "broccoli",
								"image": "broccoli.jpg"
							},
							{
								"id": 1012047,
								"name": "sea salt",
								"localizedName": "sea salt",
								"image": "salt.jpg"
							},
							{
								"id": 11529,
								"name": "tomato",
								"localizedName": "tomato",
								"image": "tomato.png"
							},
							{
								"id": 11297,
								"name": "parsley",
								"localizedName": "parsley",
								"image": "parsley.jpg"
							},
							{
								"id": 10111333,
								"name": "peppers",
								"localizedName": "peppers",
								"image": "green-pepper.jpg"
							},
							{
								"id": 1002030,
								"name": "pepper",
								"localizedName": "pepper",
								"image": "pepper.jpg"
							},
							{
								"id": 93818,
								"name": "seeds",
								"localizedName": "seeds",
								"image": "sunflower-seeds.jpg"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": [
							{
								"id": 404706,
								"name": "grill",
								"localizedName": "grill",
								"image": "grill.jpg"
							},
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							},
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						],
						"length": {
							"number": 11,
							"unit": "minutes"
						}
					},
					{
						"number": 3,
						"step": "Let them cool and peel them.Chop the parsley.",
						"ingredients": [
							{
								"id": 11297,
								"name": "parsley",
								"localizedName": "parsley",
								"image": "parsley.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Put the cooled broccoli in a long narrow bowl and blend finely with a hand blender.",
						"ingredients": [
							{
								"id": 11090,
								"name": "broccoli",
								"localizedName": "broccoli",
								"image": "broccoli.jpg"
							}
						],
						"equipment": [
							{
								"id": 404776,
								"name": "immersion blender",
								"localizedName": "immersion blender",
								"image": "immersion-blender.png"
							},
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 5,
						"step": "Add the oil and vinegar with the salt.",
						"ingredients": [
							{
								"id": 2053,
								"name": "vinegar",
								"localizedName": "vinegar",
								"image": "vinegar-(white).jpg"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							},
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 6,
						"step": "Add half the parsley and mix into a smooth puree. If too grainy (dry) put some extra oil.",
						"ingredients": [
							{
								"id": 11297,
								"name": "parsley",
								"localizedName": "parsley",
								"image": "parsley.jpg"
							},
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 7,
						"step": "Cut the unseeded, peeled tomatoes and peppers into very small pieces.The shallot or onion may be chopped in mini pieces.",
						"ingredients": [
							{
								"id": 10011531,
								"name": "canned whole tomatoes",
								"localizedName": "canned whole tomatoes",
								"image": "tomatoes-canned.png"
							},
							{
								"id": 10111333,
								"name": "peppers",
								"localizedName": "peppers",
								"image": "green-pepper.jpg"
							},
							{
								"id": 11677,
								"name": "shallot",
								"localizedName": "shallot",
								"image": "shallots.jpg"
							},
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							}
						],
						"equipment": []
					},
					{
						"number": 8,
						"step": "Add the chopped vegetables to the puree and stir gently with a spoon. The rest of the chopped parsley may be added now. A little salt, soy sauce and chili powder. Start with a little bit and add some more later if desired. The herbs de Provence can now embellish the whole with its bright flavor.The seaweed may now well out of the water and squeeze out any excess moisture.",
						"ingredients": [
							{
								"id": 1012042,
								"name": "herbes de provence",
								"localizedName": "herbes de provence",
								"image": "dried-herbs.png"
							},
							{
								"id": 2009,
								"name": "chili powder",
								"localizedName": "chili powder",
								"image": "chili-powder.jpg"
							},
							{
								"id": 11583,
								"name": "vegetable",
								"localizedName": "vegetable",
								"image": "mixed-vegetables.png"
							},
							{
								"id": 16124,
								"name": "soy sauce",
								"localizedName": "soy sauce",
								"image": "soy-sauce.jpg"
							},
							{
								"id": 11297,
								"name": "parsley",
								"localizedName": "parsley",
								"image": "parsley.jpg"
							},
							{
								"id": 11445,
								"name": "seaweed",
								"localizedName": "seaweed",
								"image": "kombu.jpg"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 9,
						"step": "Cut the seaweed finely and mix carefully with the puree.With an ice cream spoon you  create beautiful balls and sprinkle with toasted sesame seeds.bon apptit",
						"ingredients": [
							{
								"id": 12023,
								"name": "sesame seeds",
								"localizedName": "sesame seeds",
								"image": "sesame-seeds.png"
							},
							{
								"id": 19095,
								"name": "ice cream",
								"localizedName": "ice cream",
								"image": "vanilla-ice-cream.png"
							},
							{
								"id": 11445,
								"name": "seaweed",
								"localizedName": "seaweed",
								"image": "kombu.jpg"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/broccoli-tartar-636228"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": false,
		"dairyFree": false,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 14,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 9,
		"healthScore": 79,
		"creditsText": "foodista.com",
		"sourceName": "foodista.com",
		"pricePerServing": 427.24,
		"id": 661259,
		"title": "Spinach and Gorgonzola Stuffed Flank Steak",
		"readyInMinutes": 45,
		"servings": 4,
		"sourceUrl": "https://www.foodista.com/recipe/SWTFLZXM/spinach-and-gorgonzola-stuffed-flank-steak",
		"image": "https://spoonacular.com/recipeImages/661259-312x231.jpg",
		"imageType": "jpg",
		"summary": "Spinach and Gorgonzola Stuffed Flank Steak might be just the main course you are searching for. For <b>$4.27 per serving</b>, this recipe <b>covers 39%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains approximately <b>47g of protein</b>, <b>28g of fat</b>, and a total of <b>523 calories</b>. This recipe serves 4. 9 people found this recipe to be tasty and satisfying. It is perfect for <b>valentin day</b>. If you have gorgonzola, olive oil, shallot, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 95%</b>, which is super. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/bruce-aidells-spinach-and-gorgonzola-stuffed-flank-steak-202812\">Bruce Aidells' Spinach and Gorgonzola-Stuffed Flank Steak</a>, <a href=\"https://spoonacular.com/recipes/spinach-stuffed-flank-steak-19875\">Spinach-stuffed Flank Steak</a>, and <a href=\"https://spoonacular.com/recipes/spinach-and-carrot-stuffed-flank-steak-156209\">Spinach and Carrot Stuffed Flank Steak</a>.",
		"cuisines": [],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [],
		"occasions": [
			"valentine's day",
			"father's day"
		],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Preheat oven to 37",
						"ingredients": [],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "Butterfly the steak by using a long sharp knife holding it parallel to the work surface, cut through the long side of the steak, stopping about  inch from the opposite side. If the steak is already thin, just pound it with a mallet to  inch thick.",
						"ingredients": [
							{
								"id": 23232,
								"name": "steak",
								"localizedName": "steak",
								"image": "ribeye-raw.jpg"
							}
						],
						"equipment": [
							{
								"id": 404745,
								"name": "knife",
								"localizedName": "knife",
								"image": "chefs-knife.jpg"
							}
						]
					},
					{
						"number": 3,
						"step": "In a large skillet over medium heat add 1 tablespoon olive oil and saut` the shallots until soft, 2 minutes.",
						"ingredients": [
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							},
							{
								"id": 11677,
								"name": "shallot",
								"localizedName": "shallot",
								"image": "shallots.jpg"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						],
						"length": {
							"number": 2,
							"unit": "minutes"
						}
					},
					{
						"number": 4,
						"step": "Add the spinach and cook until just wilted, about 2 to 3 minutes.",
						"ingredients": [
							{
								"id": 10011457,
								"name": "spinach",
								"localizedName": "spinach",
								"image": "spinach.jpg"
							}
						],
						"equipment": [],
						"length": {
							"number": 2,
							"unit": "minutes"
						}
					},
					{
						"number": 5,
						"step": "Transfer to a colander.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404639,
								"name": "colander",
								"localizedName": "colander",
								"image": "colander.jpg"
							}
						]
					},
					{
						"number": 6,
						"step": "When cool enough to handle, squeeze out all the moisture from the spinach and transfer to a medium bowl. Stir in the bread crumbs and cheese. Season with salt and pepper.",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 18079,
								"name": "breadcrumbs",
								"localizedName": "breadcrumbs",
								"image": "breadcrumbs.jpg"
							},
							{
								"id": 10011457,
								"name": "spinach",
								"localizedName": "spinach",
								"image": "spinach.jpg"
							},
							{
								"id": 1041009,
								"name": "cheese",
								"localizedName": "cheese",
								"image": "cheddar-cheese.png"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 7,
						"step": "Place the steak on a sheet of plastic wrap. Smear the spinach mixture evenly over the steak, leaving about 1 inch border along the side edge. Beginning with the side near you and using the plastic wrap as an aid, rollup the steak, gently pressing on the filling.",
						"ingredients": [
							{
								"id": 10011457,
								"name": "spinach",
								"localizedName": "spinach",
								"image": "spinach.jpg"
							},
							{
								"id": 23232,
								"name": "steak",
								"localizedName": "steak",
								"image": "ribeye-raw.jpg"
							},
							{
								"id": 10018364,
								"name": "wrap",
								"localizedName": "wrap",
								"image": "flour-tortilla.jpg"
							}
						],
						"equipment": [
							{
								"id": 404730,
								"name": "plastic wrap",
								"localizedName": "plastic wrap",
								"image": "plastic-wrap.jpg"
							}
						]
					},
					{
						"number": 8,
						"step": "Tie the rolled steak with twine at 2-3 inch interval.",
						"ingredients": [
							{
								"id": 23232,
								"name": "steak",
								"localizedName": "steak",
								"image": "ribeye-raw.jpg"
							}
						],
						"equipment": [
							{
								"id": 404733,
								"name": "kitchen twine",
								"localizedName": "kitchen twine",
								"image": "kitchen-string.jpg"
							}
						]
					},
					{
						"number": 9,
						"step": "Season the outside with salt and pepper.",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 10,
						"step": "Heat the remaining 2 tablespoons olive oil in a large ovenproof skillet over medium high heat. Sear the roast on all sided, about 2 minutes per side.",
						"ingredients": [
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						],
						"length": {
							"number": 2,
							"unit": "minutes"
						}
					},
					{
						"number": 11,
						"step": "Place in the oven and roast for 20 to 25 minutes.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						],
						"length": {
							"number": 20,
							"unit": "minutes"
						}
					},
					{
						"number": 12,
						"step": "Transfer to a cutting board, tend with aluminum foil and allow resting for 10 minutes.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404765,
								"name": "aluminum foil",
								"localizedName": "aluminum foil",
								"image": "aluminum-foil.png"
							},
							{
								"id": 404716,
								"name": "cutting board",
								"localizedName": "cutting board",
								"image": "cutting-board.jpg"
							}
						],
						"length": {
							"number": 10,
							"unit": "minutes"
						}
					},
					{
						"number": 13,
						"step": "To serve, remove the twine from the roast and cut into  inch to 1 inch thick slices.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404733,
								"name": "kitchen twine",
								"localizedName": "kitchen twine",
								"image": "kitchen-string.jpg"
							}
						]
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/spinach-and-gorgonzola-stuffed-flank-steak-661259"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 3,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 11,
		"healthScore": 66,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 116.49,
		"id": 664680,
		"title": "Vegetarian Mushroom Shepherd's Pie",
		"readyInMinutes": 45,
		"servings": 12,
		"sourceUrl": "https://www.foodista.com/recipe/Q8LZSX4D/vegetarian-mushroom-shepherd-s-pie-with-vegan-version",
		"image": "https://spoonacular.com/recipeImages/664680-312x231.jpg",
		"imageType": "jpg",
		"summary": "The recipe Vegetarian Mushroom Shepherd's Pie is ready <b>in around 45 minutes</b> and is definitely an awesome <b>gluten free and dairy free</b> option for lovers of European food. For <b>$1.16 per serving</b>, you get a hor d'oeuvre that serves 12. One serving contains <b>113 calories</b>, <b>5g of protein</b>, and <b>5g of fat</b>. 11 person were glad they tried this recipe. This recipe from Foodista requires ground pepper, thyme, unrefined sunflower oil, and paprika. All things considered, we decided this recipe <b>deserves a spoonacular score of 83%</b>. This score is spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/vegetarian-mushroom-shepherds-pie-1404517\">Vegetarian Mushroom Shepherd's Pie</a>, <a href=\"https://spoonacular.com/recipes/vegetarian-mushroom-shepherds-pie-1374865\">Vegetarian Mushroom Shepherd's Pie</a>, and <a href=\"https://spoonacular.com/recipes/vegetarian-mushroom-shepherds-pie-with-vegan-version-122196\">Vegetarian Mushroom Shepherd's Pie - With Vegan Version</a>.",
		"cuisines": [
			"English",
			"Scottish",
			"British",
			"European"
		],
		"dishTypes": [
			"antipasti",
			"starter",
			"snack",
			"appetizer",
			"antipasto",
			"hor d'oeuvre"
		],
		"diets": [
			"gluten free",
			"dairy free"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Peel potatoes and put them in a large pot filled with water. Boil them until they're tender. Mash them and let them cool for a while.",
						"ingredients": [
							{
								"id": 11352,
								"name": "potato",
								"localizedName": "potato",
								"image": "potatoes-yukon-gold.png"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": [
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "Chop the mushrooms, carrot and red bell pepper.",
						"ingredients": [
							{
								"id": 11821,
								"name": "red pepper",
								"localizedName": "red pepper",
								"image": "red-pepper.jpg"
							},
							{
								"id": 11260,
								"name": "mushrooms",
								"localizedName": "mushrooms",
								"image": "mushrooms.png"
							},
							{
								"id": 11124,
								"name": "carrot",
								"localizedName": "carrot",
								"image": "sliced-carrot.png"
							}
						],
						"equipment": []
					},
					{
						"number": 3,
						"step": "Add them into your food processor and pulse until all ingredients are well mixed together.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404771,
								"name": "food processor",
								"localizedName": "food processor",
								"image": "food-processor.png"
							}
						]
					},
					{
						"number": 4,
						"step": "Heat oil in a large skillet.",
						"ingredients": [
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						]
					},
					{
						"number": 5,
						"step": "Add the mixture above, diced onions, chopped dill and parsley, soy granules, eggs (or egg substitute) and spices. Saut for 10 minutes.",
						"ingredients": [
							{
								"id": 1226,
								"name": "egg substitute",
								"localizedName": "egg substitute",
								"image": "liquid-egg-substitute.jpg"
							},
							{
								"id": 11297,
								"name": "parsley",
								"localizedName": "parsley",
								"image": "parsley.jpg"
							},
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							},
							{
								"id": 2035,
								"name": "spices",
								"localizedName": "spices",
								"image": "spices.png"
							},
							{
								"id": 2045,
								"name": "dill",
								"localizedName": "dill",
								"image": "dill.jpg"
							},
							{
								"id": 1123,
								"name": "egg",
								"localizedName": "egg",
								"image": "egg.png"
							}
						],
						"equipment": [],
						"length": {
							"number": 10,
							"unit": "minutes"
						}
					},
					{
						"number": 6,
						"step": "* I added the soy granules without boiling them because the mushrooms contain a lot of water and these soy granules will absorb all excess water.",
						"ingredients": [
							{
								"id": 11260,
								"name": "mushrooms",
								"localizedName": "mushrooms",
								"image": "mushrooms.png"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": []
					},
					{
						"number": 7,
						"step": "Put some parchment paper on the bottom of a casserole. Divide the mashed potatoes in two.",
						"ingredients": [
							{
								"id": 11352,
								"name": "potato",
								"localizedName": "potato",
								"image": "potatoes-yukon-gold.png"
							}
						],
						"equipment": [
							{
								"id": 404770,
								"name": "baking paper",
								"localizedName": "baking paper",
								"image": "baking-paper.jpg"
							}
						]
					},
					{
						"number": 8,
						"step": "Place the first half in the casserole and spread it with a spatula.",
						"ingredients": [
							{
								"id": 0,
								"name": "spread",
								"localizedName": "spread",
								"image": ""
							}
						],
						"equipment": [
							{
								"id": 404642,
								"name": "spatula",
								"localizedName": "spatula",
								"image": "spatula-or-turner.jpg"
							}
						]
					},
					{
						"number": 9,
						"step": "Add the filling.",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 10,
						"step": "Place over the other half of mashed potatoes.",
						"ingredients": [
							{
								"id": 11352,
								"name": "potato",
								"localizedName": "potato",
								"image": "potatoes-yukon-gold.png"
							}
						],
						"equipment": []
					},
					{
						"number": 11,
						"step": "Heat your oven at 39",
						"ingredients": [],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						]
					},
					{
						"number": 12,
						"step": "Put the casserole in the oven. Cook for 40 minutes.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						],
						"length": {
							"number": 40,
							"unit": "minutes"
						}
					},
					{
						"number": 13,
						"step": "Don't serve immediately.",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 14,
						"step": "Let it cool for at least half an hour.",
						"ingredients": [],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/vegetarian-mushroom-shepherds-pie-664680"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": false,
		"cheap": false,
		"veryPopular": true,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 7,
		"gaps": "no",
		"preparationMinutes": 5,
		"cookingMinutes": 480,
		"aggregateLikes": 2182,
		"healthScore": 28,
		"creditsText": "pinkwhen.com",
		"sourceName": "pinkwhen.com",
		"pricePerServing": 141.43,
		"id": 715391,
		"title": "Slow Cooker Chicken Taco Soup",
		"readyInMinutes": 485,
		"servings": 6,
		"sourceUrl": "http://www.pinkwhen.com/slow-cooker-chicken-taco-soup-recipe/",
		"image": "https://spoonacular.com/recipeImages/715391-312x231.jpg",
		"imageType": "jpg",
		"summary": "Forget going out to eat or ordering takeout every time you crave Mexican food. Try making Slow Cooker Chicken Taco Soup at home. One portion of this dish contains about <b>24g of protein</b>, <b>4g of fat</b>, and a total of <b>312 calories</b>. This gluten free and dairy free recipe serves 6 and costs <b>$1.41 per serving</b>. 2182 people have tried and liked this recipe. It works well as a main course. If you have black beans, chili beans, canned tomatoes, and a few other ingredients on hand, you can make it. It is perfect for <b>Autumn</b>. From preparation to the plate, this recipe takes around <b>8 hours and 5 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns an <b>awesome spoonacular score of 95%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-taco-soup-1399115\">Slow Cooker Chicken Taco Soup</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-taco-soup-1228993\">Slow Cooker Chicken Taco Soup</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-chicken-taco-soup-1369307\">Slow Cooker Chicken Taco Soup</a>.",
		"cuisines": [
			"Mexican"
		],
		"dishTypes": [
			"soup",
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free"
		],
		"occasions": [
			"fall",
			"winter"
		],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Once you have all of your ingredients added, allow it to cook all day for 8 hours on low. If you are wanting to make this a little faster, turn it on high and cook for 4 hours.When your Chicken Taco Soup is ready to serve, add in some crushed tortilla shells, shredded cheddar cheese, and a little sour cream.",
						"ingredients": [
							{
								"id": 1001009,
								"name": "shredded cheddar cheese",
								"localizedName": "shredded cheddar cheese",
								"image": "shredded-cheddar.jpg"
							},
							{
								"id": 1056,
								"name": "sour cream",
								"localizedName": "sour cream",
								"image": "sour-cream.jpg"
							},
							{
								"id": 18364,
								"name": "tortilla",
								"localizedName": "tortilla",
								"image": "flour-tortilla.jpg"
							},
							{
								"id": 5006,
								"name": "whole chicken",
								"localizedName": "whole chicken",
								"image": "whole-chicken.jpg"
							},
							{
								"id": 11020420,
								"name": "pasta shells",
								"localizedName": "pasta shells",
								"image": "shell-pasta.jpg"
							},
							{
								"id": 0,
								"name": "soup",
								"localizedName": "soup",
								"image": ""
							}
						],
						"equipment": [],
						"length": {
							"number": 720,
							"unit": "minutes"
						}
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/slow-cooker-chicken-taco-soup-715391"
	},
	{
		"vegetarian": true,
		"vegan": false,
		"glutenFree": false,
		"dairyFree": false,
		"veryHealthy": false,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 3,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 18,
		"healthScore": 54,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 66.47,
		"id": 636230,
		"title": "Broccoli with cheese soup",
		"readyInMinutes": 45,
		"servings": 4,
		"sourceUrl": "https://www.foodista.com/recipe/ZYJG37NG/broccoli-with-cheese-soup",
		"image": "https://spoonacular.com/recipeImages/636230-312x231.jpg",
		"imageType": "jpg",
		"summary": "Broccoli with cheese soup could be just the <b>lacto ovo vegetarian</b> recipe you've been looking for. This recipe serves 4 and costs 66 cents per serving. One serving contains <b>120 calories</b>, <b>7g of protein</b>, and <b>5g of fat</b>. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. 18 people found this recipe to be delicious and satisfying. Head to the store and pick up broccoli florets, flour, milk, and a few other things to make it today. It is brought to you by Foodista. A few people really liked this side dish. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 95%</b>, which is great. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/broccoli-cheese-soup-475635\">Broccoli Cheese Soup</a>, <a href=\"https://spoonacular.com/recipes/broccoli-cheese-soup-1056015\">Broccoli Cheese Soup</a>, and <a href=\"https://spoonacular.com/recipes/broccoli-cheese-soup-395199\">Broccoli Cheese Soup</a>.",
		"cuisines": [],
		"dishTypes": [
			"side dish"
		],
		"diets": [
			"lacto ovo vegetarian"
		],
		"occasions": [
			"fall",
			"winter"
		],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Add onions and carrots to the melted butter and saute for 5-6 minutes over medium heat, or until vegetables are tender.",
						"ingredients": [
							{
								"id": 11583,
								"name": "vegetable",
								"localizedName": "vegetable",
								"image": "mixed-vegetables.png"
							},
							{
								"id": 11124,
								"name": "carrot",
								"localizedName": "carrot",
								"image": "sliced-carrot.png"
							},
							{
								"id": 1001,
								"name": "butter",
								"localizedName": "butter",
								"image": "butter-sliced.jpg"
							},
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							}
						],
						"equipment": [],
						"length": {
							"number": 6,
							"unit": "minutes"
						}
					},
					{
						"number": 2,
						"step": "Add 1 cup chicken broth and bring to the boil.",
						"ingredients": [
							{
								"id": 6194,
								"name": "chicken broth",
								"localizedName": "chicken broth",
								"image": "chicken-broth.png"
							}
						],
						"equipment": []
					},
					{
						"number": 3,
						"step": "Add broccoli and cook, covered, 5 to 6 minutes or until the broccoli is tender. Using a spoon, break broccoli florets in small pieces.",
						"ingredients": [
							{
								"id": 10011090,
								"name": "broccoli florets",
								"localizedName": "broccoli florets",
								"image": "broccoli.jpg"
							},
							{
								"id": 11090,
								"name": "broccoli",
								"localizedName": "broccoli",
								"image": "broccoli.jpg"
							}
						],
						"equipment": [],
						"length": {
							"number": 5,
							"unit": "minutes"
						}
					},
					{
						"number": 4,
						"step": "Reduce heat to low and add remaining cup of chicken broth.",
						"ingredients": [
							{
								"id": 6194,
								"name": "chicken broth",
								"localizedName": "chicken broth",
								"image": "chicken-broth.png"
							}
						],
						"equipment": []
					},
					{
						"number": 5,
						"step": "Mix flour and milk in a small bowl and whisk until smooth.",
						"ingredients": [
							{
								"id": 20081,
								"name": "all purpose flour",
								"localizedName": "all purpose flour",
								"image": "flour.png"
							},
							{
								"id": 1077,
								"name": "milk",
								"localizedName": "milk",
								"image": "milk.png"
							}
						],
						"equipment": [
							{
								"id": 404661,
								"name": "whisk",
								"localizedName": "whisk",
								"image": "whisk.png"
							},
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 6,
						"step": "Add mixture to the pot.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						]
					},
					{
						"number": 7,
						"step": "Add garlic powder, salt, and pepper. Continue cooking for about 5-6 minutes over low heat until soup thickens.",
						"ingredients": [
							{
								"id": 1022020,
								"name": "garlic powder",
								"localizedName": "garlic powder",
								"image": "garlic-powder.png"
							},
							{
								"id": 1002030,
								"name": "pepper",
								"localizedName": "pepper",
								"image": "pepper.jpg"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							},
							{
								"id": 0,
								"name": "soup",
								"localizedName": "soup",
								"image": ""
							}
						],
						"equipment": [],
						"length": {
							"number": 6,
							"unit": "minutes"
						}
					},
					{
						"number": 8,
						"step": "Add cheese, handfuls at a time, and stir constantly over low heat for 10 minutes until smooth and creamy. If soup becomes too thick, add additional chicken stock. Do not let soup boil.",
						"ingredients": [
							{
								"id": 6172,
								"name": "chicken stock",
								"localizedName": "chicken stock",
								"image": "chicken-broth.png"
							},
							{
								"id": 1041009,
								"name": "cheese",
								"localizedName": "cheese",
								"image": "cheddar-cheese.png"
							},
							{
								"id": 0,
								"name": "soup",
								"localizedName": "soup",
								"image": ""
							}
						],
						"equipment": [],
						"length": {
							"number": 10,
							"unit": "minutes"
						}
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/broccoli-with-cheese-soup-636230"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 13,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 3,
		"healthScore": 100,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 241.97,
		"id": 632812,
		"title": "Asian Chicken and Broccoli With Chili Garlic Sauce",
		"readyInMinutes": 45,
		"servings": 4,
		"sourceUrl": "https://www.foodista.com/recipe/SKWZFWYW/asian-chicken-and-broccoli-with-chili-garlic-sauce",
		"image": "https://spoonacular.com/recipeImages/632812-312x231.jpg",
		"imageType": "jpg",
		"summary": "The recipe Asian Chicken and Broccoli With Chili Garlic Sauce could satisfy your Asian craving in approximately <b>45 minutes</b>. One serving contains <b>546 calories</b>, <b>33g of protein</b>, and <b>9g of fat</b>. For <b>$2.42 per serving</b>, this recipe <b>covers 35%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. 3 people have tried and liked this recipe. <b>The Super Bowl</b> will be even more special with this recipe. It works well as a rather inexpensive main course. It is a good option if you're following a <b>gluten free and dairy free</b> diet. If you have cornstarch, fish sauce, chili garlic sauce, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Overall, this recipe earns a <b>super spoonacular score of 93%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/asian-chicken-and-broccoli-with-chili-garlic-sauce-530075\">Asian Chicken and Broccoli with Chili Garlic Sauce</a>, <a href=\"https://spoonacular.com/recipes/video-crunchy-asian-fried-chicken-with-garlic-chili-sauce-527792\">{Video} Crunchy Asian Fried Chicken with Garlic Chili Sauce</a>, and <a href=\"https://spoonacular.com/recipes/asian-broccoli-salad-with-tangy-chili-garlic-dressing-733071\">Asian Broccoli Salad with Tangy Chili-Garlic Dressing</a>.",
		"cuisines": [
			"Asian"
		],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free"
		],
		"occasions": [
			"super bowl"
		],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Combine rice vinegar, Mirin, water, chili garlic sauce, fish sauce, soy sauce and cornstarch in a bowl.",
						"ingredients": [
							{
								"id": 93749,
								"name": "chili garlic sauce",
								"localizedName": "chili garlic sauce",
								"image": "chili-garlic-sauce.jpg"
							},
							{
								"id": 1022053,
								"name": "rice vinegar",
								"localizedName": "rice vinegar",
								"image": "rice-vinegar.png"
							},
							{
								"id": 20027,
								"name": "corn starch",
								"localizedName": "corn starch",
								"image": "white-powder.jpg"
							},
							{
								"id": 6179,
								"name": "fish sauce",
								"localizedName": "fish sauce",
								"image": "asian-fish-sauce.jpg"
							},
							{
								"id": 16124,
								"name": "soy sauce",
								"localizedName": "soy sauce",
								"image": "soy-sauce.jpg"
							},
							{
								"id": 93830,
								"name": "mirin",
								"localizedName": "mirin",
								"image": "mirin.jpg"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "Preheat a large skillet over medium-high heat and spray with cooking spray.",
						"ingredients": [
							{
								"id": 4679,
								"name": "cooking spray",
								"localizedName": "cooking spray",
								"image": "cooking-spray.png"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						]
					},
					{
						"number": 3,
						"step": "Add sesame oil and stir fry broccoli for 3  4 minutes until crisp-tender.",
						"ingredients": [
							{
								"id": 4058,
								"name": "sesame oil",
								"localizedName": "sesame oil",
								"image": "sesame-oil.png"
							},
							{
								"id": 11090,
								"name": "broccoli",
								"localizedName": "broccoli",
								"image": "broccoli.jpg"
							}
						],
						"equipment": [],
						"length": {
							"number": 4,
							"unit": "minutes"
						}
					},
					{
						"number": 4,
						"step": "Add 1/4 cup chicken broth if needed to keep from burning.",
						"ingredients": [
							{
								"id": 6194,
								"name": "chicken broth",
								"localizedName": "chicken broth",
								"image": "chicken-broth.png"
							}
						],
						"equipment": []
					},
					{
						"number": 5,
						"step": "Add cooked chicken and sauce. Cook another 3  4 minutes until sauce thickens and chicken is heated through.",
						"ingredients": [
							{
								"id": 5114,
								"name": "cooked chicken",
								"localizedName": "cooked chicken",
								"image": "rotisserie-chicken.png"
							},
							{
								"id": 5006,
								"name": "whole chicken",
								"localizedName": "whole chicken",
								"image": "whole-chicken.jpg"
							},
							{
								"id": 0,
								"name": "sauce",
								"localizedName": "sauce",
								"image": ""
							}
						],
						"equipment": [],
						"length": {
							"number": 4,
							"unit": "minutes"
						}
					},
					{
						"number": 6,
						"step": "Serve with basmati rice.",
						"ingredients": [
							{
								"id": 10020444,
								"name": "basmati rice",
								"localizedName": "basmati rice",
								"image": "rice-white-long-grain-or-basmatii-cooked.jpg"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/asian-chicken-and-broccoli-with-chili-garlic-sauce-632812"
	},
	{
		"vegetarian": true,
		"vegan": true,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": false,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 6,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 33,
		"healthScore": 51,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 190.8,
		"id": 633942,
		"title": "Balsamic Roasted Vegetables",
		"readyInMinutes": 45,
		"servings": 6,
		"sourceUrl": "https://www.foodista.com/recipe/LGRN2255/balsamic-roasted-vegetables",
		"image": "https://spoonacular.com/recipeImages/633942-312x231.jpg",
		"imageType": "jpg",
		"summary": "Balsamic Roasted Vegetables is a <b>gluten free, dairy free, lacto ovo vegetarian, and whole 30</b> side dish. One serving contains <b>290 calories</b>, <b>5g of protein</b>, and <b>14g of fat</b>. This recipe serves 6. For <b>$1.91 per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista requires balsamic vinegar, kabocha squash, bulb fennel, and fingerling potatoes. This recipe is liked by 33 foodies and cooks. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 96%</b>, which is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/balsamic-roasted-vegetables-1145288\">Balsamic Roasted Vegetables</a>, <a href=\"https://spoonacular.com/recipes/balsamic-roasted-vegetables-1238937\">Balsamic Roasted Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/balsamic-roasted-vegetables-510045\">Balsamic Roasted Vegetables</a>.",
		"cuisines": [],
		"dishTypes": [
			"side dish"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"lacto ovo vegetarian",
			"whole 30",
			"vegan"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Clean and top the beets and, along with the fingerling potatoes, drizzle with enough olive oil just to coat. Roast whole at 400 degrees until softened, but not completely cooked (about 30 minutes).",
						"ingredients": [
							{
								"id": 10111352,
								"name": "fingerling potato",
								"localizedName": "fingerling potato",
								"image": "fingerling-potatoes.jpg"
							},
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							},
							{
								"id": 11080,
								"name": "beet",
								"localizedName": "beet",
								"image": "beets.jpg"
							}
						],
						"equipment": [],
						"length": {
							"number": 30,
							"unit": "minutes"
						}
					},
					{
						"number": 2,
						"step": "Remove from the oven and carefully peel the beets, then cut in half. You can leave the fingerlings whole, and slice lengthwise in half before serving, or halve them and continue roasting (both ways are delicious!)",
						"ingredients": [
							{
								"id": 11080,
								"name": "beet",
								"localizedName": "beet",
								"image": "beets.jpg"
							}
						],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						]
					},
					{
						"number": 3,
						"step": "Quarter the fennel and red onion lengthwise, and cut the kabocha into 1/2 inch wedges.",
						"ingredients": [
							{
								"id": 10011282,
								"name": "red onion",
								"localizedName": "red onion",
								"image": "red-onion.png"
							},
							{
								"id": 10311643,
								"name": "kabocha squash",
								"localizedName": "kabocha squash",
								"image": "kabocha.jpg"
							},
							{
								"id": 11957,
								"name": "fennel",
								"localizedName": "fennel",
								"image": "fennel.png"
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Toss all the vegetables in a bowl and drizzle enough olive oil to sufficiently coat. Then, add a big splash of balsamic vinegar (approx. 1/4 cup), a couple hearty pinches of Kosher salt, a few good turns of fresh ground black pepper, and a small sprig of fresh rosemary.",
						"ingredients": [
							{
								"id": 1002030,
								"name": "ground black pepper",
								"localizedName": "ground black pepper",
								"image": "pepper.jpg"
							},
							{
								"id": 2069,
								"name": "balsamic vinegar",
								"localizedName": "balsamic vinegar",
								"image": "balsamic-vinegar.jpg"
							},
							{
								"id": 2063,
								"name": "fresh rosemary",
								"localizedName": "fresh rosemary",
								"image": "rosemary.jpg"
							},
							{
								"id": 1082047,
								"name": "kosher salt",
								"localizedName": "kosher salt",
								"image": "salt.jpg"
							},
							{
								"id": 11583,
								"name": "vegetable",
								"localizedName": "vegetable",
								"image": "mixed-vegetables.png"
							},
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 5,
						"step": "Let roast another 30-40 minutes, turning every so often to get an even roast.",
						"ingredients": [],
						"equipment": [],
						"length": {
							"number": 40,
							"unit": "minutes"
						}
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/balsamic-roasted-vegetables-633942"
	},
	{
		"vegetarian": true,
		"vegan": false,
		"glutenFree": false,
		"dairyFree": false,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 8,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 6,
		"healthScore": 74,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 82.62,
		"id": 632347,
		"title": "Ancient Grains Bread",
		"readyInMinutes": 45,
		"servings": 14,
		"sourceUrl": "https://www.foodista.com/recipe/Y3ZZC68V/ancient-grains-bread",
		"image": "https://spoonacular.com/recipeImages/632347-312x231.jpg",
		"imageType": "jpg",
		"summary": "The recipe Ancient Grains Bread can be made <b>in roughly 45 minutes</b>. This lacto ovo vegetarian recipe serves 14 and costs <b>83 cents per serving</b>. This bread has <b>287 calories</b>, <b>13g of protein</b>, and <b>3g of fat</b> per serving. This recipe from Foodista requires yeast, honey, vital wheat gluten, and skim milk powder. 6 people have made this recipe and would make it again. Overall, this recipe earns a <b>spectacular spoonacular score of 83%</b>. <a href=\"https://spoonacular.com/recipes/ancient-grains-bread-1351165\">Ancient Grains Bread</a>, <a href=\"https://spoonacular.com/recipes/bread-baking-ancient-grains-141201\">Bread Baking: Ancient Grains</a>, and <a href=\"https://spoonacular.com/recipes/simple-tomato-salad-with-fresh-bread-crumbs-udis-ancient-grains-612489\">Simple Tomato Salad With Fresh Bread Crumbs | Udi’s Ancient Grains</a> are very similar to this recipe.",
		"cuisines": [],
		"dishTypes": [
			"bread"
		],
		"diets": [
			"lacto ovo vegetarian"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "In a large bowl or stand mixer, whisk together yeast, flours, rye flakes, flaxseed, amaranth, quinoa, soy flour, wheat gluten, skim milk powder and salt.",
						"ingredients": [
							{
								"id": 1154,
								"name": "nonfat dry milk powder",
								"localizedName": "nonfat dry milk powder",
								"image": "milk-powdered.jpg"
							},
							{
								"id": 93654,
								"name": "seitan",
								"localizedName": "seitan",
								"image": "seitan.png"
							},
							{
								"id": 16115,
								"name": "soy flour",
								"localizedName": "soy flour",
								"image": "chickpea-flour-or-another-gluten-free-flour.jpg"
							},
							{
								"id": 20001,
								"name": "amaranth",
								"localizedName": "amaranth",
								"image": "amaranth.jpg"
							},
							{
								"id": 10012220,
								"name": "flaxseed",
								"localizedName": "flaxseed",
								"image": "flax-seeds.png"
							},
							{
								"id": 20035,
								"name": "quinoa",
								"localizedName": "quinoa",
								"image": "uncooked-quinoa.png"
							},
							{
								"id": 18375,
								"name": "yeast",
								"localizedName": "yeast",
								"image": "yeast-granules.jpg"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							},
							{
								"id": 0,
								"name": "rye",
								"localizedName": "rye",
								"image": ""
							}
						],
						"equipment": [
							{
								"id": 404665,
								"name": "stand mixer",
								"localizedName": "stand mixer",
								"image": "stand-mixer.jpg"
							},
							{
								"id": 404661,
								"name": "whisk",
								"localizedName": "whisk",
								"image": "whisk.png"
							},
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "Stir in warm water and honey, mixing thoroughly to form a cohesive, fairly firm (but workable) dough.",
						"ingredients": [
							{
								"id": 0,
								"name": "dough",
								"localizedName": "dough",
								"image": "pizza-dough"
							},
							{
								"id": 19296,
								"name": "honey",
								"localizedName": "honey",
								"image": "honey.png"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": []
					},
					{
						"number": 3,
						"step": "Turn out onto a floured board or knead with the dough hook for 12 minutes, until very elastic and smooth.",
						"ingredients": [
							{
								"id": 0,
								"name": "dough",
								"localizedName": "dough",
								"image": "pizza-dough"
							}
						],
						"equipment": [],
						"length": {
							"number": 12,
							"unit": "minutes"
						}
					},
					{
						"number": 4,
						"step": "Place into a bowl, cover and allow to rest 30 minutes.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						],
						"length": {
							"number": 30,
							"unit": "minutes"
						}
					},
					{
						"number": 5,
						"step": "Roll rested dough into a log shape and tuck into a greased loaf pan.",
						"ingredients": [
							{
								"id": 0,
								"name": "dough",
								"localizedName": "dough",
								"image": "pizza-dough"
							},
							{
								"id": 0,
								"name": "roll",
								"localizedName": "roll",
								"image": "dinner-yeast-rolls.jpg"
							}
						],
						"equipment": [
							{
								"id": 404715,
								"name": "loaf pan",
								"localizedName": "loaf pan",
								"image": "loaf-pan.png"
							}
						]
					},
					{
						"number": 6,
						"step": "Cover with a clean towel and allow to rise 50-60 minutes.",
						"ingredients": [],
						"equipment": [],
						"length": {
							"number": 60,
							"unit": "minutes"
						}
					},
					{
						"number": 7,
						"step": "Preheat oven to 350F.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg",
								"temperature": {
									"number": 350,
									"unit": "Fahrenheit"
								}
							}
						]
					},
					{
						"number": 8,
						"step": "Slash the top of the loaf 2-3 times with a sharp knife or lame.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404745,
								"name": "knife",
								"localizedName": "knife",
								"image": "chefs-knife.jpg"
							}
						]
					},
					{
						"number": 9,
						"step": "Bake 40 minutes. Turn out of pan immediately and cool on a rack before slicing",
						"ingredients": [],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							},
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						],
						"length": {
							"number": 40,
							"unit": "minutes"
						}
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/ancient-grains-bread-632347"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 6,
		"gaps": "no",
		"preparationMinutes": 5,
		"cookingMinutes": 20,
		"aggregateLikes": 6,
		"healthScore": 83,
		"creditsText": "pinkwhen.com",
		"sourceName": "pinkwhen.com",
		"pricePerServing": 271.9,
		"id": 975070,
		"title": "Instant Pot Chicken Taco Soup",
		"readyInMinutes": 25,
		"servings": 4,
		"sourceUrl": "http://www.pinkwhen.com/instant-pot-chicken-taco-soup/",
		"image": "https://spoonacular.com/recipeImages/975070-312x231.jpg",
		"imageType": "jpg",
		"summary": "Instant Pot Chicken Taco Soup could be just the <b>gluten free and dairy free</b> recipe you've been looking for. This recipe serves 4. One serving contains <b>346 calories</b>, <b>25g of protein</b>, and <b>8g of fat</b>. For <b>$2.72 per serving</b>, this recipe <b>covers 40%</b> of your daily requirements of vitamins and minerals. It works best as a main course, and is done in around <b>25 minutes</b>. If you have chilis, water, corn, and a few other ingredients on hand, you can make it. 6 people have tried and liked this recipe. It is perfect for <b>Autumn</b>. This recipe is typical of Mexican cuisine. It is brought to you by Pink When. With a spoonacular <b>score of 95%</b>, this dish is tremendous. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/instant-pot-chicken-taco-soup-1336121\">Instant Pot Chicken Taco Soup</a>, <a href=\"https://spoonacular.com/recipes/instant-pot-chicken-taco-soup-1337813\">Instant Pot Chicken Taco Soup</a>, and <a href=\"https://spoonacular.com/recipes/instant-pot-chicken-taco-soup-944691\">Instant Pot Chicken Taco Soup</a>.",
		"cuisines": [
			"Mexican"
		],
		"dishTypes": [
			"soup",
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free"
		],
		"occasions": [
			"fall",
			"winter"
		],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Press the",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 2,
						"step": "Saute button on the Instant Pot and heat oil.",
						"ingredients": [
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": [
							{
								"id": 414093,
								"name": "instant pot",
								"localizedName": "instant pot",
								"image": ""
							}
						]
					},
					{
						"number": 3,
						"step": "Add onion and bell pepper and saute until translucent.",
						"ingredients": [
							{
								"id": 10211821,
								"name": "bell pepper",
								"localizedName": "bell pepper",
								"image": "bell-pepper-orange.png"
							},
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Add tomatoes including juice and add water. Make sure to scrape all of the bits from the sides and bottom of the Instant Pot as you are stirring.",
						"ingredients": [
							{
								"id": 11529,
								"name": "tomato",
								"localizedName": "tomato",
								"image": "tomato.png"
							},
							{
								"id": 1019016,
								"name": "juice",
								"localizedName": "juice",
								"image": "apple-juice.jpg"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": [
							{
								"id": 414093,
								"name": "instant pot",
								"localizedName": "instant pot",
								"image": ""
							}
						]
					},
					{
						"number": 5,
						"step": "Add chicken, chili powder, corn, black beans, green onions, green chilis, and  cup of cilantro. Lock lid. Press the manual or pressure cook button and set time for 15 minutes. When time is up, do a quick release until the valve drops and then unlock the lid. Shred the chicken using two forks and then let the soup simmer for 5 minutes.",
						"ingredients": [
							{
								"id": 2009,
								"name": "chili powder",
								"localizedName": "chili powder",
								"image": "chili-powder.jpg"
							},
							{
								"id": 31015,
								"name": "green chili pepper",
								"localizedName": "green chili pepper",
								"image": "chili-peppers-green.jpg"
							},
							{
								"id": 11291,
								"name": "green onions",
								"localizedName": "green onions",
								"image": "spring-onions.jpg"
							},
							{
								"id": 16015,
								"name": "black beans",
								"localizedName": "black beans",
								"image": "black-beans.jpg"
							},
							{
								"id": 11165,
								"name": "cilantro",
								"localizedName": "cilantro",
								"image": "cilantro.png"
							},
							{
								"id": 5006,
								"name": "whole chicken",
								"localizedName": "whole chicken",
								"image": "whole-chicken.jpg"
							},
							{
								"id": 11168,
								"name": "corn",
								"localizedName": "corn",
								"image": "corn.png"
							},
							{
								"id": 0,
								"name": "soup",
								"localizedName": "soup",
								"image": ""
							}
						],
						"equipment": [],
						"length": {
							"number": 20,
							"unit": "minutes"
						}
					},
					{
						"number": 6,
						"step": "Serve the soup into bowls and then top with your favorite toppings such as sour cream, cheese, avocado, etc.",
						"ingredients": [
							{
								"id": 1056,
								"name": "sour cream",
								"localizedName": "sour cream",
								"image": "sour-cream.jpg"
							},
							{
								"id": 9037,
								"name": "avocado",
								"localizedName": "avocado",
								"image": "avocado.jpg"
							},
							{
								"id": 1041009,
								"name": "cheese",
								"localizedName": "cheese",
								"image": "cheddar-cheese.png"
							},
							{
								"id": 0,
								"name": "soup",
								"localizedName": "soup",
								"image": ""
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/instant-pot-chicken-taco-soup-975070"
	},
	{
		"vegetarian": true,
		"vegan": true,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 7,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 2,
		"healthScore": 100,
		"creditsText": "foodista.com",
		"sourceName": "foodista.com",
		"pricePerServing": 88.42,
		"id": 649886,
		"title": "Lemony Greek Lentil Soup",
		"readyInMinutes": 45,
		"servings": 6,
		"sourceUrl": "https://www.foodista.com/recipe/KV6GLYDK/lemony-greek-lentil-soup",
		"image": "https://spoonacular.com/recipeImages/649886-312x231.jpg",
		"imageType": "jpg",
		"summary": "Lemony Greek Lentil Soup is a Mediterranean main course. One serving contains <b>368 calories</b>, <b>23g of protein</b>, and <b>4g of fat</b>. For <b>88 cents per serving</b>, this recipe <b>covers 36%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. It is perfect for <b>Autumn</b>. 2 people were impressed by this recipe. A mixture of brown lentils, , pepper, and a handful of other ingredients are all it takes to make this recipe so flavorful. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is spectacular. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/lemony-greek-lentil-soup-1218953\">Lemony Greek Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/lemony-lentil-soup-1335677\">Lemony Lentil Soup</a>, and <a href=\"https://spoonacular.com/recipes/lemony-lentil-soup-961948\">Lemony Lentil Soup</a>.",
		"cuisines": [
			"Mediterranean",
			"European",
			"Greek"
		],
		"dishTypes": [
			"soup",
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"lacto ovo vegetarian",
			"vegan"
		],
		"occasions": [
			"fall",
			"winter"
		],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Put the lentils, water, carrot and 1 teaspoon dried thyme into an 8-quart stockpot, cover and set over medium heat.",
						"ingredients": [
							{
								"id": 2042,
								"name": "dried thyme",
								"localizedName": "dried thyme",
								"image": "thyme.jpg"
							},
							{
								"id": 10316069,
								"name": "lentils",
								"localizedName": "lentils",
								"image": "lentils-brown.jpg"
							},
							{
								"id": 11124,
								"name": "carrot",
								"localizedName": "carrot",
								"image": "sliced-carrot.png"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": [
							{
								"id": 404752,
								"name": "pot",
								"localizedName": "pot",
								"image": "stock-pot.jpg"
							}
						]
					},
					{
						"number": 2,
						"step": "After 15 minutes, lower the heat somewhat and gently bring the water to a simmer, which should take another half an hour or so.",
						"ingredients": [
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": [],
						"length": {
							"number": 15,
							"unit": "minutes"
						}
					},
					{
						"number": 3,
						"step": "Once the lentils have reached the boiling point, turn off the burner and let them sit for 1 hour.",
						"ingredients": [
							{
								"id": 10316069,
								"name": "lentils",
								"localizedName": "lentils",
								"image": "lentils-brown.jpg"
							}
						],
						"equipment": [],
						"length": {
							"number": 60,
							"unit": "minutes"
						}
					},
					{
						"number": 4,
						"step": "After the hour, bring the soup back to a simmer and add the lemon juice, dry basil, fresh thyme, oregano, pepper and salt and simmer for 1 hour.",
						"ingredients": [
							{
								"id": 1012049,
								"name": "fresh thyme",
								"localizedName": "fresh thyme",
								"image": "thyme.jpg"
							},
							{
								"id": 9152,
								"name": "lemon juice",
								"localizedName": "lemon juice",
								"image": "lemon-juice.jpg"
							},
							{
								"id": 2027,
								"name": "oregano",
								"localizedName": "oregano",
								"image": "oregano.jpg"
							},
							{
								"id": 1002030,
								"name": "pepper",
								"localizedName": "pepper",
								"image": "pepper.jpg"
							},
							{
								"id": 2044,
								"name": "basil",
								"localizedName": "basil",
								"image": "basil.jpg"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							},
							{
								"id": 0,
								"name": "soup",
								"localizedName": "soup",
								"image": ""
							}
						],
						"equipment": [],
						"length": {
							"number": 60,
							"unit": "minutes"
						}
					},
					{
						"number": 5,
						"step": "Now, slowly saut the onion and garlic in the olive oil until the onion is tender.",
						"ingredients": [
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							},
							{
								"id": 11215,
								"name": "garlic",
								"localizedName": "garlic",
								"image": "garlic.png"
							},
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							}
						],
						"equipment": []
					},
					{
						"number": 6,
						"step": "Coarsely chop the tomatoes (I do this with kitchen scissors right in the can), and add them and the onion mixture to the soup. Adjust the salt to taste.",
						"ingredients": [
							{
								"id": 11529,
								"name": "tomato",
								"localizedName": "tomato",
								"image": "tomato.png"
							},
							{
								"id": 11282,
								"name": "onion",
								"localizedName": "onion",
								"image": "brown-onion.png"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							},
							{
								"id": 0,
								"name": "soup",
								"localizedName": "soup",
								"image": ""
							}
						],
						"equipment": [
							{
								"id": 404673,
								"name": "kitchen scissors",
								"localizedName": "kitchen scissors",
								"image": "kitchen-scissors.jpg"
							}
						]
					},
					{
						"number": 7,
						"step": "Bring everything back to the boiling point and simmer for another hour.  After this point, you can turn your burner to its lowest setting, and this soup will happily sit steaming with its lid cocked for several hours until you are ready to enjoy it.",
						"ingredients": [
							{
								"id": 0,
								"name": "soup",
								"localizedName": "soup",
								"image": ""
							}
						],
						"equipment": []
					},
					{
						"number": 8,
						"step": "Add more water if necessary.",
						"ingredients": [
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": []
					},
					{
						"number": 9,
						"step": "Serve with crusty bread and a soft cheese like St. Andre or Cambazola",
						"ingredients": [
							{
								"id": 10018029,
								"name": "crusty bread",
								"localizedName": "crusty bread",
								"image": "crusty-bread.jpg"
							},
							{
								"id": 1001017,
								"name": "soft cheese",
								"localizedName": "soft cheese",
								"image": "cream-cheese.jpg"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/lemony-greek-lentil-soup-649886"
	},
	{
		"vegetarian": false,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 15,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 8,
		"healthScore": 100,
		"creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
		"license": "CC BY 3.0",
		"sourceName": "Foodista",
		"pricePerServing": 1157.26,
		"id": 659927,
		"title": "Shrimp and Avocado Salad",
		"readyInMinutes": 45,
		"servings": 4,
		"sourceUrl": "https://www.foodista.com/recipe/ZTNWCWQP/shrimp-and-avocado-salad",
		"image": "https://spoonacular.com/recipeImages/659927-312x231.jpg",
		"imageType": "jpg",
		"summary": "Need a <b>gluten free, dairy free, and pescatarian main course</b>? Shrimp and Avocado Salad could be an awesome recipe to try. This recipe serves 4 and costs $11.57 per serving. One portion of this dish contains about <b>34g of protein</b>, <b>37g of fat</b>, and a total of <b>639 calories</b>. From preparation to the plate, this recipe takes about <b>45 minutes</b>. This recipe is liked by 8 foodies and cooks. This recipe from Foodista requires the shrimp, salt and pepper, garlic cloves, and the dressing. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is outstanding. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/shrimp-corn-california-avocado-pasta-salad-a-ca-avocado-trip-584558\">Shrimp, Corn & Californian Avocado Pasta Salad & a CAn Avocado Trip</a>, <a href=\"https://spoonacular.com/recipes/shrimp-corn-california-avocado-pasta-salad-a-ca-avocado-trip-1236119\">Shrimp, Corn & Californian Avocado Pasta Salad & a CAn Avocado Trip</a>, and <a href=\"https://spoonacular.com/recipes/shrimp-corn-california-avocado-pasta-salad-a-ca-avocado-trip-1219445\">Shrimp, Corn & Californian Avocado Pasta Salad & a CAn Avocado Trip</a>.",
		"cuisines": [],
		"dishTypes": [
			"side dish",
			"lunch",
			"main course",
			"salad",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"pescatarian"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Firstly, to cook the shrimp, heat the olive oil in a pan and once hot add the shrimp crushed garlic and chili flakes. It is important to get the oil nice and hot (not smoking, just before that point) your shrimp should sizzle when added to the pan. Check the back of the shrimp and when you see the colour change about half way up, turn them over. Do the same on the other side. This should only take a minute to two minutes maximum on both sides  otherwise you will get a rubbery result if you leave it too long. Squeeze over the lime juice  this too should bubble and reduce.",
						"ingredients": [
							{
								"id": 1032009,
								"name": "red pepper flakes",
								"localizedName": "red pepper flakes",
								"image": "red-pepper-flakes.jpg"
							},
							{
								"id": 9160,
								"name": "lime juice",
								"localizedName": "lime juice",
								"image": "lime-juice.png"
							},
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							},
							{
								"id": 11215,
								"name": "garlic",
								"localizedName": "garlic",
								"image": "garlic.png"
							},
							{
								"id": 15270,
								"name": "shrimp",
								"localizedName": "shrimp",
								"image": "shrimp.png"
							},
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						],
						"length": {
							"number": 2,
							"unit": "minutes"
						}
					},
					{
						"number": 2,
						"step": "Add a little salt and pepper, stir through, remove from the heat and set aside.",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 3,
						"step": "Mix the dressing ingredients together, check for flavour, adjust if need be and set aside.",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Place all the salad ingredients in a bowl except the avocado and the salt and pepper. Prepare the avocado as you are about to serve otherwise it will turn brown. Once it is covered in the lime dressing, this will slow down the oxidization process and it wont go brown so easily.",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 9037,
								"name": "avocado",
								"localizedName": "avocado",
								"image": "avocado.jpg"
							},
							{
								"id": 9159,
								"name": "lime",
								"localizedName": "lime",
								"image": "lime.jpg"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 5,
						"step": "When you are ready to serve mix  of the avocado through the salad and add the dressing. Toss everything together. Taste to see if you need any salt and pepper.",
						"ingredients": [
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 9037,
								"name": "avocado",
								"localizedName": "avocado",
								"image": "avocado.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 6,
						"step": "Place your shrimp on top of the salad with the rest of the avocado and sprinkle/pour any residue from the pan over your salad in which you cooked the shrimp. This is great flavour, so you dont want to lose it.",
						"ingredients": [
							{
								"id": 9037,
								"name": "avocado",
								"localizedName": "avocado",
								"image": "avocado.jpg"
							},
							{
								"id": 15270,
								"name": "shrimp",
								"localizedName": "shrimp",
								"image": "shrimp.png"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							}
						]
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/shrimp-and-avocado-salad-659927"
	},
	{
		"vegetarian": true,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": true,
		"veryHealthy": false,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 14,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 295,
		"healthScore": 35,
		"creditsText": "Lisa's Vegetarian Kitchen",
		"license": "CC BY 2.5 CA",
		"sourceName": "Food and Spice",
		"pricePerServing": 318.98,
		"id": 716217,
		"title": "Vietnamese Pancakes with Vegetables, Herbs and a Fragrant Dipping Sauce (Bánh Xèo)",
		"readyInMinutes": 45,
		"servings": 6,
		"sourceUrl": "http://foodandspice.blogspot.com/2012/05/vietnamese-pancakes-with-vegetables.html",
		"image": "https://spoonacular.com/recipeImages/716217-312x231.jpg",
		"imageType": "jpg",
		"summary": "Vietnamese Pancakes with Vegetables, Herbs and a Fragrant Dipping Sauce (Bánh Xèo) requires roughly <b>45 minutes</b> from start to finish. One serving contains <b>390 calories</b>, <b>8g of protein</b>, and <b>22g of fat</b>. This gluten free, dairy free, and lacto ovo vegetarian recipe serves 6 and costs <b>$3.19 per serving</b>. Head to the store and pick up chilies, rice vinegar, enoki mushrooms, and a few other things to make it today. 295 people found this recipe to be yummy and satisfying. It works well as a side dish. Plenty of people really liked this Vietnamese dish. It is brought to you by foodandspice.blogspot.com. Overall, this recipe earns an <b>awesome spoonacular score of 94%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/bnh-xo-vietnamese-happy-pancakes-891106\">Bánh xèo (Vietnamese Happy Pancakes)</a>, <a href=\"https://spoonacular.com/recipes/banh-xeo-bnh-xo-savory-vietnamese-crpe-1000958\">Banh Xeo (Bánh Xèo) – Savory Vietnamese Crêpe</a>, and <a href=\"https://spoonacular.com/recipes/banh-xeo-vietnamese-crepes-1661759\">Banh Xeo (Vietnamese Crepes)</a>.",
		"cuisines": [
			"Vietnamese",
			"Asian"
		],
		"dishTypes": [
			"side dish"
		],
		"diets": [
			"gluten free",
			"dairy free",
			"lacto ovo vegetarian"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Begin by preparing the pancake batter.",
						"ingredients": [],
						"equipment": []
					},
					{
						"number": 2,
						"step": "Whisk together the rice flour, egg, sea salt, turmeric, cayenne and green chili. Gradually whisk in the coconut milk. The mixture should be a smooth, semi-thick batter that is of pouring consistency.",
						"ingredients": [
							{
								"id": 12118,
								"name": "coconut milk",
								"localizedName": "coconut milk",
								"image": "coconut-milk.png"
							},
							{
								"id": 31015,
								"name": "green chili pepper",
								"localizedName": "green chili pepper",
								"image": "chili-peppers-green.jpg"
							},
							{
								"id": 20061,
								"name": "rice flour",
								"localizedName": "rice flour",
								"image": "white-powder.jpg"
							},
							{
								"id": 1012047,
								"name": "sea salt",
								"localizedName": "sea salt",
								"image": "salt.jpg"
							},
							{
								"id": 2043,
								"name": "turmeric",
								"localizedName": "turmeric",
								"image": "turmeric.jpg"
							},
							{
								"id": 2031,
								"name": "ground cayenne pepper",
								"localizedName": "ground cayenne pepper",
								"image": "chili-powder.jpg"
							},
							{
								"id": 1123,
								"name": "egg",
								"localizedName": "egg",
								"image": "egg.png"
							}
						],
						"equipment": [
							{
								"id": 404661,
								"name": "whisk",
								"localizedName": "whisk",
								"image": "whisk.png"
							}
						]
					},
					{
						"number": 3,
						"step": "Add a little water if necessary. Cover and set aside while you prepare the rest of the food.Now prepare the sauce.",
						"ingredients": [
							{
								"id": 0,
								"name": "sauce",
								"localizedName": "sauce",
								"image": ""
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Whisk together all of the ingredients and set aside.For the filling, combine the carrot, radish, green onions, green chilies and snow peas.",
						"ingredients": [
							{
								"id": 31015,
								"name": "green chili pepper",
								"localizedName": "green chili pepper",
								"image": "chili-peppers-green.jpg"
							},
							{
								"id": 11291,
								"name": "green onions",
								"localizedName": "green onions",
								"image": "spring-onions.jpg"
							},
							{
								"id": 11300,
								"name": "snow peas",
								"localizedName": "snow peas",
								"image": "snow-peas.jpg"
							},
							{
								"id": 11124,
								"name": "carrot",
								"localizedName": "carrot",
								"image": "sliced-carrot.png"
							},
							{
								"id": 11429,
								"name": "radish",
								"localizedName": "radish",
								"image": "radishes.jpg"
							}
						],
						"equipment": [
							{
								"id": 404661,
								"name": "whisk",
								"localizedName": "whisk",
								"image": "whisk.png"
							}
						]
					},
					{
						"number": 5,
						"step": "Put the herbs in another bowl and have your sprouts ready along with the mushrooms.",
						"ingredients": [
							{
								"id": 11260,
								"name": "mushrooms",
								"localizedName": "mushrooms",
								"image": "mushrooms.png"
							},
							{
								"id": 11001,
								"name": "sprouts",
								"localizedName": "sprouts",
								"image": "alfalfa-sprouts.png"
							},
							{
								"id": 1002044,
								"name": "herbs",
								"localizedName": "herbs",
								"image": "mixed-fresh-herbs.jpg"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 6,
						"step": "Heat a teaspoon of oil over medium heat in a non-stick skillet. When hot, ladle 1/2 cup of batter into the pan and spread with the bottom of the ladle until you have a roughly 6 to 8 inch pancake.  Fry for 6 to 8 minutes or until you have small holes forming and the bottom is crispy brown, then flip and fry for another few minutes on the other side.",
						"ingredients": [
							{
								"id": 0,
								"name": "spread",
								"localizedName": "spread",
								"image": ""
							},
							{
								"id": 4582,
								"name": "cooking oil",
								"localizedName": "cooking oil",
								"image": "vegetable-oil.jpg"
							}
						],
						"equipment": [
							{
								"id": 404645,
								"name": "frying pan",
								"localizedName": "frying pan",
								"image": "pan.png"
							},
							{
								"id": 404630,
								"name": "ladle",
								"localizedName": "ladle",
								"image": "ladle.jpg"
							}
						],
						"length": {
							"number": 6,
							"unit": "minutes"
						}
					},
					{
						"number": 7,
						"step": "Transfer to a plate and keep warm in a 150 oven while you finish the rest of the pancakes  you should finish with 4 to 6 pancakes.To serve, scatter a portion of the vegetables, herbs and mushrooms over one half of the pancake.",
						"ingredients": [
							{
								"id": 11583,
								"name": "vegetable",
								"localizedName": "vegetable",
								"image": "mixed-vegetables.png"
							},
							{
								"id": 11260,
								"name": "mushrooms",
								"localizedName": "mushrooms",
								"image": "mushrooms.png"
							},
							{
								"id": 1002044,
								"name": "herbs",
								"localizedName": "herbs",
								"image": "mixed-fresh-herbs.jpg"
							}
						],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg"
							}
						]
					},
					{
						"number": 8,
						"step": "Sprinkle some sauce over top and fold the pancake.",
						"ingredients": [
							{
								"id": 0,
								"name": "sauce",
								"localizedName": "sauce",
								"image": ""
							}
						],
						"equipment": []
					},
					{
						"number": 9,
						"step": "Drizzle with more sauce and there you go.",
						"ingredients": [
							{
								"id": 0,
								"name": "sauce",
								"localizedName": "sauce",
								"image": ""
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/vietnamese-pancakes-with-vegetables-herbs-and-a-fragrant-dipping-sauce-bnh-xo-716217"
	},
	{
		"vegetarian": true,
		"vegan": false,
		"glutenFree": true,
		"dairyFree": false,
		"veryHealthy": true,
		"cheap": false,
		"veryPopular": false,
		"sustainable": false,
		"lowFodmap": false,
		"weightWatcherSmartPoints": 12,
		"gaps": "no",
		"preparationMinutes": -1,
		"cookingMinutes": -1,
		"aggregateLikes": 3,
		"healthScore": 97,
		"creditsText": "foodista.com",
		"sourceName": "foodista.com",
		"pricePerServing": 251.24,
		"id": 636608,
		"title": "Butternut Squash, Arugula and Goat Cheese Quinoa",
		"readyInMinutes": 45,
		"servings": 4,
		"sourceUrl": "https://www.foodista.com/recipe/CB6CM523/butternut-squash-arugula-and-goat-cheese-quinoa",
		"image": "https://spoonacular.com/recipeImages/636608-312x231.jpg",
		"imageType": "jpg",
		"summary": "Butternut Squash, Arugulan and Goat Cheese Quinoan is a main course that serves 4. For <b>$2.51 per serving</b>, this recipe <b>covers 31%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains approximately <b>16g of protein</b>, <b>24g of fat</b>, and a total of <b>492 calories</b>. 3 people were impressed by this recipe. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Head to the store and pick up olive oil, salt and pepper, quinoa, and a few other things to make it today. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free and lacto ovo vegetarian</b> diet. Overall, this recipe earns an <b>outstanding spoonacular score of 95%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/butternut-squash-arugula-and-goat-cheese-quinoa-1636213\">Butternut Squash, Arugulan and Goat Cheese Quinoa</a>, <a href=\"https://spoonacular.com/recipes/5-ingredient-butternut-squash-arugula-and-goat-cheese-pasta-948248\">5-Ingredient Butternut Squash, Arugulan and Goat Cheese Pasta</a>, and <a href=\"https://spoonacular.com/recipes/butternut-squash-arugula-and-roasted-garlic-goat-cheese-tartine-616411\">Butternut Squash, Arugula, and Roasted Garlic Goat Cheese Tartine</a>.",
		"cuisines": [],
		"dishTypes": [
			"lunch",
			"main course",
			"main dish",
			"dinner"
		],
		"diets": [
			"gluten free",
			"lacto ovo vegetarian"
		],
		"occasions": [],
		"analyzedInstructions": [
			{
				"name": "",
				"steps": [
					{
						"number": 1,
						"step": "Preheat oven to 450F.",
						"ingredients": [],
						"equipment": [
							{
								"id": 404784,
								"name": "oven",
								"localizedName": "oven",
								"image": "oven.jpg",
								"temperature": {
									"number": 450,
									"unit": "Fahrenheit"
								}
							}
						]
					},
					{
						"number": 2,
						"step": "Spray a cookie sheet with nonstick spray.",
						"ingredients": [
							{
								"id": 10118192,
								"name": "cookies",
								"localizedName": "cookies",
								"image": "shortbread-cookies.jpg"
							}
						],
						"equipment": [
							{
								"id": 404727,
								"name": "baking sheet",
								"localizedName": "baking sheet",
								"image": "baking-sheet.jpg"
							}
						]
					},
					{
						"number": 3,
						"step": "Toss butternut squash with about 1 tbsp olive oil (possibly less, just enough to coat) and season with salt and pepper.",
						"ingredients": [
							{
								"id": 11485,
								"name": "butternut squash",
								"localizedName": "butternut squash",
								"image": "butternut-squash.jpg"
							},
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							}
						],
						"equipment": []
					},
					{
						"number": 4,
						"step": "Spread in one layer on cookie sheet.",
						"ingredients": [
							{
								"id": 10118192,
								"name": "cookies",
								"localizedName": "cookies",
								"image": "shortbread-cookies.jpg"
							},
							{
								"id": 0,
								"name": "spread",
								"localizedName": "spread",
								"image": ""
							}
						],
						"equipment": [
							{
								"id": 404727,
								"name": "baking sheet",
								"localizedName": "baking sheet",
								"image": "baking-sheet.jpg"
							}
						]
					},
					{
						"number": 5,
						"step": "Roast butternut squash for 20-25 minutes, until fork tender.",
						"ingredients": [
							{
								"id": 11485,
								"name": "butternut squash",
								"localizedName": "butternut squash",
								"image": "butternut-squash.jpg"
							}
						],
						"equipment": [],
						"length": {
							"number": 25,
							"unit": "minutes"
						}
					},
					{
						"number": 6,
						"step": "While squash is roasting, combine quinoa and water or stock in a saucepan. If using water, season with 1/2 tsp salt. Bring to a boil, lower heat, cover and simmer for 10-15 minutes, until liquid is absorbed.",
						"ingredients": [
							{
								"id": 20035,
								"name": "quinoa",
								"localizedName": "quinoa",
								"image": "uncooked-quinoa.png"
							},
							{
								"id": 10011485,
								"name": "squash",
								"localizedName": "squash",
								"image": "butternut-squash.jpg"
							},
							{
								"id": 1006615,
								"name": "stock",
								"localizedName": "stock",
								"image": "chicken-broth.png"
							},
							{
								"id": 14412,
								"name": "water",
								"localizedName": "water",
								"image": "water.png"
							},
							{
								"id": 2047,
								"name": "salt",
								"localizedName": "salt",
								"image": "salt.jpg"
							}
						],
						"equipment": [
							{
								"id": 404669,
								"name": "sauce pan",
								"localizedName": "sauce pan",
								"image": "sauce-pan.jpg"
							}
						],
						"length": {
							"number": 15,
							"unit": "minutes"
						}
					},
					{
						"number": 7,
						"step": "In a large bowl, combine cooked quinoa, butternut squash, arugula, 1 tbsp olive oil, balsamic vinegar and crumbled goat cheese. Season with a pinch more salt and pepper. Toss well to mix everything and wilt arugula.",
						"ingredients": [
							{
								"id": 2069,
								"name": "balsamic vinegar",
								"localizedName": "balsamic vinegar",
								"image": "balsamic-vinegar.jpg"
							},
							{
								"id": 11485,
								"name": "butternut squash",
								"localizedName": "butternut squash",
								"image": "butternut-squash.jpg"
							},
							{
								"id": 1102047,
								"name": "salt and pepper",
								"localizedName": "salt and pepper",
								"image": "salt-and-pepper.jpg"
							},
							{
								"id": 20137,
								"name": "cooked quinoa",
								"localizedName": "cooked quinoa",
								"image": "cooked-quinoa.png"
							},
							{
								"id": 1159,
								"name": "goat cheese",
								"localizedName": "goat cheese",
								"image": "goat-cheese.jpg"
							},
							{
								"id": 4053,
								"name": "olive oil",
								"localizedName": "olive oil",
								"image": "olive-oil.jpg"
							},
							{
								"id": 11959,
								"name": "arugula",
								"localizedName": "arugula",
								"image": "arugula-or-rocket-salad.jpg"
							}
						],
						"equipment": [
							{
								"id": 404783,
								"name": "bowl",
								"localizedName": "bowl",
								"image": "bowl.jpg"
							}
						]
					},
					{
						"number": 8,
						"step": "Serve immediately, garnished with toasted nuts, if desired.",
						"ingredients": [
							{
								"id": 12135,
								"name": "nuts",
								"localizedName": "nuts",
								"image": "nuts-mixed.jpg"
							}
						],
						"equipment": []
					}
				]
			}
		],
		"spoonacularSourceUrl": "https://spoonacular.com/butternut-squash-arugula-and-goat-cheese-quinoa-636608"
	}
 */],
    details: [/* {
        "id": 2,
        "title": "Anchovies Appetizer With Breadcrumbs & Scallions",
        "image": "https://spoonacular.com/recipeImages/2-556x370.jpg",
        "summary": "Anchovies Appetizer With Breadcrumbs & Scallions is a <b>dairy free and pescatarian</b> hor d'oeuvre. This recipe makes 8 servings with <b>57 calories</b>, <b>5g of protein</b>, and <b>2g of fat</b> each. For <b>82 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up scallions, day-old bread, garlic clove, and a few other things to make it today. From preparation to the plate, this recipe takes about <b>15 minutes</b>. It is brought to you by spoonacular user <a href=\"/profile/bla5@bla.com\">bla5@bla.com</a>. Try <a href=\"https://spoonacular.com/recipes/spaghetti-with-anchovies-and-breadcrumbs-68\">Spaghetti with Anchovies and Breadcrumbs</a>, <a href=\"https://spoonacular.com/recipes/spaghetti-with-anchovies-and-breadcrumbs-1228193\">Spaghetti with Anchovies and Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/broccoli-rabe-with-anchovies-and-breadcrumbs-84627\">Broccoli Rabe with Anchovies and Breadcrumbs</a> for similar recipes.",
        "healthScore": 4,
        "instructions": "<ol><li>Preheat oven to 400 F.</li><li>Remove crusts from bread and cut into bite-sized croutons.</li><li>Rub garlic in bottom of a small oven-safe skillet, add 2 teaspoons olive oil.</li><li> Rub croutons in oil until they absorb it all. </li><li>Bake for 7-10 minutes or until deep golden brown. </li><li>Remove and set aside.</li><li>Slice anchovies in thirds. </li><li>Toss with scallions. </li><li>Divide into small cups, ramekins or bowls between 4 and 8 ounces and nestle in the croutons.</li></ol>",
        "diets": [
            "dairy free",
            "pescatarian"
        ]
    } */],
    recipesLoaded: false,
    diets: [/* [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan",
        "paleolithic",
        "primal",
        "whole 30"
    ] */],
    dietsLoaded: false,
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPE_BY_NAME:
            return { ...state, recipes: action.payload };

        case GET_RECIPE_BY_ID:
            return { ...state, details: [action.payload] }

        case GET_RECIPE_ALL:
            return { ...state, recipes: action.payload, recipesLoaded: true };

        case POST_CREATE_RECIPE:
            return { ...state, recipes: [...state.recipes, action.payload] };

            case GET_DIETS_ALL:
                return { ...state, diets: action.payload, dietsLoaded: true };


        default:
            return { ...state };
    }
};

export default rootReducer;