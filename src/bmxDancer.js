
var makebmxDancer = function(top, left, timeBetween) {
  makeBlinkyDancer.call(this, top, left, timeBetween);
  this.$node = $('<span class="BMXDancer animated bounce burst-12"><img src="/src/img/bike2.png"></span>');
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
};

makebmxDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makebmxDancer.prototype.constructor = makebmxDancer;

makebmxDancer.prototype.step = function() {
  var that = this;

  setTimeout(function() {
    that.step();
  }, that.timeBetweenSteps);
};

