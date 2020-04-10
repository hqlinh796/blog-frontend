import React, {useState} from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Messenger = props => {
     const [isShow, setShow] = useState(true);
        return (
            <MessengerCustomerChat
                pageId="110885300571206"
                appId="577342806204805"
            />
        );
}

// import { FacebookProvider, SendToMessenger } from 'react-facebook';
 
// export const Messenger = () => {
//     return (
//       <FacebookProvider appId="577342806204805">
//         <SendToMessenger messengerAppId="577342806204805" pageId="110885300571206"/>
//       </FacebookProvider>    
//     );
// }

export default Messenger;