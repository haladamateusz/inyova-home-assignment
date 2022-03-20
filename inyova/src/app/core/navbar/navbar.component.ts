import { Component } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  links = [{ label: 'Strategy', value: 'strategy' }, { label: 'Next steps', value: 'next-steps' }];
  activeLink: string;

  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const matchedLink = this.links.find(link => event.urlAfterRedirects.includes(link.value));
        this.activeLink = matchedLink ? matchedLink.label : '';
      });
  }

}
