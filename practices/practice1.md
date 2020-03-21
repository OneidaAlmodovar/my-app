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
