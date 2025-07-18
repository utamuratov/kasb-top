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
import { ActivatedRoute, Router } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';

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
    SkeletonModule,
  ],
  template: `
    <main class="bg-gray-50">
      @if (natijaID(); as natijaID) {
        <app-submitted [natijaID]="natijaID"></app-submitted>
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

                    @if (isLoading()) {
                      <div class="flex flex-col gap-2">
                        <p-skeleton height="2rem" />
                        <p-skeleton height="2rem" width="70%" />
                        <p-skeleton />
                        <p-skeleton />
                        <p-skeleton width="10rem" />
                      </div>
                      <p-skeleton height="4rem" class="mt-4 block" />
                      <p-skeleton height="4rem" class="mt-4 block" />
                      <p-skeleton height="4rem" class="mt-4 block" />
                      <p-skeleton height="4rem" class="mt-4 block" />
                    }
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
                        ((activeQuestion.answer != null &&
                          activeQuestion.answer != undefined) ||
                          activeQuestionType === 3) &&
                        !submitLoading()
                          ? 'bg-primary hover:bg-blue-600'
                          : 'bg-blue-200'
                      "
                      [disabled]="
                        !(
                          (activeQuestion.answer != null &&
                            activeQuestion.answer != undefined) ||
                          activeQuestionType === 3
                        ) || submitLoading()
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
  private $route = inject(ActivatedRoute);
  private router = inject(Router);
  natijaID = signal<string | undefined>(
    this.$route.snapshot.params['natijaID'],
  );

  questions = signal<any[]>([]);
  activeQuestionIndex = 0;

  activeQuestionType: 1 | 2 | 3 = 1;
  isLoading = signal<boolean>(false);
  submitLoading = signal<boolean>(false);

  get activeQuestion() {
    return this.questions()[this.activeQuestionIndex];
  }

  constructor(private $base: BaseService) {
    this.isLoading.set(true);
    $base.getAll().subscribe((data: any) => {
      this.isLoading.set(false);
      this.questions.set([
        ...data.riasec.questions,
        ...data.mbti.questions,
        ...data.mi.questions,
      ]);
    });
  }

  prevQuestion() {
    this.activeQuestionIndex--;
    this.treatQuestionType();
  }

  nextQuestion() {
    if (this.activeQuestionIndex === 65) {
      this.submitLoading.set(true);
      this.$base
        .submit({
          riasec: this.questions().slice(0, 30),
          mbti: this.questions().slice(30, 58),
          mi: this.questions()
            .slice(58)
            .map((q) => ({ ...q, answer: [] })),
        })
        .subscribe((w) => {
          this.submitLoading.set(false);
          this.natijaID.set(w.resultCode);
          this.router.navigate([], {
            queryParams: { natijaID: this.natijaID() },
          });
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
