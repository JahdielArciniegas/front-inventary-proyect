export interface newIngredient {
  name : string,
  cost : string,
  amount : string,
}

export interface Ingredient extends newIngredient {
  user : User,
  id: string
}

export interface NotificationState {
  notification: string | null
  error: string | null
}

export interface NewRecipe {
  title : string,
  cost : string,
  amount : string,
  unit : "Molde Circular"| "Molde Rectangular" | "Unidad",
  ingredients: {id:string ,amount : string, ingredient : Ingredient }[]
}

export interface Recipe extends NewRecipe {
  id : string,
  user : User
}

export interface User {
  username: string
  name: string
  token: string
  id: string
}

export interface UserState {
  user : User | null
}