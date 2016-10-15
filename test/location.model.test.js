import test from 'tape';
import LocationModel from '../src/common/models/location.model';

let loc = new LocationModel();

test('getCurrentParams', function (t) {
  t.equal(loc.getCurrentParams().constructor, Object, 'current params should be of type object');
  t.end();
});

test('setCurrentParams', function (t) {
  loc.setCurrentParams({
    a: 'a',
    b: 'b'
  });
  t.deepEqual(loc.getCurrentParams(), {
    a: 'a',
    b: 'b'
  }, 'set current params should set the current params');
  t.end();
});

test('getCurrentParamsStringified', function (t) {
  loc.setCurrentParams({
    zip: '90210'
  });
  t.equal(loc.getCurrentParamsStringified(), 'zip=90210&', 'should return stringified params');
  t.end();
});
