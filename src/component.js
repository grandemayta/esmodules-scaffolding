import template from './component.pug';
import './component.scss';
import image from 'assets/js.svg';
import config from 'config';

export default class Component {
  constructor(selector) {
    this.myEl = document.querySelector(selector);
    this.data = {
      title: this.myEl.getAttribute('data-title'),
      href: this.myEl.getAttribute('data-href'),
      message: config.message,
      image
    };
  }

  click() {
    this.myEl.addEventListener('click', e => {
      e.preventDefault();
      window.open(this.data.href, true);
    });
  }

  render() {
    this.myEl.innerHTML = template(this.data);
    this.click();
  }
}
