import { Injectable } from '@angular/core';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  public filteredProducts: any;
  public showHide:boolean = true;

  public computers: Array<any> = [
    new Product('asus rog strix gl12', 3300, 'Bomba pena', '../assets/images/ROG_GL12.jpg', 1),
    new Product('asus rog strix helios', 2700, 'Bomba pena', '../assets/images/ROG_Helios.png', 2),
    new Product('acer predator', 1500, 'Shat lyav GYAMBUDRA', '../assets/images/Acer_Predator.jpg', 3),
    new Product('acer orion', 1300, 'Shat vad GYAMBUDRA', '../assets/images/Acer_Orion.jpg', 4),
    new Product('hp omen', 900, 'Shat vad GYAMBUDRA', '../assets/images/Hp_Omen.jpg', 5),
    new Product('dell alienware', 1100, 'Shat lyav GYAMBUDRA', '../assets/images/Dell_Alienware.jpg', 6),
    new Product('msi vortex', 1900, 'Shat lyav GYAMBUDRA', '../assets/images/MSI_Launches_Vortex.png', 7),
    new Product('msi xotic', 2100, 'Shat lyav GYAMBUDRA', '../assets/images/MSI_XOTIC.jpg', 8),
    new Product('msi vortex', 2500, 'Shat lyav GYAMBUDRA', '../assets/images/MSI_Trident_X.jpg', 9),
    new Product('zotac mek', 1100, 'Shat lyav GYAMBUDRA', '../assets/images/Zotac_MEK1.jpg', 10),
  ];


  constructor() { 
    this.filteredProducts = this.computers;
  }

  getCompByID(id){
    this.show();
    let temp;
    this.computers.map((item)=>{
      if(item.id == id){
        temp=item;
        return;
      }
    });
    return temp;
  }

  onKey(event: any) {
    let input = event.target.value.toLowerCase();
    this.filteredProducts = this.computers.filter(pc =>  pc.name.indexOf(input) != -1);
  }

  show(){
    setTimeout(() => { //whithout this method this code isn't working in dev mode 
      this.showHide = !this.showHide;
    }, 0);
  }

}
