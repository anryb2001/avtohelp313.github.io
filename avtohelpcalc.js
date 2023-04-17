$(document).ready(function() {
    $(".tn-atom__form").delegate("#form81307336 .t-submit", "click", function() {
     setTimeout(function() { 
    //Если первая форма получила статус успешной отправки     
        if($("#form576120153").hasClass("js-send-form-success")){
            const transportCosts = {
                  car: 'Легковая',
                  carx: 'Кроссовер',
                  truck: 'Джип',
                  multiven: 'Мультивэн', 
                  spt2t: 'Спецтехника до 2,5т',
                  ptb3t: 'Спецтехника до 3,5т',
                  spta3t: 'Спецтехника от 3,5т',
                  commerce: 'Коммерческий транспорт',
                  blockkol: 'Заблокированы колеса',
                  podkat: 'Нужен подкат',
                  dopgruz: 'Дополнительный груз',
                  prikur: 'Запуск двигателя (прикурить)',
                  kuvet: 'Вытащить из грязи / кювета',
            };

            // Задаем стоимость подачи и стоимость доставки за 1 км для каждого вида транспорта
            const transportPrices = {
                car: { delivery: 3000, km: 60 },
                carx: { delivery: 3500, km: 60 },
                truck: { delivery: 4000, km: 60 },
                multiven: { delivery: 4000, km: 60 },
                pickup: { delivery: 5000, km: 60 },
                spt2t: { delivery: 5000, km: 70 },
                sptb3t: { delivery: 6000, km: 70 },
                spta3t: { delivery: 7000, km: 70 },
                commerce: { delivery: 4000, km: 60 },
            };
            
            // Задаем стоимость для каждой дополнительной услуги
            const additionalServices = {
                blockkol: 0,
                podkat: 1000,
                dopgruz: 0,
                prikur: 3000,
                kuvet: 5000,
            };
                
            // Получаем элементы страницы
            const distanceOutput = document.querySelector('.distance');
            const pricePerKmOutput = document.querySelector('.price-per-km');
            const totalPriceOutput = document.querySelector('.total-price');
            const calculateButton = document.querySelector('.t-submit');
            const pickupAddressInput = document.querySelector('#in-1531306243545');
            const deliveryAddressInput = document.querySelector('#in-1531306540094');
            const transportSelect = document.querySelector('#sb-1681160866461');
            const additionalServicesCheckboxes = document.querySelectorAll('.t-checkbox input');
            const additionalCargoInput = document.querySelector('#qn-1681161148547');
                
            // Функция для расчета расстояния между адресами
            function getDistance(pickupAddressInput, deliveryAddressInput) {
                // В реальном проекте можно использовать Google Maps API или другую библиотеку для получения расстояния
                // Здесь используется генерация случайного числа для имитации получения расстояния от API
                return Math.floor(Math.random() * 100) + 1;
            };
                    
            // Функция для получения стоимости транспортировк
            function getTransportPrice(transport, distance) {
                const pricePerKm = transportPrices[transport].km;
                const deliveryPrice = transportPrices[transport].delivery;
                return distance * pricePerKm + deliveryPrice;
            };

            // Функция для расчета стоимости дополнительных услуг
            function getAdditionalServicesPrice() {
                let price = 0;
                for (let i = 0; i < additionalServicesCheckboxes.length; i++) {
                    if (additionalServicesCheckboxes[i].checked) {
                        price += additionalServices[additionalServicesCheckboxes[i].value];
                        }
                    }
                    return price;
            };

            // Функция для расчета итоговой стоимости
            function getTotalPrice() {
                const pickupAddress = pickupAddressInput.value;
                const deliveryAddress = deliveryAddressInput.value;
                const transport = transportSelect.value;
                const additionalCargo = parseFloat(additionalCargoInput.value) || 0;
        
                // Получаем расстояние между адресами
                const distance = getDistance(pickupAddress, deliveryAddress);
                // Выводим расстояние на страницу
                distanceOutput.textContent = `${distance} км`;

                // Получаем стоимость доставки за 1 км для выбранного вида транспорта и выводим на страницу
                const pricePerKm = transportPrices[transport].km;
                pricePerKmOutput.textContent = `${pricePerKm} руб/км`;

                // Получаем стоимость транспортировки
                const transportPrice = getTransportPrice(transport, distance);

                // Получаем стоимость дополнительных услуг
                const additionalServicesPrice = getAdditionalServicesPrice(additionalServices[checkbox.value]);
            };
        }
    })
    })
})