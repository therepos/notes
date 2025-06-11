import React from 'react';
import BlogPostItems from '@theme/BlogPostItems';
import BlogLayout from '@theme/BlogLayout';
import useBlogPosts from '@docusaurus/theme-classic/lib/theme/hooks/useBlogPosts';

export default function Blog() {
  const allPosts = useBlogPosts();

  const sortedPosts = [...allPosts].sort((a, b) => {
    const pa = a.metadata.frontMatter?.pinned;
    const pb = b.metadata.frontMatter?.pinned;
    if (pa && !pb) return -1;
    if (!pa && pb) return 1;
    return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
  });

  return (
    <BlogLayout>
      <BlogPostItems items={sortedPosts} />
    </BlogLayout>
  );
}
