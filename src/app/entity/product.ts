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
        // this.id = 0;
        // this.name = "abc";
        // this.price = 1;
        // this.description = "description";
    }
}
