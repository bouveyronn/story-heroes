import Model, { attr } from '@ember-data/model';

export default class HistoireModel extends Model {
    @attr('string') titre;
    @attr('string') resume;
}