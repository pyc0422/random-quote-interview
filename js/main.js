/**
 * See the README file for more information. API endpoint here for convenience:
 * http://safetybelt.pythonanywhere.com/quotes/random
 */


function generate() {
    const elem = document.getElementById('quote');
    elem.innerHTML = "Quote goes here!";
}

(function() {
    const button = document.getElementById('generate');
    if (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            generate();
        });
    }
})();