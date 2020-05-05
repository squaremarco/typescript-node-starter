module.exports = {
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts', 'bin/**/*.{js,jsx,ts,tsx}', '!bin/**/*.d.ts'],
    roots: ['<rootDir>/src/', '<rootDir>/bin/'],
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/dist/', '/coverage/', '/node_modules/']
};
