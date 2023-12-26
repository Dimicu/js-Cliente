Ejercicio de creacion de un hotel : 

Bienvenidos al Hotel Ritz Carballeira
Este selecto establecimiento empezará a operar próximamente y necesita un pequeño programa para gestionar las reservas de habitaciones. El hotel consta de 10 plantas y 20 habitaciones por planta (excepto en la última planta, en la que solo hay 10 habitaciones). 
Cada habitación tendrá un identificador único (que estará formado por el número de planta y el número de habitación). Por ejemplo, la habitación 15 situada en la planta 5º, tendrá como número: 515. No existe la habitación 0 en ninguna de las plantas. 
Hay muchos hoteles que no incluyen el número 13 en sus habitaciones. Pero este no es nuestro caso, ya que no somos supersticiosos. Además, por cada habitación se necesita saber: 
    • Tipo de habitación: 
Podrá ser ‘Individual’,’Doble’,’suite’ 
    • Características: 
Podrán ser Vistas Panorámicas, Aire Acondicionado y Jacuzzi, dependiendo del tipo de habitación de que se trate. Una habitación puede poseer una, varias o ninguna de las características anteriores. (por eso las almacenaremos en un array ).

    • Reserva asociada: La reserva de una habitación tendrá fecha de entrada, fecha de salida y nombre. (Nos interesa tener un objeto reserva para gestionarla) 
Todas las habitaciones de la planta 7ª y superiores tienen vistas panorámicas.
Las habitaciones de la planta 7ª, 8ª y 9ª son Dobles. 
Todas las habitaciones de la planta 10, son suites y además tienen aire acondicionado, vistas panorámicas y Jacuzzi.
Las habitaciones pares de las plantas 1ª a 6ª tienen aire acondicionado y además son Individuales. Las habitaciones impares de las plantas 1ª a 6ª tienen aire acondicionado y además son Dobles.  
El hotel dispone de unas instalaciones magníficas, pero aún así, se prevé que pueda haber ciertos fallos técnicos en el aire acondicionado y el jacuzzi. Por esa razón la aplicación deberá permitir deshabilitar esas características. La página inicial tendrá el siguiente aspecto:

Hay una lista desplegable que contiene todos los números de las habitaciones del hotel (esta lista se genera mediante javascript, ya que sería imposible añadir todas las habitaciones en el código HTML). Además incorpora dos botones como se ve en la imagen anterior. Al pulsar el botón Mostrar habitación, se abrirá una nueva ventana de tamaño 500x500 donde se visualizará los datos de la habitación correspondiente.

Para realizar la reserva será obligatorio que el usuario introduzca los campos fecha de entrada, fecha de salida y nombre. En caso de que ninguno de esos campos no tenga valor, la habitación estará sin reservar.

Al pulsar el botón listar reservas, se mostrará un listado de las habitaciones que están reservadas, indicando número de la habitación, fecha de entrada, fecha de salida y nombre del cliente. Este listado puede aparecer en la misma página o bien en una página independiente
