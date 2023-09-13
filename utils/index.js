import {
    showErrorMsg,
    showSuccessMsg,
    showWarningMsg
} from './flashMessage';
import isValidEmail from './validation';

const timeoutDelay = (time) => new Promise(resolve => setTimeout(resolve, time));

export {
    showErrorMsg,
    showSuccessMsg,
    showWarningMsg,
    isValidEmail,
    timeoutDelay
};
