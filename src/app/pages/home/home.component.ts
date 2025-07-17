import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <main class="bg-white">
      <section
        class="relative min-h-screen flex items-center"
        style="
          background-image: url('https://readdy.ai/api/search-image?query=modern%20career%20guidance%20concept%20with%20young%20people%20thinking%20about%20future%20professions%2C%20soft%20blue%20and%20green%20gradient%20background%2C%20minimalist%20design%2C%20professional%20atmosphere%2C%20left%20side%20with%20subtle%20geometric%20patterns%2C%20right%20side%20showing%20diverse%20career%20symbols%20floating%20in%20space%2C%20clean%20and%20inspiring%20visual&width=1920&height=1080&seq=hero001&orientation=landscape');
          background-size: cover;
          background-position: center;
        "
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"
        ></div>
        <div class="relative w-full max-w-7xl mx-auto px-4 py-20">
          <div class="max-w-2xl">
            <h1 class="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Kim bo'lsam <br />
              <span class="text-primary">ekan?</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              O'z qobiliyatingizni kashf eting va kelajakda eng mos kasbni
              toping. Professional testlar orqali shaxsiy tavsiyalar oling.
            </p>
            <a
              routerLink="/test"
              class="bg-primary text-white px-8 py-4 !rounded-button text-lg font-semibold hover:bg-blue-600 transition-colors whitespace-nowrap"
            >
              Testni boshlash
            </a>
          </div>
        </div>
      </section>
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">
              Qanday ishlaydi?
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Uchta oddiy bosqichda o'z kelajagingizni aniqlang
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div
                class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <i class="ri-questionnaire-line text-primary text-2xl"></i>
              </div>
              <div
                class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold"
              >
                1
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                Testlarni yechish
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Maxsus ishlab chiqilgan savollar orqali o'z qiziqishlaringiz,
                qobiliyatlaringiz va shaxsiy xususiyatlaringizni aniqlang.
              </p>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div
                class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <i class="ri-key-2-line text-secondary text-2xl"></i>
              </div>
              <div
                class="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold"
              >
                2
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                Natija ID ni olish
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Test yakunida maxfiy ID raqamingizni oling. Bu raqamni saqlab
                qo'ying - u orqali natijalaringizga murojaat qilasiz.
              </p>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div
                class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <i class="ri-lightbulb-line text-orange-500 text-2xl"></i>
              </div>
              <div
                class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold"
              >
                3
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                Natija va tavsiyalar
              </h3>
              <p class="text-gray-600 leading-relaxed">
                ID raqamingiz orqali batafsil natijalarni ko'ring va sizga mos
                kasblar bo'yicha professional tavsiyalar oling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 class="text-4xl font-bold text-gray-900 mb-6">
                Nima uchun bizni tanlashingiz kerak?
              </h2>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div
                    class="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <i class="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-2">
                      Ilmiy asoslangan testlar
                    </h3>
                    <p class="text-gray-600">
                      Professional psixologlar tomonidan ishlab chiqilgan va
                      tasdiqlangan metodikalar
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div
                    class="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <i class="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-2">
                      Shaxsiylashtirilgan yondashuv
                    </h3>
                    <p class="text-gray-600">
                      Har bir foydalanuvchi uchun individual tavsiyalar va yo'l
                      xaritasi
                    </p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div
                    class="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <i class="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-2">
                      Bepul va oson
                    </h3>
                    <p class="text-gray-600">
                      Hech qanday to'lov talab qilinmaydi, faqat bir necha
                      daqiqa vaqtingiz
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative">
              <img
                src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20successful%20professionals%20from%20different%20careers%20including%20doctor%2C%20engineer%2C%20teacher%2C%20artist%2C%20businessman%2C%20all%20smiling%20and%20confident%2C%20modern%20office%20environment%2C%20bright%20and%20inspiring%20atmosphere%2C%20professional%20photography%20style&width=600&height=400&seq=feature001&orientation=landscape"
                alt="Muvaffaqiyatli mutaxassislar"
                class="rounded-2xl shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-4xl font-bold text-white mb-6">
            Kelajagingizni bugun aniqlang
          </h2>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Minglab yoshlar o'z yo'lini topdi. Endi sizning navbatingiz!
          </p>
          <button
            class="bg-white text-primary px-8 py-4 !rounded-button text-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            Bepul testni boshlash
          </button>
        </div>
      </section>
    </main>
  `,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
