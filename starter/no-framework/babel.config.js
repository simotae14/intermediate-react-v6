const { use } = require("react");

const development = (process.env.NODE_ENV || 'development') === 'development';

module.exports = {
    presets: [
        [
            '@babel/preset-react',
            {
                runtime: 'automatic', // detect from package.json react version
                useSpread: true,
                development,
            },
        ],
    ],
};