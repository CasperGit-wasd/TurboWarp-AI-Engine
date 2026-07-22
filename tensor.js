export class Tensor {

    constructor(data) {

        this.data = data;

    }

    shape() {

        if (!Array.isArray(this.data))
            return [];

        if (!Array.isArray(this.data[0]))
            return [this.data.length];

        return [
            this.data.length,
            this.data[0].length
        ];
    }

}
