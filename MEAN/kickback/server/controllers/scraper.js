let jsdom = require('jsdom'); //npm i this


module.exports = {

    youtube: (req, res) => {
        try {
            // jsdom.env("http://nodejs.org/dist/", [
            //     'http://code.jquery.com/jquery-1.5.min.js'
            // ],
            // console.log("in the jsdom.env", jsdom.length, jsdom.window()))
            //     res.json({data:jsdom});

            // var url = 'https://www.youtube.com/feed/trending';
            var url = 'https://vimeo.com/channels/top/videos/';


            jsdom.JSDOM.fromURL(url, { resources: 'usable', runScripts: 'dangerously' })
                .then(function (dom) {
                    res.json(dom.window.document.querySelector('a').textContent.trim())
                    res.json(dom.window.document.body.querySelector())
                    // res.json(dom.window.document.body.textContent.trim());
                    // setTimeout(() => {
                    //     res.json(dom.window.document.body.textContent.trim());
                    //   }, 5000);
                });
        }
        catch (err) {
            res.json(err);
        }
    }



}