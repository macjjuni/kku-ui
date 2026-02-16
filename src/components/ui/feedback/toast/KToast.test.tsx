import { describe, expect, it, vi, beforeEach } from 'vitest';
import { KToast, kToast } from './KToast';
import { renderWithUser } from '@/test-utils';

describe('KToast', () => {
  beforeEach(() => {
    // 각 테스트 전에 모든 toast 제거
    vi.clearAllMocks();
  });

  // region [Basic Tests]
  // Note: KToast는 sonner 라이브러리를 사용하며, jsdom 환경에서는
  // 완전한 렌더링이 제한됩니다. 실제 브라우저나 E2E 테스트에서 검증 권장.

  it('KToast 컴포넌트가 에러 없이 렌더링되어야 한다', () => {
    expect(() => {
      renderWithUser(<KToast />);
    }).not.toThrow();
  });

  it('다양한 size prop을 에러 없이 받아야 한다', () => {
    expect(() => {
      renderWithUser(<KToast size="sm" />);
      renderWithUser(<KToast size="md" />);
      renderWithUser(<KToast size="lg" />);
      renderWithUser(<KToast size="full" />);
    }).not.toThrow();
  });

  it('다양한 position prop을 에러 없이 받아야 한다', () => {
    const positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'] as const;

    expect(() => {
      positions.forEach((position) => {
        renderWithUser(<KToast position={position} />);
      });
    }).not.toThrow();
  });
  // endregion

  // region [Toast API Tests]
  it('kToast 함수가 에러 없이 호출되어야 한다', () => {
    renderWithUser(<KToast />);

    expect(() => {
      kToast('Test message');
      kToast.success('Success message');
      kToast.error('Error message');
      kToast.info('Info message');
      kToast.warning('Warning message');
    }).not.toThrow();
  });

  it('kToast에 options를 전달할 수 있어야 한다', () => {
    renderWithUser(<KToast />);

    expect(() => {
      kToast('Message', {
        description: 'Description',
        duration: 1000,
        closeButton: true,
        action: {
          label: 'Action',
          onClick: vi.fn(),
        },
        cancel: {
          label: 'Cancel',
          onClick: vi.fn(),
        },
      });
    }).not.toThrow();
  });
  // endregion

  // region [Props Tests]
  it('custom props를 에러 없이 받아야 한다', () => {
    expect(() => {
      renderWithUser(
        <KToast
          offset="20px"
          mobileOffset="10px"
          style={{ zIndex: 9999 }}
          toastOptions={{
            classNames: {
              toast: 'custom-toast',
              title: 'custom-title',
            },
          }}
        />,
      );
    }).not.toThrow();
  });
  // endregion
});
