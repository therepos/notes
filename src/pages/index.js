import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Redirect() {
  const history = useHistory();
  const target = useBaseUrl('/docs/Home/index.md');

  useEffect(() => {
    history.replace(target);
  }, [target]);

  return null;
}
