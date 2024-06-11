// use a script tag or an external JS file
document.addEventListener('DOMContentLoaded', (event) => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  ////++++++++++SCROLL++++++++++
  const body = document.querySelector('body');

  lenis.on('scroll', (e) => {
    const scrollPos = e.animatedScroll;
    // console.log(e.animatedScroll);
    const heroContainer = document.querySelector('#hero .container>div');
    if (heroContainer) {
      if (window.innerWidth > 720) {
        gsap.to(heroContainer, {
          y: -scrollPos / 4,
        });
      } else {
        gsap.to(heroContainer, {
          y: 0,
        });
      }
    }
    const portoHero = document.querySelector('#hero .porto');
    const roleHero = document.querySelector('#hero .role');
    portoHero &&
      gsap.to(portoHero, {
        y: -scrollPos / 8,
      });

    roleHero &&
      gsap.to(roleHero, {
        y: -scrollPos / 50,
      });
  });

  window.addEventListener('scroll', (e) => {
    const footerContainer = document.querySelector('footer .container');

    const windowMaxScroll = body.scrollHeight - window.innerHeight;
    if (window.scrollY > window.innerHeight) {
      const _y = windowMaxScroll - window.scrollY;

      footerContainer &&
        gsap.to(footerContainer, {
          y: -(_y / 4),
          // overwrite: true,
          duration: 0,
          ease: 'none',
        });
    }
    // if (window.innerWidth <= 720) {
    //   gsap.to('footer .container', {
    //     y: 0,
    //     // overwrite: true,
    //     duration: 0,
    //     ease: 'none',
    //   });
    // }
  });
  // window.addEventListener('resize', () => {
  //   gsap.to('footer .container', {
  //     y: 0,
  //     // overwrite: true,
  //     duration: 0,
  //     ease: 'none',
  //   });
  // });

  ////++++++++++SLIDER++++++++++
  function sliderPortfolio() {
    const isSplide = document.querySelector('.splide');
    if (isSplide) {
      const splider = new Splide('.splide', {
        perPage: 1.5,
        // perMove    : 1,
        padding: '20%',
        gap: '9vw',
        focus: 'center',
        trimSpace: false,
        pagination: false,
        // drag: 'free',
        snap: true,
        arrows: false,
        breakpoints: {
          1280: {
            perPage: 1.1,
          },
          900: {
            gap: 50,
            perPage: 1,
            padding: '15%',
          },
        },
      });

      // Updates the bar width whenever the carousel moves:
      const indicatorSlider = document.querySelector('.indicator .slider');
      // const sliderList = document.querySelector('.splide__list');
      // const sliderItem = document
      //   .querySelector('.splide__slide')
      //   .getBoundingClientRect();

      // let minWidth = 0;
      // if (window.innerWidth < 900) {
      //   minWidth = 0;
      //   minWidth -= 50;
      // } else {
      //   minWidth = sliderItem.left - window.innerWidth * 0.2;
      //   minWidth += 180;
      // }
      // let maxWidth = sliderList.scrollWidth - sliderItem.width - minWidth;
      // console.log(minWidth, maxWidth);

      splider.on('mounted move', function () {
        var end = splider.Components.Controller.getEnd() + 1;
        var rate = Math.min((splider.index + 1) / end, 1);
        // console.log('draging', sliderList.style.transform);
        indicatorSlider.style.width = String(100 * rate) + '%';
      });

      splider.mount();
    }
  }
  sliderPortfolio();

  ////++++++++++CURSOR EFFFECT++++++++++
  const cursor = document.querySelector('.cursor');
  const cursorContainer = cursor.querySelector('.container');

  gsap.set(cursorContainer, {
    scale: 0.3,
  });

  window.addEventListener('mousemove', (e) => {
    // console.log(e.target);
    cursor &&
      gsap.to(cursor, {
        y: e.clientY,
        x: e.clientX,
        ease: 'power4.out',
        // delay: 0.3,
        overwrite: true,
      });
  });

  const cursorContainerGsapEffect = (
    content = ``,
    scale = 0.3,
    additional = {}
  ) => {
    cursorContainer.innerHTML = content;
    gsap.to(cursorContainer, {
      scale,
      ...additional,
    });
  };

  function cursorEffect() {
    const splideArea = document.querySelector('.splide');
    const portfolioImages = document.querySelectorAll('.splide .image-box');
    const portfolioDemoLinks = document.querySelectorAll('.splide .demo-link');
    const portfolioDemoLinksSvg = document.querySelectorAll(
      '.splide .demo-link svg'
    );

    splideArea &&
      (splideArea.addEventListener('mouseover', () => {
        cursorContainerGsapEffect('Drag', 1);
      }),
      splideArea.addEventListener('mouseleave', () => {
        cursorContainerGsapEffect();
      }));

    portfolioImages.forEach((image) => {
      image.addEventListener('mouseenter', () => {
        cursorContainer.innerHTML = 'View';
      });
      image.addEventListener('mouseleave', () => {
        cursorContainer.innerHTML = '';
      });
    });

    portfolioDemoLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        cursorContainer.innerHTML = 'Visit';
      });
      link.addEventListener('mouseleave', () => {
        cursorContainer.innerHTML = '';
      });
    });

    // portfolioDemoLinksSvg.forEach((link) => {
    //   link.addEventListener('mouseenter', () => {
    //     cursorContainer.innerHTML = 'Visit';
    //   });
    //   link.addEventListener('mouseleave', () => {
    //     cursorContainer.innerHTML = '';
    //   });
    // });

    const socialLinks = document.querySelectorAll('footer .social a');
    const footerMail = document.querySelector('footer .mail');
    const arrowSvg = `<svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg"
                          transform="rotate(-35)">
                          <path
                              d="M12.9375 0.0636787L21.2045 10.6519L25.1518 10.6519L16.8848 0.0636786L12.9375 0.0636787Z"
                              fill="#ECC45D" />
                          <path d="M14.2231 18.0637L23.3603 7.47546L27.7231 7.47546L18.5859 18.0637L14.2231 18.0637Z"
                              fill="#ECC45D" />
                          <path d="M2.82704 10.9923L23.866 10.9923L21.7621 7.77799L0.723145 7.77799L2.82704 10.9923Z"
                              fill="#ECC45D" />
                      </svg>`;

    socialLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        cursorContainerGsapEffect(arrowSvg, 0.6);
      });
      link.addEventListener('mouseout', () => {
        cursorContainerGsapEffect();
      });
    });

    footerMail &&
      (footerMail.addEventListener('mouseover', () => {
        cursorContainerGsapEffect(
          `<p style="font-size: 11px">Let's Talk</p>`,
          1.4,
          {x: 25}
        );
      }),
      footerMail.addEventListener('mouseout', () => {
        cursorContainerGsapEffect('', 0.3, {x: 0});
      }));
  }
  cursorEffect();

  ////++++++++++SINGGLE PAGE APPLICATION++++++++++
  let CachePageRoutesData = {};
  let CachePageScrollPosition = {};

  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }

  const TransitionPage = {
    in: () => {
      const _main = document.querySelector('main');

      gsap.to(_main, {
        autoAlpha: 1,
        // opacity: 1,
        onComplete: () => {
          _main.removeAttribute('style');
        },
      });
    },
    out: () => {
      const _main = document.querySelector('main');

      gsap.to(_main, {
        autoAlpha: 0,
        // opacity: 0,
        duration: 0.3,
      });
    },
  };

  async function fetchPage(url) {
    !navigator.onLine && location.reload();

    const res = await window.fetch(url);
    // console.log(res);
    if (res.status == 200) {
      const container = document.createElement('html');
      const text = await res.text();
      container.innerHTML = text;

      const _mainElement = container.querySelector('main');

      return {status: res.status, page: _mainElement};
    } else {
      return {status: res.status, page: ''};
    }
  }

  async function saveRouteCache(url, status, page) {
    if (!CachePageRoutesData[url]) {
      // console.log('new fetch', url);
      // const hasilFetch = await fetchPage(url);
      const _newCache = {
        ...CachePageRoutesData,
        [url]: {
          status,
          page,
          route: url,
        },
      };
      CachePageRoutesData = _newCache;
    }
  }

  const getPage = async (url = '/') => {
    if (CachePageRoutesData[url]) {
      return CachePageRoutesData[url];
    } else {
      const hasilFetch = await fetchPage(url);
      saveRouteCache(url, hasilFetch.status, hasilFetch.page);
      return hasilFetch;
    }
  };

  function linkNavigation() {
    let aHrefNavigations = document.querySelectorAll('a:not([target])');
    aHrefNavigations.forEach((link) => {
      link.onclick = async (e) => {
        e.preventDefault();

        //save scroll position history
        window.location.pathname == '/' &&
          (CachePageScrollPosition = {
            '/': window.scrollY ? window.scrollY : 1,
          });

        const url = link.getAttribute('href');
        window.history.pushState(null, '', url);
        // console.log(CachePageRoutesData[url]);
        await updatePage(url);
      };

      // link.onmouseenter = async (e) => {
      //   const url = link.getAttribute('href');
      //   await getPage(url);
      // };
    });
  }
  linkNavigation();

  window.onpopstate = async () => {
    const url = window.location.pathname;
    await updatePage(url);
  };

  const updatePage = async (url = '/') => {
    // cek internet connection
    // !navigator.onLine && location.reload();
    //reset cursor
    url !== '/' && cursorContainerGsapEffect();

    const _targetMain = document.querySelector('main');
    const res = await getPage(url);
    if (res.status == 200) {
      const _newMain = res.page;
      const _newMainId = _newMain.getAttribute('id') ?? '';

      ////Change MAIN Component
      ////before
      body.style.pointerEvents = 'none';
      TransitionPage.out();
      ////enter
      setTimeout(() => {
        _targetMain.innerHTML = _newMain.innerHTML;
        _targetMain.setAttribute('id', _newMainId ?? '');

        //scroll restoration
        url !== '/'
          ? lenis.scrollTo(0, {immediate: true})
          : window.scrollTo(0, CachePageScrollPosition['/']);

        ////after
        body.removeAttribute('style');
        TransitionPage.in();
        sliderPortfolio();
        linkNavigation();
        cursorEffect();
      }, 800);
    } else {
      _targetMain.innerHTML = `<h1>${res.status}</h1>`;
    }
  };
});
