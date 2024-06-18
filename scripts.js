$(document).ready(function(){
    // Smooth scrolling
    $('a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Fade in elements on scroll
    $(window).scroll(function() {
        $('.fade-in').each(function() {
            const bottom_of_element = $(this).offset().top + $(this).outerHeight();
            const bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 800);
            }
        });
    });

    // Smooth scroll to top
    $('#scroll-to-top-button').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
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
