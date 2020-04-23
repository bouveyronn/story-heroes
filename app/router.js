import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function() {
    this.route('histoires', function() {
        this.route('catalogue', { path: '/catalogue' });
        this.route('detail', { path: '/:histoire_id' });
        this.route('new', { path: '/creer-une-histoire' });
        this.route('edit', { path: '/edit/:histoire_id' }, function() {
            this.route('genre');
        });
    });
});