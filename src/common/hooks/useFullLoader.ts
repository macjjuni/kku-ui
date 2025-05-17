import fullLoaderStore from '@/components/feedback/fullscreen-loader/KFullscreenLoader.store';


export default function useFullLoader() {

  const { isOpen, hide, show, set } = fullLoaderStore();

  return { isOpen, hide, show, set };
}
