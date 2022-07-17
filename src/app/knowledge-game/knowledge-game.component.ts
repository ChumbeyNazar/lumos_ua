import {animate, state, style, transition, trigger} from "@angular/animations";
import {Component, OnInit} from '@angular/core';
import {Level, Questions} from "./questions.model";
import {questions} from "../questions.model";

@Component({
  selector: 'app-knowledge-game',
  templateUrl: './knowledge-game.component.html',
  styleUrls: ['./knowledge-game.component.scss'],
  animations: [
    trigger("cardFlip", [
      state(
        "default",
        style({
          transform: "none"
        })
      ),
      state(
        "flipped",
        style({
          transform: "rotateY(180deg)"
        })
      ),
      state(
        "matched",
        style({
          visibility: "false",
          transform: "scale(0.05)",
          opacity: 0
        })
      ),
      transition("default => flipped", [animate("700ms")]),
      transition("flipped => default", [animate("700ms")]),
      transition("* => matched", [animate("600ms")])
    ])
  ]
})
export class KnowledgeGameComponent implements OnInit {

  restQuestions: Questions[] | undefined = undefined;
  currentQuestion: Questions | undefined = undefined;

  END_GAME: Questions = {
    id: 0,
    description: 'Кінець гри',
    level: Level.EASY
  };

  passedStep = 0;

  END_GAME_WITH_PASSED_STEP: Questions = {
    id: 0,
    description: 'Кінець гри </br></br>Є пропущені питання, тому вам двом потрібно відпрацювати їх! " +\n' +
      'Необхідно потанцювати під музику, яку вибере інший. Час = кількість пропущених питань * 10 сек',
    level: Level.EASY
  };
  state = 'default';
  isFilledRequeredField: boolean = false;
  selectedLevel: string | undefined;
  levels: string[] = ['EASY', 'NORMAL', 'HARD'];

  constructor() {
  }

  ngOnInit(): void {
    console.log('onInit');
    this.passedStep = 0;
    this.currentQuestion = {
      id: 0,
      description: 'START</br></br> <small>Ця гра про чесність. Якщо ти її починаєш, ти приймаєш її правила бути чесним(-ою) перед людиною з якою ти граєш! ' +
        'Ти можеш відмовитись зараз або під час ігри вийди, пропустити питання, але вийшовши ти покажеш що не довіряєш людині напроти, а пропустивши - зневажаєш правила! ' +
        'На рахунок останнього - пропуски рахуються, а в кінці гри необхідно буде їх відпрацювати. Відпрацьовувати буде людина, з якою ти граєш за тебе!</small>',
      level: Level.EASY
    }
  }

  nextQuestion() {
    if (this.state === "default") {
      this.state = "flipped";
    } else {
      this.state = "default";
    }

    console.log('random:', this.restQuestions?.length);
    let randomNumber = this.getRandomArbitrary(1, this.restQuestions?.length);
    if (this.restQuestions != undefined && this.restQuestions.length > 0) {
      console.log('next:', this.restQuestions);
      this.currentQuestion = this.restQuestions[randomNumber];
      this.restQuestions.splice(randomNumber, 1);
    } else {
      this.currentQuestion = this.END_GAME;
      if (this.passedStep > 0) {
        this.currentQuestion = this.END_GAME_WITH_PASSED_STEP;
      }
    }
  }

  getRandomArbitrary(min: number, max: number | undefined): number {
    if (max != undefined) {
      return Math.floor(Math.random() * ((max - 1) - min) + min);
    }
    return 0;
  }

  exit() {
    return '/';
  }

  pass() {
    this.passedStep++;
    this.nextQuestion();
  }

  startGame() {
    if (this.selectedLevel?.length != 0) {
      switch (this.selectedLevel) {
        case 'EASY': {
          console.log('EASY');
          this.restQuestions = questions.filter(question => question.level == Level.EASY);
          console.log('EASY:', this.restQuestions);
          break;
        }
        case 'NORMAL': {
          console.log('NORMAL');
          this.restQuestions = questions.filter(question => question.level != Level.HARD);
          break;
        }
        case 'HARD': {
          console.log('HARD');
          this.restQuestions = questions;
          break;
        }
      }
      this.isFilledRequeredField = true;
    }
  }
}
