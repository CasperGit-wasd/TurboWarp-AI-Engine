export class Model {

    constructor(name) {

        this.name = name;

        this.layers = [];

        this.optimizer = "";

        this.loss = "";

    }

    addLayer(layer) {

        this.layers.push(layer);

    }

}
