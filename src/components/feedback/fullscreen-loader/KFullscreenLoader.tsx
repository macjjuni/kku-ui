import { memo } from 'react';
import { KBackdrop, KSpinner } from '@/components';
import { useFullLoader } from '@/common/hooks';


const FullscreenLoader = () => {

  // region [Hooks]

  const { isOpen } = useFullLoader();

  // endregion

  return (
    <KBackdrop open={isOpen} className="k-fullscreen">
      <KSpinner className="k-fullscreen__spinner"/>
    </KBackdrop>
  );
};


const KFullscreenLoader = memo(FullscreenLoader);
KFullscreenLoader.displayName = 'KFullscreenLoader';

export default KFullscreenLoader;