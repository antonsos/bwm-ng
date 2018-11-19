export class Rental {
  id: string;
  title: string;
  city: string;
  street: string;
  category: string;
  image: string;
  bedrooms: number;
  description: string;
  price: number;
  shared: boolean;
  createdAt: string;

  constructor(
    id: string,
    title: string,
    city: string,
    street: string,
    category: string,
    image: string,
    bedrooms: number,
    description: string,
    price: number,
    shared: boolean,
    createdAt: string
  ) {
    this.id = id;
    this.title = title;
    this.city = city;
    this.street = street;
    this.category = category;
    this.image = image;
    this.bedrooms = bedrooms;
    this.description = description;
    this.price = price;
    this.shared = shared;
    this.createdAt = createdAt;
  }
}
