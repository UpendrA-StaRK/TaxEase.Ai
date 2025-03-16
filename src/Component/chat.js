import React, { useEffect } from 'react';

function KommunicateChat() {
    useEffect(() => {
        // Check if the script is already added
        if (document.getElementById('kommunicate-script')) return;

        // Kommunicate Settings
        var kommunicateSettings = {
            "appId": "1c849271b7e990b238dbb289ea41a5e92",
            "popupWidget": true,
            "automaticChatOpenOnNavigation": true
        };

        // Create script element
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.id = 'kommunicate-script';
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";

        // Append script to head
        var h = document.getElementsByTagName("head")[0];
        h.appendChild(s);

        // Initialize Kommunicate
        window.kommunicate = window.kommunicate || {};
        window.kommunicate._globals = kommunicateSettings;
    }, []); // Empty dependency array ensures it runs once

    return <div></div>;
}

export default KommunicateChat;
