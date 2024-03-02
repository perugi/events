# Events

A simple pub/sub event service.

## Usage

```js
events = Events();
const cb1 = (data) => console.log(`event1 called with data: ${data}`);
events.on('event1', cb1);
events.emit('event1', 'data1'); // event1 called with data: data1
events.off('event1', cb1)
events.emit('event1', 'data2'); 
```
