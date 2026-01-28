// Menu data
const menuCategories = [
  { name: "Drinks", img: "assets/images/food-icon/pos1.png" },
  { name: "Wine", img: "assets/images/food-icon/pos2.png" },
  { name: "Liqueur", img: "assets/images/food-icon/pos3.png" },
  { name: "Brandy", img: "assets/images/food-icon/pos4.png" },
  { name: "Whisky", img: "assets/images/food-icon/pos5.png" },
  { name: "Vodka", img: "assets/images/food-icon/pos6.png" },
  { name: "Champagne", img: "assets/images/food-icon/pos7.png" },
  { name: "Tots", img: "assets/images/food-icon/pos8.png" },
  { name: "Beer", img: "assets/images/food-icon/pos9.png" },
  { name: "Cocktails", img: "assets/images/food-icon/pos10.png" },
  { name: "Swallow", img: "assets/images/food-icon/pos11.png" },
  { name: "Soup", img: "assets/images/food-icon/pos12.png" },
  { name: "Protein", img: "assets/images/food-icon/pos13.png" },
  { name: "Pepper Soup", img: "assets/images/food-icon/pos14.png" },
  { name: "Breakfast", img: "assets/images/food-icon/pos15.png" },
  { name: "E3 Source", img: "assets/images/food-icon/pos16.png" },
  { name: "Sea Food Dishes", img: "assets/images/food-icon/pos17.png" },
  { name: "E3 Special", img: "assets/images/food-icon/pos18.png" },
  { name: "Delicacies", img: "assets/images/food-icon/pos19.png" },
  { name: "Pasta Dishes", img: "assets/images/food-icon/pos20.png" },
  { name: "Rice", img: "assets/images/food-icon/pos21.png" },
  { name: "Salad", img: "assets/images/food-icon/pos22.png" },
  { name: "Egg Dishes", img: "assets/images/food-icon/pos23.png" },
  { name: "Continental Fruits", img: "assets/images/food-icon/pos24.png" },
  { name: "Mocktails", img: "assets/images/food-icon/pos25.png" },
  { name: "Cereals", img: "assets/images/food-icon/pos26.png" },
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
]

const CATEGORY_ICON_MAP = {
  // RAW FOOD
  "Grains & Cereals": "ri-seedling-line",
  "Tubers & Roots": "ri-plant-line",
  "Vegetables (Fresh)": "ri-leaf-line",
  "Fruits": "ri-apple-line",
  "Oils & Fats": "ri-oil-line",
  "Spices & Seasonings": "ri-fire-line",

  // PROTEINS
  "Red Meat": "ri-steak-line",
  "Poultry": "ri-chicken-line",
  "Fish & Seafood": "ri-fish-line",

  // SEMI / PROCESSED
  "Soup Bases & Sauces": "ri-bowl-line",
  "Noodles & Pasta": "ri-ramen-line",
  "Canned & Packaged Foods": "ri-archive-line",

  // DRINKS
  "Water": "ri-water-flash-line",
  "Soft Drinks": "ri-cup-line",
  "Juices & Smoothies": "ri-goblet-line",
  "Hot Beverages": "ri-cup-hot-line",
  "Beer & Stout": "ri-beer-line",
  "Wine": "ri-wine-line",
  "Spirits & Liquor": "ri-glass-line",

  // SUPPLIES
  "Packaging Materials": "ri-box-3-line",
  "Cleaning Supplies": "ri-brush-line",
  "Cooking Gas & Fuel": "ri-fire-fill"
};

function getCategoryIcon(category) {
  return CATEGORY_ICON_MAP[category] || "ri-store-2-line";
}

const CATEGORY_COLOR_MAP = {
  "Vegetables (Fresh)": "text-success",
  "Fruits": "text-warning",
  "Red Meat": "text-danger",
  "Fish & Seafood": "text-info",
  "Beer & Stout": "text-warning",
  "Spirits & Liquor": "text-dark",
  "Cleaning Supplies": "text-secondary"
};

