/**
 * See the README file for more information. API endpoint here for convenience:
 * http://safetybelt.pythonanywhere.com/quotes/random
 */

const url = "http://safetybelt.pythonanywhere.com/quotes/random"

function generate() {
    const container = document.body;
    const elem = document.getElementById('quote-text');
    const author = document.getElementById('quote-author');
    const currentColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color-2')
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const position = container.style.backgroundPosition;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.quote && data.author){
                elem.textContent = data.quote;
                author.textContent = "- " + data.author;
                document.documentElement.style.setProperty('--bg-color-1', currentColor);
                document.documentElement.style.setProperty('--bg-color-2', randomColor);
                container.style.backgroundPosition = 'left bottom'
                setTimeout(() => {
                 document.documentElement.style.setProperty('--bg-color-2',  randomColor);
                    document.documentElement.style.setProperty('--bg-color-1', randomColor);
                    container.style.backgroundPosition = 'right top'
                }, 501)
            } else {
                generate()
            }
        })
        .catch(error => {
            generate()
        })
}

(function() {
    const button = document.getElementById('generate');
    const container = document.body;
    generate()
    if (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            generate();
        });
    } else {
        setInterval(() => {
            generate()
        }, 3000)
    }
})();


