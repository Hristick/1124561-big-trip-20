import View from './view.js';
import {html} from '../utils.js';

class AddView extends View {
  constructor() {
    super();

    this.classList.add('add-view');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
    <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled="">New event</button>
    `;
  }
}

customElements.define('add-view', AddView);

export default AddView;
