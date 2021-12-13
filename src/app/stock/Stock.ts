import {Produit} from "../produit/Produit";

export class Stock {

  idStock!: number;
  qteStock!: number;
  qteMin!: number;
  libelleStock!: string;
  produits!: Produit[]


}
