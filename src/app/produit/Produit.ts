import {DetailProduit} from "./DetailProduit";
import {Stock} from "../stock/Stock";
import {Rayon} from "./Rayon";

export class Produit {

  idProduit!: number;
  code!: string;
  libelle!: string;
  prixUnitaire!: number;
  picByte!: any;
  detailProduit!: DetailProduit;
  stock!:Stock;
  rayon!:Rayon;


}
