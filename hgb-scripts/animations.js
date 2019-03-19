if (!Array.from) {
  Array.from = function (object) {
      return [].slice.call(object);
  };
}

function startItineraryTimeline() {
  const masterTimeline = new TimelineMax({
      onComplete: function () {
          masterTimeline.restart();
      }
  });

  // Email animation
  masterTimeline.from('#email', 0.5, { opacity: 0, ease: Power1.easeIn, y: 300 });
  masterTimeline.staggerFrom('#TravelAgent, #TravelReservations', 0.2, { opacity: 0, ease: Power1.easeIn }, 0.1);
  masterTimeline.staggerFrom('.email-mock-text', 0.3, { opacity: 0, width: 0, ease: Power1.easeIn }, 0.03);
  masterTimeline.from('#send-btn', 0.2, { opacity: 0, ease: Power1.easeIn });
  masterTimeline.from('#send-btn', 0.25, { filter: 'url(#dropshadow)' });
  masterTimeline.to('#send-btn', 0.25, { filter: 'url(#inset-shadow)', fill: '#3D83D5', ease: Power1.easeIn });
  masterTimeline.to('#send-btn', 0.25, { filter: 'url(#dropshadow)', fill: '#4A90E2', ease: Power1.easeOut });
  masterTimeline.to('#email', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, '+=1');

  // Itinerary 3 animation
  masterTimeline.from('#itinerary-3 .mock-text', 0.3, { width: 0, ease: Power1.easeIn }, 'itin3Anim')
  masterTimeline.from('.itinerary-3-date', 0.5, { opacity: 0, ease: Power2.easeIn, x: -200 }, 'itin3Anim');
  masterTimeline.from('.itinerary-3-card', 1, { opacity: 0 }, 'itin3Anim');
  masterTimeline.from('#itinerary-3 #Button-3', 0.5, { opacity: 0, y: 500, ease: Power1.easeIn }, 'itin3Anim');
  masterTimeline.from('#itinerary-3 #Rounded-Rectangle', 0.25, { filter: 'url(#dropshadow)' });
  masterTimeline.to('#itinerary-3 #Rounded-Rectangle', 0.1, { filter: 'url(#inset-shadow)', fill: '#3F7F9A', scale: 0.99, ease: Power1.easeIn });
  masterTimeline.to('#itinerary-3 #Rounded-Rectangle', 0.25, { filter: 'url(#dropshadow)', fill: '#4C8CA7', scale: 1, ease: Power1.easeOut });
  masterTimeline.staggerTo('.itinerary-3-card', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, .05, 'itin3Anim+=2.2');
  masterTimeline.to('.itinerary-3-date', 1, { opacity: 0 }, 'itin3Anim+=2.2');
  masterTimeline.to('#itinerary-3 #Button-3', 1, { opacity: 0, backgroundColor: '#00FFFF', y: 500, ease: Power1.easeOut }, 'itin3Anim+=2.2');

  // Slack animation
  masterTimeline.from('#slack', 0.7, { opacity: 0, ease: Power1.easeIn, y: 400 });
  masterTimeline.staggerFrom('.slack-mock-text', 0.3, { opacity: 0, width: 0, ease: Power1.easeOut }, 0.02);
  masterTimeline.to('#slack', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, '+=1');

  // Itinerary 2 animation
  masterTimeline.from('#itinerary-2 .mock-text', 0.3, { width: 0, ease: Power1.easeIn }, 'itin2Anim')
  masterTimeline.from('.itinerary-2-date', 0.5, { opacity: 0, ease: Power2.easeIn, x: -200 }, 'itin2Anim');
  masterTimeline.from('.itinerary-2-card', 1, { opacity: 0 }, 'itin2Anim');
  masterTimeline.from('#itinerary-2 #Button-2', 0.5, { opacity: 0, y: 500, ease: Power1.easeIn }, 'itin2Anim');
  masterTimeline.to('#itinerary-2 .has-error', 0.3, { opacity: 0, x: 500, ease: Power1.easeOut });
  masterTimeline.to('#itinerary-2 .has-error .warning-stripe', 0.0, { fill: '#7ED321' });
  masterTimeline.to('#itinerary-2 .has-error .warning-icon', 0.0, { opacity: 0 });
  masterTimeline.to('#itinerary-2 .has-error', 0.7, { opacity: 1, x: 0, ease: Elastic.easeInOut.config(1, 0.7) });
  masterTimeline.from('#itinerary-2 #Rounded-Rectangle', 0.25, { filter: 'url(#dropshadow)' });
  masterTimeline.to('#itinerary-2 #Rounded-Rectangle', 0.1, { filter: 'url(#inset-shadow)', fill: '#3F7F9A', scale: 0.99, ease: Power1.easeIn });
  masterTimeline.to('#itinerary-2 #Rounded-Rectangle', 0.25, { filter: 'url(#dropshadow)', fill: '#4C8CA7', scale: 1, ease: Power1.easeOut }, 'buttonPressed');
  masterTimeline.staggerTo('.itinerary-2-card', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, 'buttonPressed+=0.3');
  masterTimeline.to('.itinerary-2-date', 1, { opacity: 0 }, 'buttonPressed+=0.3');
  masterTimeline.to('#itinerary-2 #Button-2', 1, { opacity: 0, backgroundColor: '#00FFFF', y: 500, ease: Power1.easeOut }, 'buttonPressed+=0.3');

  // iPhone animation
  masterTimeline.to('#iPhone', .7, { opacity: 1, ease: Power1.easeOut, y: -700 });
  masterTimeline.staggerFrom('.phone-mock-text', 0.3, { opacity: 0, width: 0, ease: Power1.easeIn }, 0.05);
  masterTimeline.to('#iPhone', 1, { opacity: 0, ease: Power1.easeOut, x: 700 }, '+=1');

  // Itinerary 1 animation
  masterTimeline.from('#itinerary-1 .mock-text', 0.3, { width: 0, ease: Power1.easeIn }, 'itinAnim')
  masterTimeline.from('.itinerary-1-date', 0.5, { opacity: 0, ease: Power2.easeIn, x: -200 }, 'itinAnim');
  masterTimeline.from('.itinerary-1-card', 1, { opacity: 0 }, 'itinAnim');
  masterTimeline.from('#itinerary-1 #Button-1', 0.5, { opacity: 0, y: 500, ease: Power1.easeIn }, 'itinAnim');
  masterTimeline.from('#itinerary-1 #Rounded-Rectangle', 0.25, { filter: 'url(#dropshadow)' });
  masterTimeline.to('#itinerary-1 #Rounded-Rectangle', 0.1, { filter: 'url(#inset-shadow)', fill: '#3F7F9A', scale: 0.99, ease: Power1.easeIn });
  masterTimeline.to('#itinerary-1 #Rounded-Rectangle', 0.25, { filter: 'url(#dropshadow)', fill: '#4C8CA7', scale: 1, ease: Power1.easeOut });
  masterTimeline.staggerTo('.itinerary-1-card', 1, { opacity: 0, ease: Power1.easeOut, x: 300 }, .05, 'itinAnim+=2.2');
  masterTimeline.to('.itinerary-1-date', 1, { opacity: 0 }, 'itinAnim+=2.2');
  masterTimeline.to('#itinerary-1 #Button-1', 1, { opacity: 0, backgroundColor: '#00FFFF', y: 500, ease: Power1.easeOut }, 'itinAnim+=2.2');
}

