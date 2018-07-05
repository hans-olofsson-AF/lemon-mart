import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface Arbetsplats {
  kundnr: number;
  namn: string;
}

const ELEMENT_DATA: Arbetsplats[] = [
  {kundnr: 1, namn: 'Hydrogen'},
  {kundnr: 2, namn: 'Helium'},
  {kundnr: 3, namn: 'Lithium'},
  {kundnr: 4, namn: 'Beryllium'},
  {kundnr: 5, namn: 'Boron'},
  {kundnr: 6, namn: 'Carbon'},
  {kundnr: 7, namn: 'Nitrogen'},
  {kundnr: 8, namn: 'Oxygen'},
  {kundnr: 9, namn: 'Fluorine'},
  {kundnr: 10, namn: 'Neon'},
];

@Component({
  selector: 'app-arbetsplatser',
  templateUrl: './arbetsplatser.component.html',
  styleUrls: ['./arbetsplatser.component.css']
})
export class ArbetsplatserComponent implements OnInit {
  displayedColumns: string[] = ['namn'];
  dataSource = new MatTableDataSource<Arbetsplats>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
