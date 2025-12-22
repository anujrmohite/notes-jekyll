/**
 * Snow Fall Animation - Cross-browser compatible
 */
(function() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSnow);
  } else {
    initSnow();
  }

  function initSnow() {
    // Create container
    var container = document.createElement('div');
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

    // Create snowflakes
    for (var i = 0; i < count; i++) {
      var flake = createFlake(i);
      snowflakes.push(flake);
      container.appendChild(flake.el);
    }

    function createFlake(index) {
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
      for (var i = 0; i < snowflakes.length; i++) {
        updateFlake(snowflakes[i]);
      }
      requestAnimationFrame(animate);
    }

    animate();
  }
})();
