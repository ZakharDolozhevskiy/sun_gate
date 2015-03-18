exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare: function(){
        global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
        };
    },
    specs: ['test/e2e/*.js']
};