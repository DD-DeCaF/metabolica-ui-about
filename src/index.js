import angular from 'angular';
import {DevAppModule} from 'metabolica';
import {AboutModule} from './about/about.module';
export {AboutModule} from './about/about.module';

export const AboutAppModule = angular.module('AboutApp', [
	DevAppModule.name,
	AboutModule.name
]);
