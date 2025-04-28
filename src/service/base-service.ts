import {HttpHeaders} from '@angular/common/http';

export class BaseService {
  getHeaders() {
    return {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + localStorage.getItem("token") || ""
      })
    };
  }
}
