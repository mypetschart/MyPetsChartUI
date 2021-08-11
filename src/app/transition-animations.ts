import {
    trigger,
    transition,
    style,
    state,
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

export const fadeIn300 =
    trigger('fadeIn300', [
        // state(),
        transition('void => *', [
          style({ opacity: 0 }),
          animate( 300 )
        ]),
    ]);

export const fadeIn450 =
    trigger('fadeIn450', [
        // state(),
        transition('void => *', [
          style({ opacity: 0 }),
          animate( 450 )
        ]),
    ]);

export const fadeIn600 =
    trigger('fadeIn600', [
        // state(),
        transition('void => *', [
          style({ opacity: 0 }),
          animate( 600 )
        ]),
    ]);

// export const fadeInAndOut =
//     trigger("fadeInAndOut", [
//       state("in", style({ opacity: 1 })),
//       transition(":enter", [
//         animate(
//           300,
//           keyframes([
//             style({ opacity: 0, offset: 0 }),
//             style({ opacity: 0.25, offset: 0.25 }),
//             style({ opacity: 0.5, offset: 0.5 }),
//             style({ opacity: 0.75, offset: 0.75 }),
//             style({ opacity: 1, offset: 1 }),
//           ])
//         )
//       ]),
//       transition(":leave", [
//         animate(
//           300,
//           keyframes([
//             style({ opacity: 1, offset: 0 }),
//             style({ opacity: 0.75, offset: 0.25 }),
//             style({ opacity: 0.5, offset: 0.5 }),
//             style({ opacity: 0.25, offset: 0.75 }),
//             style({ opacity: 0, offset: 1 }),
//           ])
//         )
//       ])
//     ]);
