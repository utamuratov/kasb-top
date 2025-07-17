import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { SubmittedComponent } from '../../components/submitted/submitted.component';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { RadioButton } from 'primeng/radiobutton';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { forkJoin } from 'rxjs';
import { CheckboxModule } from 'primeng/checkbox';
import { BaseService } from '../../core/services/base.service';

@Component({
  selector: 'app-test',
  imports: [
    SubmittedComponent,
    ButtonModule,
    StepperModule,
    RadioButton,
    FormsModule,
    NgClass,
    CheckboxModule,
  ],
  template: `
    <main class="bg-gray-50">
      @if (natijaID()) {
        <app-submitted></app-submitted>
      } @else {
        <div class="min-h-screen py-8">
          <div class="max-w-3xl mx-auto px-4">
            <div
              class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
            >
              <div class="text-center mb-12">
                <h1 class="text-3xl font-bold text-gray-900 mb-4">
                  Kasb tanlash testi
                </h1>
                <p class="text-gray-600 mb-8">
                  Barcha savollarga to'g'ri javob bering. Bu sizning
                  kelajagingiz uchun muhim qadam.
                </p>

                <div class="card flex justify-center">
                  <p-stepper [value]="activeQuestionType" class="basis-[50rem]">
                    <p-step-list>
                      <p-step [value]="1" [disabled]="true"
                        >Qiziqish
                        {{
                          activeQuestionIndex < 30 ? activeQuestionIndex : 30
                        }}/30</p-step
                      >
                      <p-step [value]="2" [disabled]="true"
                        >Xarakter
                        {{
                          activeQuestionIndex < 30
                            ? 0
                            : activeQuestionIndex > 58
                              ? 28
                              : activeQuestionIndex - 30
                        }}/28</p-step
                      >
                      <p-step [value]="3" [disabled]="true"
                        >Qobiliyat
                        {{
                          activeQuestionIndex < 58
                            ? 0
                            : activeQuestionIndex > 66
                              ? 8
                              : activeQuestionIndex - 58
                        }}/8</p-step
                      >
                    </p-step-list>
                    <p-step-panels>
                      <p-step-panel [value]="1">
                        <ng-template
                          #content
                          let-activateCallback="activateCallback"
                        >
                          <div class="flex flex-col">
                            @if (activeQuestion) {
                              <div>
                                <h2
                                  class="text-2xl font-semibold text-gray-900 text-center"
                                >
                                  {{ activeQuestion.uz }}
                                </h2>
                                <p class="text-gray-500 mb-8">
                                  #Bittasini tanlang
                                </p>

                                <label
                                  inputId="judayoqadi"
                                  class="mb-4 flex items-start gap-2 p-6 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary hover:bg-blue-50/30 transition-all transform hover:-translate-y-1"
                                >
                                  <p-radiobutton
                                    name="answer"
                                    value="3"
                                    inputId="judayoqadi"
                                    [(ngModel)]="activeQuestion.answer"
                                  />
                                  <span class="text-gray-700 mt-[2px]"
                                    >❤️ Juda yoqadi</span
                                  >
                                </label>

                                <label
                                  inputId="yoqadi"
                                  class="mb-4 flex items-start gap-2 p-6 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary hover:bg-blue-50/30 transition-all transform hover:-translate-y-1"
                                >
                                  <p-radiobutton
                                    name="answer"
                                    value="2"
                                    inputId="yoqadi"
                                    [(ngModel)]="activeQuestion.answer"
                                  />
                                  <span class="text-gray-700 mt-[2px]"
                                    >👍 Yoqadi</span
                                  >
                                </label>

                                <label
                                  inputId="bilmadim"
                                  class="mb-4 flex items-start gap-2 p-6 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary hover:bg-blue-50/30 transition-all transform hover:-translate-y-1"
                                >
                                  <p-radiobutton
                                    name="answer"
                                    value="1"
                                    inputId="bilmadim"
                                    [(ngModel)]="activeQuestion.answer"
                                  />
                                  <span class="text-gray-700 mt-[2px]"
                                    >🤷‍♂️ Bilmadim</span
                                  >
                                </label>

                                <label
                                  inputId="yoqmaydi"
                                  class="mb-4 flex items-start gap-2 p-6 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary hover:bg-blue-50/30 transition-all transform hover:-translate-y-1"
                                >
                                  <p-radiobutton
                                    name="answer"
                                    value="0"
                                    inputId="yoqmaydi"
                                    [(ngModel)]="activeQuestion.answer"
                                  />
                                  <span class="text-gray-700 mt-[2px]"
                                    >👎 Yoqmaydi</span
                                  >
                                </label>
                              </div>
                            }
                          </div>
                        </ng-template>
                      </p-step-panel>

                      <p-step-panel [value]="2">
                        <ng-template
                          #content
                          let-activateCallback="activateCallback"
                        >
                          <div class="flex flex-col">
                            @if (activeQuestion) {
                              <div>
                                <h2
                                  class="text-2xl font-semibold text-gray-900 text-center"
                                >
                                  {{ activeQuestion.question }}
                                </h2>
                                <p class="text-gray-500 mb-8">
                                  #Bittasini tanlang
                                </p>

                                @for (
                                  answer of activeQuestion.answers;
                                  track $index
                                ) {
                                  <label
                                    [attr.inputId]="answer.type"
                                    class="mb-4 flex items-start gap-2 p-6 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary hover:bg-blue-50/30 transition-all transform hover:-translate-y-1"
                                  >
                                    <p-radiobutton
                                      name="answer"
                                      [value]="answer.type"
                                      [inputId]="answer.type"
                                      [(ngModel)]="activeQuestion.answer"
                                    />
                                    <span class="text-gray-700 mt-[2px]">{{
                                      answer.uz
                                    }}</span>
                                  </label>
                                }
                              </div>
                            }
                          </div>
                        </ng-template>
                      </p-step-panel>

                      <p-step-panel [value]="3">
                        <ng-template
                          #content
                          let-activateCallback="activateCallback"
                        >
                          <div class="flex flex-col">
                            @if (activeQuestion) {
                              <div>
                                <h2
                                  class="text-2xl font-semibold text-gray-900 text-center"
                                >
                                  {{ activeQuestion.question }}
                                </h2>
                                <p class="text-gray-500 mb-8">
                                  #Bir nechta javobni tanlay olasiz yoki umuman
                                  tanlamasligingiz ham mumkin
                                </p>

                                @for (
                                  answer of activeQuestion.answers;
                                  track $index
                                ) {
                                  <label
                                    [attr.inputId]="'answer_' + $index"
                                    class="mb-4 flex items-start gap-2 p-6 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary hover:bg-blue-50/30 transition-all transform hover:-translate-y-1"
                                  >
                                    <p-checkbox
                                      name="answer"
                                      [value]="$index"
                                      [inputId]="'answer_' + $index"
                                      [(ngModel)]="activeQuestion.answer"
                                    />
                                    <span class="text-gray-700 mt-[2px]">{{
                                      answer
                                    }}</span>
                                  </label>
                                }
                              </div>
                            }
                          </div>
                        </ng-template>
                      </p-step-panel>
                    </p-step-panels>
                  </p-stepper>
                </div>
              </div>
              @if (activeQuestion) {
                <div id="questionContainer" class="mt-12">
                  <div class="flex justify-between mt-12">
                    @if (activeQuestionIndex > 0) {
                      <button
                        id="prevButton"
                        class="cursor-pointer px-8 py-4 !rounded-button text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all transform hover:-translate-y-1 font-medium"
                        (click)="prevQuestion()"
                      >
                        <i class="ri-arrow-left-line mr-2"></i>
                        Oldingi savol
                      </button>
                    }

                    <button
                      id="nextButton"
                      (click)="nextQuestion()"
                      class="cursor-pointer px-8 py-4 !rounded-button text-white  transition-all transform hover:-translate-y-1 font-medium ml-auto"
                      [ngClass]="
                        (activeQuestion.answer != null &&
                          activeQuestion.answer != undefined) ||
                        activeQuestionType === 3
                          ? 'bg-primary hover:bg-blue-600'
                          : 'bg-blue-200'
                      "
                      [disabled]="
                        !(
                          (activeQuestion.answer != null &&
                            activeQuestion.answer != undefined) ||
                          activeQuestionType === 3
                        )
                      "
                    >
                      {{
                        activeQuestionIndex === 65
                          ? 'Tugatish'
                          : 'Keyingi savol'
                      }}
                      <i class="ri-arrow-right-line ml-2"></i>
                    </button>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      }
    </main>
  `,
  styleUrl: './test.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TestComponent {
  natijaID = signal<string | undefined>(undefined);

  questions: any[] = [];
  activeQuestionIndex = 0;

  activeQuestionType: 1 | 2 | 3 = 1;

  get activeQuestion() {
    return this.questions[this.activeQuestionIndex];
  }

  constructor(private $base: BaseService) {
    $base.getAll().subscribe((data: any) => {
      this.questions = [
        ...data.riasec.questions,
        ...data.mbti.questions,
        ...data.mi.questions,
      ];
    });
  }

  prevQuestion() {
    this.activeQuestionIndex--;
    this.treatQuestionType();
  }

  nextQuestion() {
    if (this.activeQuestionIndex === 65) {
      console.log(this.questions);
      this.$base
        .submit({
          riasec: this.questions.slice(0, 30),
          mbti: this.questions.slice(30, 58),
          mi: this.questions.slice(58).map((q) => ({ ...q, answer: [] })),
        })
        .subscribe((resultId) => {
          this.natijaID.set(resultId);
        });
      return;
    }

    this.activeQuestionIndex++;
    this.treatQuestionType();
  }

  treatQuestionType() {
    if (this.activeQuestionIndex < 30) {
      this.activeQuestionType = 1;
      return;
    }
    if (this.activeQuestionIndex < 58) {
      this.activeQuestionType = 2;
      return;
    }
    this.activeQuestionType = 3;
  }
}
