import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

export const handleError = (errorResponse: HttpErrorResponse) => {
  let errorMessage = '';
  if (errorResponse.error instanceof ErrorEvent) {
    // A client side or network error occured.
    errorMessage = `An error occured : ${errorResponse.error.message}`;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contains info as to what went wrong.
    errorMessage = `Server returned code : ${errorResponse.status}, error message is: ${errorResponse.message}`;
  }

  console.error(errorMessage);
  return throwError(errorMessage);
};
