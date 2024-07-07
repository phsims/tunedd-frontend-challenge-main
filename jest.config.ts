export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy', // Mock CSS modules
      },
    transform: {
        "^.+\\.tsx?$": "ts-jest" 
    }
}