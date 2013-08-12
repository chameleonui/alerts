
# Alerts

  Alerts component for Info, Error, Warning & Success states.

## Installation

  Install with [component(1)](http://component.io):

```sh
$ component install chameleonui/alerts
```

## API

```js
var alert = new Alerts('.alerts-container', {method: 'prepend', timeout: 5000});
```

Alerts have 4 states:

- Information
- Error
- Warning
- Success

### Alerts options and variables:

```js
var options = {
	method: 'append',
	timeout: null,
	selectorContainer: '.alert-container',
	classShown: 'is-shown',
	messages: {
		info: "<strong>Information:</strong> This alert needs your attention, but it's not super important.",
		error: '<strong>Error:</strong> Change a few things up and try submitting again.',
		warning: "<strong>Warning:</strong> Best check yo self, you're not looking too good.",
		success: '<strong>Success:</strong> You successfully read this important alert message.'
	},
	alertTemplates: {
		info: '<div class="alert-message is-info" id="{{=it.alertID}}"><div class="alert-content">{{=it.alertMsg}} <a href="#" data-alert-dissmiss="{{=it.alertID}}">Close</a></div></div>',
		error: '<div class="alert-message is-error" id="{{=it.alertID}}"><div class="alert-content">{{=it.alertMsg}} <a href="#" data-alert-dissmiss="{{=it.alertID}}">Close</a></div></div>',
		warning: '<div class="alert-message is-warning" id="{{=it.alertID}}"><div class="alert-content">{{=it.alertMsg}} <a href="#" data-alert-dissmiss="{{=it.alertID}}">Close</a></div></div>',
		success: '<div class="alert-message is-success" id="{{=it.alertID}}"><div class="alert-content">{{=it.alertMsg}} <a href="#" data-alert-dissmiss="{{=it.alertID}}">Close</a></div></div>'
	}
};
```

### Alerts.info = function(stringHtml)

Render Information state

### Alerts.error(stringHtml)

Render Error state

### Alerts.warning(stringHtml)

Render Warning state

### Alerts.success(stringHtml)

Render Success state


## Author(s)

Edgedesign s.r.o. – [Daniel Sitek](https://github.com/danielsitek)

## License

The MIT License (MIT)

Copyright © 2013 Edgedesign s.r.o.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.