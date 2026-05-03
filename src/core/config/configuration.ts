export const databaseConfig = () => ({
    host: process.env.DB_HOST || 'localhost',
    port: Number.parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    nameDb: process.env.DB_DATABASE,
});

export default function configuration() {
    return {
        database: databaseConfig(),
        jwt: process.env.JWT_CONSTANTS
    };
}