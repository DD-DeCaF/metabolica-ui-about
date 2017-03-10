import angular from 'angular';
import INFO from '../../img/icons/info_outline.svg';
import template from './about.component.html';


export const AboutComponent = {
    template: template
};


export const AboutModule = angular.module('about', [])
	.component('about', AboutComponent)
	.config(function ($mdIconProvider, $stateProvider, appNavigationProvider) {
		$mdIconProvider.icon('info', INFO, 24);

        appNavigationProvider.register('app.about', {
            title: 'About',
            icon: 'info',
			position: 'toolbar'
        });

        $stateProvider
            .state({
                name: 'app.about',
                url: '/about',
                component: 'about',
                data: {
                    title: 'About' // FIXME look up from app nagivation provider
                }
            })
    });
