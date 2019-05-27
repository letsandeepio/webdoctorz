const DELAY = 0.5;

//activate the paritcles plugin
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

//bulma responsive navigation

(function() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('#' + burger.dataset.target);

  burger.addEventListener('click', function() {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  });
})();

//animating the hero element
var ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime
  .timeline({ loop: true })
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  })
  .add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay
  })
  .add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  })
  .add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay
  })
  .add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  })
  .add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: 'easeInExpo',
    delay: ml4.delay
  })
  .add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });

//waypoints setup

$(document).ready(() => {
  $('.js--wp-0').waypoint(
    (direction) => {
      if (direction == 'down') {
        pJSDom[0].pJS.particles.move.enable = false; //pause the particle animation for performance
        $('.js--wp-1').addClass('show animated fadeInLeft');
        $('.js--wp-2').addClass('show animated fadeinRight');

        window.setTimeout(animateHighlight, 500);
      } else {
        pJSDom[0].pJS.particles.move.enable = true;
        pJSDom[0].pJS.fn.particlesRefresh();
      }
    },
    {
      offset: '40%'
    }
  );

  $('.js--wp-4').waypoint(
    (direction) => {
      $('.js--wp-5').addClass('show animated fadeInLeft');
      $('.js--wp-6').addClass('show animated fadeinRight');

      window.setTimeout(animateSkills, 500);
    },
    {
      offset: '50%'
    }
  );

  $('.js--wp-8').waypoint(
    (direction) => {
      Array.from(document.querySelectorAll('.js--wp-9')).forEach(
        (item, index) => {
          addClass('fadeInDown', item, index);
        }
      );

      Array.from(document.querySelectorAll('.js--wp-10')).forEach(
        (item, index) => {
          addClass('fadeInUp', item, index);
        }
      );
    },
    {
      offset: '50%'
    }
  );

  $('.js--wp-11').waypoint(
    (direction) => {
      $('.js--wp-12').addClass('show animated fadeInLeft');
      $('.js--wp-13').addClass('show animated fadeinRight');

      window.setTimeout(animateProcess, 500);
    },
    {
      offset: '50%'
    }
  );

  $('.js--wp-15').waypoint(
    (direction) => {
      $('.js--wp-16').addClass('show animated fadeInLeft');
      $('.js--wp-17').addClass('show animated fadeinRight');
      window.setTimeout(() => {
        $('.js--wp-18').addClass('show animated pulse');
      }, 500);

      window.setTimeout(animatePayment, 1500);
    },
    {
      offset: '50%'
    }
  );

  $('.js--wp-20').waypoint(
    (direction) => {
      window.setInterval(() => {
        $('.js--wp-21').toggleClass('animated tada');
      }, 2000);
    },
    {
      offset: '80%'
    }
  );
});

//helpers
function animateHighlight() {
  Array.from(document.querySelectorAll('.js--wp-3')).forEach((item, index) => {
    addClass('flipInX', item, index);
  });
}

function animateSkills() {
  Array.from(document.querySelectorAll('.js--wp-7')).forEach((item, index) => {
    addClass('flipInX', item, index);
  });
}

function animateProcess() {
  Array.from(document.querySelectorAll('.js--wp-14')).forEach((item, index) => {
    addClass('flipInX', item, index);
  });

  window.setTimeout(() => {
    $('.wireframe').addClass('show');
  }, 2000);
}

function animatePayment() {
  Array.from(document.querySelectorAll('.js--wp-19')).forEach((item, index) => {
    addClass('zoomIn', item, index);
  });
}

function addClass(className, element, index) {
  setTimeout(() => {
    element.classList.add('show');
    element.classList.add('animated');
    element.classList.add(className);
  }, index * DELAY * 1000);
}