let products1 = [];
let currentPage1 = 1;
const pageLimit = 15;

function getCategoryColor(category) {
  return CATEGORY_COLOR_MAP[category] || "text-primary";
}

let currentCategory = "all";
let productsToShow = [];
let batchSize = 21; // 3 rows of 7 items
let lastIndex = 0;
let searchQuery = "";
let retryInterval = null;

// Slider logic
let currentPage = 0;
const pages = document.querySelectorAll(".menu-page");

function updateSlide() {
  track.style.transform = `translateX(-${currentPage * 100}%)`;
}

// Eye click event
document.addEventListener("click", e => {
  const eye = e.target.closest(".menu-eye");
  if (!eye) return;

  const name = eye.dataset.name;
  renderMenu(products, name, true);

  // Example API call
  // fetch(`/api/menu?category=${encodeURIComponent(name)}`)
  //   .then(res => res.json())
  //   .then(data => console.log(data));
});

document.addEventListener("DOMContentLoaded", function() {
    var e = document.querySelectorAll(".plus"),
        n = document.querySelectorAll(".minus");

    function i(e, n) {
        var i = 1 === n ? e.previousElementSibling : e.nextElementSibling,
            t = parseInt(i.value),
            s = parseInt(i.min),
            e = parseInt(i.max);
        s <= (n = t + n) && n <= e && (i.value = n)
    }
    e.forEach(function(e) {
        e.addEventListener("click", function() {
            i(e, 1)
        })
    }), n.forEach(function(e) {
        e.addEventListener("click", function() {
            i(e, -1)
        })
    })
});

const cartContainer = document.getElementById("cartItems");
const totalItemsEl = document.getElementById("totalItems");

const CART_KEY = "e3_cart_inventory";

let cartState = loadCart();

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cartState));
}

async function addToCart(product) {
  // 1️⃣ Update Inventory state
  const existing = cartState.find(i => i.id === product.id);

  if (existing) {
    existing.qty++;
  } else {
    cartState.push({ ...product, qty: 1 });
  }

  // 2️⃣ Save cart
  saveCart();

  // 3️⃣ Update the “Added: X” badge live
  updateAddedQty(product.id);
  updateCartItemPrice(product.id);

  // 4️⃣ Update the cart sidebar UI
  renderCart();

  // 5️⃣ Try server sync
  try {
    await uploadCartItem(product);
    // console.log("Uploaded to server");
  } catch (err) {
    
  }
}

document.addEventListener("click", e => {
  const btn = e.target.closest(".add-to-cart");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const product = products1.find(p => p.ID === id);

  addToCart(product);
});

function renderCart() {
  cartContainer.innerHTML = "";

  if (!cartState.length) {
    cartContainer.innerHTML = `
      <div class="text-center py-5">
        <i class="ri-shopping-cart-line fs-1 text-muted"></i>
        <p class="mt-2 fw-semibold text-muted">Your Inventory is empty</p>
      </div>
    `;
    renderSummary();
    return;
  }

  cartState.forEach(item => {
    const qtyInCart = item.qty || 1; // fallback to 1 if undefined
    const { priceText, quantityText } = formatInventoryDisplay(item);

    cartContainer.innerHTML += `
      <div class="mt-3 border rounded p-2" data-id="${item.ID}">
        <div class="d-flex gap-3 align-items-center">

          <!-- Category Icon -->
          <i class="${getCategoryIcon(item.category)} fs-2 ${getCategoryColor(item.category)}"></i>

          <!-- Item Info -->
          <div>
            <strong>${item.name}</strong>
            <p class="mb-1">${item.category}</p>
          </div>

          <!-- Quantity Controls -->
          <div class="ms-auto input-step d-flex align-items-center">
            <button class="minus btn btn-light" data-id="${item.ID}">-</button>
            <input 
              type="number"
              value="${qtyInCart}" 
              min="1" 
              max="${item.quantity_bal}" 
              class="form-control text-center mx-1 cart-qty-input" 
              data-id="${item.ID}" 
              data-max="${item.quantity_bal}">
            <button class="plus btn btn-light" data-id="${item.ID}">+</button>
          </div>
        </div>

        <!-- Stock / Divider -->
        <hr>
        <div class="d-flex justify-content-between align-items-center">
          <strong class="cart-item-price" data-id="${item.ID}">
            ${quantityText}
          </strong>
          <button class="btn btn-soft-danger remove-item" data-id="${item.ID}">
            <i class="ri-delete-bin-5-line"></i>
          </button>
        </div>

        <!-- Optional: Stock Info -->
        <small class="text-muted d-block mt-1">
          Available: ${item.quantity_bal} ${item.measurement}
        </small>
      </div>
    `;
  });

  renderSummary();

  // 🔹 Enforce max quantity dynamically
  document.querySelectorAll(".cart-qty-input").forEach(input => {
    input.addEventListener("input", e => {
      const max = parseInt(input.dataset.max, 10);
      let val = parseInt(input.value, 10);
      if (isNaN(val) || val < 1) input.value = 1;
      else if (val > max) input.value = max;
    });
  });
}

