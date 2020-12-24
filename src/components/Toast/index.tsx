import Toast from 'react-native-toast-message';

let toast: any;

export default function showToast(
  message: string,
  type: any,
  duration = 4000,
  offset = 100,
) {
  Toast.show({
    type,
    position: 'top',
    text1: 'Attention',
    text2: message,
    visibilityTime: duration,
    autoHide: true,
    topOffset: offset,
  });
}

export function hideLoading() {
  Toast.hide(toast);
}

export function showErrorToast(message: string, offset?: number) {
  showToast(message, 'error', offset);
}

export function showSuccessToast(message: string, offset?: number) {
  showToast(message, 'success', offset);
}

export function showInfoToast(message: string, offset?: number) {
  showToast(message, 'info', offset);
}
