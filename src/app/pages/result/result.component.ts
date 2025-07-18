import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from '../../core/services/base.service';

@Component({
  selector: 'app-result',
  imports: [FormsModule, NgClass],
  template: `
    <main class="bg-gray-50">
      <div class="min-h-screen py-8">
        <div class="max-w-3xl mx-auto px-4">
          <div
            class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8"
          >
            <div class="text-center mb-8">
              <h1 class="text-3xl font-bold text-gray-900 mb-4">
                Test natijasini ko'rish
              </h1>
              <p class="text-gray-600">Natija ID raqamini kiriting</p>
            </div>
            <section class="max-w-md mx-auto">
              <div class="relative">
                <div
                  class="w-6 h-6 flex items-center justify-center absolute left-4 top-[14px] text-gray-400"
                >
                  <i class="ri-search-line"></i>
                </div>
                <input
                  type="text"
                  id="resultId"
                  class="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none text-gray-700"
                  placeholder="Natija ID raqamini kiriting"
                  required
                  [(ngModel)]="natijaID"
                />
              </div>
              <button
                [disabled]="!natijaID"
                [ngClass]="
                  natijaID ? 'bg-primary hover:bg-blue-600' : 'bg-blue-200'
                "
                (click)="discoverResult()"
                class="w-full mt-4 px-8 py-4 !rounded-button text-white transition-all transform hover:-translate-y-1 font-medium"
              >
                Natijani ko'rish
              </button>
            </section>
          </div>
          <div #result>
            @if (showResult) {
              <div
                class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
              >
                <div class="text-center mb-8">
                  <div
                    class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <i class="ri-user-smile-line text-4xl text-primary"></i>
                  </div>
                  <h2 class="text-2xl font-bold text-gray-900 mb-2">
                    Test natijasi
                  </h2>
                  <p class="text-gray-600">Sizning kasb yo'nalishingiz</p>
                </div>
                <div class="space-y-6">
                  <div class="p-6 rounded-xl bg-gray-50">
                    <h3 class="font-semibold text-gray-900 mb-3">
                      Asosiy yo'nalish
                    </h3>
                    <div class="flex items-center justify-between">
                      <span class="text-gray-700">Texnik va muhandislik</span>
                      <span class="text-primary font-medium">85%</span>
                    </div>
                    <div class="mt-2 bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-primary h-full rounded-full"
                        style="width: 85%"
                      ></div>
                    </div>
                  </div>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div class="p-6 rounded-xl bg-gray-50">
                      <h3 class="font-semibold text-gray-900 mb-4">
                        Ko'nikmalar
                      </h3>
                      <div class="space-y-3">
                        <div class="flex items-center text-sm">
                          <i
                            class="ri-checkbox-circle-line text-primary mr-2"
                          ></i>
                          <span class="text-gray-700">Analitik fikrlash</span>
                        </div>
                        <div class="flex items-center text-sm">
                          <i
                            class="ri-checkbox-circle-line text-primary mr-2"
                          ></i>
                          <span class="text-gray-700"
                            >Muammolarni hal qilish</span
                          >
                        </div>
                        <div class="flex items-center text-sm">
                          <i
                            class="ri-checkbox-circle-line text-primary mr-2"
                          ></i>
                          <span class="text-gray-700">Texnik loyihalash</span>
                        </div>
                      </div>
                    </div>
                    <div class="p-6 rounded-xl bg-gray-50">
                      <h3 class="font-semibold text-gray-900 mb-4">
                        Tavsiya etilgan kasblar
                      </h3>
                      <div class="space-y-3">
                        <div class="flex items-center text-sm">
                          <i
                            class="ri-arrow-right-circle-line text-primary mr-2"
                          ></i>
                          <span class="text-gray-700"
                            >Dasturiy ta'minot muhandisi</span
                          >
                        </div>
                        <div class="flex items-center text-sm">
                          <i
                            class="ri-arrow-right-circle-line text-primary mr-2"
                          ></i>
                          <span class="text-gray-700"
                            >Robototexnika muhandisi</span
                          >
                        </div>
                        <div class="flex items-center text-sm">
                          <i
                            class="ri-arrow-right-circle-line text-primary mr-2"
                          ></i>
                          <span class="text-gray-700"
                            >Ma'lumotlar tahlilchisi</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-6 rounded-xl bg-gray-50">
                    <h3 class="font-semibold text-gray-900 mb-4">
                      Qo'shimcha tavsiyalar
                    </h3>
                    <p class="text-gray-700 leading-relaxed">
                      Sizning natijalaringiz texnik va muhandislik sohasiga
                      moyilligingizni ko'rsatmoqda. Bu sohada muvaffaqiyatga
                      erishish uchun quyidagi yo'nalishlarda o'z ustingizda
                      ishlashingiz tavsiya etiladi:
                    </p>
                    <ul class="mt-4 space-y-2">
                      <li class="flex items-start">
                        <i class="ri-check-line text-primary mr-2 mt-1"></i>
                        <span class="text-gray-700"
                          >Zamonaviy dasturlash tillarini o'rganish</span
                        >
                      </li>
                      <li class="flex items-start">
                        <i class="ri-check-line text-primary mr-2 mt-1"></i>
                        <span class="text-gray-700"
                          >Amaliy loyihalarda qatnashish</span
                        >
                      </li>
                      <li class="flex items-start">
                        <i class="ri-check-line text-primary mr-2 mt-1"></i>
                        <span class="text-gray-700"
                          >Professional sertifikatlar olish</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </main>
  `,
  styleUrl: './result.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ResultComponent {
  private route = inject(ActivatedRoute);
  private $data = inject(BaseService);
  natijaID = this.route.snapshot.queryParams['natijaID'];

  showResult = false;

  @ViewChild('result') mySection!: ElementRef;

  scrollToSection() {
    this.showResult = true;
    this.mySection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  discoverResult() {
    this.$data.discoverResult(this.natijaID).subscribe();
  }
}
