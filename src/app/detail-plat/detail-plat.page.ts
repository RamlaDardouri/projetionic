import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { AlertController } from '@ionic/angular';
import { Plat } from '../plat';
import { GestionPlatService } from '../gestion-plat.service';

@Component({
  selector: 'app-detail-plat',
  templateUrl: './detail-plat.page.html',
  styleUrls: ['./detail-plat.page.scss'],
})
export class DetailPlatPage implements OnInit {
  selectedPlat: Plat | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private PlatSer: GestionPlatService,
    private router: Router
  ) {}

  ngOnInit() {

    this.selectedPlat = this.PlatSer.getPlatById(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
  }

  navigateToUpdate() {
    if (this.selectedPlat && this.selectedPlat.id !== undefined) {
      this.router.navigate(['/update-plat', this.selectedPlat.id]);
    }
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes-vous sûr de vouloir supprimer ce cours ?',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            if (this.selectedPlat && this.selectedPlat.id !== undefined) {  // Vérification
              this.PlatSer.deletePlat(this.selectedPlat.id);
              this.router.navigateByUrl('/home');
            }
          },
        },
        'Non',
      ],
    });

    await alert.present();
  }

}