function startNLPTimeline() {
  // NLP Timeline
  const nlpTimeline = new TimelineMax({
      onComplete: function () {
          nlpTimeline.restart();
      }
  });

  // Ensures first screen of animation has correct z-indexing
  nlpTimeline.from('#nlp-airline', 0.0, {zIndex: 100});

  // NLP Airline
  nlpTimeline.from('#nlp-airline .channel-tools', 1, {opacity: 0, ease: Power1.easeOut});
  nlpTimeline.from('#nlp-airline .cursor-hand', 0.5, {x: 1100, y: 300, force3D: true, ease: Power1.easeOut}, 'airlineHandShown');
  nlpTimeline.to('#nlp-airline .channel-tools, #nlp-airline .cursor-hand', 0.3, {opacity: 0}, 'airlineHandShown+=1');
  nlpTimeline.from('#nlp-airline .nlp-box', 0.5, {opacity: 0});
  nlpTimeline.staggerTo('#nlp-airline .nlp-box .text-reveal', 0.7, { scaleX: 0, svgOrigin: '891 0', force3D: true, ease:Power0.easeNone}, 0.3, 'airlineNLPShown');
  nlpTimeline.to('#nlp-airline', 2, {x: 4000, ease: Power1.easeIn}, 'airlineNLPShown+=2');

  // NLP Hotel
  nlpTimeline.from('#nlp-hotel .channel-tools', 1, {opacity: 0, ease: Power1.easeOut});
  nlpTimeline.from('#nlp-hotel .cursor-hand', 0.5, {x: 1100, y: 300, force3D: true, ease: Power1.easeOut}, 'hotelHandShown');
  nlpTimeline.to('#nlp-hotel .channel-tools, #nlp-hotel .cursor-hand', 0.3, {opacity: 0}, 'hotelHandShown+=1');
  nlpTimeline.from('#nlp-hotel .nlp-box', 0.5, {opacity: 0});
  nlpTimeline.staggerTo('#nlp-hotel .nlp-box .text-reveal', 0.7, {scaleX: 0, svgOrigin: '891 0', force3D: true, ease: Power0.easeNone}, 0.3, 'hotelNLPShown');
  nlpTimeline.to('#nlp-hotel', 2, {x: 4000, ease: Power1.easeIn}, 'hotelNLPShown+=2');

  // NLP OTA
  nlpTimeline.from('#nlp-ota .channel-tools', 1, {opacity: 0, ease: Power1.easeOut}, 'resetAnimationPoint');
  nlpTimeline.from('#nlp-ota .cursor-hand', 0.5, {x: 1100, y: 300, force3D: true, ease: Power1.easeOut}, 'otaHandShown');
  nlpTimeline.to('#nlp-ota .channel-tools, #nlp-ota .cursor-hand', 0.3, {opacity: 0}, 'otaHandShown+=1');
  nlpTimeline.from('#nlp-ota .nlp-box', 0.5, {opacity: 0});
  nlpTimeline.staggerTo('#nlp-ota .nlp-box .text-reveal', 0.7, {scaleX: 0, svgOrigin: '891 0', force3D: true, ease:Power0.easeNone}, 0.3, 'otaNLPShown');
  nlpTimeline.to('#nlp-ota', 2, {x: 4000, ease: Power1.easeIn}, 'otaNLPShown+=2');

  // Start reseting positions of first screen of timeline when NLP OTA animation begins
  nlpTimeline.to('#nlp-airline', 0.0, {x: 0, y: 0, zIndex: 70}, 'resetAnimationPoint');
  nlpTimeline.to('#nlp-airline .channel-tools', 0.0, {opacity: 0}, 'resetAnimationPoint');
  nlpTimeline.to('#nlp-airline .nlp-box', 0.0, {x: 1000, opacity: 0}, 'resetAnimationPoint');

  // document.getElementById('control').addEventListener('click', function() {
  //   nlpTimeline.paused(!nlpTimeline.paused());
  // })
}

