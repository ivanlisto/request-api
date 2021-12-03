import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/models/placeholder.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  images: Images | undefined;
  error: any;
  constructor(private crudService: CrudService) {
    this.getter()
   }
  ngOnInit(): void {}
  getter() {
    this.crudService.getFotos().subscribe(
      (data: Images) => {
        this.images = data;
        console.log('O dado que recebemos', data);
        console.log('A variavel que preenchemos', this.images);
    },
      (error: any) => {
        this.error = error;
        console.error('ERROR', error);
    }
  );
  }
}
