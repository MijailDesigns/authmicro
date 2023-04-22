module.exports= {
    api: {
        port: process.env.API_PORT || 3000
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'sql10.freemysqlhosting.net',
        user: process.env.MYSQL_USER || 'sql10608113',
        password: process.env.MYSQL_PASS || 'm5HFuypK5h',
        database: process.env.MYSQL_DB || 'sql10608113',
    }
}