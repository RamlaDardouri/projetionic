import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plat } from '../plat';
import { GestionPlatService } from '../gestion-plat.service';

@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.page.html',
  styleUrls: ['./update-plat.page.scss'],
})
export class UpdatePlatPage implements OnInit {
  selectedPlat: Plat | undefined;
  nomPlat: string = '';
  chef: string = '';
  image: string = '';
  prix: number = 0;
  ingredients: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private platService: GestionPlatService,
    private router: Router
  ) {}

  ngOnInit() {
    const platId = this.activatedRoute.snapshot.paramMap.get('id');
    if (platId) {
      this.selectedPlat = this.platService.getPlatById(platId);
      if (this.selectedPlat) {
        this.nomPlat = this.selectedPlat.nomPlat;
        this.chef = this.selectedPlat.chef;
        this.image = this.selectedPlat.image;
        this.prix = this.selectedPlat.prix;
        this.ingredients = this.selectedPlat.ingredient.join(', '); 
      }
    }
  }

  onSubmit(form: any) {
    if (this.selectedPlat) {
      const updatedPlat: Plat = {
        ...this.selectedPlat,
        nomPlat: this.nomPlat,
        chef: this.chef,
        image: this.image,
        prix: this.prix,
        ingredient: this.ingredients.split(','), 
      };
      this.platService.updatePlat(updatedPlat);
      this.router.navigate(['/home']); 
    }
  }
}
