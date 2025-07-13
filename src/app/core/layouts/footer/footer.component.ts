import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="bg-gray-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-6">
              <div class="w-8 h-8 flex items-center justify-center">
                <i class="ri-compass-3-line text-primary text-xl"></i>
              </div>
              <span class="font-['Pacifico'] text-xl">logo</span>
            </div>
            <p class="text-gray-400 leading-relaxed">
              Yoshlarning kelajak kasbini tanlashda yordam beruvchi professional
              platforma.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Xizmatlar</h3>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Kasb tanlash testi</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Shaxsiy maslahat</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Karyera yo'l xaritasi</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Ta'lim tavsiyalari</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Kompaniya</h3>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Biz haqimizda</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">Jamoa</a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Yangiliklar</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">Aloqa</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Bog'lanish</h3>
            <div class="space-y-2 text-gray-400">
              <div class="flex items-center space-x-2">
                <div class="w-4 h-4 flex items-center justify-center">
                  <i class="ri-phone-line text-sm"></i>
                </div>
                <span>+998 90 123 45 67</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-4 h-4 flex items-center justify-center">
                  <i class="ri-mail-line text-sm"></i>
                </div>
                <span>info&#64;kasbtanlash.uz</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-4 h-4 flex items-center justify-center">
                  <i class="ri-map-pin-line text-sm"></i>
                </div>
                <span>Toshkent, O'zbekiston</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p class="text-gray-400 text-sm">
            © 2025 Kasb tanlash tizimi. Barcha huquqlar himoyalangan.
          </p>
          <div class="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <i class="ri-telegram-line text-sm"></i>
            </a>
            <a
              href="#"
              class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <i class="ri-instagram-line text-sm"></i>
            </a>
            <a
              href="#"
              class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <i class="ri-facebook-line text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
