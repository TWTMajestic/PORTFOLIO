$(document).ready(function () {
    $.datepicker.setDefaults($.datepicker.regional['fr']); // Appliquer les paramètres régionaux français
    $("#datepicker").datepicker({
        firstDay: 1, // Commencer la semaine le lundi
        dayNamesMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], // Noms des jours abrégés
        monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], // Noms des mois
        dateFormat: 'dd/mm/yy', // Format de date
        minDate: new Date(2024, 4, 27), // Date minimum (27 mai 2024)
        maxDate: new Date(2024, 6, 5), // Date maximum (5 juillet 2024)
        beforeShowDay: function (date) {
            var day = date.getDay();
            return [(day != 0 && day != 6)]; // Désactiver les samedis et dimanches
        },
        onSelect: function (dateText) {
            const screenshots = {
                "27/05/2024": "./RAPPORT_STAGE/27_05.png",
                "28/05/2024": "./RAPPORT_STAGE/28_05.png",
                "29/05/2024": "./RAPPORT_STAGE/29_05.png",
                "30/05/2024": "./RAPPORT_STAGE/30_05.png",
                "31/05/2024": "./RAPPORT_STAGE/31_05.png",
                "03/06/2024": "./RAPPORT_STAGE/03_06.png",
                "04/06/2024": "./RAPPORT_STAGE/04_06.png",
                "05/06/2024": "./RAPPORT_STAGE/05_06.png",
                "06/06/2024": "./RAPPORT_STAGE/06_06.png",
                "07/06/2024": "./RAPPORT_STAGE/07_06.png",
                "10/06/2024": "./RAPPORT_STAGE/10_06.png",
                "11/06/2024": "./RAPPORT_STAGE/11_06.png",
                "12/06/2024": "./RAPPORT_STAGE/12_06.png",
                "13/06/2024": "./RAPPORT_STAGE/13_06.png",
                "14/06/2024": "./RAPPORT_STAGE/14_06.png",
                "17/06/2024": "./RAPPORT_STAGE/17_06.png",
                "18/06/2024": "./RAPPORT_STAGE/18_06.png",
                "19/06/2024": "./RAPPORT_STAGE/19_06.png",
                "20/06/2024": "./RAPPORT_STAGE/20_06.png",
                "21/06/2024": "./RAPPORT_STAGE/21_06.png",
                "24/06/2024": "./RAPPORT_STAGE/24_06.png",
                "25/06/2024": "./RAPPORT_STAGE/25_06.png",
                "26/06/2024": "./RAPPORT_STAGE/26_06.png",
                "27/06/2024": "./RAPPORT_STAGE/27_06.png",
                "28/06/2024": "./RAPPORT_STAGE/28_06.png",
                "01/07/2024": "./RAPPORT_STAGE/01_07.png",
                "02/07/2024": "./RAPPORT_STAGE/02_07.png",
                "03/07/2024": "./RAPPORT_STAGE/03_07.png",
                "04/07/2024": "./RAPPORT_STAGE/04_07.png",
                "05/07/2024": "./RAPPORT_STAGE/05_07.png"
                // Ajout d'autres dates et chemins de captures d'écran ici
            };

            const screenshotSrc = screenshots[dateText];
            if (screenshotSrc) {
                $("#screenshot").attr("src", screenshotSrc).css({ left: '-300px', display: 'block' }).animate({ left: '0px' }, 1000);
            } else {
                $("#screenshot").hide();
            }
        }
    });
    // Scroll fluide
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Fade in elements on scroll
    $(window).scroll(function () {
        $('.fade-in').each(function () {
            const bottom_of_element = $(this).offset().top + $(this).outerHeight();
            const bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 800);
            }
        });
    });
    // Typewriter effect
    const text = "Je suis Vito Ruggeri, étudiant en BTS SIO à GAP.";
    const animatedTextElement = document.getElementById('animated-text');
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            animatedTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Adjust the speed here (in milliseconds)
        } else {
            // Hide the caret after the text is fully written
            animatedTextElement.style.borderRight = 'none';
        }
    }

    typeWriter();
});
