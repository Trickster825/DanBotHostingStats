module.exports = {
    isGameServer: false,
    isDisabled: false,
    subCategory: "Languages",
    createServer: createServer
}

function createServer(ServerName, UserID){
    return {
        name: ServerName,
        user: UserID,
        nest: 5,
        egg: 50,
        docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
        startup: `/usr/local/bin/npm i && /usr/local/bin/node /home/container/{{BOT_JS_FILE}}`,
        limits: {
            memory: 0,
            swap: -1,
            disk: 10240,
            io: 500,
            cpu: 0,
        },
        environment: {
            BOT_JS_FILE: "index.js",
        },
        feature_limits: {
            databases: 2,
            allocations: 1,
            backups: 10,
        },
        deploy: {
            locations: botswebdbFREE,
            dedicated_ip: false,
            port_range: [],
        },
        start_on_completion: false,
    };
};