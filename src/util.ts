import Swal, { SweetAlertIcon } from 'sweetalert2';
import "./index.css"
export const showAlert = (titleText = 'Something happened.', alertType?: SweetAlertIcon): void => {

  Swal.fire({
    titleText,
    position: 'top-end',
    timer: 3000,
    timerProgressBar: true,
    toast:true,
    showConfirmButton: false,
    showCancelButton: true,
    cancelButtonText: 'Dismiss',
    icon: alertType,
   
    showClass: {
      popup: 'ab',
      backdrop: 'ab2',
    },
    hideClass: {
      popup: '',
      backdrop: '',
    },
  });
};
