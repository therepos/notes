import React from 'react';
import TagsListInline from '@theme/TagsListInline';
import type { Props } from '@theme/BlogPostItem/Footer';

export default function BlogPostItemFooter(props: Props): JSX.Element {
  const { tags } = props;

  const hasTags = tags.length > 0;

  return (
    <>
      {hasTags && (
        <TagsListInline tags={tags} />
      )}
    </>
  );
}
