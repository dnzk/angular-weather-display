import test from 'tape';
import Request from '../src/common/models/request';

let req = new Request();

test('base config', function (t) {
  t.equal(req.base, 'http://api.openweathermap.org/data/2.5/weather?', 'base url should be correct');
  t.equal(req.APPID, 'APPID=7e0e82c5956fdfe279183fcceccccceb', 'APPID should be correct');
  t.end();
});

test('.getUrl', function (t) {
  t.equal(req.getUrl(), 'http://api.openweathermap.org/data/2.5/weather?&APPID=7e0e82c5956fdfe279183fcceccccceb', 'without param should return base and appid');
  t.equal(req.getUrl('zip=90210'), 'http://api.openweathermap.org/data/2.5/weather?zip=90210&APPID=7e0e82c5956fdfe279183fcceccccceb', 'with param should return base and appid with the param inserted');
  t.end();
});
