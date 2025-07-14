import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SubmittedComponent } from '../../components/submitted/submitted.component';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { RadioButton } from 'primeng/radiobutton';

@Component({
  selector: 'app-test',
  imports: [SubmittedComponent, ButtonModule, StepperModule, RadioButton],
  template: `
    <main class="bg-gray-50">
      @if (showNatijaID) {
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
                  <p-stepper [value]="1" class="basis-[50rem]">
                    <p-step-list>
                      <p-step [value]="1" [disabled]="true"
                        >Qiziqish 0/36</p-step
                      >
                      <p-step [value]="2" [disabled]="true"
                        >Xarakter 0/28</p-step
                      >
                      <p-step [value]="3" [disabled]="true"
                        >Qobiliyat 0/24</p-step
                      >
                    </p-step-list>
                    <p-step-panels>
                      <p-step-panel [value]="1">
                        <ng-template
                          #content
                          let-activateCallback="activateCallback"
                        >
                          <div class="flex flex-col">
                            <div>
                              <h2
                                class="text-2xl font-semibold text-gray-900 mb-8 text-center"
                              >
                                Men texnika yoki asboblar bilan ishlashni
                                yoqtiraman.
                              </h2>

                              <label
                                inputId="ingredient1"
                                class="mb-4 flex items-start gap-2 p-6 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary hover:bg-blue-50/30 transition-all transform hover:-translate-y-1"
                              >
                                <p-radiobutton
                                  name="pizza"
                                  value="Cheese"
                                  inputId="ingredient1"
                                />
                                <span class="text-gray-700 mt-[2px]"
                                  >Odamlar bilan muloqot qilish va ularga yordam
                                  berish</span
                                >
                              </label>

                              <label
                                inputId="ingredient1"
                                class="mb-4 flex items-start gap-2 p-6 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary hover:bg-blue-50/30 transition-all transform hover:-translate-y-1"
                              >
                                <p-radiobutton
                                  name="pizza"
                                  value="Cheese"
                                  inputId="ingredient1"
                                />
                                <span class="text-gray-700 mt-[2px]"
                                  >Odamlar bilan muloqot qilish va ularga yordam
                                  berish</span
                                >
                              </label>
                            </div>
                          </div>
                        </ng-template>
                      </p-step-panel>

                      <p-step-panel [value]="2">
                        <ng-template
                          #content
                          let-activateCallback="activateCallback"
                        >
                          <div class="flex flex-col h-48">
                            <div
                              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                            >
                              Content II
                            </div>
                          </div>
                          <div class="flex pt-6 justify-between">
                            <p-button
                              label="Back"
                              severity="secondary"
                              icon="pi pi-arrow-left"
                              (onClick)="activateCallback(1)"
                            />
                            <p-button
                              label="Next"
                              icon="pi pi-arrow-right"
                              iconPos="right"
                              (onClick)="activateCallback(3)"
                            />
                          </div>
                        </ng-template>
                      </p-step-panel>

                      <p-step-panel [value]="3">
                        <ng-template
                          #content
                          let-activateCallback="activateCallback"
                        >
                          <div class="flex flex-col h-48">
                            <div
                              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                            >
                              Content III
                            </div>
                          </div>
                          <div class="flex pt-6 justify-start">
                            <p-button
                              label="Back"
                              icon="pi pi-arrow-left"
                              iconPos="right"
                              (onClick)="activateCallback(2)"
                            />
                          </div>
                        </ng-template>
                      </p-step-panel>
                    </p-step-panels>
                  </p-stepper>
                </div>
              </div>
              <div id="questionContainer" class="mt-12">
                <div class="flex justify-between mt-12">
                  <button
                    id="prevButton"
                    class="px-8 py-4 !rounded-button text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all transform hover:-translate-y-1 font-medium"
                  >
                    <i class="ri-arrow-left-line mr-2"></i>
                    Oldingi savol
                  </button>
                  <button
                    id="nextButton"
                    (click)="showNatijaID = true"
                    class="px-8 py-4 !rounded-button text-white bg-primary hover:bg-blue-600 transition-all transform hover:-translate-y-1 font-medium ml-auto"
                  >
                    Keyingi savol
                    <i class="ri-arrow-right-line ml-2"></i>
                  </button>
                </div>
              </div>
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
  showNatijaID = false;
}
