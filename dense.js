export class Dense {

    constructor(units, activation) {

        this.type = "Dense";

        this.units = units;

        this.activation = activation;

        this.weights = [];

        this.biases = [];

    }

}
