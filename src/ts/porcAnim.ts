// import P5 from 'p5';
// import 'p5/lib/addons/p5.dom';

// export class PorcAnim {
//   private fish: Fish;
//   private snake: Snake;
//   private lizard: Lizard;
//   private animal: number;
//   private canvas: any;

//   public constructor(private p5: P5) {
//     this.p5.fullscreen()
//     // fullScreen(FX2D);
//     // this.fish = new Fish(new PVector(width / 2, height / 2));
//     // this.snake = new Snake(new PVector(width / 2, height / 2));
//     // this.lizard = new Lizard(new PVector(width / 2, height / 2));
//     // this.animal = 0;
//   }

//   public draw(): void {
//     this.canvas = this.p5.createCanvas(200, 200);
//     canvas.parent();
//     // background(40, 44, 52);

//     switch (this.animal) {
//       case 0:
//         this.fish.resolve();
//         this.fish.display();
//         break;
//       case 1:
//         this.snake.resolve();
//         this.snake.display();
//         break;
//       case 2:
//         this.lizard.resolve();
//         this.lizard.display();
//         break;
//     }
//   }

//   public mousePressed(): void {
//     if (this.animal > 2) {
//       this.animal = 0;
//     }
//   }
// }

import P5 from "p5";
import "p5/lib/addons/p5.dom";
// import "p5/lib/addons/p5.sound";	// Include if needed
// import "./styles.scss";

// DEMO: A sample class implementation
import MyCircle from "./MyCircle";

// Creating the sketch itself
const sketch = (p5: P5) => {
  // DEMO: Prepare an array of MyCircle instances
  const myCircles: MyCircle[] = [];

  // The sketch setup method
  p5.setup = () => {
    // Creating and positioning the canvas
    const canvas = p5.createCanvas(200, 200);
    canvas.parent("app");

    // Configuring the canvas
    p5.background("white");

    // DEMO: Create three circles in the center of the canvas
    for (let i = 1; i < 4; i++) {
      const p = p5.width / 4;
      const circlePos = p5.createVector(p * i, p5.height / 2);
      const size = i % 2 !== 0 ? 24 : 32;
      myCircles.push(new MyCircle(p5, circlePos, size));
    }
  };

  // The sketch draw method
  p5.draw = () => {
    // DEMO: Let the circle instances draw themselves
    myCircles.forEach(circle => circle.draw());
  };
};

new P5(sketch);
