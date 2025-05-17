import { fullLoaderStore } from '@/common/store';


export default function useFullLoader() {

  const { isOpen, hide, show, set } = fullLoaderStore();

  return { isOpen, hide, show, set };
}
