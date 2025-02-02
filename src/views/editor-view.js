import View from './view.js';
import {html} from '../utils.js';

/**
 * @extends {View<PointViewState>}
 */

class EditorView extends View {
  constructor() {
    super();

    this.classList.add('editor-view');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
     <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        ${this.createTypeFieldHtml()}
        ${this.createDestinationFieldHtml()}
        ${this.createScheduleFieldHtml()}
        ${this.createPriceFieldHtml()}
        ${this.createSubmitButtonHtml()}
        ${this.createResetButtonHtml()}
        ${this.createCloseButtonHtml()}
      </header>
      <section class="event__details">
        ${this.createOfferFieldHtml()}
        ${this.createDestinationHtml()}
      </section>
     </form>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createTypeFieldHtml() {
    return html`
    <div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-1">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>

        <div class="event__type-item">
          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
        </div>
      </fieldset>
    </div>
  </div>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createDestinationFieldHtml() {
    return html`
    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        Flight
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">
      <datalist id="destination-list-1">
        <option value="Amsterdam"></option>
        <option value="Geneva"></option>
        <option value="Chamonix"></option>
      </datalist>
    </div>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createScheduleFieldHtml() {
    return html`
     <div class="event__field-group  event__field-group--time">
       <label class="visually-hidden" for="event-start-time-1">From</label>
       <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
        —
       <label class="visually-hidden" for="event-end-time-1">To</label>
       <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
     </div>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createPriceFieldHtml() {
    return html`
     <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        €
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
     </div>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createSubmitButtonHtml() {
    return html`
    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createResetButtonHtml() {
    return html`
    <button class="event__reset-btn" type="reset">Cancel</button>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createCloseButtonHtml() {
    return html`
    <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createOfferFieldHtml() {
    return html`
    <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked="">
        <label class="event__offer-label" for="event-offer-luggage-1">
          <span class="event__offer-title">Add luggage</span>
          +€&nbsp;
          <span class="event__offer-price">50</span>
        </label>
      </div>

      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked="">
        <label class="event__offer-label" for="event-offer-comfort-1">
          <span class="event__offer-title">Switch to comfort</span>
          +€&nbsp;
          <span class="event__offer-price">80</span>
        </label>
      </div>
    </div>
  </section>
    `;
  }

  /**
   * @return {SafeHtml}
   */
  createDestinationHtml() {
    return html`
    <section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>

    <div class="event__photos-container">
      <div class="event__photos-tape">
        <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">
        <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">
        <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">
        <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">
        <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">
      </div>
    </div>
  </section>
    `;
  }
}

customElements.define('editor-view', EditorView);

export default EditorView;
