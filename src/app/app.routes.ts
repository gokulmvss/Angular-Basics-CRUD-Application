import { Routes } from '@angular/router';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ReadComponentComponent } from './components/product/read-component/read-component.component';
import { DeleteComponentComponent } from './components/product/delete-component/delete-component.component';
import { UpdateComponentComponent } from './components/product/update-component/update-component.component';
import { ProductSearchImplementationComponent } from './components/product-search-implementation/product-search-implementation.component';
import { LoginReactiveFormValidationComponent } from './components/product/login-reactive-form-validation/login-reactive-form-validation.component';


export const routes: Routes = [
    {path:'',redirectTo:'product/view-product',pathMatch:'full'},
    {path:'product/add-product',component:AddProductComponent},
    {path:'product/view-product',component:ReadComponentComponent},
    {path:'product/update-product/:id',component:UpdateComponentComponent},
    {path:'product/delete-product',component:DeleteComponentComponent},
    {path:'product/search-product',component:ProductSearchImplementationComponent},
    {path:'product/login',component:LoginReactiveFormValidationComponent},
    {path:'**',component:ReadComponentComponent}, // routes all the unknown routes to this component
];
