import { Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
/*
  Generated class for the MessgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessgProvider {

//private url:string ="http://localhost:8080/";
//private url:string="http://169.254.227.22:9990 ";
/*private url :string="api/remplirCarriere/";


  constructor(public http: Http) {
    console.log('Hello MessgProvider Provider');
  }


  getMessages(){
  return  this.http.get(this.url)
          .do(this.logResponse)
         .map(this.extractData)
         .catch(this.catchError)
  }

private catchError(error: Response | any){
  console.log(error);
  return Observable.throw(error.json().error || "Server error .");

}
 private extractData (res :Response){
   console.log(res);
 }

  private logResponse(res : Response){
    console.log(res);
  }*/
  apiRoot: string = "http://httpbin.org";
constructor(private http1: Http) { }
doGET() {
console.log("GET");
/*let url = `${this.apiRoot}/get`;
let search = new URLSearchParams();
search.set('foo', 'moo');
search.set('limit', 25);
this.http.get(url, {search: search}).subscribe(res => console.log(res.json()));*/
}
doPOST() {
console.log("POST");
}
doPUT() {
console.log("PUT");
}
doDELETE() {
console.log("DELETE");
}
doGETAsPromise() {
console.log("GET AS PROMISE");
}
doGETAsPromiseError() {
console.log("GET AS PROMISE ERROR");
}
doGETAsObservableError() {
console.log("GET AS OBSERVABLE ERROR");
}
doGETWithHeaders() {
console.log("GET WITH HEADERS");
}


}
