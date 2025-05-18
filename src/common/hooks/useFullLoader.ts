import fullLoaderStore from '@/components/feedback/fullscreen-loader/KFullscreenLoader.store';


export default function useFullLoader() {

  const { isOpen, open, close, set } = fullLoaderStore();

  return { isOpen, open, close, set };
}
