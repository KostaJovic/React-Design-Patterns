export type Person = {
    id: string;
    name: string;
    age: number;
    hairColor: string;
    hobbies: string[];
}

export type Product = {
    id: string;
    name: string;
    price: string;
    description: string;
    rating: number;
}

export type ResourceMap = {
  user: Person;
  product: Product;
}