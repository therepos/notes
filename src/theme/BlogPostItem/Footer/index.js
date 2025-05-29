import React from 'react';
import TagsListInline from '@theme/TagsListInline';

export default function BlogPostItemFooter(props) {
  const { tags } = props;
  const hasTags = tags.length > 0;

  return (
    <>
      {hasTags && <TagsListInline tags={tags} />}
    </>
  );
}
