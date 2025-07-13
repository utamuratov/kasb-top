import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SubmittedComponent } from '../../components/submitted/submitted.component';

@Component({
  selector: 'app-test',
  imports: [SubmittedComponent],
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
                <div class="flex items-center justify-center space-x-4 mb-8">
                  <div class="flex items-center">
                    <div class="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span class="text-sm text-gray-600">Qiziqish</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-3 h-3 bg-gray-200 rounded-full mr-2"></div>
                    <span class="text-sm text-gray-600">Xarakter</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-3 h-3 bg-gray-200 rounded-full mr-2"></div>
                    <span class="text-sm text-gray-600">Qobiliyat</span>
                  </div>
                </div>
                <div
                  class="flex items-center justify-between max-w-xs mx-auto bg-gray-100 rounded-full p-2 mb-6"
                >
                  <div class="text-sm text-gray-600">Savol</div>
                  <div
                    class="bg-white px-4 py-1 rounded-full text-primary font-medium"
                  >
                    <span id="questionProgress">1</span>/10
                  </div>
                </div>
                <div class="bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    id="progressBar"
                    class="bg-primary h-full rounded-full transition-all duration-300"
                    style="width: 0%"
                  ></div>
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Progress: <span id="questionProgress">1</span>/10
                </p>
              </div>
              <div id="questionContainer" class="mt-12">
                <div class="space-y-6">
                  <div class="question-item active" data-question="1">
                    <h2
                      class="text-2xl font-semibold text-gray-900 mb-8 text-center"
                    >
                      Qanday faoliyat sizga ko'proq yoqadi?
                    </h2>
                    <div class="space-y-4">
                      <label
                        class="flex items-start p-6 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary hover:bg-blue-50/30 transition-all transform hover:-translate-y-1"
                      >
                        <input
                          type="radio"
                          name="q1"
                          value="1"
                          class="mt-1 opacity-0 absolute"
                        />
                        <span
                          class="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0 mr-3 flex items-center justify-center"
                        >
                          <span
                            class="w-2.5 h-2.5 bg-primary rounded-full hidden check-mark"
                          ></span>
                        </span>
                        <span class="text-gray-700"
                          >Odamlar bilan muloqot qilish va ularga yordam
                          berish</span
                        >
                      </label>
                      <label
                        class="flex items-start p-6 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary hover:bg-blue-50/30 transition-all transform hover:-translate-y-1"
                      >
                        <input
                          type="radio"
                          name="q1"
                          value="2"
                          class="mt-1 opacity-0 absolute"
                        />
                        <span
                          class="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0 mr-3 flex items-center justify-center"
                        >
                          <span
                            class="w-2.5 h-2.5 bg-primary rounded-full hidden check-mark"
                          ></span>
                        </span>
                        <span class="text-gray-700"
                          >Texnika va qurilmalar bilan ishlash</span
                        >
                      </label>
                      <label
                        class="flex items-start p-6 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary hover:bg-blue-50/30 transition-all transform hover:-translate-y-1"
                      >
                        <input
                          type="radio"
                          name="q1"
                          value="3"
                          class="mt-1 opacity-0 absolute"
                        />
                        <span
                          class="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0 mr-3 flex items-center justify-center"
                        >
                          <span
                            class="w-2.5 h-2.5 bg-primary rounded-full hidden check-mark"
                          ></span>
                        </span>
                        <span class="text-gray-700"
                          >Ijodiy faoliyat bilan shug'ullanish</span
                        >
                      </label>
                      <label
                        class="flex items-start p-6 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary hover:bg-blue-50/30 transition-all transform hover:-translate-y-1"
                      >
                        <input
                          type="radio"
                          name="q1"
                          value="4"
                          class="mt-1 opacity-0 absolute"
                        />
                        <span
                          class="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0 mr-3 flex items-center justify-center"
                        >
                          <span
                            class="w-2.5 h-2.5 bg-primary rounded-full hidden check-mark"
                          ></span>
                        </span>
                        <span class="text-gray-700"
                          >Ma'lumotlar va raqamlar bilan ishlash</span
                        >
                      </label>
                    </div>
                  </div>
                </div>
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
