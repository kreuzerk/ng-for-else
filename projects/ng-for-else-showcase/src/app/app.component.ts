import { Component } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private AVAILABLE_DWARF_CLASSES = ['Driller', 'Engineer', 'Gunner', 'Scout'];
  dwarfClasses = [...this.AVAILABLE_DWARF_CLASSES];
  dwarfClasses$ = of(this.dwarfClasses).pipe(delay(5000));

  arrayUsageDemoCode = `
<ng-template #emptyListTemplate>
  <div
    class="bg-red-400 rounded-lg shadow-lg p-5 mt-3 border border-red-500 text-white"
  >
    Empty list
  </div>
</ng-template>

<div
  class="bg-white rounded-lg shadow-lg p-5 mt-3 border border-slate-100"
  *ngFor="let dwarfClass of dwarfClasses; else: emptyListTemplate"
>
  {{ dwarfClass }}
</div>
`;

  reduceDwarfClasses(): void {
    this.dwarfClasses = ['Driller', 'Engineer'];
  }

  cleanup(): void {
    this.dwarfClasses = [];
  }

  reset(): void {
    this.dwarfClasses = [...this.AVAILABLE_DWARF_CLASSES];
  }
}
