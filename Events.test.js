const Events = require('./Events');

test('callback not called when not subscribed', () => {
  const events = new Events();
  const fn = jest.fn();
  events.emit('test', 'data');
  expect(fn).not.toHaveBeenCalled();
});

test('subscribing to an event calls the callback with data', () => {
  const events = new Events();
  const fn = jest.fn();
  events.on('test', fn);
  events.emit('test', 'data');
  expect(fn).toHaveBeenCalledWith('data');
});

test('unsubscribing from an event does not call the callback', () => {
  const events = new Events();
  const fn = jest.fn();
  events.on('test', fn);
  events.off('test', fn);
  events.emit('test', 'data');
  expect(fn).not.toHaveBeenCalled();
});

test('multiple subscribers can be called with data', () => {
  const events = new Events();
  const fn1 = jest.fn();
  const fn2 = jest.fn();
  events.on('test', fn1);
  events.on('test', fn2);
  events.emit('test', 'data');
  expect(fn1).toHaveBeenCalledWith('data');
  expect(fn2).toHaveBeenCalledWith('data');
});
