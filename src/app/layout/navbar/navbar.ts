import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loginservice } from '../../services/loginservice';

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
export class Navbar implements OnInit {

  perfilItems: DropdownItem[] = [
    { label: 'Seu Perfil', icon: 'person' },
    { label: 'Sair', icon: 'logout' }
  ];

  dropdownOpenImg = false;
  userName = '';

  toggleDropdownImg() {
    this.dropdownOpenImg = !this.dropdownOpenImg;
  }
  
  constructor(private el: ElementRef, private loginService: Loginservice, private router: Router) {}

  ngOnInit() {
    const user = this.loginService.getUser();
    this.userName = user?.name || user?.nome || user?.email || '';
    this.perfilItems[0].label = `Seu Perfil${this.userName ? ` (${this.userName})` : ''}`;
  }

  onDropdownItemClicked(item: DropdownItem) {
    if (item.icon === 'logout' || item.label.toLowerCase().includes('sair')) {
      this.loginService.logout();
      this.dropdownOpenImg = false;
      this.router.navigate(['/login']);
    }
  }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: Event) {
      if (!this.el.nativeElement.contains(event.target)) {
        this.dropdownOpenImg = false;
      }
    }

}