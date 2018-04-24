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
  hash: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.color = this.route.snapshot.queryParams['color'];
    this.year = this.route.snapshot.queryParams['year'];

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

    // слежка за фрагментом
    this.route.fragment.subscribe((fragment) => {
      this.hash = fragment;
    });
  }

  // програмно перейти на другую страницу
  openMazdaPage() {
    this.router.navigate(['/cars', 8, 'Mazda'], {
      queryParams: {
        color: 'pink',
        year: 2003
      },
      fragment: 'picfew'
    });
  }


}
