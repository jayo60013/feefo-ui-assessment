import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

//TODO: see if you can remove this?
import '../styles/constants.css';
import '../styles/contact-support.css';

export const ContactSupport = ({ supportContact }) => {

  return (
    <div className="supportOverview">
      <h1 className="supportHeader">Your feefo support contact</h1>
      <div className="supportContactOverview">
        <div className="supportProfileBox">
          <p>{supportContact.name[0]}</p>
        </div>
        <div className="supportContactInfo">
          <h1 className="supportContactInfoName">{supportContact.name}</h1>
          <div className="supportContactHandles">
            <div className="supportContactHandleEmail">
              <FontAwesomeIcon className="envelopeIcon" icon={faEnvelope} />
              {supportContact.email}
            </div>
            <div className="supportContactHandlePhone">
              020 3362 4208
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSupport;
