const router = {
  ABOUT: "/about",
  CAREER: "/career",
  ENGAGEMENTSMODELS: "/engagement-models",
  INFRASTRUCTURE: "/infrastructure",
  CONFIDENTIALITY: "/confidentiality",
  MEETTHETEAM: "/meet-the-team",
  CONTACT: "/contact",

  GRAPHICSDESIGN: "/graphics-design",
  WEBDESIGN: "/web-design",
  UIUX: "/uiux-design",
  WEBDEVELOPMENT: "/web-development",
  FRONTENDDEVELOPMENT: "/frontend-development",
  BACKENDDEVELOPMENT: "/backend-development",
  ECOMMERCEDEVELOPMENT: "/eCommerce-development",
  CMSDEVELOPMENT: "/cms-development",
  MOBILEAPPDEVELOPMENT: "/mobile-app-development",
  MVPDEVELOPMENT: "/mvp-development",
  SEO: "/seo",
  SMO: "/smo",
  PPC: "/ppc",
  ITCONSULTING: "/it-consulting",
  STARTUPCONSULTING: "/startup-consulting",
  NEXTJSDEVELOPMENT: "/nextjs-development",
  PGI: "/payment-gateway-integration",
  SHIPPINGINTEGRATION: "/shipping-integration",
  SMI: "/social-media-integration",
  TPAI: "/third-party-api-integration",
  SUPPORTANDMAINTENANCE: "/support-maintanance",

  PHPDEVELOPMENT: "/php-development",
  LARAVELDEVELOPMENT: "/laravel-development",
  CODEIGNITERDEVELOPMENT: "/codeigniter-development",
  WORDPRESSDEVELOPMENT: "/wordpress-development",
  SHOPIFYDEVELOPMENT: "/shopify-development",
  WEBFLOWDEVELOPMENT: "/webflow-development",
  HUBSPOTDEVELOPMENT: "/hubspot-development",
  REACTJSDEVELOPMENT: "/reactjs-development",
  NODEJSDEVELOPMENT: "/nodejs-development",
  ANGULARJSDEVELOPMENT: "/angular-js-development",
  EXPRESSJSDEVELOPMENT: "/express-js-development",
  ANDROIDAPPSDEVELOPMENT: "/android-app-development",
  IOSAPPSDEVELOPMENT: "/ios-app-development",
  IPADAPPSDEVELOPMENT: "/iPad-app-development",
  FLUTTERAPPSDEVELOPMENT: "/flutter-app-development",
  REACTNATIVEDEVELOPMENT: "/react-native-development",
  IONICDEVELOPMENT: "/ionic-development",
  PROGRESSIVEDEVELOPMENT: "/progressive-development",
  DESIGNPROTOTYPE: "/design-prototype",
  MOBILEAPPDESIGN: "/mobile-app-design",
  PSDTOHTML: "/psd-to-html",
  RESPONSIVEWEBDESIGN: "/responsive-web-design",

  HIREGRAPHICSDESIGNER: "/hire-graphics-designer",
  HireWebDesigner: "/hire-web-designer",
  HIREUIUXDESIGNER: "/hire-uiux-designer",
  HIREPHPDEVELOPER: "/hire-php-developer",
  HIREDOTNETDEVELOPER: "/hire-dot-net-developer",
  HIRLARAVELDEVELOPER: "/hire-laravel-developer",
  HIRCODEIGNITERDEVELOPER: "/hire-codeigniter-developer",
  HIREWORDPRESSDEVELOPER: "/hire-wordpress-developer",
  HIRSHOPIFYRDEVELOPER: "/hire-shopify-developer",
  HIREWEBFLOWDEVELOPER: "/hire-webflow-developer",
  HIREHUBSPOTDEVELOPER: "/hire-hubspot-developer",
  HIREANDROIDDEVELOPER: "/hire-android-developer",
  HIREIOSDEVELOPER: "/hire-ios-developer",
  HIREFLUTTERDEVELOPER: "/hire-flutter-developer",
  HIREIONICDEVELOPER: "/hire-ionic-developer",
  HIREREACTNATIVEDEVELOPER: "/hire-react-native-developer",
  HIREREACTJSDEVELOPER: "/hire-react-js-developer",
  HIRENODEJSDEVELOPER: "/hire-node-js-developer",
  HIREEXPRESSDEVELOPER: "/hire-express-developer",
  HIRENEXTJSDEVELOPER: "/hire-nextjs-developer",
  HIREANGULARJSDEVELOPER: "/hire-angularjs-developer",

  HIRESEOEXPERT: "/hire-seo-expert",
  HIRESMMEXPERT: "/hire-smm-expert",
  HIREPPCEXPERT: "/hire-ppc-expert",
  HIRECONTENTWRITER: "/hire-content-writer",

  BLOG: "/blog",
  SINGLEBLOG1:
    "/blog/why-it-is-necessary-to-do-regular-updates-of-your-wordpress-website",
  SINGLEBLOG2: "/blog/wordpress-automation-tools-and-tips",
  SINGLEBLOG3: "/blog/top-things-your-landing-page-should-have",
  SINGLEBLOG4: "/blog/top-Predictions-for-facebook-advertising-in-2021",
  SINGLEBLOG5:
    "/blog/top-advanced-seo-techniques-to-maximize-your-search-traffic",
  SINGLEBLOG6: "/blog/the-best-B2B-marketing-strategies-to-increase-leads",
  SINGLEBLOG7: "/blog/linkedIn-marketing-best-strategies-for-2021",
  SINGLEBLOG8: "/blog/is-managed-wordpress-hosting-worth-the-extra-price",
  SINGLEBLOG9: "/blog/how-will-seo-change-in-2021",
  SINGLEBLOG10: "/blog/how-web-agencies-can-reduce-production-cost-in-2021",
  SINGLEBLOG11: "/blog/how-to-motivate-and-engage-a-remote-software-team",
  SINGLEBLOG12: "/blog/how-to-avoid-cultural-pitfalls-in-outsourcing",
  SINGLEBLOG13: "/blog/how-to-speed-optimize-wordpress-website",
  SINGLEBLOG14: "/blog/how-to-secure-wordpress-site",
  SINGLEBLOG15: "/blog/how-to-keep-your-wordpress-website-updated",
  SINGLEBLOG16: "/blog/ten-plugins-you-must-have-for-your-wordpress-website",
  SINGLEBLOG17: "/blog/how-to-make-virtual-employees-productive",
  SINGLEBLOG18:
    "/blog/how-shoulds-i-find-the-right-outsourcing-partner-in-india",
  SINGLEBLOG19:
    "/blog/a-comparison-between-fixed-price-and-time-and-material-contract",
  SINGLEBLOG20: "/blog/7-signs-its-time-to-consider-outsourcing",
  SINGLEBLOG21: "/blog/top-reasons-to-consider-offshore-development",
  SINGLEBLOG22: "/blog/onshore-vs-offshore-development-which-is-better",
  SINGLEBLOG23: "/blog/offshore-development-best-practices-to-know-about",
  SINGLEBLOG24: "/blog/leading-offshore-development-trends-to-know-about",
  SINGLEBLOG25:
    "/blog/the-ways-to-utilize-an-effective-outsourcing-strategy-and-achieve-business-success-by-eliminating-the-risks",
  SINGLEBLOG26: "/blog/tips-to-hire-dedicated-programmers",
  SINGLEBLOG27: "/blog/how-to-outsource-software-development-effectively",
  SINGLEBLOG28: "/blog/top-10-mobile-app-trends-for-2022",
  SINGLEBLOG29: "/blog/the-right-web-development-technology-for-your-project",
  SINGLEBLOG30: "/blog/a-complete-offshore-resource-hiring-e-guide",
  SINGLEBLOG31:
    "/blog/checklist-for-hiring-offshore-development-team-for-your-startup",
  SINGLEBLOG32:
    "/blog/ultimate-guide-to-hire-dedicated-developer-overview-process-tips",
  SINGLEBLOG33:
    "/blog/choose-dedicated-team-model-to-build-next-gen-product-cto-guide",
  SINGLEBLOG34:
    "/blog/how-to-hire-remote-developers-for-web-mobile-app-development-2023-guide",
  SINGLEBLOG35:
    "/blog/hire-the-best-next-js-developer-for-your-project-your-ultimate-guide",
  SINGLEBLOG36:
    "/blog/what-do-you-need-to-consider-while-hiring-offshore-developers",
  SINGLEBLOG37:
    "/blog/how-to-hire-a-web-developer-that-will-be-a-perfect-match-for-your-project",

  WORK: "/work",
  AGILEADVISORYGROUP: "/work/agileAdvisoryGroup",
  USAPIPELINING: "/work/usa-pipelining",
  SOUTHERNTRADELINES: "/work/southerntradelines",
  THEBLOSSOMACADEMY: "/work/theblossomacademy",
  LIFECOACHAKHAN: "/work/lifecoachakhan",
  ELLEMAR: "/work/ellemar",
  DININGEDGE: "/work/diningedge",
  BALDERASCONSTRUCTION: "/work/balderasconstruction",
  SUPERSTARSCAMP: "/work/superstarscamp",
};
export default router;
