const connectSrc = [
  '\'self\'',
  'blob:',
  '14257-chimera-stage.adobeioruntime.net',
  '*.adobe.com',
  '*.adobe.io',
  '*.adobelogin.com',
  '*.amazonaws.com',
  '*.blob.core.windows.net',
  '*.clarity.ms',
  '*.clicktale.net/',
  '*.mktoresp.com',
  'accounts.google.com/gsi/log',
  'accounts.google.com/gsi/status',
  'adobe.tt.omtrdc.net',
  'adobeioruntime.net',
  'analytics.tiktok.com',
  'api.company-target.com/api/v2/',
  'api.iperceptions.com',
  'c.go-mpulse.net',
  'cdn.cookielaw.org',
  'dc-api-dev.adobe.io',
  'dc.dev.dexilab.acrobat.com',
  'dpm.demdex.net',
  'geolocation.onetrust.com',
  'lasteventf-tm.everesttech.net',
  'p13n-stage.adobe.io/fg/api/',
  'pdfnow-dev.adobe.io',
  'privacyportal.onetrust.com',
  'tr.snapchat.com/',
  'cdn.megadata.co.kr',
  'tk.mediacategory.com',
  't1.daumcdn.net',
  'bc.ad.daum.net',
  'cdn.taboola.com',
  'pips.taboola.com',
  'trc.taboola.com',
  'js.adsrvr.org',
  'main--milo--adobecom.hlx.page',
  'main--dc--adobecom.hlx.page',
  'main--dc--adobecom.hlx.live',
  'http://localhost:6456/',
  'main--milo--adobecom.hlx.live',
  'fast-track--milo--adobecom.hlx.page',
  'fast-track--milo--adobecom.hlx.live',
  '*.typekit.net',
  '*.hlx.page',
  '*.hlx.live',
  'cdn.linkedin.oribi.io',
  'c.clicktale.net',
  '345-tti-184.mktoutil.com',
  'me.kes.v2.scr.kaspersky-labs.com',
  'adservice.google.com',
  'gc.kes.v2.scr.kaspersky-labs.com',
  'www.google.com',
  'tag-logger.demandbase.com',
  'cdnmd.global-cache.online',
  'me.kis.v2.scr.kaspersky-labs.com',
  'ad.doubleclick.net',
  'trial-eum-clienttons-s.akamaihd.net',
  'us-central1-adaptive-growth.cloudfunctions.net',
  'tl.ytlogs.ru',
  'api.ultimateadb.com',
  'tr.snapchat.com',
  'translate.googleapis.com',
  'zone1-services-cdn.com',
  'gc.kis.v2.scr.kaspersky-labs.com',
  'rum.hlx.page',
  'ff.kis.v2.scr.kaspersky-labs.com',
  'pagead2.googlesyndication.com',
  'metrics-dra.dt.dbankcloud.cn',
  ';',
];

const defaultSrc = [
  '\'self\'',
  'auth-stg1.services.adobe.com',
  ';',
];

const fontSrc = [
  '\'self\'',
  'use.typekit.net',
  'fonts.gstatic.com',
  ';',
];

const formAction = [
  '*.snapchat.com',
  '*.adobelogin.com',
  'helpx.adobe.com',
  'www.facebook.com/tr/',
  ';',
];

const frameSrc = [
  '\'self\'',
  'data:',
  'blob:',
  '*.amazonaws.com',
  '*.blob.core.windows.net',
  '9212252.fls.doubleclick.net',
  'accounts.google.com',
  'adobe.demdex.net',
  'bid.g.doubleclick.net',
  'dc-api-dev.adobecontent.io',
  'dc.dev.dexilab.acrobat.com',
  'dev.acrobat.adobe.com',
  'servedby.flashtalking.com',
  'tr.snapchat.com/',
  'tr6.snapchat.com/',
  'universal.iperceptions.com',
  'video.tv.adobe.com',
  'vimeo.com',
  'www.facebook.com',
  'www.youtube.com',
  'gateway.zscloud.net',
  'mozbar.moz.com',
  's.company-target.com',
  'captcha.gecirtnotification.com',
  'td.doubleclick.net',
  ';',
];

