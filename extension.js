class AIExtension {

    constructor() {
        this.datasets = {};
        this.models = {};
    }

    getInfo() {
        return {
            id: "aiEngine",
            name: "AI Engine",

            color1: "#ff9800",
            color2: "#f57c00",

            blocks: [

                {
                    opcode: "createDataset",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "create dataset [NAME]",
                    arguments: {
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "dataset"
                        }
                    }
                },

                {
                    opcode: "createModel",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "create model [NAME]",
                    arguments: {
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "model"
                        }
                    }
                },

                {
                    opcode: "summary",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "model summary [NAME]",
                    arguments: {
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "model"
                        }
                    }
                }

            ]
        };
    }

    createDataset(args) {
        this.datasets[args.NAME] = {
            inputs: [],
            outputs: []
        };
    }

    createModel(args) {
        this.models[args.NAME] = {
            layers: [],
            optimizer: null,
            loss: null
        };
    }

    summary(args) {

        const model = this.models[args.NAME];

        if (!model)
            return "Model not found.";

        return JSON.stringify(model, null, 2);
    }

}

Scratch.extensions.register(new AIExtension());
