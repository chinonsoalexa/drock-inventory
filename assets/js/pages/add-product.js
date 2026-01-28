const menuCategories = [
  // RAW FOOD
  { name: "Grains & Cereals", img: "assets/images/inventory/grains.png" },
  { name: "Tubers & Roots", img: "assets/images/inventory/tubers.png" },
  { name: "Oils & Fats", img: "assets/images/inventory/oils.png" },
  { name: "Spices & Seasonings", img: "assets/images/inventory/spices.png" },
  { name: "Vegetables (Fresh)", img: "assets/images/inventory/vegetables.png" },
  { name: "Fruits", img: "assets/images/inventory/fruits.png" },

  // PROTEINS
  { name: "Red Meat", img: "assets/images/inventory/meat.png" },
  { name: "Poultry", img: "assets/images/inventory/poultry.png" },
  { name: "Fish & Seafood", img: "assets/images/inventory/seafood.png" },

  // SEMI-PROCESSED
  { name: "Soup Bases & Sauces", img: "assets/images/inventory/soups.png" },

  // DRINKS
  { name: "Soft Drinks", img: "assets/images/inventory/softdrinks.png" },
  { name: "Water", img: "assets/images/inventory/water.png" },
  { name: "Beer & Stout", img: "assets/images/inventory/beer.png" },
  { name: "Wine", img: "assets/images/inventory/wine.png" },
  { name: "Spirits & Liquor", img: "assets/images/inventory/spirits.png" },

  // PACKAGED
  { name: "Noodles & Pasta", img: "assets/images/inventory/noodles.png" },
  { name: "Canned & Packaged Foods", img: "assets/images/inventory/canned.png" },

  // SUPPLIES
  { name: "Packaging Materials", img: "assets/images/inventory/packaging.png" },
  { name: "Cleaning Supplies", img: "assets/images/inventory/cleaning.png" },
  { name: "Cooking Gas & Fuel", img: "assets/images/inventory/gas.png" }
];