document.addEventListener("click", e => {
  const id = Number(e.target.dataset.id);
  if (!id) return;

  const item = cartState.find(i => i.id === id);

  if (e.target.classList.contains("remove-item")) {
    cartState = cartState.filter(i => i.id !== id);
    saveCart();
    renderCart();
    return;
  }

  if (!item) return;

  if (e.target.classList.contains("plus")) item.qty++;
  if (e.target.classList.contains("minus") && item.qty > 1) item.qty--;

  saveCart();
  updateAddedQty(id);
  updateCartItemPrice(id);

  // Update input value directly without re-rendering
  const input = document.querySelector(`.cart-qty-input[data-id="${id}"]`);
  if (input) input.value = item.qty;

  renderSummary(); // update totals
});

document.addEventListener("input", e => {
  const input = e.target.closest(".cart-qty-input");
  if (!input) return;

  const id = Number(input.dataset.id);
  let value = parseInt(input.value);

  if (isNaN(value) || value < 1) value = 1;

  const item = cartState.find(i => i.id === id);
  if (!item) return;

  item.qty = value;

  saveCart();
  updateAddedQty(id); // update "Added: X" badge
  renderSummary();    // update total items & totals
  updateCartItemPrice(id);
});

const TAX_RATE = 0.125;
const DELIVERY_FEE = 0;

function renderSummary() {
  const items = cartState.reduce((s, i) => s + i.qty, 0);
  const subtotal = cartState.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + DELIVERY_FEE;

  document.getElementById("summary-items").textContent =
    `${items} Item${items !== 1 ? "s" : ""}`;

  document.getElementById("totalItems").textContent =
  `${items === 1 ? "Item" : "Items"} (${items})`;

  document.getElementById("summary-subtotal").textContent =
    `${formatNumberToNaira(subtotal)}`;

  document.getElementById("summary-delivery").textContent =
    `${formatNumberToNaira(DELIVERY_FEE)}`;

  document.getElementById("summary-total").textContent =
    `${formatNumberToNaira(total)}`;
}

renderCart();

const menuContainer = document.getElementById("menuContainer");

function formatNumberToNaira(number) {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 2
    }).format(number);
}

function formatInventoryDisplay(item) {
  const pricePerUnit = formatNumberToNaira(item.unit_price);
  const quantity = item.quantity_bal ?? item.quantity_in;
  const unit = item.measurement;

  return {
    priceText: `${pricePerUnit} / ${unit}`,
    quantityText: `${quantity} ${unit} available`
  };
}

function updateCartItemPrice(id) {
  const item = cartState.find(i => i.id === id);
  if (!item) return;

  const priceEl = document.querySelector(
    `.cart-item-price[data-id="${id}"]`
  );

  if (priceEl) {
    priceEl.textContent = formatNumberToNaira(item.price * item.qty);
  }
}

