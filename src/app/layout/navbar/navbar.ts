import { Component, ElementRef, HostListener } from '@angular/core';

export interface DropdownItem {
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  perfilItems: DropdownItem[] = [
    { label: 'Seu Perfil', icon: 'person' },
    { label: 'Sair', icon: 'logout' }
  ];

  dropdownOpenImg = false;


  toggleDropdownImg() {
    this.dropdownOpenImg = !this.dropdownOpenImg;
  }
  
  constructor(private el: ElementRef) {}

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: Event) {
      if (!this.el.nativeElement.contains(event.target)) {
        this.dropdownOpenImg = false;
      }
    }

}