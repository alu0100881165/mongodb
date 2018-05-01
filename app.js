var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var readline = require('readline');

MongoClient.connect("mongodb://localhost:27017/", function(err, database)
{
  if(err)
  {
    return console.dir(err);
  }

  const MyDB = database.db('test');
  var ColeccionProductos = MyDB.collection('Productos');
  var FileProductos = fs.readFileSync('Productos.csv', 'utf8');
  var FileEmpleados = fs.readFileSync('Empleados.txt', 'utf8');

  var aux = dameEmpleado(FileEmpleados);
  console.log(aux);

  var aux2 = dameProducto(FileProductos);
  console.log(aux2);

  var div = dividirProducto(aux2);
  console.log(div[0]+"___________"+div[1]); 
//SALTAMOS LA PRIMERA linea
  // FileProductos.toString().split(/\n/).forEach(function(line, index){
  //   if(index != 0)
  //   {
  //     //console.log(line);
  //     line.split(/;/).forEach(function(linea, indice){
  //       console.log(linea);
  //     })
  //   }
  //});
     for(var i = 0; i < 1000; i++)
     {
         var empleado_aux = dameEmpleado(FileEmpleados);
         var productos_aux =  dameProducto(FileProductos);
         var div = dividirProducto(productos_aux);
         
         var Factura = {'Empleado':empleado_aux };
         
         
         
     }
  // for(int i = 0; i < FileProductos.size(); i++)
  // {
  //   if(FileProductos[i] != ';')
  //   {
  //     aux += FileProductos[i];
  //   }
  // }
  //
  // //Bucle para todos los productos.
  // //leer cada linea del fichero
  // //1ª linea tiene encabezados
  // //{
  //     //crear objeto javascrit formato JSON e insertarlo
  //     var Tupla = {
  //       'Producto':Valores[0],
  //       'Precio':Valores[1]
  //     };
  //     ColeccionProductos.insert(Tupla);
  //}
});

function dividirProducto(producto,nombre_producto,precio)
{
    var array = ["",""]
    producto.toString().split(/;/).forEach(function(div,index){
       if(index == 0)
           array[0]=div;
       
       else
           array[1]=div;
        
    });
    return array;
}

function random(min, max)
{
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function dameEmpleado(Empleados)
{
  var num = random(0, 16);
  var dummy;
  Empleados.toString().split(/\n/).forEach(function(line, index){
    if(index == num)
    {
      dummy = line;
    }
  });
  return dummy;
}

function dameProducto(Producto)
{
  var num = random(0, 2195);
  var dummy;

  Producto.toString().split(/\n/).forEach(function(line, index){
    if(index == num)
    {
      dummy = line;
    }
  });
  return dummy;
}