function startBannerImageLeft() {
  $('.banner-image-left').addClass('active');
  const bannerImageLeftTimeline = new TimelineMax({
    onComplete: function() {
      generateDeviceAnimations(".banner-image-left #Omnichannel-Illustration g[id*='Illustration']");
    }
  })

  bannerImageLeftTimeline.staggerFrom(".banner-image-left #Omnichannel-Illustration g[id*='Illustration']", 0.2, {opacity: 0, ease:Power1.easeOut}, 0.2);
}

function generateDeviceAnimations(selector) {
  document.querySelectorAll(selector).forEach(function(device, index) {
    const deviceAnimationTimeline = new TimelineMax({
      repeat: -1,
      repeatDelay: 1
    })
    // Some of the code for the SVGs export from Sketch/Invision (needlessly) have multiple translate values, but the browser only recognizes the last value, so we just need the last value
    var lastTranslate = device.getAttribute("transform").substring(device.getAttribute("transform").lastIndexOf("translate"));
    var translateValues = lastTranslate.substring(lastTranslate.indexOf("("), lastTranslate.indexOf(")"));
    var translateYOrigin = translateValues.indexOf(" ") + 1;
    var translateYValue = parseFloat(translateValues.substring(translateYOrigin));
    var timing = index === 0 ? 0.7 : (index + 1) * 0.5;
    deviceAnimationTimeline.to(device, timing, {y: translateYValue, force3D: true, ease: Power1.easeInOut});
    deviceAnimationTimeline.to(device, timing, {y: translateYValue + 5, force3D: true, ease: Power1.easeInOut});
    deviceAnimationTimeline.to(device, timing, {y: translateYValue, force3D: true, ease: Power1.easeInOut});
  })
}

