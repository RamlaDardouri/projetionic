import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { GestionPlatService } from '../gestion-plat.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.page.html',
  styleUrls: ['./add-plat.page.scss'],
})
export class AddPlatPage implements OnInit {
  constructor(
    private PlatSer: GestionPlatService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit(formValue:any) {
    this.PlatSer.addPlat(formValue);
    this.router.navigateByUrl('/home');
  }
}
