// Copyright 2018 Novo Nordisk Foundation Center for Biosustainability, DTU.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
			position: 'toolbar',
			authRequired: false
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
