import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
  // void => *
  transition(':enter', [
    style({
      width: '*',
      height: '*'
    }),
    group([
      animate(3000, style({
        width: '200px',
        height: '200px'
      })),
      animate(6000, keyframes([
        style({backgroundColor: 'blue'}),
        style({backgroundColor: 'yellow'}),
        style({backgroundColor: 'pink'}),
        style({backgroundColor: 'green'}),
        style({backgroundColor: 'red'}),
        style({backgroundColor: 'grey'})
      ]))
    ]),
    animate(1000)
  ]),
  // * => void
  transition(':leave', animate(500, style({
    opacity: 0
  })))
]);

// export const changeWidthTrigger = trigger('changeWidth', [
//   transition('* => *', [
//     animate(1000, style({
//       width: '50px',
//       height: '200px'
//     })),
//     animate(1000, style({
//       width: '*',
//       height: '*'
//     }))
//   ])
// ]);