const imgSrc = [
  '\'self\'',
  'about:',
  'blob:',
  'data:',
  '*.clarity.ms',
  '*.services.adobe.com',
  'alb.reddit.com/rp.gif',
  'bat.bing.com/action/',
  'cdn.cookielaw.org',
  'cm.everesttech.net/cm/',
  'dpm.demdex.net',
  'googleads.g.doubleclick.net/pagead/',
  'id.rlcdn.com/',
  'match.prod.bidr.io/',
  'match.prod.bidr.io/cookie-sync/demandbase/',
  'match.prod.bird.io/cookie-sync/',
  'p.adsymptotic.com/d/px/',
  'pt.ispot.tv/',
  'px.ads.linkedin.com',
  'segments.company-target.com',
  't.co/i/',
  'www.adobe.com',
  'www.dev01.adobe.com',
  'www.facebook.com/tr/',
  'www.google.ch/pagead/',
  'www.google.co.in/pagead/',
  'www.google.co.jp/pagead/',
  'www.google.com.au/pagead/',
  'www.google.com/pagead/',
  'www.google.ie/pagead/',
  'www.linkedin.com',
  'www.facebook.com',
  's.tgm.yahoo-net.jp',
  'main--dc--adobecom.hlx.page',
  'main--acrobat--adobecom.hlx.page',
  'main--milo--adobecom.hlx.page',
  'http://localhost:6456/',
  'main--milo--adobecom.hlx.live',
  'fast-track--milo--adobecom.hlx.page',
  'fast-track--milo--adobecom.hlx.live',
  '*.hlx.page',
  '*.hlx.live',
  'l.clicktale.net',
  'www.google.by',
  'www.google.co.bw',
  'www.google.co.kr',
  'www.google.com.co',
  'www.google.de',
  'www.google.fr',
  'www.google.com.tr',
  'adservice.google.com',
  'www.google.com',
  'www.google.bg',
  'www.google.it',
  'www.google.co.za',
  'www.google.cd',
  'www.google.ci',
  'px.ads.linkedin.com',
  'www.facebook.com',
  'www.google.co.id',
  'www.google.cl',
  'www.google.co.uk',
  'www.google.ae',
  'www.google.com.hk',
  'www.google.bj',
  'www.google.ca',
  'www.google.at',
  'www.google.al',
  'www.google.com.br',
  'www.google.co.ug',
  'www.google.co.cr',
  'analytics.tiktok.com',
  'www.google.sn',
  'www.google.co.il',
  'www.google.com.mx',
  'www.google.be',
  'googleads.g.doubleclick.net',
  'www.google.am',
  'www.google.az',
  'mir-s3-cdn-cf.behance.net',
  'px4.ads.linkedin.com',
  't.co',
  'www.google.co.ke',
  'www.google.cm',
  'www.google.co.ao',
  'www.google.com.my',
  'www.google.es',
  'cdn.honey.io',
  'www.google.com.ph',
  'www.google.bi',
  ';',
];

const manifestSrc = [
  '\'self\'',
  ';',
];

const scriptSrc = [
  '\'self\'',
  '\'unsafe-eval\'',
  '*.adobe.com',
  '*.clarity.ms',
  'accounts.google.com/gsi/client',
  'adobe.demdex.net',
  'adobe.tt.omtrdc.net',
  'analytics.tiktok.com/',
  'analytics.twitter.com',
  'assets.adobedtm.com',
  'bat.bing.com',
  'bid.g.doubleclick.net',
  'cdn.cookielaw.org/',
  'cdn.pdst.fm',
  'cdnssl.clicktale.net/',
  'connect.facebook.net',
  'dc.dev.dexilab.acrobat.com',
  'geolocation.onetrust.com',
  'googleads.g.doubleclick.net/pagead/viewthroughconversion/',
  'local-test.acrobat.com:*',
  'pixel.everesttech.net/',
  's2.go-mpulse.net',
  'sc-static.net/',
  'scripts.demandbase.com',
  'sd.iperceptions.com',
  'servedby.flashtalking.com',
  'snap.licdn.com/li.lms-analytics/',
  'so.rlcdn.com/',
  'static.ads-twitter.com',
  'universal.iperceptions.com',
  'use.typekit.net',
  'www.everestjs.net/static/le/',
  'www.facebook.com',
  'www.google.com',
  'www.googleadservices.com/pagead/',
  'www.googletagmanager.com/gtag/',
  'www.redditstatic.com/ads/pixel.js',
  'main--milo--adobecom.hlx.page',
  'stage.adobeccstatic.com',
  'http://localhost:6456/',
  'main--milo--adobecom.hlx.live',
  'fast-track--milo--adobecom.hlx.page',
  'fast-track--milo--adobecom.hlx.live',
  'api.demandbase.com',
  '*.hlx.page',
  '*.hlx.live',
  ';',
];

const styleSrc = [
  '\'self\'',
  '\'unsafe-inline\'',
  'main--milo--adobecom.hlx.page',
  'main--milo--adobecom.hlx.live',
  '*.adobe.com',
  'accounts.google.com/gsi/style',
  'dc.dev.dexilab.acrobat.com',
  'use.typekit.net',
  'p.typekit.net',
  'stage.adobeccstatic.com',
  'p.typekit.net',
  'http://localhost:6456/',
  '*.hlx.page',
  '*.hlx.live',
  ';',
];

const workerSrc = [
  '\'self\'',
  'cdnssl.clicktale.net',
  'blob:',
  ';',
];

// TRY This
// use variables for the different domians

export default { connectSrc, defaultSrc, fontSrc, formAction, frameSrc, imgSrc, manifestSrc, scriptSrc, styleSrc, workerSrc};
