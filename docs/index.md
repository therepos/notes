---
id: index
slug: /
hide_table_of_contents: true
---

import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function RedirectToBlog() {
  const history = useHistory();
  const blogUrl = useBaseUrl('/blog');
  useEffect(() => {
    history.replace(blogUrl);
  }, [blogUrl]);
  return null;
}
