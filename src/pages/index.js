import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Redirect() {
  const history = useHistory();
  const target = useBaseUrl('/');  
  // use /blog for redirect to blog
  // no slug default to lowercase folder name
  
  useEffect(() => {
    history.replace(target);
  }, [target]);

  return null;
}
