import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

var manufactuerData: string[] = require('./data/motherboard/manufacturer.json');

export interface User {
  name: string;
}

@Component({
  selector: 'app-component-selector',
  templateUrl: './component-selector.component.html',
  styleUrls: ['./component-selector.component.css']
})
export class ComponentSelectorComponent implements OnInit {
/**
 *
 */
constructor(private _formBuilder: FormBuilder) {
  
}

  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<User[]> | undefined;
  manufacturer: string[] = manufactuerData;
  motherBoardFormGroup: FormGroup = this._formBuilder.group(
    {manufacturer: ['']},
    { sockets: ['']}
    );
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
