const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

const injectGAScript = () => {
  if (!GA_MEASUREMENT_ID) return;
  if (document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false
  });
  window.gtag('event', 'portfolio_init', {
    event_category: 'analytics',
    event_label: GA_MEASUREMENT_ID
  });
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.info('[Analytics] Initialized Google tag with ID', GA_MEASUREMENT_ID);
  }
};

export const initAnalytics = () => {
  if (typeof window === 'undefined' || window.__analyticsInitialized__ || !GA_MEASUREMENT_ID) return;
  injectGAScript();
  window.__analyticsInitialized__ = true;
};

export const trackPageview = (pagePath) => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || typeof window.gtag !== 'function') return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: pagePath
  });
  window.gtag('event', 'page_view_manual', {
    event_category: 'navigation',
    event_label: pagePath
  });
};

export const trackEvent = ({ action, category, label, value }) => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || typeof window.gtag !== 'function') return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value
  });
};
