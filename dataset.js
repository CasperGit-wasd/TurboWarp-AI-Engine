export class Dataset {

    constructor(name) {

        this.name = name;

        this.inputs = [];

        this.outputs = [];

    }

    add(input, output) {

        this.inputs.push(input);

        this.outputs.push(output);

    }

}
