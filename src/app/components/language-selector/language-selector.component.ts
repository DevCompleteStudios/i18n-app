import { Component, signal } from '@angular/core';

@Component({
  selector: 'language-selector',
  imports: [],
  templateUrl: './language-selector.component.html'
})
export class LanguageSelectorComponent {

  protected languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

}
