document.addEventListener("DOMContentLoaded", function () {
    // Variables para rastrear los costos
    var totalOrderCost = 0;
    var totalDishCost = 0;
    var totalDrinkCost = 0;

    // Agregar un evento al botón "Calcular Total"
    document.getElementById("calculateTotal").addEventListener("click", function () {
        // Obtener las selecciones del usuario
        var dish = document.getElementById("Plato").value;
        var dishQuantity = parseInt(document.getElementById("dishQuantity").value);
        var drink = document.getElementById("Bebidas").value;
        var drinkQuantity = parseInt(document.getElementById("cantidadBebidas").value);

        // Inicializar precios de platos y bebidas
        var dishPrice = 0;
        var drinkPrice = 0;

        // Definir los precios de los platos
        if (dish === "Spaghetti") {
            dishPrice = 10000; 
        } else if (dish === "Churrasco") {
            dishPrice = 12000;
        } else if (dish === "Bandeja Paisa") {
            dishPrice = 15000;
        }

        // Definir los precios de las bebidas
        if (drink === "Gaseosa") {
            drinkPrice = 5000; 
        } else if (drink === "Agua") {
            drinkPrice = 2000;
        } else if (drink === "Jugo") {
            drinkPrice = 1500;
        }

        // Calcular el costo de platos y bebidas
        totalDishCost = dishPrice * dishQuantity;
        totalDrinkCost = drinkPrice * drinkQuantity;

        // Calcular el costo total del pedido
        totalOrderCost = totalDishCost + totalDrinkCost;

        // Actualizar el elemento en la página con el costo total, configurado a ningun decimal
        var totalPriceElement = document.getElementById("totalPrice");
        totalPriceElement.innerHTML = "Costo total del pedido: $" + totalOrderCost.toFixed(0);
    });
});


