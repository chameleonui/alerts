var $ = require('jquery');
var dot = require('doT');

module.exports = Alerts;

var defaults = {
	method: 'append',
	timeout: null,
	alertsContainer: '.alert-container',
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

function Alerts(element, options) {
	this.options = options || {};
	for (var i in defaults) {
		if (!(this.options[i])) this.options[i] = defaults[i];
	}
	this._element = element || this.options.alertsContainer;
	this._$element = $(this._element);
	this.alertTemplates = this.options.alertTemplates;
	this.timeout = this.options.timeout;
	this.method = '_'+this.options.method;

	this._onCLickDissmiss();
}

// Render shorteners for Info, Error, Warning, Success states

Alerts.prototype.info = function(msg) {
	this._createFlash('info', msg);
	return this;
};

Alerts.prototype.error = function(msg) {
	this._createFlash('error', msg);
	return this;
};

Alerts.prototype.warning = function(msg) {
	this._createFlash('warning', msg);
	return this;
};

Alerts.prototype.success = function(msg) {
	this._createFlash('success', msg);
	return this;
};

// Render methods: append, prepend, before & after
Alerts.prototype._append = function(htmlString) {
	this._$element.append(htmlString);
	return this;
};

Alerts.prototype._prepend = function(htmlString) {
	this._$element.prepend(htmlString);
	return this;
};

Alerts.prototype._before = function(htmlString) {
	this._$element.before(htmlString);
	return this;
};

Alerts.prototype._after = function(htmlString) {
	this._$element.after(htmlString);
	return this;
};

Alerts.prototype._createFlash = function(state, msg) {
	var _this = this;
	var rentId = this._randomID();
	var el = '#'+rentId;
	var rentMsg = msg || this.options.messages[state];
	var data = {
		alertID: rentId,
		alertMsg: rentMsg
	};
	this._viewAlert(this.alertTemplates[state], data)._renderTemplate(el);
	
	return this;
};

Alerts.prototype._renderTemplate = function(el) {
	var _this = this;
	if(this.timeout !== null) {
		setTimeout(function(){
			$(el).addClass(_this.options.classShown);
		}, 1);
		setTimeout(function(){
			_this._dissmiss(el);
		}, _this.timeout);
	} else {
		setTimeout(function(){
			$(el).addClass(_this.options.classShown);
		}, 1);
	}

	return this;
};

Alerts.prototype._viewAlert = function(template, data) {
	this._templates(template);
	this[this.method](this._createItem(data));

	return this;
};

Alerts.prototype._randomID = function() {
	return Math.random().toString(36).slice(2);
};

Alerts.prototype._templates = function(dotTemplate) {
	this._template = dot.template(dotTemplate);
	return this._template;
};

Alerts.prototype._createItem = function(data) {
	return this._template(data);
};

Alerts.prototype._dissmiss = function(el) {
	$(el).removeClass(this.options.classShown);
	setTimeout(function(){
		$(el).remove();
	}, 3000);

	return this;
};

Alerts.prototype._onCLickDissmiss = function() {
	$('body').on('click', '[data-alert-dissmiss]', this, function(e){
		e.preventDefault();
		var dissmissID = $(this).data('alert-dissmiss');
		var el = '#'+dissmissID;
		e.data._dissmiss(el);
	});
};