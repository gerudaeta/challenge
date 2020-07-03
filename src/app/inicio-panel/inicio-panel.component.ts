import { Component, OnInit } from '@angular/core';
import {SitesService} from '../services/sites.service';
import {Site} from '../model/site.model';

@Component({
  selector: 'app-inicio-panel',
  templateUrl: './inicio-panel.component.html',
  styleUrls: ['./inicio-panel.component.css']
})
export class InicioPanelComponent implements OnInit {

  sitios: Site[];

  constructor(private _sitesService: SitesService) { }

  ngOnInit(): void {
    this.obtenerSites();
  }

  obtenerSites() {
    this._sitesService.obtenerSites().subscribe((value: any) => {
      console.log(value);
      this.sitios = value.sites;
    },
    error => {
      console.log(error);
    });
  }

}
