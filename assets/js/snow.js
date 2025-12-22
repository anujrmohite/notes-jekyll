/**
 * Snow Fall Animation - with Toggle
 */
(function() {
  function init() {
    var snowToggle = document.getElementById('snowToggle');
    var isSnowing = localStorage.getItem('snow_effect') !== 'false'; // Default to true
    var container = null;
    var animationId = null;

    // Initialize button state
    updateButton();

    // Start snow if enabled
    if (isSnowing) {
      startSnow();
    }

    if (snowToggle) {
      snowToggle.addEventListener('click', function() {
        isSnowing = !isSnowing;
        localStorage.setItem('snow_effect', isSnowing);
        updateButton();

        if (isSnowing) {
          startSnow();
        } else {
          stopSnow();
        }
      });
    }

    function updateButton() {
      if (snowToggle) {
        snowToggle.textContent = '❄️';
        snowToggle.style.opacity = isSnowing ? '1' : '0.5';
        snowToggle.style.filter = isSnowing ? 'none' : 'grayscale(100%)';
        snowToggle.title = isSnowing ? 'Turn off snow' : 'Turn on snow';
      }
    }

    function startSnow() {
      if (document.getElementById('snowfall')) return;

      container = document.createElement('div');
      container.id = 'snowfall';
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.pointerEvents = 'none';
      container.style.zIndex = '9999';
      container.style.overflow = 'hidden';
      document.body.appendChild(container);

      var snowflakes = [];
      var chars = ['❄', '❅', '❆', '✻', '•'];
      var count = 60;

      for (var i = 0; i < count; i++) {
        var flake = createFlake();
        snowflakes.push(flake);
        container.appendChild(flake.el);
      }

      function createFlake() {
        var el = document.createElement('div');
        el.innerHTML = chars[Math.floor(Math.random() * chars.length)];
        el.style.position = 'absolute';
        el.style.color = '#60a5fa';
        el.style.textShadow = '0 0 4px rgba(96,165,250,0.8)';
        el.style.userSelect = 'none';
        
        var size = 8 + Math.random() * 12;
        el.style.fontSize = size + 'px';
        
        return {
          el: el,
          x: Math.random() * window.innerWidth,
          y: Math.random() * -window.innerHeight,
          size: size,
          speed: 0.5 + Math.random() * 1.5,
          wind: (Math.random() - 0.5) * 0.5,
          opacity: 0.5 + Math.random() * 0.5
        };
      }

      function updateFlake(flake) {
        flake.y += flake.speed;
        flake.x += flake.wind + Math.sin(flake.y * 0.01) * 0.5;

        if (flake.y > window.innerHeight + 20) {
          flake.y = -20;
          flake.x = Math.random() * window.innerWidth;
        }
        if (flake.x > window.innerWidth + 20) flake.x = -20;
        if (flake.x < -20) flake.x = window.innerWidth + 20;

        flake.el.style.transform = 'translate(' + flake.x + 'px, ' + flake.y + 'px)';
        flake.el.style.opacity = flake.opacity;
      }

      function animate() {
        if (!isSnowing) return;
        
        for (var i = 0; i < snowflakes.length; i++) {
          updateFlake(snowflakes[i]);
        }
        animationId = requestAnimationFrame(animate);
      }

      animate();
    }

    function stopSnow() {
       if (container) {
         container.remove();
         container = null;
       }
       if (animationId) {
         cancelAnimationFrame(animationId);
         animationId = null;
       }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
