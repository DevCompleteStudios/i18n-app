import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";

@Component({
  selector: 'app-products-page',
  imports: [RouterLink, LanguageSelectorComponent],
  templateUrl: './products-page.component.html'
})
export default class ProductsPageComponent {

}
