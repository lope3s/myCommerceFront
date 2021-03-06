/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "babel-jest",
    },
    setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
};
