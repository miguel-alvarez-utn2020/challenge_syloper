import { Component, OnInit,} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  search = {
    termino: '',
  };
  error: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToSearch(nombre: string) {
    if (nombre) {
      this.error = false;
      this.router.navigateByUrl(`/search-movie/${nombre}`);
    } else {
      this.error = true;
    }
  }

  public get getClass(): string {
    return this.error ? 'border border-danger' : 'border border-white';
  }

  onSubmit(formulario: NgForm) {
    this.search = formulario.value;
  }
}
