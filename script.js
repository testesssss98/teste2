// script.js

// Função para atualizar os detalhes do carro e o preço
const updateCarDetails = (carId) => {
    const carDetailsSection = document.getElementById("car-details");
    const carItem = document.getElementById(carId);

    // Obtenção das informações do carro
    const carName = carItem.querySelector("h2").textContent;
    const carPrice = carItem.querySelector(".price").textContent;
    const carMotor = carItem.querySelector(".motor").textContent;
    const carColor = carItem.querySelector(".color").textContent;
    const carSpeed = carItem.querySelector(".speed").textContent;
    const carImage = carItem.querySelector("img").src;

    // Atualizar os detalhes exibidos na tela
    carDetailsSection.innerHTML = `
        <h2>${carName}</h2>
        <img src="${carImage}" alt="${carName}">
        <p><strong>Preço:</strong> ${carPrice}</p>
        <p><strong>Motor:</strong> ${carMotor}</p>
        <p><strong>Cor:</strong> ${carColor}</p>
        <p><strong>Velocidade Máxima:</strong> ${carSpeed}</p>
        <button>Comprar</button>
    `;
};

// Lógica para adicionar 10 em cada categoria de preço, motor e velocidade
const cars = [
    {
        id: "car1",
        basePrice: 2000000,
        baseMotor: "V8 Turbo",
        baseSpeed: 340,
    },
    {
        id: "car2",
        basePrice: 3000000,
        baseMotor: "V12",
        baseSpeed: 355,
    },
    {
        id: "car3",
        basePrice: 10000000,
        baseMotor: "W16 Quad-Turbo",
        baseSpeed: 420,
    }
];

cars.forEach(car => {
    const carElement = document.getElementById(car.id);
    const carPriceElement = carElement.querySelector(".price");
    const carMotorElement = carElement.querySelector(".motor");
    const carSpeedElement = carElement.querySelector(".speed");

    // Adicionar 10 em cada categoria (como solicitado)
    carPriceElement.textContent = `R$ ${car.basePrice + 100000}`;
    carMotorElement.textContent = `${car.baseMotor} + 10`;
    carSpeedElement.textContent = `${car.baseSpeed + 10} km/h`;

    // Evento para mostrar detalhes do carro ao clicar
    carElement.querySelector("button").addEventListener("click", () => {
        updateCarDetails(car.id);
    });
});
