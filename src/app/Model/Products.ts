export class Product{
    description:String | null;
    Price:Number;

    constructor(public name:String, description:String,price:Number)
    {
        this.description = description;
        this.Price = price;
    }
}