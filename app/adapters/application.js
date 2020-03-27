import ENV from "story-heroes/config/environment";
import RESTAdapter from '@ember-data/adapter/rest';

export default RESTAdapter.extend({
    host: ENV.apiUrl,
    handleResponse(status, headers, payload) {
        if (status !== 200 && payload && payload.message) {
            return payload;
        } else if (status === 0 && payload === "") {
            return { error: "Une erreur technique est survenue" };
        } else {
            return this._super(...arguments);
        }
    }
});
