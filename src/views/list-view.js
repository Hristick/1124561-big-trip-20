import CardView from './card-view.js';
import EditorView from './editor-view.js';
import View from './view.js';
//import './list-view.css';


/**
 * @extends {View<ListViewState>}
 */
class ListView extends View {
  constructor() {
    super();

    this.classList.add('trip-list');
    this.setAttribute('role', 'list');
  }

  /**
   * @override
   */

  render() {
    const views = this.state.items.map(this.createItemView);

    this.replaceChildren(...views);
  }

  /**
   *
   * @param {PointViewState} state
   * @return {EditorView | CardView}
   */
  createItemView(state) {
    const view = state.isEditable ? new EditorView : new CardView;

    view.classList.add('trip-list__item');
    view.setAttribute('role', 'listItem');
    view.state = state;
    view.render();

    return view;
  }

}

customElements.define('list-view', ListView);

export default ListView;
