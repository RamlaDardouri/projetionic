export class Plat {
  constructor(
    public id: number = 0,
    public nomPlat: string = '',
    public chef: string = '',
    public image: string = '',
    public prix: number = 0,
    public ingredient: string[] = []
  ) {}
}