const products = [
  {
    "id": 1,
    "name": "Gizzard Sauce",
    "price": 5500,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_1.jpg"
  },
  {
    "id": 2,
    "name": "BBQ Chicken",
    "price": 5000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_2.jpg"
  },
  {
    "id": 4,
    "name": "Steamed veggies",
    "price": 4000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_4.jpg"
  },
  {
    "id": 5,
    "name": "Tomato Sauce",
    "price": 4000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_5.jpg"
  },
  {
    "id": 6,
    "name": "Spicy Chicken (Fried)",
    "price": 4000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_6.jpg"
  },
  {
    "id": 7,
    "name": "Stew (Alone)",
    "price": 3500,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_7.jpg"
  },
  {
    "id": 8,
    "name": "Veggies Sauce",
    "price": 3500,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_8.jpg"
  },
  {
    "id": 9,
    "name": "Chicken Nuggets with Sauce",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_9.jpg"
  },
  {
    "id": 10,
    "name": "Chicken Nuggets",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_10.jpg"
  },
  {
    "id": 11,
    "name": "Scrambled Eggs",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Egg Dishes",
    "availability": true,

    "image": "products/E3_11.jpg"
  },
  {
    "id": 12,
    "name": "Sauteed potatoes with steamed veggie",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_12.jpg"
  },
  {
    "id": 13,
    "name": "Popcorn Chicken",
    "price": 5500,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_13.jpg"
  },
  {
    "id": 14,
    "name": "Indomie - Plain",
    "price": 5000,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_14.jpg"
  },
  {
    "id": 15,
    "name": "Chips (French fries)",
    "price": 4500,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_15.jpg"
  },
  {
    "id": 16,
    "name": "Pancakes",
    "price": 4000,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_16.jpg"
  },
  {
    "id": 17,
    "name": "Gizzard Dish",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_17.jpg"
  },
  {
    "id": 18,
    "name": "Boiled or Fried Plantain",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_18.jpg"
  },
  {
    "id": 19,
    "name": "Boiled Yam",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_19.jpg"
  },
  {
    "id": 20,
    "name": "Moi Moi",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_20.jpg"
  },
  {
    "id": 21,
    "name": "Tea, Coffee, Hot Chocolate/Cream",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_21.jpg"
  },
  {
    "id": 22,
    "name": "Caesar Salad",
    "price": 8000,
    "currency": "NGN",
    
    "category": "Coffee",
    "availability": true,

    "image": "products/E3_22.jpg"
  },
  {
    "id": 23,
    "name": "Yam Chips",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_23.jpg"
  },
  {
    "id": 24,
    "name": "Waffles",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_24.jpg"
  },
  {
    "id": 25,
    "name": "Boiled Potatoes",
    "price": 2500,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_25.jpg"
  },
  {
    "id": 26,
    "name": "Sliced bread or Dinner roll",
    "price": 1500,
    "currency": "NGN",
    
    "category": "Breakfast",
    "availability": true,

    "image": "products/E3_26.jpg"
  },
  {
    "id": 27,
    "name": "Croaker fish pepper Soup",
    "price": 1200,
    "currency": "NGN",
    
    "category": "Pepper Soup",
    "availability": true,

    "image": "products/E3_27.jpg"
  },
  {
    "id": 28,
    "name": "Fresh Fish Pepper Soup",
    "price": 8500,
    "currency": "NGN",
    
    "category": "Pepper Soup",
    "availability": true,

    "image": "products/E3_28.jpg"
  },
  {
    "id": 29,
    "name": "Turkey pepper soup",
    "price": 8500,
    "currency": "NGN",
    
    "category": "Pepper Soup",
    "availability": true,

    "image": "products/E3_29.jpg"
  },
  {
    "id": 30,
    "name": "Dry fish pepper soup",
    "price": 7500,
    "currency": "NGN",
    
    "category": "Pepper Soup",
    "availability": true,

    "image": "products/E3_30.jpg"
  },
  {
    "id": 31,
    "name": "Assorted meat pepper soup",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Pepper Soup",
    "availability": true,

    "image": "products/E3_31.jpg"
  },
  {
    "id": 32,
    "name": "Cow leg pepper soup",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Pepper Soup",
    "availability": true,

    "image": "products/E3_32.jpg"
  },
  {
    "id": 33,
    "name": "Hawaiian Salad",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Salad",
    "availability": true,

    "image": "products/E3_33.jpg"
  },
  {
    "id": 34,
    "name": "Cow Tail Pepper Soup",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Pepper Soup",
    "availability": true,

    "image": "products/E3_34.jpg"
  },
  {
    "id": 35,
    "name": "Chicken pepper soup",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Pepper Soup",
    "availability": true,

    "image": "products/E3_35.jpg"
  },
  {
    "id": 36,
    "name": "Stock Fish pepper soup",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Pepper Soup",
    "availability": true,

    "image": "products/E3_36.jpg"
  },
  {
    "id": 37,
    "name": "Snail pepper soup",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Pepper Soup",
    "availability": true,

    "image": "products/E3_37.jpg"
  },
  {
    "id": 38,
    "name": "Goat Meat Pepper Soup",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Pepper Soup",
    "availability": true,

    "image": "products/E3_38.jpg"
  },
  {
    "id": 39,
    "name": "Dried Fish",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Pepper Soup",
    "availability": true,

    "image": "products/E3_39.jpg"
  },
  {
    "id": 40,
    "name": "Croaker Fish",
    "price": 20000,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_40.jpg"
  },
  {
    "id": 41,
    "name": "Croaker Fish",
    "price": 9000,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_41.jpg"
  },
  {
    "id": 42,
    "name": "Prawns",
    "price": 9000,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_42.jpg"
  },
  {
    "id": 43,
    "name": "Shredded Beef",
    "price": 9000,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_43.jpg"
  },
  {
    "id": 44,
    "name": "Chicken Salad",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Salad",
    "availability": true,

    "image": "products/E3_44.jpg"
  },
  {
    "id": 45,
    "name": "Fresh Fish",
    "price": 8000,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_45.jpg"
  },
  {
    "id": 46,
    "name": "Turkey",
    "price": 8000,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_46.jpg"
  },
  {
    "id": 47,
    "name": "Cow tail",
    "price": 7500,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_47.jpg"
  },
  {
    "id": 48,
    "name": "Cow Leg",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_48.jpg"
  },
  {
    "id": 49,
    "name": "Dry Fish",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_49.jpg"
  },
  {
    "id": 50,
    "name": "Goat Meat",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_50.jpg"
  },
  {
    "id": 51,
    "name": "Popcorn Chicken",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_51.jpg"
  },
  {
    "id": 52,
    "name": "Curried Chicken",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_52.jpg"
  },
  {
    "id": 53,
    "name": "Assorted Meat",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_53.jpg"
  },
  {
    "id": 54,
    "name": "Stock Fish",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_54.jpg"
  },
  {
    "id": 55,
    "name": "E3 Special Salad",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Salad",
    "availability": true,

    "image": "products/E3_55.jpg"
  },
  {
    "id": 56,
    "name": "Snail",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_56.jpg"
  },
  {
    "id": 57,
    "name": "Chicken",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_57.jpg"
  },
  {
    "id": 58,
    "name": "Shrimps",
    "price": 5000,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_58.jpg"
  },
  {
    "id": 59,
    "name": "Beef",
    "price": 5000,
    "currency": "NGN",
    
    "category": "Protein",
    "availability": true,

    "image": "products/E3_59.jpg"
  },
  {
    "id": 60,
    "name": "ICED CAFFE MOCHA",
    "price": 4000,
    "currency": "NGN",
    
    "category": "Soup",
    "availability": true,

    "image": "products/E3_60.jpg"
  },
  {
    "id": 61,
    "name": "Fisherman Soup",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Soup",
    "availability": true,

    "image": "products/E3_61.jpg"
  },
  {
    "id": 62,
    "name": "Bitter Leaf Soup",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Soup",
    "availability": true,

    "image": "products/E3_62.jpg"
  },
  {
    "id": 63,
    "name": "Banga Soup (Abak)",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Soup",
    "availability": true,

    "image": "products/E3_63.jpg"
  },
  {
    "id": 64,
    "name": "Oha Soup",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Soup",
    "availability": true,

    "image": "products/E3_64.jpg"
  },
  {
    "id": 65,
    "name": "White soup",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Soup",
    "availability": true,

    "image": "products/E3_65.jpg"
  },
  {
    "id": 66,
    "name": "Greek Salad",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Salad",
    "availability": true,

    "image": "products/E3_66.jpg"
  },
  {
    "id": 67,
    "name": "Egusi Soup",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Soup",
    "availability": true,

    "image": "products/E3_67.jpg"
  },
  {
    "id": 68,
    "name": "Okro Soup",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Soup",
    "availability": true,

    "image": "products/E3_68.jpg"
  },
  {
    "id": 69,
    "name": "Vegetable Soup",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Soup",
    "availability": true,

    "image": "products/E3_69.jpg"
  },
  {
    "id": 70,
    "name": "Afang Soup",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Soup",
    "availability": true,

    "image": "products/E3_70.jpg"
  },
  {
    "id": 71,
    "name": "Ogbono Soup",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Soup",
    "availability": true,

    "image": "products/E3_71.jpg"
  },
  {
    "id": 72,
    "name": "Special Pounded Yam",
    "price": 4000,
    "currency": "NGN",
    
    "category": "Swallow",
    "availability": true,

    "image": "products/E3_72.jpg"
  },
  {
    "id": 73,
    "name": "Special Plantain Flour",
    "price": 4000,
    "currency": "NGN",
    
    "category": "Swallow",
    "availability": true,

    "image": "products/E3_73.jpg"
  },
  {
    "id": 74,
    "name": "Plantain Flour",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Swallow",
    "availability": true,

    "image": "products/E3_74.jpg"
  },
  {
    "id": 75,
    "name": "Wheat",
    "price": 2500,
    "currency": "NGN",
    
    "category": "Swallow",
    "availability": true,

    "image": "products/E3_75.jpg"
  },
  {
    "id": 76,
    "name": "Special Fufu",
    "price": 2500,
    "currency": "NGN",
    
    "category": "Swallow",
    "availability": true,

    "image": "products/E3_76.jpg"
  },
  {
    "id": 77,
    "name": "Tuna Salad",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Salad",
    "availability": true,

    "image": "products/E3_77.jpg"
  },
  {
    "id": 78,
    "name": "Oatmeal",
    "price": 2500,
    "currency": "NGN",
    
    "category": "Swallow",
    "availability": true,

    "image": "products/E3_78.jpg"
  },
  {
    "id": 79,
    "name": "Special Garri",
    "price": 2000,
    "currency": "NGN",
    
    "category": "Swallow",
    "availability": true,

    "image": "products/E3_79.jpg"
  },
  {
    "id": 80,
    "name": "Garri",
    "price": 2000,
    "currency": "NGN",
    
    "category": "Swallow",
    "availability": true,

    "image": "products/E3_80.jpg"
  },
  {
    "id": 81,
    "name": "Pina Colada",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Cocktails",
    "availability": true,

    "image": "products/E3_81.jpg"
  },
  {
    "id": 82,
    "name": "Long Island Ice Tea",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Cocktails",
    "availability": true,

    "image": "products/E3_82.jpg"
  },
  {
    "id": 83,
    "name": "Sex On The Beach",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Cocktails",
    "availability": true,

    "image": "products/E3_83.jpg"
  },
  {
    "id": 84,
    "name": "Chapman with Vodka",
    "price": 4000,
    "currency": "NGN",
    
    "category": "Cocktails",
    "availability": true,

    "image": "products/E3_84.jpg"
  },
  {
    "id": 85,
    "name": "Heineken",
    "price": 2300,
    "currency": "NGN",
    
    "category": "Beer",
    "availability": true,

    "image": "products/E3_85.jpg"
  },
  {
    "id": 86,
    "name": "Smooth Stout",
    "price": 2200,
    "currency": "NGN",
    
    "category": "Beer",
    "availability": true,

    "image": "products/E3_86.jpg"
  },
  {
    "id": 87,
    "name": "Budweiser",
    "price": 2200,
    "currency": "NGN",
    
    "category": "Beer",
    "availability": true,

    "image": "products/E3_87.jpg"
  },
  {
    "id": 88,
    "name": "Russian Salad",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Salad",
    "availability": true,

    "image": "products/E3_88.jpg"
  },
  {
    "id": 89,
    "name": "Hero",
    "price": 2200,
    "currency": "NGN",
    
    "category": "Beer",
    "availability": true,

    "image": "products/E3_89.jpg"
  },
  {
    "id": 90,
    "name": "Desperados",
    "price": 2200,
    "currency": "NGN",
    
    "category": "Beer",
    "availability": true,

    "image": "products/E3_90.jpg"
  },
  {
    "id": 91,
    "name": "Legend stout",
    "price": 2000,
    "currency": "NGN",
    
    "category": "Beer",
    "availability": true,

    "image": "products/E3_91.jpg"
  },
  {
    "id": 92,
    "name": "Tiger",
    "price": 2000,
    "currency": "NGN",
    
    "category": "Beer",
    "availability": true,

    "image": "products/E3_92.jpg"
  },
  {
    "id": 93,
    "name": "Stout (Medium)",
    "price": 2000,
    "currency": "NGN",
    
    "category": "Beer",
    "availability": true,

    "image": "products/E3_93.jpg"
  },
  {
    "id": 94,
    "name": "Gulder",
    "price": 2000,
    "currency": "NGN",
    
    "category": "Beer",
    "availability": true,

    "image": "products/E3_94.jpg"
  },
  {
    "id": 95,
    "name": "Star",
    "price": 2000,
    "currency": "NGN",
    
    "category": "Beer",
    "availability": true,

    "image": "products/E3_95.jpg"
  },
  {
    "id": 96,
    "name": "Star Radler",
    "price": 2000,
    "currency": "NGN",
    
    "category": "Beer",
    "availability": true,

    "image": "products/E3_96.jpg"
  },
  {
    "id": 97,
    "name": "Smirn Off",
    "price": 2000,
    "currency": "NGN",
    
    "category": "Beer",
    "availability": true,

    "image": "products/E3_97.jpg"
  },
  {
    "id": 98,
    "name": '"33"',
    "price": 2000,
    "currency": "NGN",
    
    "category": "Beer",
    "availability": true,

    "image": "products/E3_98.jpg"
  },
  {
    "id": 99,
    "name": "Avocado Salad",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Salad",
    "availability": true,

    "image": "products/E3_99.jpg"
  },
  {
    "id": 100,
    "name": "Life",
    "price": 2000,
    "currency": "NGN",
    
    "category": "Beer",
    "availability": true,

    "image": "products/E3_100.jpg"
  },
  {
    "id": 101,
    "name": "Tots (Vodka, Tequila, Jameson, Hennessy, Whiskey, Glass of Wine)",
    "price": 4000,
    "currency": "NGN",
    
    "category": "Tots",
    "availability": true,

    "image": "products/E3_101.jpg"
  },
  {
    "id": 102,
    "name": "Dom Perignon",
    "price": 1000000,
    "currency": "NGN",
    
    "category": "Champagne",
    "availability": true,

    "image": "products/E3_102.jpg"
  },
  {
    "id": 103,
    "name": "Moet Rose",
    "price": 180000,
    "currency": "NGN",
    
    "category": "Champagne",
    "availability": true,

    "image": "products/E3_103.jpg"
  },
  {
    "id": 104,
    "name": "Moet Brut",
    "price": 150000,
    "currency": "NGN",
    
    "category": "Champagne",
    "availability": true,

    "image": "products/E3_104.jpg"
  },
  {
    "id": 105,
    "name": "Veuve Clicquot",
    "price": 95000,
    "currency": "NGN",
    
    "category": "Champagne",
    "availability": true,

    "image": "products/E3_105.jpg"
  },
  {
    "id": 106,
    "name": "Andre",
    "price": 50000,
    "currency": "NGN",
    
    "category": "Champagne",
    "availability": true,

    "image": "products/E3_106.jpg"
  },
  {
    "id": 107,
    "name": "Blue Nun 24k",
    "price": 40000,
    "currency": "NGN",
    
    "category": "Champagne",
    "availability": true,

    "image": "products/E3_107.jpg"
  },
  {
    "id": 108,
    "name": "Absolut Vodka",
    "price": 100000,
    "currency": "NGN",
    
    "category": "Vodka",
    "availability": true,

    "image": "products/E3_108.jpg"
  },
  {
    "id": 109,
    "name": "Magic Moments",
    "price": 60000,
    "currency": "NGN",
    
    "category": "Vodka",
    "availability": true,

    "image": "products/E3_109.jpg"
  },
  {
    "id": 110,
    "name": "Vegetable Salad",
    "price": 5000,
    "currency": "NGN",
    
    "category": "Salad",
    "availability": true,

    "image": "products/E3_110.jpg"
  },
  {
    "id": 111,
    "name": "Cornflakes| Oat Meal | Custard | with Milk",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Cereals",
    "availability": true,

    "image": "products/E3_111.jpg"
  },
  {
    "id": 112,
    "name": "Smirnoff Red",
    "price": 40000,
    "currency": "NGN",
    
    "category": "Vodka",
    "availability": true,

    "image": "products/E3_112.jpg"
  },
  {
    "id": 113,
    "name": "Flirt vodka",
    "price": 35000,
    "currency": "NGN",
    
    "category": "Vodka",
    "availability": true,

    "image": "products/E3_113.jpg"
  },
  {
    "id": 114,
    "name": "Gordon’s",
    "price": 30000,
    "currency": "NGN",
    
    "category": "Vodka",
    "availability": true,

    "image": "products/E3_114.jpg"
  },
  {
    "id": 115,
    "name": "Blue Label",
    "price": 800000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_115.jpg"
  },
  {
    "id": 116,
    "name": "Glenfiddich Grand CRU",
    "price": 800000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_116.jpg"
  },
  {
    "id": 117,
    "name": "Glenfiddich 21 years",
    "price": 400000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_117.jpg"
  },
  {
    "id": 118,
    "name": "Glenfiddich 18 years",
    "price": 300000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_118.jpg"
  },
  {
    "id": 119,
    "name": "Singleton 18 years",
    "price": 250000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_119.jpg"
  },
  {
    "id": 120,
    "name": "Bruichladdich",
    "price": 200000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_120.jpg"
  },
  {
    "id": 121,
    "name": "Glenfiddich 15 years",
    "price": 200000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_121.jpg"
  },
  {
    "id": 122,
    "name": "Coleslaw",
    "price": 4000,
    "currency": "NGN",
    
    "category": "Salad",
    "availability": true,

    "image": "products/E3_122.jpg"
  },
  {
    "id": 123,
    "name": "Singleton 15 years",
    "price": 180000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_123.jpg"
  },
  {
    "id": 124,
    "name": "Gold Label",
    "price": 150000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_124.jpg"
  },
  {
    "id": 125,
    "name": "Glenfiddich 12 years",
    "price": 150000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_125.jpg"
  },
  {
    "id": 126,
    "name": "Singleton 12 years",
    "price": 130000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_126.jpg"
  },
  {
    "id": 127,
    "name": "Jameson Black Barrel",
    "price": 130000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_127.jpg"
  },
  {
    "id": 128,
    "name": "Black Label",
    "price": 100000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_128.jpg"
  },
  {
    "id": 129,
    "name": "Jameson Irish",
    "price": 80000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_129.jpg"
  },
  {
    "id": 130,
    "name": "Red Label",
    "price": 60000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_130.jpg"
  },
  {
    "id": 131,
    "name": "Ballantines",
    "price": 40000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_131.jpg"
  },
  {
    "id": 132,
    "name": "William Lawson",
    "price": 40000,
    "currency": "NGN",
    
    "category": "Whisky",
    "availability": true,

    "image": "products/E3_132.jpg"
  },
  {
    "id": 133,
    "name": "Seafood Rice",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_133.jpg"
  },
  {
    "id": 134,
    "name": "Hennessy VSOP",
    "price": 200000,
    "currency": "NGN",
    
    "category": "Brandy",
    "availability": true,

    "image": "products/E3_134.jpg"
  },
  {
    "id": 135,
    "name": "Hennessy V.S",
    "price": 150000,
    "currency": "NGN",
    
    "category": "Brandy",
    "availability": true,

    "image": "products/E3_135.jpg"
  },
  {
    "id": 136,
    "name": "Remy Martins (Cognac)",
    "price": 120000,
    "currency": "NGN",
    
    "category": "Brandy",
    "availability": true,

    "image": "products/E3_136.jpg"
  },
  {
    "id": 137,
    "name": "Martell (Doc)",
    "price": 45000,
    "currency": "NGN",
    
    "category": "Brandy",
    "availability": true,

    "image": "products/E3_137.jpg"
  },
  {
    "id": 138,
    "name": "Baileys",
    "price": 25000,
    "currency": "NGN",
    
    "category": "Liqueur",
    "availability": true,

    "image": "products/E3_138.jpg"
  },
  {
    "id": 139,
    "name": "Ivory Cream",
    "price": 25000,
    "currency": "NGN",
    
    "category": "Liqueur",
    "availability": true,

    "image": "products/E3_139.jpg"
  },
  {
    "id": 140,
    "name": "Dirty bottle",
    "price": 70000,
    "currency": "NGN",
    
    "category": "Coffee",
    "availability": true,

    "image": "products/E3_140.jpg"
  },
  {
    "id": 141,
    "name": "Thomas Barton",
    "price": 70000,
    "currency": "NGN",
    
    "category": "Wine",
    "availability": true,

    "image": "products/E3_141.jpg"
  },
  {
    "id": 142,
    "name": "Escudo Rojo",
    "price": 40000,
    "currency": "NGN",
    
    "category": "Wine",
    "availability": true,

    "image": "products/E3_142.jpg"
  },
  {
    "id": 143,
    "name": "B&G Reserve",
    "price": 38000,
    "currency": "NGN",
    
    "category": "Wine",
    "availability": true,

    "image": "products/E3_143.jpg"
  },
  {
    "id": 144,
    "name": "Chopped Chicken Fried Rice",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_144.jpg"
  },
  {
    "id": 145,
    "name": "Casillero Del Diablo",
    "price": 32000,
    "currency": "NGN",
    
    "category": "Wine",
    "availability": true,

    "image": "products/E3_145.jpg"
  },
  {
    "id": 146,
    "name": "Carlo Rossi",
    "price": 23000,
    "currency": "NGN",
    
    "category": "Wine",
    "availability": true,

    "image": "products/E3_146.jpg"
  },
  {
    "id": 147,
    "name": "Carlum",
    "price": 23000,
    "currency": "NGN",
    
    "category": "Wine",
    "availability": true,

    "image": "products/E3_147.jpg"
  },
  {
    "id": 148,
    "name": "Martinellis",
    "price": 23000,
    "currency": "NGN",
    
    "category": "Wine",
    "availability": true,

    "image": "products/E3_148.jpg"
  },
  {
    "id": 149,
    "name": "Four Cousins",
    "price": 21000,
    "currency": "NGN",
    
    "category": "Wine",
    "availability": true,

    "image": "products/E3_149.jpg"
  },
  {
    "id": 150,
    "name": "La Merit",
    "price": 19000,
    "currency": "NGN",
    
    "category": "Wine",
    "availability": true,

    "image": "products/E3_150.jpg"
  },
  {
    "id": 151,
    "name": "Chamdor",
    "price": 17000,
    "currency": "NGN",
    
    "category": "Wine",
    "availability": true,

    "image": "products/E3_151.jpg"
  },
  {
    "id": 152,
    "name": "4th Street",
    "price": 17000,
    "currency": "NGN",
    
    "category": "Wine",
    "availability": true,

    "image": "products/E3_152.jpg"
  },
  {
    "id": 153,
    "name": "Toma",
    "price": 16000,
    "currency": "NGN",
    
    "category": "Wine",
    "availability": true,

    "image": "products/E3_153.jpg"
  },
  {
    "id": 154,
    "name": "Veleta",
    "price": 15000,
    "currency": "NGN",
    
    "category": "Wine",
    "availability": true,

    "image": "products/E3_154.jpg"
  },
  {
    "id": 155,
    "name": "Asun Rice",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_155.jpg"
  },
  {
    "id": 156,
    "name": "Eva",
    "price": 10000,
    "currency": "NGN",
    
    "category": "Wine",
    "availability": true,

    "image": "products/E3_156.jpg"
  },
  {
    "id": 157,
    "name": "Yoghurt",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Drinks",
    "availability": true,

    "image": "products/E3_157.jpg"
  },
  {
    "id": 158,
    "name": "Exotic Juice",
    "price": 5000,
    "currency": "NGN",
    
    "category": "Drinks",
    "availability": true,

    "image": "products/E3_158.jpg"
  },
  {
    "id": 159,
    "name": "5 Alive",
    "price": 4000,
    "currency": "NGN",
    
    "category": "Drinks",
    "availability": true,

    "image": "products/E3_159.jpg"
  },
  {
    "id": 160,
    "name": "Pack of Juice",
    "price": 5000,
    "currency": "NGN",
    
    "category": "Drinks",
    "availability": true,

    "image": "products/E3_160.jpg"
  },
  {
    "id": 161,
    "name": "Mineral",
    "price": 1200,
    "currency": "NGN",
    
    "category": "Drinks",
    "availability": true,

    "image": "products/E3_161.jpg"
  },
  {
    "id": 162,
    "name": "Malt (can & bottle)",
    "price": 1500,
    "currency": "NGN",
    
    "category": "Drinks",
    "availability": true,

    "image": "products/E3_162.jpg"
  },
  {
    "id": 163,
    "name": "Bottle of Water",
    "price": 800,
    "currency": "NGN",
    
    "category": "Drinks",
    "availability": true,

    "image": "products/E3_163.jpg"
  },
  {
    "id": 165,
    "name": "Oriental Rice (Basmati)",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_165.jpg"
  },
  {
    "id": 166,
    "name": "Rice Pilaf (Basmati)",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_166.jpg"
  },
  {
    "id": 167,
    "name": "E3 Special Fried Rice (Basmati)",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_167.jpg"
  },
  {
    "id": 168,
    "name": "Jambalaya Jollof",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_168.jpg"
  },
  {
    "id": 169,
    "name": "Jambalaya Fried",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_169.jpg"
  },
  {
    "id": 170,
    "name": "Chinese Fried Rice (Basmati)",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_170.jpg"
  },
  {
    "id": 171,
    "name": "Chapman",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Mocktails",
    "availability": true,

    "image": "products/E3_171.jpg"
  },
  {
    "id": 172,
    "name": "Arroz Rojo Rice",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_172.jpg"
  },
  {
    "id": 173,
    "name": "Coconut Rice",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_173.jpg"
  },
  {
    "id": 174,
    "name": "Basmati Fried Rice",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_174.jpg"
  },
  {
    "id": 175,
    "name": "Mixed Beef Fried Rice",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_175.jpg"
  },
  {
    "id": 176,
    "name": "Native Rice",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_176.jpg"
  },
  {
    "id": 177,
    "name": "Ketchup Fried Rice",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_177.jpg"
  },
  {
    "id": 178,
    "name": "Pineapple Fried Rice",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_178.jpg"
  },
  {
    "id": 179,
    "name": "Basmati Egg Rice",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_179.jpg"
  },
  {
    "id": 180,
    "name": "Fried Rice",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_180.jpg"
  },
  {
    "id": 181,
    "name": "Jollof Rice",
    "price": 5500,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_181.jpg"
  },
  {
    "id": 182,
    "name": "WHITE CHOCOLATE MOCHA",
    "price": 3500,
    "currency": "NGN",
    
    "category": "Coffee",
    "availability": true,

    "image": "products/E3_182.jpg"
  },
  {
    "id": 183,
    "name": "White Basmati",
    "price": 5000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_183.jpg"
  },
  {
    "id": 184,
    "name": "Jollof Rice (Basmati)",
    "price": 4500,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_184.jpg"
  },
  {
    "id": 185,
    "name": "White Rice (Alone)",
    "price": 4000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_185.jpg"
  },
  {
    "id": 186,
    "name": "Ofada Rice",
    "price": 4000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_186.jpg"
  },
  {
    "id": 187,
    "name": "White Basmati Rice",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Rice",
    "availability": true,

    "image": "products/E3_187.jpg"
  },
  {
    "id": 188,
    "name": "Spaghetti Fettuccini",
    "price": 8500,
    "currency": "NGN",
    
    "category": "Pasta Dishes",
    "availability": true,

    "image": "products/E3_188.jpg"
  },
  {
    "id": 189,
    "name": "Alfredo Pasta",
    "price": 8500,
    "currency": "NGN",
    
    "category": "Pasta Dishes",
    "availability": true,

    "image": "products/E3_189.jpg"
  },
  {
    "id": 190,
    "name": "Stirred Fried Spaghetti With Chicken",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Pasta Dishes",
    "availability": true,

    "image": "products/E3_190.jpg"
  },
  {
    "id": 191,
    "name": "Singapore Noodles",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Pasta Dishes",
    "availability": true,

    "image": "products/E3_191.jpg"
  },
  {
    "id": 192,
    "name": "Spaghetti Bolognese",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Pasta Dishes",
    "availability": true,

    "image": "products/E3_192.jpg"
  },
  {
    "id": 193,
    "name": "Freshly Squeezed Fruit Juice (Pineapple)",
    "price": 5000,
    "currency": "NGN",
    
    "category": "Continental Fruits",
    "availability": true,

    "image": "products/E3_193.jpg"
  },
  {
    "id": 194,
    "name": "Vegetable Shrimp Noodles",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Pasta Dishes",
    "availability": true,

    "image": "products/E3_194.jpg"
  },
  {
    "id": 195,
    "name": "Jollof Spaghetti (with Veggies)",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Pasta Dishes",
    "availability": true,

    "image": "products/E3_195.jpg"
  },
  {
    "id": 196,
    "name": "Fine Stirred Instant Noodles",
    "price": 4500,
    "currency": "NGN",
    
    "category": "Pasta Dishes",
    "availability": true,

    "image": "products/E3_196.jpg"
  },
  {
    "id": 197,
    "name": "Macaroni",
    "price": 4000,
    "currency": "NGN",
    
    "category": "Pasta Dishes",
    "availability": true,

    "image": "products/E3_197.jpg"
  },
  {
    "id": 198,
    "name": "Pasta Carbonara",
    "price": 4000,
    "currency": "NGN",
    
    "category": "Pasta Dishes",
    "availability": true,

    "image": "products/E3_198.jpg"
  },
  {
    "id": 199,
    "name": "Boiled Spaghetti",
    "price": 3500,
    "currency": "NGN",
    
    "category": "Pasta Dishes",
    "availability": true,

    "image": "products/E3_199.jpg"
  },
  {
    "id": 200,
    "name": "Grilled Croaker Fish",
    "price": 15000,
    "currency": "NGN",
    
    "category": "Delicacies",
    "availability": true,

    "image": "products/E3_200.jpg"
  },
  {
    "id": 201,
    "name": "Grilled Jumbo Prawns",
    "price": 13000,
    "currency": "NGN",
    
    "category": "Delicacies",
    "availability": true,

    "image": "products/E3_201.jpg"
  },
  {
    "id": 202,
    "name": "Jamaican Jerk Wings",
    "price": 8000,
    "currency": "NGN",
    
    "category": "Delicacies",
    "availability": true,

    "image": "products/E3_202.jpg"
  },
  {
    "id": 203,
    "name": "Buffalo Wings",
    "price": 8000,
    "currency": "NGN",
    
    "category": "Delicacies",
    "availability": true,

    "image": "products/E3_203.jpg"
  },
  {
    "id": 204,
    "name": "Sliced Seasoned Fruits",
    "price": 4000,
    "currency": "NGN",
    
    "category": "Continental Fruits",
    "availability": true,

    "image": "products/E3_204.jpg"
  },
  {
    "id": 205,
    "name": "Chicken Strip",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Delicacies",
    "availability": true,

    "image": "products/E3_205.jpg"
  },
  {
    "id": 206,
    "name": "Grilled Crocker Fish",
    "price": 7000,
    "currency": "NGN",
    
    "category": "Delicacies",
    "availability": true,

    "image": "products/E3_206.jpg"
  },
  {
    "id": 207,
    "name": "Peppered Chicken Wings",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Delicacies",
    "availability": true,

    "image": "products/E3_207.jpg"
  },
  {
    "id": 208,
    "name": "Southern Fried Chicken",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Delicacies",
    "availability": true,

    "image": "products/E3_208.jpg"
  },
  {
    "id": 209,
    "name": "Chicken Nuggets",
    "price": 6000,
    "currency": "NGN",
    
    "category": "Delicacies",
    "availability": true,

    "image": "products/E3_209.jpg"
  },
  {
    "id": 210,
    "name": "Spicy/Grilled Chicken",
    "price": 5500,
    "currency": "NGN",
    
    "category": "Delicacies",
    "availability": true,

    "image": "products/E3_210.jpg"
  },
  {
    "id": 211,
    "name": "Peppered snail",
    "price": 3500,
    "currency": "NGN",
    
    "category": "Delicacies",
    "availability": true,

    "image": "products/E3_211.jpg"
  },
  {
    "id": 212,
    "name": "Prawn Crackers",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Delicacies",
    "availability": true,

    "image": "products/E3_212.jpg"
  },
  {
    "id": 213,
    "name": "Peppered Gizzard",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Delicacies",
    "availability": true,

    "image": "products/E3_213.jpg"
  },
  {
    "id": 214,
    "name": "Isi Ewu",
    "price": 10000,
    "currency": "NGN",
    
    "category": "E3 Special",
    "availability": true,

    "image": "products/E3_214.jpg"
  },
  {
    "id": 215,
    "name": "Freshly Squeezed Fruit Juice",
    "price": 4000,
    "currency": "NGN",
    
    "category": "Continental Fruits",
    "availability": true,

    "image": "products/E3_215.jpg"
  },
  {
    "id": 216,
    "name": "Nkwobi",
    "price": 7000,
    "currency": "NGN",
    
    "category": "E3 Special",
    "availability": true,

    "image": "products/E3_216.jpg"
  },
  {
    "id": 217,
    "name": "Ekpang Nkukwo",
    "price": 7000,
    "currency": "NGN",
    
    "category": "E3 Special",
    "availability": true,

    "image": "products/E3_217.jpg"
  },
  {
    "id": 218,
    "name": "Porriage Yam",
    "price": 6000,
    "currency": "NGN",
    
    "category": "E3 Special",
    "availability": true,

    "image": "products/E3_218.jpg"
  },
  {
    "id": 219,
    "name": "Porridge Plantain",
    "price": 6000,
    "currency": "NGN",
    
    "category": "E3 Special",
    "availability": true,

    "image": "products/E3_219.jpg"
  },
  {
    "id": 220,
    "name": "Ukang Ukom",
    "price": 6000,
    "currency": "NGN",
    
    "category": "E3 Special",
    "availability": true,

    "image": "products/E3_220.jpg"
  },
  {
    "id": 221,
    "name": "Plantain & Cow Leg",
    "price": 3937,
    "currency": "NGN",
    
    "category": "E3 Special",
    "availability": true,

    "image": "products/E3_221.jpg"
  },
  {
    "id": 222,
    "name": "Beans",
    "price": 3000,
    "currency": "NGN",
    
    "category": "E3 Special",
    "availability": true,

    "image": "products/E3_222.jpg"
  },
  {
    "id": 223,
    "name": "Jumbo Prawns (Oriental Sauce)",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Sea Food Dishes",
    "availability": true,

    "image": "products/E3_223.jpg"
  },
  {
    "id": 224,
    "name": "Prawn Sauce",
    "price": 12000,
    "currency": "NGN",
    
    "category": "Sea Food Dishes",
    "availability": true,

    "image": "products/E3_224.jpg"
  },
  {
    "id": 225,
    "name": "Grilled prawns",
    "price": 12000,
    "currency": "NGN",
    
    "category": "Sea Food Dishes",
    "availability": true,

    "image": "products/E3_225.jpg"
  },
  {
    "id": 226,
    "name": "Scrambled eggs (Nigerian)",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Egg Dishes",
    "availability": true,

    "image": "products/E3_226.jpg"
  },
  {
    "id": 227,
    "name": "Ginger Lemon Fish (white sauce)",
    "price": 10000,
    "currency": "NGN",
    
    "category": "Sea Food Dishes",
    "availability": true,

    "image": "products/E3_227.jpg"
  },
  {
    "id": 228,
    "name": "Sauteed Shrimp (Steamed Veggie)",
    "price": 9000,
    "currency": "NGN",
    
    "category": "Sea Food Dishes",
    "availability": true,

    "image": "products/E3_228.jpg"
  },
  {
    "id": 229,
    "name": "Crispy fish fingers",
    "price": 8500,
    "currency": "NGN",
    
    "category": "Sea Food Dishes",
    "availability": true,

    "image": "products/E3_229.jpg"
  },
  {
    "id": 230,
    "name": "Seafood Stew",
    "price": 8000,
    "currency": "NGN",
    
    "category": "Sea Food Dishes",
    "availability": true,

    "image": "products/E3_230.jpg"
  },
  {
    "id": 231,
    "name": "Shrimp Sauce",
    "price": 6500,
    "currency": "NGN",
    
    "category": "Sea Food Dishes",
    "availability": true,

    "image": "products/E3_231.jpg"
  },
  {
    "id": 232,
    "name": "BBQ Fish (Croaker)",
    "price": 5000,
    "currency": "NGN",
    
    "category": "Sea Food Dishes",
    "availability": true,

    "image": "products/E3_232.jpg"
  },
  {
    "id": 233,
    "name": "Chicken Dynamite with Irish Potatoes",
    "price": 10000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_233.jpg"
  },
  {
    "id": 234,
    "name": "Fish Stew",
    "price": 10000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_234.jpg"
  },
  {
    "id": 235,
    "name": "Chicken Stronganoff",
    "price": 8000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_235.jpg"
  },
  {
    "id": 236,
    "name": "Mushroom Sauce",
    "price": 7000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_236.jpg"
  },
  {
    "id": 237,
    "name": "Egg Omelette, Egg Sauce",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Egg Dishes",
    "availability": true,

    "image": "products/E3_237.jpg"
  },
  {
    "id": 238,
    "name": "Chicken Casserole",
    "price": 7000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_238.jpg"
  },
  {
    "id": 239,
    "name": "Sweet and Sour Chicken",
    "price": 7000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_239.jpg"
  },
  {
    "id": 240,
    "name": "Sweet and Sour Chicken",
    "price": 7000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_240.jpg"
  },
  {
    "id": 241,
    "name": "Chicken Soy Sauce",
    "price": 7000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_241.jpg"
  },
  {
    "id": 242,
    "name": "Shredded Beef",
    "price": 7000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_242.jpg"
  },
  {
    "id": 243,
    "name": "Shredded Chicken",
    "price": 7000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_243.jpg"
  },
  {
    "id": 244,
    "name": "Curried Chicken",
    "price": 7000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_244.jpg"
  },
  {
    "id": 245,
    "name": "Ofada Sauce",
    "price": 6500,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_245.jpg"
  },
  {
    "id": 246,
    "name": "Thai Chilli Sauce",
    "price": 6000,
    "currency": "NGN",
    
    "category": "E3 Sauce",
    "availability": true,

    "image": "products/E3_246.jpg"
  },
  {
    "id": 247,
    "name": "Garden Egg Sauce",
    "price": 5500,
    "currency": "NGN",
    
    "category": "Coffee",
    "availability": true,

    "image": "products/E3_247.jpg"
  },
  {
    "id": 248,
    "name": "Fried Egg, Sunny Side Up, Boiled Egg",
    "price": 3000,
    "currency": "NGN",
    
    "category": "Egg Dishes",
    "availability": true,

    "image": "products/E3_248.jpg"
  }
];

