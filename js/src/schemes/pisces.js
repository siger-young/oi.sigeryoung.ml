/* global NexT, CONFIG */

$(document).ready(function() {

  var sidebarInner = $('.sidebar-inner');
  var sidebarOffset = CONFIG.sidebar.offset ? CONFIG.sidebar.offset : 12;

  function getHeaderOffset() {
    return $('.header-inner').height() + sidebarOffset;
  }

  function getFooterOffset() {
    var footerInner = $('.footer-inner');
    var footerMargin = footerInner.outerHeight(true) - footerInner.outerHeight();
    var footerOffset = footerInner.outerHeight(true) + footerMargin;
    return footerOffset;
  }

  function initAffix() {
    var headerOffset = getHeaderOffset();
    var footerOffset = getFooterOffset();

    sidebarInner.affix({
      offset: {
        top   : headerOffset - sidebarOffset,
        bottom: footerOffset
      }
    });

    $('#sidebar').css({ 'margin-left': 'initial', 'margin-top': headerOffset });
    sidebarInner.affix('checkPosition');
  }

  function resizeListener() {
    var mql = window.matchMedia('(min-width: 991px)');
    mql.addListener(function(e) {
      if (e.matches) {
        sidebarInner.affix('checkPosition');
        initAffix();
      }
    });
  }

  $(".article-share-link").click(function() {
    var $this = $(this),
      encodedUrl = encodeURIComponent($this.attr('data-url')),
      encodedSummary = encodeURIComponent($this.attr('data-summary')),
      encodedTitle = encodeURIComponent($this.attr('data-title')),
      picurl = "https://avatars1.githubusercontent.com/u/13887988?s=460&v=4";
    var shareqqzonestring='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title='+encodedTitle+'&summary='+encodedSummary+'&url='+encodedUrl+'&pics='+picurl;
    console.log(shareqqzonestring);
    window.open(shareqqzonestring,'newwindow','height=400,width=400,top=100,left=100');
  });
  initAffix();
  resizeListener();
});
