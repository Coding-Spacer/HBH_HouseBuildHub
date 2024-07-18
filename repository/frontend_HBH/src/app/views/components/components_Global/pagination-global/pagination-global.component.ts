import  {ChangeDetectionStrategy, Component, Input } from '@angular/core';



@Component({
  selector: 'app-pagination-global',
  templateUrl: './pagination-global.component.html',
  styleUrls: ['./pagination-global.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PaginationGlobalComponent {
    @Input('data') meals: string[] = [];
    page: number = 1;
}