function updateAddedQty(productId) {
  // Loop through all rendered cards
  document.querySelectorAll('.card[data-id]').forEach(card => {
    const id = Number(card.dataset.id);
    if (id !== productId) return;

    const qtyEl = card.querySelector('.added-qty');
    const cartItem = cartState.find(c => c.id === id);

    if (cartItem) {
      qtyEl.textContent = `Added: ${cartItem.qty}`;
      // 🔥 update item price
      updateCartItemPrice(cartItem.id);
    } else {
      qtyEl.textContent = ''; // hide if removed
    }
  });
}

function getStockClass(item) {
  if (item.quantity_bal <= item.low_stock && item.low_stock > 0) {
    return "text-danger fw-bold";
  }
  return "text-success";
}

function renderMenu(products, category = "all", reset = false) {
  // 1️⃣ Filter by category
  let filtered =
    category === "all"
      ? products
      : products.filter(p => p.category === category);

  // 2️⃣ Filter by search query
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  productsToShow = filtered;

  // 3️⃣ Reset state
  if (reset) {
    lastIndex = 0;
    menuContainer.innerHTML = "";
  }

  // 4️⃣ Pagination
  const nextBatch = productsToShow.slice(lastIndex, lastIndex + batchSize);

  // 5️⃣ Empty state
  if (!nextBatch.length && reset) {
    menuContainer.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="ri-search-line fs-1 text-muted"></i>
        <p class="mt-2 fw-semibold text-muted">
          No menu item found
        </p>
      </div>
    `;
    document.getElementById("view-more-btn").style.display = "none";
    return;
  }

  // 6️⃣ Render items
  nextBatch.forEach(item => {
    const qtyInCart = cartState.find(c => c.id === item.ID)?.qty || 0;
    const { priceText, quantityText } = formatInventoryDisplay(item);

    menuContainer.innerHTML += `
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-3">
        <div class="card cardd" data-id="${item.ID}">
          
          <div class="card-body cardd-body py-2">

            <div class="d-flex gap-3 align-items-start">

              <!-- SMALL IMAGE -->
              <div class="menu-image-wrapper position-relative rounded bg-light flex-shrink-0 add-to-cart" data-id="${item.ID}">
                <i class="${getCategoryIcon(item.category)} fs-2 ${getCategoryColor(item.category)}"></i>
              </div>

              <!-- CONTENT -->
              <div class="flex-grow-1">

                <a href="#!" class="text-dark fs-15 fw-semibold d-block mb-1 add-to-cart" data-id="${item.ID}">
                  ${highlightMatch(item.name, searchQuery)}
                </a>

                <p class="fs-6 mb-1 add-to-cart" data-id="${item.ID}">
                  ${highlightMatch(item.category, searchQuery)}
                </p>

                <div class="d-flex justify-content-between align-items-center ${getStockClass(item)} add-to-cart" data-id="${item.ID}">
                  <span class="fw-bold fs-6">
                    ${quantityText}
                  </span>

                  <button
                    class="btn btn-soft-primary btn-sm add-to-cart"
                    data-id="${item.ID}">
                    <i class="ri-shopping-basket-2-line"></i>
                  </button>
                </div>

                <p class="text-success fw-semibold mb-0 added-qty">
                  ${qtyInCart ? `Added: ${qtyInCart}` : ''}
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  });


  lastIndex += batchSize;

  // 7️⃣ Toggle Load More button
  const btn = document.getElementById("view-more-btn");
  btn.style.display =
    lastIndex >= productsToShow.length ? "none" : "inline-block";
}

document.getElementById("menuSearch").addEventListener("input", e => {
  searchQuery = e.target.value;
  renderMenu(products, currentCategory, true);
});

let searchTimer;
menuSearch.addEventListener("input", e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchQuery = e.target.value;
    renderMenu(products, currentCategory, true);
  }, 300);
});

function highlightMatch(text, query) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, `<mark class="px-1">$1</mark>`);
}

// Handle View More button click
document.getElementById("view-more-btn").addEventListener("click", () => {
  renderMenu(products, currentCategory, false);
});

