export class Product {
    // id: number;
    // name: string;
    // price: number;
    // description: string;

    constructor(public id?: number, 
        public name?: string, 
        public price?: number, 
        public description?: string,
        public url?:string) 
    { // url? means its optional
        // this.id = id;
        // this.name = name;
        // this.price = price;
        // this.description = description;
    }

}
