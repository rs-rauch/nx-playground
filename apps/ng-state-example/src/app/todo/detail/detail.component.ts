import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-playground-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
