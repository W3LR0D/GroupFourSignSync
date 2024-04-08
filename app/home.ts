import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AslTranslationService {
  private apiKey = '';
  private apiUrl = '';

  constructor(private http: HttpClient) { }

  translateToASL(text: string): Observable<any> {
    const params = {
      apiKey: this.apiKey,
      text: text
    };
    return this.http.post<any>(this.apiUrl, params);
  }
}


@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class AslTranslationComponent {
  inputText: string = '';
  aslTranslation: string = '';

  constructor(private aslTranslationService: AslTranslationService) { }

  translate(): void {
    this.aslTranslationService.translateToASL(this.inputText)
      .subscribe(
        response => {
          this.aslTranslation = response.translation;
        },
        error => {
          console.error('Error translating to ASL:', error);
        }
      );
  }
}
