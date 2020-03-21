# Practica: Productos 
## Descripción

Vamos a crear la pagina para productos, simularemos obtener el listado de productos desde un REST API para obtener una lista de propiedades de renta y venta con todos los detalles posibles, utilizaremos PIPEs para formatear cantidades, unidades y fechas    

Los datos fueron obtenidos de la siguiente pagina: 

[Listado de Propiedades](https://www.inmuebles24.com/inmuebles-en-renta-en-chihuahua-ordenado-por-fechaonline-descendente.html#)  
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

5. Modificar vista de la lista de productos, utilizaremos un `card` de bootstrap [bootstrap cards](https://getbootstrap.com/docs/4.4/components/card/) para formatear cada producto 

```
/my-app/src/app/components/products/product-list/product-list.component.html
```

Primero iteramos sobre un col para generar multiples columnas utilizamos un ngFor 

```
*ngFor="let post of products.listPostings; let i = index"
```

```
<div class="row">
  <div class="col-md-6" *ngFor="let post of products.listPostings; let i = index">
    
  </div>
</div>
```
utilizaremos el routerLink 
```
[routerLink]="['/products/product-detail', i]"
```

Agregamos imagen al card 
```
<img [src]="post.pictures[0].url730x532" class="card-img" alt="...">
```
Agregamos el titulo 
```
<h5 class="card-title">{{post.title}}</h5>
```

Agregamos el precio del producto el cual lo obtenemos del campo `post.priceOperationTypes` el cual es una lista y tendremos que iterar utilizando un `gnFor`, usaremos el pipe currency para dar formarto de tipo moneda 

Nota: los pipes en angular se utilizan para dar formato a los interpolation strings [angular pipes list](https://angular.io/api?type=pipe)

```
<p *ngFor="let operation of post.priceOperationTypes">
  {{operation.prices[0].currency }}  {{operation.prices[0].amount | currency }}
  <small class="text-muted"> {{operation.operationType.name }}</small>
</p>
```

el resultado podria quedar asi, podrian cambiar el formato e inclusive agregar mas datos provenientes del producto

```
<div class="row">
  <div class="col-md-6" *ngFor="let post of products.listPostings; let i = index">
    <div class="card mb-3" [routerLink]="['/products/product-detail', i]">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img [src]="post.pictures[0].url730x532" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p *ngFor="let operation of post.priceOperationTypes">
              {{operation.prices[0].currency }}  {{operation.prices[0].amount | currency }}
              <small class="text-muted"> {{operation.operationType.name }}</small>
            </p>
            <p class="card-text">
              <small class="text-muted"> {{post.publication.beginDate | date}} </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

6. Obtener un producto seleccionado de lista de productos utilizando nuestro data service
 
```
/my-app/src/app/components/products/product-list/product-detail.component.ts
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
agregar dos variables para productos, producto e id

```
product: any;
products: Array<any>;
productId: string;
```

Obtenemos el ID del proyecto que en este caso es simplemente el indice del arreglo que contiene la lista de productos de nuestro archivo json y mandamos llamar el metodo para obtener los productos 

```
ngOnInit(): void {
  this.productId = this.route.snapshot.paramMap.get('index');
  this.onGetProduct();
}
```
Otener los productos 
```
async onGetProduct(){
  console.log("onGetProduct", this.productId);
  if(this.productId){
    this.products = await this.dataService.getProducts().toPromise();
    this.product = this.products['listPostings'][this.productId];
    console.log(this.product);
  }
}
```

7. Ahora podemos crear nuestra pagina de detalle del producto 
```
/my-app/src/app/components/products/product-detail/product-detail.component.html
```

Esta pantalla la dejo totalmente a su criterio con el mayor detalle posible, los elementos obtenidos en `this.product` son los siguientes 
Nota: pueden ver todo el objeto en la consola del navegador 

El titulo del procuto 
```
product.title
```

Descripción del producto 
```
product.descriptionNormalized
```

Caracteristicas Generales
```
product.generalFeatures
```

Caracteristicas del Desarrollo
```
product.developmentFeatures
```

Datos del Editor 
```
product.publisher
```

Listado de imagenes, se puede iterar y mostrar todas las imagenes o utilizar un carrusel de primeng
```
product.pictures
```

Un listado con todas las caracteristicas del producto 
```
product.features
```



