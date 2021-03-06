export default {
    entry: {
        index: "./src/scripts/index.js"
    },
    output: {
        filename: "bundle.js"
    },  
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel"
        }]
    }
};