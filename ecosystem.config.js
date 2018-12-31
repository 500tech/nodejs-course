module.exports = {
  apps : [{
    name: 'Service A',
    script: 'index.js',
    node_args:['--inspect'],
    instances: 1,
    // mode:'cluster',
    autorestart: true,
    watch: true,
    env: {
      NODE_ENV: 'development',
      PORT: '9090'

    }
  },
  {
    name: 'Service B',
    script: './salary-service/index.js',

    instances: 1,
    autorestart: true,
    watch: true,
    env: {
      NODE_ENV: 'development',
      PORT: '9092'

    }
  }]
};
