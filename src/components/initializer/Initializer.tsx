import { memo } from 'react';
import { KFullscreenLoader } from '@/components';


const Initializer = () => {

  return (
    <>
      <KFullscreenLoader/>
    </>
  );
};

const KInitializer = memo(Initializer);
KInitializer.displayName = 'KInitializer';

export default KInitializer;