import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import '../styles/sales-overview.css';

export const SalesOverview = ({ salesOverview }) => {

  const getPercentage = (success, total) => {
    const percentage = success / total * 100;
    return Math.floor(percentage);
  };

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
            {getPercentage(salesOverview.successfulUploads, salesOverview.uploads)}%
            </p>
          <p className="salesOverviewPercentageLabel">Upload success</p>
        </div>
        <div className="salesOverviewLines">
          <p className="salesOverviewPercentage">
            {getPercentage(salesOverview.linesSaved, salesOverview.linesAttempted)}%
            </p>
          <p className="salesOverviewPercentageLabel">Lines saved</p>
        </div>
      </div>
    </div>
  );
}

SalesOverview.propTypes = {
  salesOverview: PropTypes.shape({
    uploads: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number.isRequired,
    linesAttempted: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
  }),
};

export default SalesOverview;
