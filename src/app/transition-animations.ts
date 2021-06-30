import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
  } from '@angular/animations';

export const fadeIn =
    trigger('fadeIn', [
        // state(),
        transition('void => *', [
          style({ opacity: 0 }),
          animate( 150 )
        ]),
    ]);
