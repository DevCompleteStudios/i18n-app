import { Component } from '@angular/core';
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basic-plan-page',
  imports: [LanguageSelectorComponent, RouterLink],
  templateUrl: './basic-plan-page.component.html'
})
export default class BasicPlanPageComponent {

}