function startBannerImageRight() {
  $(".banner-image-right").addClass('active');
  const bannerImageRightTimeline = new TimelineMax({
    onComplete: function() {
      generateCloudAnimations(".banner-image-right #Airplane-Illustration [id*='Path-11']");
    }
  });

  // Building and suitcase
  bannerImageRightTimeline.staggerFrom(".banner-image-right #Suitcase-and-Ticket-Illustration, .banner-image-right #Hotel-Illustration", 0.3, {opacity: 0, ease:Power1.easeOut}, 0.3);
  // Clouds
  bannerImageRightTimeline.staggerFrom(".banner-image-right #Airplane-Illustration [id*='Path-11']", 0.3, {opacity: 0, ease:Power1.easeOut}, 0.3);
  // Airplane
  bannerImageRightTimeline.from(".banner-image-right #Airplane-Illustration #Group-Copy-2", 1, {opacity: 0, x: -200, force3D: true, ease:Power1.easeOut}, "cloudsShown");
  // Jetstream
  bannerImageRightTimeline.from(".banner-image-right #Airplane-Illustration #Rectangle", 1, {opacity: 0, x: -200, force3D: true, ease:Power1.easeOut}, "cloudsShown");
}

function generateCloudAnimations(selector) {
  document.querySelectorAll(selector).forEach(function(cloud, index) {
    const cloudTimeline = new TimelineMax({
      repeat: -1
    })
    var timing = (index + 1) * 1.2;
    cloudTimeline.to(cloud, timing, {y: -10, force3D: true});
    cloudTimeline.to(cloud, timing, {y: 0, force3D: true});
  })
}

var mobileHero = document.querySelector('.hero-section');
mobileHero.style.setProperty('background-position-x', '50%');
var heroTouchDownEvent = null;
var heroXPercentTouchDown = null;
var heroXPercentGyro = 50;
window.USER_IS_TOUCHING = false;

function handleOrientation(event) {
  heroXPercentGyro = (event.gamma/90) * 50 + 50; //Gamma is in degree in the range [-90,90]
  if (window.USER_IS_TOUCHING)
    return;
  mobileHero.style.setProperty('background-position-x', heroXPercentGyro.toString() + "%");
}

function handleHeroMouseDown(event) {
  window.USER_IS_TOUCHING = true;
  heroTouchDownEvent = event.targetTouches[0];
  var touchDownPercentangeStr = mobileHero.style.getPropertyValue('background-position-x');
  heroXPercentTouchDown = touchDownPercentangeStr ? parseFloat(mobileHero.style.getPropertyValue('background-position-x')): 0;
}

