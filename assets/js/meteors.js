/**
 * Meteor Shower Animation - Dark Mode Only - with Toggle
 */
(function() {
  function init() {
    var meteorToggle = document.getElementById('meteorToggle');
    var isMeteors = localStorage.getItem('meteor_effect') !== 'false'; // Default to true
    
    // Create canvas
    var canvas = document.createElement('canvas');
    canvas.id = 'meteor-shower';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0'; 
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    var width, height;
    var meteors = [];
    var animationId = null;

    updateButton();

    if (meteorToggle) {
        meteorToggle.addEventListener('click', function() {
            isMeteors = !isMeteors;
            localStorage.setItem('meteor_effect', isMeteors);
            updateButton();
        });
    }

    function updateButton() {
        if (meteorToggle) {
            meteorToggle.textContent = '🌠';
            meteorToggle.style.opacity = isMeteors ? '1' : '0.5';
            meteorToggle.style.filter = isMeteors ? 'none' : 'grayscale(100%)';
            meteorToggle.title = isMeteors ? 'Turn off meteors' : 'Turn on meteors';
        }
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener('resize', resize);
    resize();

    // Meteor class
    function Meteor() {
      this.reset();
    }

    Meteor.prototype.reset = function() {
      // Spawn anywhere across the top
      this.x = Math.random() * width; 
      this.y = -100; // Always start above
      this.len = Math.random() * 150 + 50; 
      this.speed = Math.random() * 3 + 2; 
      this.size = Math.random() * 2 + 1; 
      
      // Random direction: 45 to 135 degrees (down-right to down-left)
      // 0 = Right, 90 = Down, 180 = Left
      this.angle = Math.random() * 90 + 45; 
      
      var rad = this.angle * Math.PI / 180;
      this.vx = Math.cos(rad) * this.speed;
      this.vy = Math.sin(rad) * this.speed;
      
      // Wait time: 1 meteor per 2 seconds roughly. 
      // If we have pool of 2, each waits ~4 seconds + random
      this.waitTime = Math.random() * 200 + 200; 
      this.active = false;
    };

    Meteor.prototype.update = function() {
      if (this.active) {
        this.x += this.vx;
        this.y += this.vy;
        // Check bounds: larger tolerance side/bottom
        if (this.x < -this.len || this.x > width + this.len || this.y > height + this.len) {
          this.active = false;
          this.reset();
        }
      } else {
        if (this.waitTime > 0) {
          this.waitTime--;
        } else {
          this.active = true;
          // Recalculate start pos just before launching
          this.x = Math.random() * width;
          this.y = -100;
        }
      }
    };

    Meteor.prototype.draw = function() {
      if (!this.active) return;
      
      var rad = this.angle * Math.PI / 180;
      // Tail is behind movement. 
      // Movement is (vx, vy). Tail is (x - vx*len_factor, y - vy*len_factor)?
      // Previous logic: tailX = x + cos * len. 
      // If moving right (0 deg), cos is +, tail should be left (-).
      // So tailX = x - cos * len.
      var tailX = this.x - Math.cos(rad) * this.len;
      var tailY = this.y - Math.sin(rad) * this.len;

      var gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(tailX, tailY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = this.size;
      ctx.lineCap = "round"; 
      ctx.stroke();
    };

    // Initialize meteors
    // Reduce pool to 2 to keep frequency low (1 per ~2s avg)
    meteors = []; // Clear existing
    for (var i = 0; i < 2; i++) { 
        var m = new Meteor();
        m.waitTime = Math.random() * 300;
        meteors.push(m);
    }

    function animate() {
      // Logic check: clear canvas if not active or not dark mode
      if (!isMeteors || !document.body.classList.contains('dark-mode')) {
        ctx.clearRect(0, 0, width, height);
        animationId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      
      for (var i = 0; i < meteors.length; i++) {
        meteors[i].update();
        meteors[i].draw();
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
