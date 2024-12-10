import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import './account-overview.css';

export const AccountOverview = ({ data }) => {
  console.log(data);

  return (
    <div className="accountOverviewWrapper">
      <div className="accountOverview">
        <div className="accountOverviewHeader">
          <h1 className="accountOverviewHeaderText">Account Overview</h1>

          <div className="supportOverview">
            <h1 className="supportHeader">Your feefo support contact</h1>
            <div className="supportContactOverview">
              <div className="supportProfileBox">
                <p>{data.supportContact.name[0]}</p>
              </div>
              <div className="supportContactInfo">
                <h1 className="supportContactInfoName">{data.supportContact.name}</h1>
                <div className="supportContactHandles">
                  <div className="supportContactHandleEmail">
                    <FontAwesomeIcon className="envelopeIcon" icon={faEnvelope} />
                    {data.supportContact.email}
                  </div>
                  <div className="supportContactHandlePhone">
                    020 3362 4208
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              <p>You had <strong>{data.salesOverview.successfulUploads} uploads</strong> and <strong>{data.salesOverview.linesSaved}</strong> lines added.</p>
            </div>
          </div>

          <div className="salesOverviewMetric">
            <div className="salesOverviewUploads">
              <p className="salesOverviewPercentage">
                {data.salesOverview.successfulUploads / data.salesOverview.uploads * 100}%
            </p>
              <p className="salesOverviewPercentageLabel">Upload success</p>
            </div>
            <div className="salesOverviewLines">
              <p className="salesOverviewPercentage">
                {data.salesOverview.linesSaved / data.salesOverview.linesAttempted * 100}%
            </p>
              <p className="salesOverviewPercentageLabel">Lines saved</p>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default AccountOverview;