const skeletonContainer = document.getElementById("menuSkeleton");

function showMenuSkeleton(count = 6) {
  skeletonContainer.innerHTML = "";

  for (let i = 0; i < count; i++) {
    skeletonContainer.innerHTML += `
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-3">
        <div class="card cardd">
          <div class="card-body py-2">

            <div class="d-flex gap-3 align-items-start">

              <!-- Image skeleton -->
              <div class="skeleton skeleton-image"></div>

              <!-- Content skeleton -->
              <div class="flex-grow-1">
                <div class="skeleton skeleton-text lg"></div>
                <div class="skeleton skeleton-text md"></div>

                <div class="d-flex justify-content-between align-items-center mt-2">
                  <div class="skeleton skeleton-text sm"></div>
                  <div class="skeleton skeleton-text sm"></div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    `;
  }

  skeletonContainer.style.display = "flex";
  menuContainer.style.display = "none";
}

function hideMenuSkeleton() {
  skeletonContainer.style.display = "none";
  menuContainer.style.display = "flex";
}

// Initial load
// renderMenu(products, "all", true);
async function fetchInventory({
  category = "",
  search = "",
  supplier = "",
  fromDate = "",
  toDate = "",
  page = 1,
  reset = false
} = {}) {
  try {
    showMenuSkeleton(9);

    const params = new URLSearchParams({
      page,
      limit: pageLimit
    });

    if (category) params.append("category", category);
    if (search) params.append("search", search);
    if (supplier) params.append("supplier", supplier);
    if (fromDate) params.append("from_date", fromDate);
    if (toDate) params.append("to_date", toDate);

    const res = await fetch(
      `https://api.e3restaurant.com/get-inventory?${params.toString()}`,
      {
        credentials: "include" // IMPORTANT since you use middleware
      }
    );

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch inventory");

    products1 = reset
      ? data.success
      : [...products1, ...data.success];

    renderMenu(products1, "all", reset);

    currentPage = data.pagination.CurrentPage;
    updateLoadMoreBtn(data.pagination);

  } catch (err) {
    console.error(err);
    menuContainer.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="ri-error-warning-line fs-1 text-danger"></i>
        <p class="mt-2 text-muted">${err.message}</p>
      </div>
    `;
  } finally {
    hideMenuSkeleton();
  }
}

function updateLoadMoreBtn(pagination) {
  const btn = document.getElementById("view-more-btn");
  if (!btn) return;

  btn.style.display =
    pagination.CurrentPage >= pagination.TotalPages
      ? "none"
      : "inline-block";
}

document.getElementById("view-more-btn")?.addEventListener("click", () => {
  fetchInventory({
    page: currentPage1 + 1
  });
});

fetchInventory({ reset: true });

const NOTIFICATION_KEY = "notification_permission_asked";

if (
  "Notification" in window &&
  Notification.permission === "default" &&
  !localStorage.getItem(NOTIFICATION_KEY)
) {
  Notification.requestPermission().finally(() => {
    // Mark that we've asked — regardless of yes/no
    localStorage.setItem(NOTIFICATION_KEY, "true");
  });
}

(function () {
  let banner = null;

  function removeBanner() {
    if (banner) {
      banner.remove();
      banner = null;
    }
  }

  function showBanner({ message, bgColor, textColor }) {
    removeBanner();

    banner = document.createElement("div");
    banner.textContent = message;

    Object.assign(banner.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      padding: "10px 16px",
      backgroundColor: bgColor,
      color: textColor,
      borderRadius: "999px",
      fontSize: "14px",
      fontWeight: "500",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      cursor: "pointer",
      zIndex: "9999",
      transition: "opacity 0.3s ease"
    });

    banner.addEventListener("click", removeBanner);
    document.body.appendChild(banner);
  }

  // Offline
  window.addEventListener("offline", () => {
    showBanner({
      message: "⚠️ Poor network connection. Please check your internet.",
      bgColor: "#FFF3CD",      // soft warning yellow
      textColor: "#664D03"
    });
  });

  // Online
  window.addEventListener("online", () => {
    playRestoreSound();

    showDesktopNotification(
      "Network restored",
      "Connection is back. You can continue working."
    );

    showBanner({
      message: "✅ Network restored.",
      bgColor: "#D1E7DD",      // soft success green
      textColor: "#0F5132"
    });
  });

  // Optional: show warning immediately if page loads offline
  if (!navigator.onLine) {
    showBanner({
      message: "⚠️ Poor network connection. Please check your internet.",
      bgColor: "#FFF3CD",
      textColor: "#664D03"
    });
  }
})();

window.addEventListener("online", () => {
  setTimeout(() => {
    if (networkBanner) networkBanner.remove();
  }, 4000);
});

function playRestoreSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.value = 880; // pleasant chime tone
    gain.gain.value = 0.08;

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch {
    // silently fail if audio blocked
  }
}

function showDesktopNotification(title, body) {
  if (!("Notification" in window)) return;
  if (Notification.permission !== "granted") return;

  const n = new Notification(title, {
    body,
    icon: "/favicon.ico" // optional
  });

  n.onclick = () => n.close();
}

let networkBanner = null;

function showNetworkBanner({ text, bg, color }) {
  if (networkBanner) networkBanner.remove();

  networkBanner = document.createElement("div");
  networkBanner.textContent = text;

  Object.assign(networkBanner.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "10px 14px",
    background: bg,
    color,
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    boxShadow: "0 6px 16px rgba(0,0,0,.15)",
    cursor: "pointer",
    zIndex: 9999
  });

  networkBanner.onclick = () => networkBanner.remove();
  document.body.appendChild(networkBanner);
}

// Place order for products added to cart
// Place order for products added to cart
// Place order for products added to cart
// Place order for products added to cart

function setButtonLoading(btn, loading) {
  if (loading) {
    btn.dataset.original = btn.innerHTML;
    btn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Processing...`;
    btn.classList.add("disabled");
  } else {
    btn.innerHTML = btn.dataset.original;
    btn.classList.remove("disabled");
  }
}

