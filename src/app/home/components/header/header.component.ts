import { Component } from '@angular/core';
import { faHeart, faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
}
