import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import '../styles/constants.css';
import '../styles/sales-overview.css';

export const ContactSupport = ({ salesOverview }) => {

  return (
    <div className="salesOverview">
      <div className="salesOverviewSales">
        <div className="salesOverviewHeaderRow">
          <div className="salesOverviewHeader">
            <FontAwesomeIcon className="salesIcon" icon={faUpload} />
            Sales
          </div>
          <FontAwesomeIcon className="infoIcon" icon={faInfoCircle} />
        </div>
        <div className="salesOverviewSummary">
          <p>You had <strong>{salesOverview.successfulUploads} uploads</strong> and <strong>{salesOverview.linesSaved}</strong> lines added.</p>
        </div>
      </div>

      <div className="salesOverviewMetric">
        <div className="salesOverviewUploads">
          <p className="salesOverviewPercentage">
            {salesOverview.successfulUploads / salesOverview.uploads * 100}%
            </p>
          <p className="salesOverviewPercentageLabel">Upload success</p>
        </div>
        <div className="salesOverviewLines">
          <p className="salesOverviewPercentage">
            {salesOverview.linesSaved / salesOverview.linesAttempted * 100}%
            </p>
          <p className="salesOverviewPercentageLabel">Lines saved</p>
        </div>
      </div>
    </div>
  );
}

export default ContactSupport;
