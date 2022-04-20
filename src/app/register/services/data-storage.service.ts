import {Injectable} from "@angular/core";
import {UserModel} from "../interfaces/user.model";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private http: HttpClient) {
    }

    sendDataToBack(user: UserModel) {
        this.http.post('http://localhost:8080/api/save/user', user).subscribe(response => {
            console.log(response);
        });
    }
}