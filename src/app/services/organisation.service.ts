import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  constructor(private http: HttpClient) {}

  public getOrganisation(orgnr: string) {
    const url = 'assets/organisation/' + orgnr + '.json';
    console.log('OrganisationService.getOrganisation - url: ' + url);
    return this.http.get(url);
  }

  public getArbetsplats(kundnr: number) {
    const url = 'assets/arbetsplats/' + kundnr + '.json';
    console.log('OrganisationService.getArbetsplats - url: ' + url);
    return this.http.get(url);
  }
}
