import React from 'react';
import PropTypes from 'prop-types';
import ContactSupport from './contact-support';
import SalesOverview from './sales-overview';

import '../styles/constants.css';
import '../styles/account-overview.css';

export const AccountOverview = ({ data }) => {
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

AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number.isRequired,
      successfulUploads: PropTypes.number.isRequired,
      linesAttempted: PropTypes.number.isRequired,
      linesSaved: PropTypes.number.isRequired,
    }),
  }),
};

export default AccountOverview;
