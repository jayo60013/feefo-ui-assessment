import React from 'react';
import ContactSupport from './contact-support';
import SalesOverview from './sales-overview';

import '../styles/constants.css';
import '../styles/account-overview.css';

export const AccountOverview = ({ data }) => {
  //TODO:
  //2. tests
  return (
    <div className="accountOverviewWrapper">
      <div className="accountOverview">
        <div className="accountOverviewHeader">
          <h1 className="accountOverviewHeaderText">Account Overview</h1>

          <ContactSupport supportContact={data.supportContact} />
        </div>

        <SalesOverview salesOverview={data.salesOverview} />
      </div>
    </div>
  )
}

export default AccountOverview;
