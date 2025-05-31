import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Redirect() {
  const history = useHistory();
  const blogUrl = useBaseUrl('/blog');

  useEffect(() => {
    history.replace(blogUrl);
  }, [blogUrl]);

  return null; // Renders nothing, no flash
}