function handleHeroMouseUp(event) {
  window.USER_IS_TOUCHING = false;
  $(mobileHero).animate({'background-position-x': heroXPercentGyro.toString() + "%"}, 300)
}

function handleHeroMove(event) {
  var touch = event.targetTouches[0];
  if (touch && heroTouchDownEvent) {
    var xDelta = touch.clientX - heroTouchDownEvent.clientX;
    var percentDelta = -xDelta / event.target.offsetWidth * 100;
    var resultPercentage = heroXPercentTouchDown + percentDelta;
    resultPercentage = Math.max(Math.min(resultPercentage, 100), 0);
    mobileHero.style.setProperty('background-position-x', resultPercentage.toString() + "%");
  }
}

function animateCircuitWires() {
  setTimeout(function(){
    $('.banner-image').addClass('active');
    var circuitWires = document.querySelectorAll('.banner-image .circuit-wire');
    circuitWires.forEach(function(path, index) {
      var offset = anime.setDashoffset(path);
      path.setAttribute('stroke-dashoffset', offset);
      var animeSettings;
      if(index === circuitWires.length - 1) {
        animeSettings = {
          targets: path,
          strokeDashoffset: [offset, 1],
          duration: anime.random(300, 1000),
          delay: anime.random(200, 500),
          direction: 'normal',
          easing: 'easeInOutSine',
          autoplay: true,
          loop: false,
          complete: function(anim) {
            animateLightPath(circuitWires, circuitWires[randomPath(circuitWires.length -1)]);
            startBannerImageLeft();
            startBannerImageRight();
          }
        }
      } else {
        animeSettings = {
          targets: path,
          strokeDashoffset: [offset, 1],
          duration: anime.random(300, 1000),
          delay: anime.random(500, 500),
          direction: 'normal',
          easing: 'easeInOutSine',
          autoplay: true,
          loop: false
        }
      }
      anime(animeSettings);
    })
  }, 100);
}

