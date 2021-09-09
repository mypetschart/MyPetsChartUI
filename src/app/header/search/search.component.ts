import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Dog } from 'src/app/_models/interfaces';
import { DogService } from 'src/app/_services/dog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search = new FormControl('');

  searchResults$: Observable<Dog[]>;
  searchResultsLoading$: Observable<boolean>;
  hideDrawer = true;
  activeSearch = false;

  constructor(
    private dogService: DogService,
    private renderer: Renderer2
    ) {
    this.searchResults$ = this.dogService.entities$;
    this.searchResultsLoading$ = this.dogService.loading$;

    // Watch for clicks OFF of search drawer to close it
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.activeSearch) {
        this.hideDrawer = true;
      }
      this.activeSearch = false;
    });
  }

  ngOnInit(): void {
    this.dogService.getAll();

    // Start listening for updates to search field
    this.onSearch();
  }

  toggleDrawer(): void {
    this.hideDrawer = false;
  }

  onSearch(): void {
    // Subscribe to the search field to search when value changes
    this.search.valueChanges.subscribe(val => {
      if (val !== '')  {
        const queryParams = {
          name: this.titlecase(this.search.value)
        };

        this.searchResults$ = this.dogService.getWithQuery(queryParams);
      } else {
        this.searchResults$ = this.dogService.getAll();
      }
    });
  }

  preventCloseOnClick(): void {
    this.activeSearch = true;
  }

  titlecase(value: string): string {
    const first = value.substr(0, 1).toUpperCase();
    const last = value.substr(1).toLowerCase();
    return first + last;
  }
}
