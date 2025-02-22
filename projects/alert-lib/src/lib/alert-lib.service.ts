import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertLibService {
  
  success(title: string, text: string) {
    return Swal.fire({
      icon: 'success',
      title,
      text,
      confirmButtonText: 'Aceptar'
    });
  }

  error(title: string, text: string) {
    return Swal.fire({
      icon: 'error',
      title,
      text,
      confirmButtonText: 'Cerrar'
    });
  }

  warning(title: string, text: string) {
    return Swal.fire({
      icon: 'warning',
      title,
      text,
      confirmButtonText: 'Atención'
    });
  }
  async confirm(title: string, text: string): Promise<boolean> {
    const result = await Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar',
    });

    return result.isConfirmed;
  }


  
}

