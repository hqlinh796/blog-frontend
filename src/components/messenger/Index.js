import React, { Component } from 'react';

class Messenger extends Component {
    render() {
        return (
            <div>
                <div id="fb-root"></div>
                <div class="fb-customerchat" attribution="setup_tool" page_id="110885300571206" theme_color="#5AC579">
                 </div>
            </div>
        );
    }

    componentDidMount() {
        window.fbAsyncInit = function () {
            window.FB.init({
              xfbml: true,
              version: 'v6.0'
            });
          };
  
          (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
    }
}

export default Messenger;