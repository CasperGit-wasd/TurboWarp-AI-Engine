//==================================================
// TurboWarp AI Engine
// Version 0.1.0
//==================================================

// Constants

// Utility Functions

// Dataset Class

// Tensor Class

// Dense Layer

// Model Class

// AI Extension

// Register Extension

(function (Scratch) {
    "use strict";

    //==================================================
    // TurboWarp AI Engine
    // Version 0.1.0-alpha1
    //==================================================


    if (!Scratch.extensions.unsandboxed) {
        throw new Error(
            "TurboWarp AI Engine requires an unsandboxed extension."
        );
    }


    //==================================================
    // Dataset Class
    //==================================================

    class Dataset {

        constructor(name) {

            this.name = name;

            this.inputs = [];

            this.outputs = [];

        }


        addInput(data) {

            this.inputs.push(data);

        }


        addOutput(data) {

            this.outputs.push(data);

        }


        clear() {

            this.inputs = [];

            this.outputs = [];

        }


        size() {

            return this.inputs.length;

        }

    }



    //==================================================
    // Model Class
    //==================================================

    class Model {

        constructor(name) {

            this.name = name;

            this.layers = [];

            this.optimizer = null;

            this.loss = null;

        }


        summary() {

            let text = "";

            text += "Model: " + this.name + "\n";

            text += "Layers: " + this.layers.length + "\n";

            text += "Optimizer: "
                + (this.optimizer || "none")
                + "\n";

            text += "Loss: "
                + (this.loss || "none");


            return text;

        }

    }



    //==================================================
    // TurboWarp Extension
    //==================================================

    class AIEngine {


        constructor() {

            this.datasets = new Map();

            this.models = new Map();

        }



        getInfo() {

            return {

                id: "aiengine",

                name: "AI Engine",

                color1: "#ff9800",

                color2: "#f57c00",


                blocks: [

                    // Dataset

                    {
                        opcode: "createDataset",

                        blockType:
                            Scratch.BlockType.COMMAND,

                        text:
                            "create dataset [NAME]",

                        arguments: {

                            NAME: {

                                type:
                                Scratch.ArgumentType.STRING,

                                defaultValue:
                                "dataset"

                            }

                        }

                    },


                    {
                        opcode: "deleteDataset",

                        blockType:
                            Scratch.BlockType.COMMAND,

                        text:
                            "delete dataset [NAME]",

                        arguments: {

                            NAME: {

                                type:
                                Scratch.ArgumentType.STRING,

                                defaultValue:
                                "dataset"

                            }

                        }

                    },


                    {
                        opcode: "datasetExists",

                        blockType:
                            Scratch.BlockType.BOOLEAN,

                        text:
                            "dataset [NAME] exists?",

                        arguments: {

                            NAME: {

                                type:
                                Scratch.ArgumentType.STRING,

                                defaultValue:
                                "dataset"

                            }

                        }

                    },


                    // Models


                    {
                        opcode: "createModel",

                        blockType:
                            Scratch.BlockType.COMMAND,

                        text:
                            "create model [NAME]",

                        arguments: {

                            NAME: {

                                type:
                                Scratch.ArgumentType.STRING,

                                defaultValue:
                                "model"

                            }

                        }

                    },


                    {
                        opcode: "deleteModel",

                        blockType:
                            Scratch.BlockType.COMMAND,

                        text:
                            "delete model [NAME]",

                        arguments: {

                            NAME: {

                                type:
                                Scratch.ArgumentType.STRING,

                                defaultValue:
                                "model"

                            }

                        }

                    },


                    {
                        opcode: "modelSummary",

                        blockType:
                            Scratch.BlockType.REPORTER,

                        text:
                            "model summary [NAME]",

                        arguments: {

                            NAME: {

                                type:
                                Scratch.ArgumentType.STRING,

                                defaultValue:
                                "model"

                            }

                        }

                    }

                ]

            };

        }



        //==============================
        // Dataset Functions
        //==============================


        createDataset(args) {

            const name = args.NAME;


            if (!this.datasets.has(name)) {

                this.datasets.set(
                    name,
                    new Dataset(name)
                );

            }

        }



        deleteDataset(args) {

            this.datasets.delete(args.NAME);

        }



        datasetExists(args) {

            return this.datasets.has(args.NAME);

        }



        //==============================
        // Model Functions
        //==============================


        createModel(args) {

            const name = args.NAME;


            if (!this.models.has(name)) {

                this.models.set(
                    name,
                    new Model(name)
                );

            }

        }



        deleteModel(args) {

            this.models.delete(args.NAME);

        }



        modelSummary(args) {

            const model =
                this.models.get(args.NAME);


            if (!model) {

                return "Model not found.";

            }


            return model.summary();

        }


    }


    Scratch.extensions.register(
        new AIEngine()
    );


})(Scratch);
