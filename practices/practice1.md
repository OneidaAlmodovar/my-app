# Practica: Productos 
## Descripción

Vamos a crear la pagina para productos, simularemos obtener el listado de productos desde un REST API para obtener una lista de propiedades de renta y venta con todos los detalles posibles, utilizaremos PIPEs para formatear cantidades, unidades y fechas    

Los datos fueron obtenidos de la siguiente pagina: 

[Listado de Propiedades](https://www.inmuebles24.com/inmuebles-en-renta-en-chihuahua-ordenado-por-fechaonline-descendente.html#).   
[Una Propiedad Seleccionada](https://www.inmuebles24.com/propiedades/locales-en-renta-en-plaza-comercial-cordilleras-99-58306051.html)

## Pasos 

1. Editar el nuestro data service para obtener el listado de productos 
 
`/my-app/src/app/services/data.service.ts`

```
getProducts(): Observable<any> {
    return  this.httpClient.get("assets/products.json");
}
```
Esto obtendra el listado de productos almacenados en un archivo .json

2. Crear el componente para el listado de productos y para un producto seleccionado (es probable que ya lo hayan generado)

```
ng g component components/products/products-list
```
```
ng g component components/products/products-detail
```

3. Modificar los routes para productos 
```
/my-app/src/app/app-routing.module.ts
```

```
...
  { path: "products", component: ProductsComponent, canActivate: [SecurityGuard], children: [
    { path: "product-detail/:index", component: ProductDetailComponent , canActivate: [SecurityGuard]},
    { path: "product-detail", component: ProductDetailComponent, canActivate: [SecurityGuard] },
    { path: "product-list", component: ProductListComponent , canActivate: [SecurityGuard]},
  ]},
...
```

4. Obtener la lista de productos utilizando nuestro data service
```
/my-app/src/app/components/products/product-list/product-list.component.ts
```
Importar e inyectar el DataService
```
import { DataService } from "../../../services/data.service";
```

inyectar en el constructor
```
constructor(
   private dataService:DataService
) { }
```

Crear una variable donde vamos a alcacenar nuestros productos

```
products:any;
```

Obtener la lista de productos desde el ngoninit 
```
ngOnInit(): void {
  this.getProducts()
}
```
```
async getProducts(){
  this.products = await this.dataService.getProducts().toPromise();
  console.log(this.products);
}
```

5. Obtener un producto seleccionado de lista de productos utilizando nuestro data service
 
```
/my-app/src/app/components/products/product-list/product-list.component.ts
```
Importar e inyectar el DataService y el ActivatedRoute que lo usaremos para obtener el id del producto que viene desde la url

```
import { DataService } from "../../../services/data.service";
import { ActivatedRoute } from "@angular/router";
```
inyectar en el constructor
```
constructor(
   private dataService:DataService,
   private route:ActivatedRoute,
) { }
```
Obtenemos el ID del proyecto que en este caso es simplemente el indice del arreglo que contiene la lista de productos de nuestro archivo json y mandamos llamar el metodo para obtener los productos 

```
ngOnInit(): void {
  this.productId = this.route.snapshot.paramMap.get('index');
  this.onGetProduct(this.productId )
}
```
Otener los productos 
```
  async onGetProduct(productId){
    console.log("onGetProduct", this.productId);
    if(this.productId){
      this.products = await this.dataService.getProducts().toPromise();
      this.product = this.products['listPostings'][this.productId];
      console.log(this.product);
    }
  }
```



