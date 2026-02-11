import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'your_username',
    password: 'your_password',
    database: 'your_database',
    synchronize: true,
    logging: false,
    entities: [
        // Add your entities here
    ],
    subscribers: [],
    migrations: [],
});

export default AppDataSource;