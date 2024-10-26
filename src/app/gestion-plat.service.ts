import { Injectable } from '@angular/core';
import { Plat } from './plat';




@Injectable({
  providedIn: 'root'
})
export class GestionPlatService {

  private allPlats: Plat[] = [
    new Plat(
      1,
      'Couscous',
      'ramla',
      'https://gnitekram.fr/wp-content/uploads/2021/02/Capture-de%CC%81cran-2021-02-13-a%CC%80-16.50.09.png',
     12,
          ['legume', 'viande']
    ),
    new Plat(
      2,
      'brik',
      'khawla',
      'https://choumicha.ma/images/recettes/Briks-au-poulet.jpg',
     12,
          ['pate', 'pomme de terre']
    ),

  ];

  deletePlat(id:any) {
    let i = this.allPlats.findIndex((c) => c.id == id);
    this.allPlats.splice(i, 1); // i, i+1, i+2
  }

  getPlatById(id:any) {
    return this.allPlats.find((c) => c.id == id);
  }

  addPlat(nPlat:any) {
    nPlat.id = this.allPlats[this.allPlats.length - 1].id + 1;
    nPlat.ingredient = nPlat.ingredient.split('-');
    this.allPlats.push(nPlat);
  }

  getAllPlats() {
    return this.allPlats;
  }

  updatePlat(updatedPlat: Plat): void {
    const index = this.allPlats.findIndex(plat => plat.id === updatedPlat.id);
    if (index !== -1) {
      this.allPlats[index] = updatedPlat; 
    }
  }

  constructor() {}
}
