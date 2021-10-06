import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dog } from 'src/app/_models/interfaces';
import { DogService } from 'src/app/_services/dog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private searchInput: ElementRef | undefined;

 @ViewChild('searchInput') set content(content: ElementRef) {
    if (content) { // initially setter gets called with undefined
        this.searchInput = content;
        if (window.screen.width <= 600) {
          this.searchInput.nativeElement.focus();
        }
    }
 }

  search = new FormControl('');

  searchResults$: Observable<Dog[]>;
  searchResultsLoading$: Observable<boolean>;
  hideDrawer = true;
  activeSearch = false;
  showSearchInput = false;

  constructor(
    private dogService: DogService,
    private renderer: Renderer2,
    private router: Router
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

    // Watch for route changes to close drawer
    router.events.subscribe(() => {
      this.hideDrawer = true;
    });
  }

  ngOnInit(): void {
    this.dogService.getAll();

    // Start listening for updates to search field
    this.onSearch();

    // Set the search input visibility based on the screen size
    if (window.screen.width <= 600) {
      this.showSearchInput = false;
    } else {
      this.showSearchInput = true;
    }
  }

  // Toggles the search input field for mobile
  toggleInput(): void {
    if (window.screen.width <= 600) {
      this.showSearchInput = !this.showSearchInput;
    }

    if (this.showSearchInput){
      this.toggleDrawer();
      this.preventCloseOnClick();
      this.searchInput?.nativeElement.focus();
    }
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

  /*
  * To hide or show search on mobile
  */
 // Then add a listener to be able to change sidenav type dynamically is someone resizes a window or tilts a phone or such
 @HostListener('window:resize', [])
 onResize(): void {
   if (window.innerWidth <= 600) {
     this.showSearchInput = false;
   } else {
    this.showSearchInput = true;
   }
 }
}
