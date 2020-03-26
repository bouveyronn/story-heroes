import DS from 'ember-data';
import ENV from "story-heroes/config/environment";
import JSONAPIAdapter from '@ember-data/adapter/json-api'
const api = "http://localhost:8080"




export default JSONAPIAdapter.extend({
    host: api,
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