import './style.scss';

console.log(module);

const component = () => {
//function component() {
    var elem = document.createElement('div');
    elem.style.height = '100px';
    elem.innerHTML = 'Hello webpack!';
    elem.classList.add('hello');


    return elem;
};


document.body.appendChild(component());