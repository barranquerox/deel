export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
    testMatch: ['**/*.spec.ts'],
    testTimeout: 20000,
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
    reporters: [
        "default",
        [
            "jest-html-reporters",
            {
                pageTitle: "Test Report",
                outputPath: "test-report.html",
                includeFailureMsg: true,
                includeConsoleLog: true,
            },
        ],
    ],
};
