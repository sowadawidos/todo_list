module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['module:metro-react-native-babel-preset', 'babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['.'],
                    alias: {
                        '@components': './src/components',
                    },
                },
            ],
            ['inline-dotenv'],
            [
                'module:react-native-dotenv',
                {
                    moduleName: '@env',
                    path: '.env',
                    blacklist: null,
                    whitelist: null,
                    safe: false,
                    allowUndefined: true,
                },
            ],
            ['react-native-reanimated/plugin'],
        ],
    }
}
