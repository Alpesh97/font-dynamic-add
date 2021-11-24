// For load fonts dynamically
WebFontConfig = {
    google: { families: ['Montserrat:400,500,600,700&display=swap', 'Open+Sans:400,700&display=swap'] }
};
(function () {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();