let inventoryCategories = [
  "Grains & Cereals",
  "Vegetables",
  "Fruits",
  "Meat",
  "Fish & Seafood",
  "Drinks",
  "Alcoholic Beverages",
  "Spices & Seasonings",
  "Oils & Fats",
  "Packaged Goods"
];

const measurementUnits = [
  "Unit",       // single piece
  "Kg",         // kilogram
  "Gram",       // grams
  "Litre",      // liters
  "Millilitre", // ml
  "Pack",       // generic pack
  "Dozen",      // 12 units
  "Bottle",
  "Can",
  "Cup",
  "Plate",
  "Portion",
  "Tray",
  "Bag",
  "Sachet",
  "Carton",
  "Box",
  "Bundle",
  "Pouch"
];

const inventoryRows = document.getElementById("inventoryRows");

// Add first row on load
addInventoryRow();

function addInventoryRow() {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>
      <input type="text" class="form-control product-name" placeholder="Product name" required>
    </td>

    <td>
      <select class="form-control category" required>
        <option value="">Select Category</option>
        ${inventoryCategories
          .map(cat => `<option value="${cat}">${cat}</option>`)
          .join("")}
      </select>
    </td>

    <td>
      <input type="number" class="form-control price" placeholder="₦" min="0">
    </td>

    <td>
      <input type="number" class="form-control quantity" placeholder="Qty" min="0" required>
    </td>

    <td>
      <select class="form-control measurement" required>
        <option value="">Select Unit</option>
        ${measurementUnits
          .map(unit => `<option value="${unit}">${unit}</option>`)
          .join("")}
      </select>
    </td>

    <td>
      <input type="number" class="form-control low-stock" placeholder="Alert" min="0">
    </td>

    <td class="text-center">
      <button
        type="button"
        class="btn btn-sm btn-soft-danger remove-row"
        onclick="removeRow(this)"
      >
        ✕
      </button>
    </td>
  `;

  inventoryRows.appendChild(tr);
  updateRemoveButtons();
}

function removeRow(btn) {
  const rows = inventoryRows.querySelectorAll("tr");

  if (rows.length <= 1) return; // safety guard

  btn.closest("tr").remove();
  updateRemoveButtons();
}

function updateRemoveButtons() {
  const rows = inventoryRows.querySelectorAll("tr");
  const canRemove = rows.length > 1;

  rows.forEach(row => {
    const btn = row.querySelector(".remove-row");

    btn.disabled = !canRemove;
    btn.style.opacity = canRemove ? "1" : "0.4";
    btn.style.cursor = canRemove ? "pointer" : "not-allowed";
  });
}

const receiptBox = document.getElementById("receiptBox");
const receiptInput = document.getElementById("receiptInput");
const receiptPreview = document.getElementById("receiptPreview");
const placeholder = receiptBox.querySelector(".placeholder-text");

receiptBox.addEventListener("click", () => {
  receiptInput.click();
});

receiptInput.addEventListener("change", () => {
  const file = receiptInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    receiptPreview.src = reader.result;
    receiptPreview.style.display = "block";
    placeholder.style.display = "none";
  };
  reader.readAsDataURL(file);
});

function collectInventoryData() {
  const supplier = document.getElementById("supplierName").value;

  const rows = document.querySelectorAll("#inventoryRows tr");

  const items = [...rows].map(row => ({
    name: row.querySelector(".product-name").value,
    category: row.querySelector(".category").value,
    price: Number(row.querySelector(".price").value || 0),
    quantity_in: Number(row.querySelector(".quantity").value),
    measurement: row.querySelector(".measurement").value,
    lowStock: Number(row.querySelector(".low-stock").value || 0)
  }));

  return {
    supplier,
    items,
    createdAt: new Date().toISOString()
  };
}

function validateInventoryPayload(payload) {
  if (!payload.supplier.trim()) {
    return "Supplier name is required";
  }

  if (!payload.items.length) {
    return "At least one inventory item is required";
  }

  for (let i = 0; i < payload.items.length; i++) {
    const item = payload.items[i];
    const row = i + 1;

    if (!item.name.trim()) {
      return `Row ${row}: Product name is required`;
    }

    if (!item.category) {
      return `Row ${row}: Category is required`;
    }

    if (!item.measurement) {
      return `Row ${row}: Measurement unit is required`;
    }

    if (item.quantity_in <= 0 || isNaN(item.quantity_in)) {
      return `Row ${row}: Quantity must be greater than 0`;
    }

    if (item.price < 0 || isNaN(item.price)) {
      return `Row ${row}: Price must be 0 or greater`;
    }

    if (item.lowStock < 0 || isNaN(item.lowStock)) {
      return `Row ${row}: Low stock must be 0 or greater`;
    }
  }

  return null; // ✅ all good
}

function validateReceiptImage(file) {
  const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
  const maxSize = 3 * 1024 * 1024; // 3MB

  if (!allowedTypes.includes(file.type)) {
    return "Receipt must be PNG or JPG";
  }

  if (file.size > maxSize) {
    return "Receipt image must be less than 3MB";
  }

  return null;
}

const saveBtn = document.getElementById("saveInventory");
const btnText = saveBtn.querySelector(".btn-text");
const btnSpinner = saveBtn.querySelector(".spinner-border");

function setLoading(isLoading) {
  saveBtn.disabled = isLoading;

  if (isLoading) {
    btnText.textContent = "Saving...";
    btnSpinner.classList.remove("d-none");
  } else {
    btnText.textContent = "Save Inventory";
    btnSpinner.classList.add("d-none");
  }
}

saveBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const inventoryPayload = collectInventoryData();

  // 🔍 Validate payload
  const validationError = validateInventoryPayload(inventoryPayload);
  if (validationError) {
    alert(validationError);
    return;
  }

  // 🔍 Validate receipt image
  if (receiptInput.files.length > 0) {
    const imageError = validateReceiptImage(receiptInput.files[0]);
    if (imageError) {
      alert(imageError);
      return;
    }
  }

  const formData = new FormData();
  formData.append("payload", JSON.stringify(inventoryPayload));

  if (receiptInput.files.length > 0) {
    formData.append("images", receiptInput.files[0]);
  }

  setLoading(true); // 🔄 start loader

  try {
    const res = await fetch("https://api.e3restaurant.com/create-inventory", {
      credentials: "include",
      method: "POST",
      body: formData
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Upload failed");

    alert("Inventory saved successfully ✅");
      
    // 1️⃣ Clear supplier name
    const supplierInput = document.getElementById("supplierName");
    if (supplierInput) supplierInput.value = "";

    // 2️⃣ Remove all inventory rows
    inventoryRows.innerHTML = "";

    // 3️⃣ Add one fresh row
    addInventoryRow();

    // 4️⃣ Clear receipt image input + preview
    receiptInput.value = "";
    receiptPreview.src = "";
    receiptPreview.style.display = "none";

    // 5️⃣ Restore placeholder text
    placeholder.style.display = "block";
    
  } catch (err) {
    console.error(err);
    alert(err.message);
  } finally {
    setLoading(false); // ✅ stop loader (always)
  }
});

document.getElementById("cancelInventory").addEventListener("click", () => {
  if (!confirm("Discard inventory changes?")) return;

  // 1️⃣ Clear supplier name
  const supplierInput = document.getElementById("supplierName");
  if (supplierInput) supplierInput.value = "";

  // 2️⃣ Remove all inventory rows
  inventoryRows.innerHTML = "";

  // 3️⃣ Add one fresh row
  addInventoryRow();

  // 4️⃣ Clear receipt image input + preview
  receiptInput.value = "";
  receiptPreview.src = "";
  receiptPreview.style.display = "none";

  // 5️⃣ Restore placeholder text
  placeholder.style.display = "block";
});
