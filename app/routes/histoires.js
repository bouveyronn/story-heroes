import Route from '@ember/routing/route';
import ENV from 'story-heroes/config/environment';

export default Route.extend({
    model() {
        return this.store.findAll('histoire');

    }
});