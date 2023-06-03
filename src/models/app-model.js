import Model from "./model.js";
import points from "../data/points.json";
import destination from"../data/destinations.json";
import offerGroups from "../data/offers.json";

class AppModel extends Model {
    #points;
    #destinations;
    #offerGroups;

    constructor () {
        super();
        this.#points = points;
        this.#destinations = destination;
        this.#offerGroups = offerGroups;
    }

   /**
    * @return {Array<Point>}
    */

    getPoints() {
        return this.#points.map(AppModel.adaptPointForClient);
    }
    
    /**
     * @return {Array<destination>}
     */
    getDestinations() {
        return structuredClone(this.#destinations);
    }

    /**
     * @return {Array<Offers>}
     */

    getOfferGroups() {
        return structuredClone(this.#offerGroups);
    }
    /**
     * @param {PointInSnakeCase} point
     * @return{Point}
     */

    static adaptPointForClient(point) {
        return{
            id: point.id,
            type: point.type,
            destinationId: point.destination,
            startDateTime: point.date_from,
            endDateTime: point.date_to,
            basePrice: point.base_price,
            offerIds: point.offers,
            isFavorite: point.is_favorite
        };
    }
}

export default AppModel;
