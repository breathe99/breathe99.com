module.exports = function(shipit) {
    require('shipit-deploy')(shipit);

    shipit.initConfig({
        default: {
            workspace: '/tmp/breathe99',
            deployTo: '/usr/share/nginx/html_root',
            dirToCopy: './',
            repositoryUrl: 'https://github.com/breathe99/breathe99.com',
            ignores: ['.git', 'node_modules'],
            keepReleases: 3,
            deleteOnRollback: false,
            key: '~/.ssh/id_rsa.pub',
            shallowClone: true

        },
        production: {
            servers: 'jake@192.241.152.156'
        }

    });

    shipit.task('post-deploy', function() {
        return shipit.remote('bash post_deploy.sh');
    });
};