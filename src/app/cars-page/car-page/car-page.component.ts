import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  id: number;
  name: string;
  color: string;
  year: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // динамическое отслеживание параметров роута
    // при дестрое компонента отписывается от слежки автоматически
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.name = params['name'];
    });

    // слежка за доп. параметрами
    this.route.queryParams.subscribe((params: Params) => {
      this.color = params['color'];
      this.year = params['year'];
    });
  }


}
