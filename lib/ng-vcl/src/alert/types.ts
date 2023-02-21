import { Observable } from 'rxjs';

export enum AlertType {
  None,
  Question,
  Info,
  Success,
  Warning,
  Error,
}

export enum AlertAlignment {
  Left,
  Center,
  Right,
}

export enum AlertInput {
  None,
  Text,
}

export interface AlertOptions {
  text?: string;
  title?: string;
  html?: boolean;
  type?: AlertType;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  customClass?: string;
  confirmButtonLabel?: string;
  confirmButtonClass?: string;
  confirmButtonColor?: string;
  confirmButtonPrepIcon?: string;
  confirmButtonAppIcon?: string;
  cancelButtonLabel?: string;
  cancelButtonClass?: string;
  cancelButtonColor?: string;
  cancelButtonPrepIcon?: string;
  cancelButtonAppIcon?: string;
  input?: AlertInput;
  inputValue?: any;
  inputPlaceholder?: string;
  inputValidator?: (value: any) => boolean;
  confirmAction?: ((result: AlertResult) => Promise<any>) | Observable<any>;
}

export const ALERT_DEFAULTS: AlertOptions = {
  type: AlertType.None,
  html: false,
  showConfirmButton: true,
  showCancelButton: false,
  showCloseButton: false,
  closeOnBackdropClick: true,
  closeOnEscape: true,
  cancelButtonLabel: 'Cancel',
  cancelButtonClass: 'transparent outline',
  confirmButtonLabel: 'OK',
  confirmButtonClass: 'emphasized',
  input: AlertInput.None,
};

export const TYPE_CLASS_MAP = {
  [AlertType.None]: {
    alertClass: '',
    iconClass: '',
  },
  [AlertType.Question]: {
    alertClass: '',
    iconClass: 'vcl:question',
  },
  [AlertType.Info]: {
    alertClass: 'info',
    iconClass: 'vcl:info',
  },
  [AlertType.Success]: {
    alertClass: 'success',
    iconClass: 'vcl:success',
  },
  [AlertType.Warning]: {
    alertClass: 'warning',
    iconClass: 'vcl:warning',
  },
  [AlertType.Error]: {
    alertClass: 'error',
    iconClass: 'vcl:error',
  },
};

export interface AlertResult {
  action: 'confirm' | 'close' | 'cancel' | 'error';
  value?: any;
}
