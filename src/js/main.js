import homePage from './pages/homePage';
import singleItemPage from './pages/singleItemPage';
import favouritesPage from './pages/favouritesPage';
import bidsPage from './pages/bidsPage';
import errorPage from './pages/errorPage';
import EventImitter from './utils/EventEmitter';
import Favourites from './favourites/favouritesModel'

const state = {
	results: [],
	emitter: new EventImitter(),
	favourites: new Favourites()
};

// window.state = state;

const routes = { 
	'/': homePage ,
	'item': singleItemPage ,
	'favourites': favouritesPage ,
	'bids': bidsPage 
	};

function findComponentByPath(path, routes) {
	return routes[path] || errorPage;
}

function router() {
	// Определяем запрашиваемый route
	const pathArray = location.hash.split('/');
	const currentPath = pathArray[0] && pathArray[1] ? pathArray[1] : '/';

	state.routeParams = pathArray[2] || "";

	// Отрисовываем содержимое страницы в зависимости от route
	const component = findComponentByPath(currentPath, routes) 
	component(state);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
