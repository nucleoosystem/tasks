/**
 * Nextcloud - Tasks
 *
 * @author Raimund Schlüßler
 * @copyright 2018 Raimund Schlüßler <raimund.schluessler@mailbox.org>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import CollectionGeneral from './TheCollections/General'
import CollectionWeek from './TheCollections/Week'
import CollectionCalendar from './TheCollections/Calendar'
import TheDetails from './TheDetails'

const routes = [
	// using
	// { path: '/collections/all', component: CollectionGeneral, alias: '/' },
	// instead of
	{ path: '/', redirect: '/collections/all' },
	// would also be an option, but it currently does not work
	// reliably with router-link due to
	// https://github.com/vuejs/vue-router/issues/419
	{ path: '/collections/week', component: CollectionWeek },
	{ path: '/collections/week/tasks/:taskId', components: { default: CollectionWeek, details: TheDetails } },
	{ path: '/collections/:collectionId', component: CollectionGeneral, props: true },
	{ path: '/collections/:collectionId/tasks/:taskId', components: { default: CollectionGeneral, details: TheDetails }, props: { default: true } },
	{ path: '/calendars/:calendarId', component: CollectionCalendar, props: true },
	{ path: '/calendars/:calendarId/tasks/:taskId', components: { default: CollectionCalendar, details: TheDetails }, props: { default: true } }
]

Vue.use(VueRouter)

export default new VueRouter({
	routes // short for `routes: routes`
})