import * as sapper from '@sapper/app';
import LogRocket from 'logrocket';

LogRocket.init('vx3sp9/orangealligatorio-prod');

sapper.start({
	target: document.querySelector('#sapper')
});