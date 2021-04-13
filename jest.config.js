module.exports = {
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/tests/**',
        '!**/coverage/**',
        '!**/.next/**',
        '!next.config.js',
        '!jest.config.js',
        '!**/src/pages/_app.js',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@pages(.*)$': '<rootDir>/src/pages$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
    },
    setupFiles: [
        '<rootDir>/tests/setup.js',
    ],
    setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.js',],
    testMatch: [
        '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    testPathIgnorePatterns: [
        '/.next/',
        '/node_modules/',
        '/coverage/'
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
};