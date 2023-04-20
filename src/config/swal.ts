import Swal from 'sweetalert2';

interface Swal {
    message: string;
}

export const swalAlert = ({ message }: Swal): any => {
    return Swal.fire({
        position: 'top-end',
        background: '#7367F0',
        width: '17rem',
        toast: true,
        title: message,
        showConfirmButton: false,
        timer: 3500,
        imageHeight: '10rem',
        customClass: 'custom-swal',
    });
};
