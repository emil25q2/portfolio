window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
}

//scroll up button
// We select the element we want to target
var target = document.querySelector("footer");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

// Next we want to create a function that will be called when that element is intersected
function callback(entries) {
    // The callback will return an array of entries, even if you are only observing a single item
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Show button
            scrollToTopBtn.classList.add("showBtn");
        } else {
            // Hide button
            scrollToTopBtn.classList.remove("showBtn");
        }
    });
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);


//burgermenu
function myFunction(x) {
    x.classList.toggle("change");

    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

(function () {
    ('a[href*=#]').on('click', function (e) {
        e.preventDefault();
        ('html, body').animate({
            scrollTop: ((this).attr('href')).offset().top
        }, 500, 'linear');
    });
});