function randomPath(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let animateLightPathCount = 0;
function animateLightPath(lightPaths, path) {
  if (animateLightPathCount = 50) {return};
  var allPaths = lightPaths;
  var lightNode = document.getElementById("light-node");
  lightNode.setAttribute("fill", "#ffeeee");
  let circuitPath = anime.path(path);
  anime({
    targets: lightNode,
    translateX: circuitPath('x'),
    translateY: circuitPath('y'),
    rotate: circuitPath('angle'),
    loop: false,
    duration: 300,
    direction: 'alternate',
    easing: 'linear',
    complete: function() {
      animateLightPathCount++;
      animateLightPath(allPaths, allPaths[randomPath(allPaths.length -1)])
    }
  })
}

function fetchWebflowHeroImages(imageSelector) {
  var heroImages = document.querySelectorAll(imageSelector);
  heroImages.forEach(function(img, index) {
    if (!img || !img.src) {
      return;
    }
    img.style.visibility = "hidden";
    var imgClasses = img.classList;
    fetch(img.src)
      .then(function(response) {
        return response.text();
      })
      .then(function(svgStr) {
        let replacement = $(svgStr);
        Array.from(imgClasses).forEach(function(classItem) {replacement.addClass(classItem)});
        $(img).replaceWith(replacement);
        index === heroImages.length - 1 ? animateCircuitWires() : null;
      });
  });
}

function fetchHGBSVG(containerSelector, assets, classes, animationFunction) {
  const containerEl = document.querySelector(containerSelector);
  if (!containerEl)
    return;
  containerEl.style.visibility = "hidden";
  Promise.all(assets
    .map(function(url) {
      return fetch(url)
      .then(function (res) { 
        return res.ok ? res.text() : null; 
      })
    })
  ).then(function (goodies) {
    containerEl.style.visibility = "visible";
    if (goodies.findIndex(function (x) { return !x; }) != -1)
      return; 
    // Output fetched resources on page
    classes ? goodies = classes.map(function(classItem, index){ return "<div class='" + classItem + "'>" + goodies[index] + "</div>" }) : null;
    containerEl.innerHTML = goodies.join('');
    $(containerEl).addClass('active');
    animationFunction ? animationFunction() : null;
  });
}

function fetchHGBImages(containerSelector, assets, animationFunction) {
  const containerEl = document.querySelector(containerSelector);
  const hostSite = window.location.origin + "/"
  if (!containerEl)
    return;
  containerEl.style.visibility = "hidden";
  var images = assets.map(function(imageUrl, index) {
    return "<img class='messaging-channel channel-" + index + "' src='" + hostSite + imageUrl + "'>"
  }).join('');
  containerEl.innerHTML = images;
  containerEl.style.visibility = "visible";
  containerEl.classList.add("active");
  animationFunction ? animationFunction() : null;
}

function startNewItineraryTimeline() {
  const newItineraryTimeline = new TimelineMax({
    repeat: -1
  });

  newItineraryTimeline.from(".channel-0", 0.5, {opacity: 0}, "channel0Shown");
  newItineraryTimeline.to(".channel-0", 0.5, {opacity: 0, x: 100, force3D: true}, "channel0Shown+=2");
  newItineraryTimeline.from(".channel-1", 0.5, {opacity: 0}, "channel1Shown");
  newItineraryTimeline.to(".channel-1", 0.5, {opacity: 0, x: 100, force3D: true}, "channel1Shown+=2");
  newItineraryTimeline.from(".channel-2", 0.5, {opacity: 0}, "channel2Shown");
  newItineraryTimeline.to(".channel-2", 0.5, {opacity: 0, x: 100, force3D: true}, "channel2Shown+=2");
}

// LINK: https://stackoverflow.com/a/3540295
$.isMobile = (/android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));

document.addEventListener("DOMContentLoaded", function () {
  if ($.isMobile) {
    fetchHGBSVG(".itin-gen-animation-container", ["images/Mobile-Omnichannel-Foreground-clear.svg"], ["omnichannel-mobile"], null);
    window.addEventListener('deviceorientation', handleOrientation);
    mobileHero.addEventListener('touchstart', handleHeroMouseDown);
    mobileHero.addEventListener('touchmove', handleHeroMove);
    mobileHero.addEventListener('touchend', handleHeroMouseUp);
    return;
  } else {
    // Queue up resources for desktop hero animations
    fetchWebflowHeroImages(".hero-container img[class*=banner-image]");
    // NOTE: [class*="banner-image"] will select anything that has a class that contains (but is not necessarily equal to) 'banner-image' - SP

    // Queue up resources for itinerary animation
    // fetchHGBSVG(".itin-gen-animation-container", [
    //   'hgb-assets/itin-gen-amination-email.svg',
    //   'hgb-assets/itin-gen-amination-iphone.svg',
    //   'hgb-assets/itin-gen-amination-it1.svg',
    //   'hgb-assets/itin-gen-amination-it2.svg',
    //   'hgb-assets/itin-gen-amination-it3.svg',
    //   'hgb-assets/itin-gen-amination-slack.svg',
    // ], startItineraryTimeline);

    fetchHGBImages(".itin-gen-animation-container", [
      'hgb-assets/Email.png',
      'hgb-assets/SMS.png',
      'hgb-assets/Slack.png',
      'hgb-assets/itin-static.svg',
    ], startNewItineraryTimeline);
  
    // Queue up resources for NLP animation
    fetchHGBSVG(".nlp-animation-container", [
      'hgb-assets/nlp-airline.svg',
      'hgb-assets/nlp-hotel.svg',
      'hgb-assets/nlp-ota.svg',
    ], null, startNLPTimeline);
  }
})