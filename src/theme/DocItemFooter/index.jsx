import React from 'react';
import EditThisPage from '@theme/EditThisPage';
import LastUpdated from '@theme/LastUpdated';

export default function DocItemFooter(props) {
  const {
    editUrl,
    lastUpdatedAt,
    lastUpdatedBy,
    formattedLastUpdatedAt,
  } = props;

  return (
    <div className="row">
      <div className="col">
        {editUrl && <EditThisPage editUrl={editUrl} />}
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            className="theme-last-updated"
            lastUpdatedAt={lastUpdatedAt}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </div>
    </div>
  );
}
