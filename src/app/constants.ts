export const CREATE_PASSWORD_REGEX: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/

export const POPUP_NOTIFICATION_TYPE = Object.freeze({
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
});