document.getElementById("cancelCart").addEventListener("click", (e) => {
  e.preventDefault();

  if (!cartState.length) return;

  if (confirm("Do you want to clear the cart?")) {
    cartState = [];
    showNetworkBanner({
      text: "✅ Inventory cleared.",
      bg: "#E2E3E5",
      color: "#41464B"
    });
    saveCart();
    renderCart();
  }
});

const placeOrderBtn = document.getElementById("placeOrderBtn");

placeOrderBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  // 1️⃣ Validate cart
  if (!cartState.length) {
    showNetworkBanner({
      text: "⚠️ Your Inventory is empty.",
      bg: "#F8D7DA",
      color: "#842029"
    });
    return;
  }

  // 2️⃣ Check network (keep illusion)
  if (!navigator.onLine) {
    showNetworkBanner({
      text: "⚠️ Poor network connection. Please try again.",
      bg: "#FFF3CD",
      color: "#664D03"
    });
    return;
  }

  // 3️⃣ Loading state
  setButtonLoading(placeOrderBtn, true);

  try {
    // 4️⃣ Simulate API call (replace later)
    // await fakePlaceOrderRequest(cartData);

    // 5️⃣ Success
    cartState = [];
    saveCart();
    renderCart();

    showDesktopNotification(
      "✅ Order placed",
      "Your order was placed successfully."
    );

    showNetworkBanner({
      text: "✅ Order placed successfully.",
      bg: "#D1E7DD",
      color: "#0F5132"
    });

  } catch (err) {
    // 6️⃣ Failure (looks like network issue)
    showNetworkBanner({
      text: "⚠️ Unable to place order. Please check your network.",
      bg: "#FFF3CD",
      color: "#664D03"
    });
  } finally {
    setButtonLoading(placeOrderBtn, false);
  }
});

const SAVED_DB_NAME = "e3_offline_inventory_save_db";
const SAVED_DB_VERSION = 2;
const SAVED_STORE = "saved_carts";

function openSavedDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(SAVED_DB_NAME, SAVED_DB_VERSION);
    request.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(SAVED_STORE)) {
        db.createObjectStore(SAVED_STORE, {
          keyPath: "id",
          autoIncrement: true
        });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveCartLocally(cart, label = null) {
  if (!cart.length) return;

  // If no label provided, ask the user
  if (!label) {
    label = prompt("Enter Table / Customer Name for this cart:", `Table ${new Date().toLocaleTimeString()}`);
    if (!label) {
      label = `Saved at ${new Date().toLocaleTimeString()}`; // fallback
    }
  }

  const db = await openSavedDB();
  const tx = db.transaction(SAVED_STORE, "readwrite");
  tx.objectStore(SAVED_STORE).add({
    cart,
    label,
    createdAt: Date.now()
  });
  tx.oncomplete = () => renderSavedCarts();
}

async function getSavedCarts() {
  const db = await openSavedDB();
  return new Promise(resolve => {
    const tx = db.transaction(SAVED_STORE, "readonly");
    const store = tx.objectStore(SAVED_STORE);
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
  });
}

async function removeSavedCart(id) {
  const db = await openSavedDB();
  const tx = db.transaction(SAVED_STORE, "readwrite");
  tx.objectStore(SAVED_STORE).delete(id);
  tx.oncomplete = () => renderSavedCarts();
}

async function renderSavedCarts() {
  const container = document.getElementById("savedCartsMenu");
  const carts = await getSavedCarts();

  container.innerHTML = "";

  if (!carts.length) {
    container.innerHTML = `<div class="text-muted text-center fs-13">No saved carts</div>`;
    return;
  }

  carts.forEach(c => {
    const div = document.createElement("div");
    div.className = "d-flex justify-content-between align-items-center mb-2 p-2 border rounded";
    div.innerHTML = `
      <span class="text-truncate">${c.label}</span>
      <div class="d-flex gap-1">
        <button class="btn btn-sm btn-success restore-cart-btn" data-id="${c.id}">
          <i class="ri-folder-check-line"></i>
        </button>
        <button class="btn btn-sm btn-danger delete-cart-btn" data-id="${c.id}">
          <i class="ri-delete-bin-5-line"></i>
        </button>
      </div>
    `;
    container.appendChild(div);
  });
}

document.getElementById("saveCartBtn").addEventListener("click", async () => {
  if (!cartState.length) return alert("Inventory is empty!");
  await saveCartLocally(cartState);
    if (!cartState.length) return;

    cartState = [];
    saveCart();
    renderCart();
  showNetworkBanner({
    text: "✅ Inventory saved locally.",
    bg: "#D1E7DD",
    color: "#0F5132"
  });
});

document.addEventListener("click", async e => {
  const restoreBtn = e.target.closest(".restore-cart-btn");
  if (restoreBtn) {
    const id = Number(restoreBtn.dataset.id);
    const carts = await getSavedCarts();
    const saved = carts.find(c => c.id === id);
    if (!saved) return;

    // 🔹 Step 1: auto-save current Inventory if it has items (prompt user for label)
    if (cartState.length) {
      await saveCartLocally(cartState); // prompt will appear here
    }

    // 🔹 Step 2: replace cartState with saved Inventory
    cartState = saved.cart;
    saveCart();
    renderCart();

    showNetworkBanner({
      text: "✅ Inventory restored. Previous Inventory auto-saved.",
      bg: "#D1E7DD",
      color: "#0F5132"
    });
  }

  const deleteBtn = e.target.closest(".delete-cart-btn");
  if (deleteBtn) {
    const id = Number(deleteBtn.dataset.id);
    if (confirm("Delete this saved cart?")) {
      await removeSavedCart(id);
      showNetworkBanner({
        text: "🗑️ Saved Inventory deleted.",
        bg: "#FFF3CD",
        color: "#664D03"
      });
    }
  }
});

renderSavedCarts();
