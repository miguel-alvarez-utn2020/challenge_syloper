import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.scss']
})
export class HomeGalleryComponent implements OnInit {

  @Input() movies:Pelicula[] = [];
  @Input() stars:any;
  
  
  constructor() {
    
  }
  
  ngOnInit(): void {
    

    
  }
  

}
