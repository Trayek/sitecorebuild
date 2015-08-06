jQuery(document).ready(function ($) {
    $('#social-stream').dcSocialStream({
        feeds: {
            //twitter: {
            //    url: '/Content/plugins/social-stream/twitter.php',
            //    id: 'scofficecore'
            //},
            facebook: {
                id: '124849824292539 ',
                out: 'intro,thumb,text,user,share'
            }//,
            //youtube: {
            //    id: 'SitecoreUKTV',
            //    thumb: '0'
            //}
        },
        rotate: {
            delay: 0
        },
        twitterId: 'scofficecore',
        control: false,
        filter: true,
        wall: true,
        cache: false,
        max: 'limit',
        limit: 10,
        iconPath: '/Content/images/social-stream/dcsns-dark/',
        imagePath: '/Content/images/social-stream/dcsns-dark/'
    });
});