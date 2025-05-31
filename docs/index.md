---
id: index
title: Redirect
slug: /
hide_table_of_contents: true
---

import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function RedirectToBlog() {
  const history = useHistory();
  useEffect(() => {
    history.push('/blog');
  }, []);
  return null;
}
