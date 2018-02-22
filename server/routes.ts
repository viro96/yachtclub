import * as express from 'express';

import YouthEventCtrl from './controllers/youthevent';
import RegattenEventCtrl from './controllers/regattenevent';
import RegattaResultCtrl from './controllers/regattaresult';
import EventCtrl from './controllers/event';
import UserCtrl from './controllers/user';

import youthevent from './models/youthevent';
import regattenevent from './models/regattenevent';
import event from './models/event';
import regattaresult from './models/regattaresult';
import User from './models/user';

export default function setRoutes(app) {

  const eventCtrl = new EventCtrl();
  const youtheventCtrl = new YouthEventCtrl();
  const regatteneventCtrl = new RegattenEventCtrl();
  const regattaResultCtrl = new RegattaResultCtrl();
  const userCtrl = new UserCtrl();

  // Event
  app.route('/api/events').get(eventCtrl.getAll);
  app.route('/api/events/count').get(eventCtrl.count);
  app.route('/api/event').post(eventCtrl.insert);
  app.route('/api/event/:id').get(eventCtrl.get);
  app.route('/api/event/:id').put(eventCtrl.update);
  app.route('/api/event/:id').delete(eventCtrl.delete);

  // YouthEvent
  app.route('/api/youthevents').get(youtheventCtrl.getAll);
  app.route('/api/youthevents/count').get(youtheventCtrl.count);
  app.route('/api/youthevent').post(youtheventCtrl.insert);
  app.route('/api/youthevent/:id').get(youtheventCtrl.get);
  app.route('/api/youthevent/:id').put(youtheventCtrl.update);
  app.route('/api/youthevent/:id').delete(youtheventCtrl.delete);
  // RegattenEvent
  app.route('/api/regattenevents').get(regatteneventCtrl.getAll);
  app.route('/api/regattenevents/count').get(regatteneventCtrl.count);
  app.route('/api/regattenevent').post(regatteneventCtrl.insert);
  app.route('/api/regattenevent/:id').get(regatteneventCtrl.get);
  app.route('/api/regattenevent/:id').put(regatteneventCtrl.update);
  app.route('/api/regattenevent/:id').delete(regatteneventCtrl.delete);
  // RegattenResult
  app.route('/api/regattaresult').get(regattaResultCtrl.getAll);
  app.route('/api/regattaresult/count').get(regattaResultCtrl.count);
  app.route('/api/regattaresult').post(regattaResultCtrl.insert);
  app.route('/api/regattaresult/:id').get(regattaResultCtrl.get);
  app.route('/api/regattaresult/:id').put(regattaResultCtrl.update);
  app.route('/api/regattaresult/:id').delete(regattaResultCtrl.delete);
  // Users
  app.route('/api/login').post(userCtrl.login);
  app.route('/api/users').get(userCtrl.getAll);
  app.route('/api/users/count').get(userCtrl.count);
  app.route('/api/user').post(userCtrl.insert);
  app.route('/api/user/:id').get(userCtrl.get);
  app.route('/api/user/:id').put(userCtrl.update);
  app.route('/api/user/:id').delete(userCtrl.delete);
}
