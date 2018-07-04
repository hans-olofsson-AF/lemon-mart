import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { OrganisationService } from './organisation.service';

import { Organisation } from '../model/organisation';
import { Arbetsplats } from '../model/arbetsplats';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _organisation = new BehaviorSubject<any>({});
  private _arbetsplats = new BehaviorSubject<any>({});
  private _errorMessageOrganisation = new BehaviorSubject<any>({});
  private _errorMessageArbetsplats = new BehaviorSubject<any>({});

  constructor(private organisationService: OrganisationService) {
    this._errorMessageOrganisation.next(null);
    this._errorMessageArbetsplats.next(null);
  }

  public get organisation() {
    return this._organisation.asObservable();
  }

  public get arbetsplats() {
    return this._arbetsplats;
  }

  public get errorMessageOrganisation() {
    return this._errorMessageOrganisation.asObservable();
  }

  public get errorMessageArbetsplats() {
    return this._errorMessageArbetsplats.asObservable();
  }

  public loadOrganisation(orgnr: string) {
    this._errorMessageArbetsplats.next(null);
    this.organisationService.getOrganisation(orgnr).subscribe(
      res => {
        this._organisation.next(res);
        this._errorMessageOrganisation.next(null);
      },
      error => {
        console.log('error.status: ', error.status);
        if (error.status === 404) {
          this._organisation.next(new Organisation());
          this._errorMessageOrganisation.next(
            'angivet organisationsnummer existerar ej'
          );
        } else {
          this._organisation.next(new Organisation());
          this._errorMessageOrganisation.next(error.statusText);
        }
      }
    );
  }

  public loadArbetsplats(kundnr: number) {
    this.organisationService.getArbetsplats(kundnr).subscribe(
      res => {
        this._arbetsplats.next(res);
        this._errorMessageOrganisation.next(null);
      },
      error => {
        console.log('error.status: ', error.status);
        if (error.status === 404) {
          this._arbetsplats.next(new Arbetsplats());
          this._errorMessageArbetsplats.next('vald arbetsplats existerar ej');
        } else {
          this._arbetsplats.next(new Arbetsplats());
          this._errorMessageArbetsplats.next(error.statusText);
        }
      }
    );
  }
}
