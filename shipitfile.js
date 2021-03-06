module.exports = function(shipit) {
    require('shipit-deploy')(shipit);

    shipit.initConfig({
        default: {
            workspace: '/tmp/breathe99',
            deployTo: '/usr/share/nginx/deploy_root',
            dirToCopy: './public/',
            repositoryUrl: 'https://github.com/breathe99/breathe99.com',
            ignores: ['.git', 'node_modules'],
            keepReleases: 3,
            deleteOnRollback: false,
            key: '~/.ssh/id_rsa.pub',
            shallowClone: true

        },
        production: {
            servers: ['jake@192.241.152.156']
        },
        staging : {
            servers: [
                'root@104.131.28.88',
                'root@188.166.216.218'
            ]
        }

    });

    shipit.task('post-deploy', function() {
        return shipit.remote('bash post_deploy.sh');
    });
};