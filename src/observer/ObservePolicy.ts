/**
 * @module observer
 * @author Billow Z <billowz@hotmail.com>
 * @created 2019-06-04T15:12:41.739Z+08:00
 * @modified 2019-06-04T15:12:41.739Z+08:00
 */

import { ObserverTarget, IObserver } from './IObserver'

export type IWatcher = {
	/**
	 * notify topics
	 * @param original the original value
	 */
	notify(original: any): void
}

/**
 * @ignore
 */
export interface ObservePolicy {
	/**
	 * policy name
	 */
	__name: string

	/**
	 * is proxy policy
	 */
	__proxy?: 'vb' | 'proxy'

	/**
	 * create Proxy
	 * @param observer	observer
	 * @param target 	target object
	 * @param isArray 	is array target
	 */
	__createProxy: <T extends ObserverTarget>(observer: IObserver<T>, target: T, isArray: boolean) => T

	/**
	 * watch property
	 * @param observer	observer
	 * @param prop		the property
	 * @param watcher	the watcher of the property
	 */
	__watch: <T extends ObserverTarget>(observer: IObserver<T>, prop: string, watcher: IWatcher) => Error | void
}
