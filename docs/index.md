---
id: index
slug: /
title: ''
hide_title: true
hide_table_of_contents: true
custom_edit_url: null
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

}
