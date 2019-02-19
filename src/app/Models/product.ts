export class Product {
    constructor (name, price, about, image, id){
        this.name = name;
        this.price = price;
        this.about = about;
        this.image = image;
        this.id = id;
    }

        name: string;
        price: number;
        about: string;
        image: string;
        id: number;
}