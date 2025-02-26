import { Component, OnInit } from '@angular/core';
import { Product } from '../../../entity/product';
import { ProductService } from '../../../services/product.service';
import { OpenapiService } from '../../../services/openapi.service';

@Component({
  selector: 'app-delete-component',
  imports: [],
  templateUrl: './delete-component.component.html',
  styleUrl: './delete-component.component.css'
})
export class DeleteComponentComponent implements OnInit {
  query:string = '';
  products:Product[] = [];
  apiProducts:any[] = [];
  apiProductkeys:string[] = [];

  constructor(private productService:ProductService,private apiservice:OpenapiService){}
  // ngOnInit(): void {
  //    this.apiservice.getallproductsfromapi().subscribe()
  //     {
  //     next: (data: any[]) => {
  //       console.log(data);
  //       this.apiProducts = data;
  //     }
  //     error: (error: any) => console.log(error);
  //     complete : console.log("Fetching Products Complete")
  //    }
  // }

  ngOnInit(): void {
    this.apiservice.getallproductsfromapi().subscribe({
      next: (data: any[]) => {
        // console.log(data);
        this.apiProducts = data;
      },
      error: (error: any) => console.log(error),
      complete: () => {

        this.apiProducts = this.apiProducts;

        if(this.apiProducts.length>0){
        console.log(this.apiProducts[0]);
          this.apiProductkeys = Object.keys(this.apiProducts[0]);
        }
        console.log("Fetching Products Complete") ;
        console.log(this.apiProductkeys)
      }
    });
  }

}
