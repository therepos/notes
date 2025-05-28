import React from 'react';
import EditThisPage from '@theme/EditThisPage';
import LastUpdated from '@theme/LastUpdated';

export default function DocItemMetadata({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
}) {
  return (
    <div className="row margin-top--sm theme-doc-footer-edit-meta-row">
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
