import { Component } from '@angular/core';
import { GestionPlatService } from '../gestion-plat.service';
import { Plat } from '../plat';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tabPlats!: Plat[];
  constructor(private PlatSer: GestionPlatService) {}

  ngOnInit() {
    this.tabPlats = this.PlatSer.getAllPlats();
  }


}
