import {HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

export class DataServiceError {
  errorType: 'NotFound' | 'Validation' | 'Unexpected';
  message: string;
  friendlyMessage: string;
}

const fromStatus = (status: number): 'NotFound' | 'Validation' | 'Unexpected' => {
  switch (status) {
    case 404:
      return 'NotFound';
    case 400:
      return 'Validation';
    default:
      return 'Unexpected';
  }
};

// should create an Error type instead of using 'string'
export const handleError = (errorResponse: HttpErrorResponse): Observable<DataServiceError> => {
  const dataServiceError = new DataServiceError();
  if (errorResponse.error instanceof ErrorEvent) {
    // A client side or network error occured.
    dataServiceError.errorType = 'Unexpected';
    dataServiceError.friendlyMessage = 'An error occured client side or network issue ?';
    dataServiceError.message = errorResponse.error.message;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contains info as to what went wrong.
    dataServiceError.errorType = fromStatus(errorResponse.status);
    dataServiceError.friendlyMessage = `Server returned code : ${errorResponse.status}, error message is: ${errorResponse.message}`;
    dataServiceError.message = errorResponse.statusText;
  }

  return throwError(dataServiceError);
};
