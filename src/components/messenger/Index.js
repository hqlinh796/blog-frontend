import React, {useState} from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Messenger = props => {
     const [isShow, setShow] = useState(true);
        return (
            <MessengerCustomerChat
                pageId="110885300571206"
                appId="577342806204805"
                shouldShowDialog={isShow}
                onClick={() => setShow(!isShow)}
            />
        );
    
}

export default Messenger;