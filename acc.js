document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;
    let autoSlideInterval; // Переменная для хранения интервала автоматического переключения

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    function nextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        showImage(currentIndex);
    }

    prevButton.addEventListener('click', function() {
        prevImage();
        stopAutoSlide(); // Остановка автопрокрутки при нажатии на кнопку "prev-button"
    });

    nextButton.addEventListener('click', function() {
        nextImage();
        startAutoSlide(); // Запуск автопрокрутки при нажатии на кнопку "next-button"
    });

    // Show the initial image
    showImage(currentIndex);

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            prevImage();
            stopAutoSlide(); // Остановка автопрокрутки при нажатии на клавишу "ArrowLeft"
        } else if (event.key === 'ArrowRight') {
            nextImage();
            startAutoSlide(); // Запуск автопрокрутки при нажатии на клавишу "ArrowRight"
        }
    });

    // Automatic slideshow
    startAutoSlide(); // Запускаем автопрокрутку при загрузке страницы

    function startAutoSlide() {
        clearInterval(autoSlideInterval); // Очищаем предыдущий интервал, чтобы избежать множественного запуска
        autoSlideInterval = setInterval(nextImage, 1000); // Запускаем автопрокрутку каждые 5 секунд
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval); // Останавливаем интервал автопрокрутки
    }
});
