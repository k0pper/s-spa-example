import * as singleSpa from 'single-spa';

singleSpa.declareChildApplication('navbarApp', () => import('../navbarApp/navbarApp.js'), () => true);
singleSpa.declareChildApplication('reactApp', () => import('../app1/app1.js'), hashPrefix('/reactAppRoute'));
singleSpa.declareChildApplication('ng2App', () => import('../app2/app2.js'), hashPrefix('/ng2App'));

singleSpa.start();

function hashPrefix(prefix) {
    return function(location) {
        return location.hash.startsWith(`#${prefix}`);
    }
}
