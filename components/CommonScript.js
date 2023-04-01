/* eslint-disable indent */
import BLOG from '@/blog.config'

/**
 * @returns {JSX.Element}
 * @constructor
 */
const CommonScript = () => {
  return (
    <>
      {BLOG.COMMENT_DAO_VOICE_ID && (
        <>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                  (function(i,s,o,g,r,a,m){i["DaoVoiceObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;a.charset="utf-8";m.parentNode.insertBefore(a,m)})(window,document,"script",('https:' == document.location.protocol ? 'https:' : 'http:') + "//widget.daovoice.io/widget/daf1a94b.js","daovoice")
                  `
            }}
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                 daovoice('init', {
                    app_id: "${BLOG.COMMENT_DAO_VOICE_ID}"
                  });
                  daovoice('update');
                  `
            }}
          />
        </>
      )}

      {BLOG.ADSENSE_GOOGLE_ID && (
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${BLOG.ADSENSE_GOOGLE_ID}`}
          crossOrigin="anonymous"
        />
      )}

      {BLOG.COMMENT_CUSDIS_APP_ID && (
        <script defer src="https://cusdis.com/js/widget/lang/zh-cn.js" />
      )}

      {BLOG.COMMENT_TIDIO_ID && (
        <script async src={`//code.tidio.co/${BLOG.COMMENT_TIDIO_ID}.js`} />
      )}

      {BLOG.COMMENT_GITTER_ROOM && (
        <>
          <script
            src="https://sidecar.gitter.im/dist/sidecar.v1.js"
            async
            defer
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                ((window.gitter = {}).chat = {}).options = {
                  room: '${BLOG.COMMENT_GITTER_ROOM}'
                };
                `
            }}
          />
        </>
      )}

      {BLOG.ANALYTICS_ACKEE_TRACKER && (
        <script
          async
          src={BLOG.ANALYTICS_ACKEE_TRACKER}
          data-ackee-server={BLOG.ANALYTICS_ACKEE_DATA_SERVER}
          data-ackee-domain-id={BLOG.ANALYTICS_ACKEE_DOMAIN_ID}
        />
      )}

      {BLOG.ANALYTICS_GOOGLE_ID && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${BLOG.ANALYTICS_GOOGLE_ID}`}
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${BLOG.ANALYTICS_GOOGLE_ID}', {
                      page_path: window.location.pathname,
                    });
                  `
            }}
          />
        </>
      )}

      {JSON.parse(BLOG.MUSIC_PLAYER) && (
        <script async src={BLOG.MUSIC_PLAYER_CDN_URL} />
      )}
      {JSON.parse(BLOG.MUSIC_PLAYER) &&
        JSON.parse(BLOG.MUSIC_PLAYER_METING) && (
          <script
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/meting/2.0.1/Meting.min.js"
          />
        )}
    </>
  )
}

export default CommonScript
