module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./'],
                alias: {
                    '@components': './src/components',
                    '@config': './src/config',
                    '@assets': './src/assets',
                    '@screens': './src/screens',
                    '@services': './src/services',
                    '@themes': './src/themes',
                    '@types': './src/types',
                    '@utils': './src/utils',
                    '@e2eUtils': './e2e/utils',
                },
            },
        ],
    ],
};
