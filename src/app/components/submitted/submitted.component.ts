import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-submitted',
  imports: [RouterLink],
  template: `
    <div class="min-h-screen py-8">
      <div class="max-w-3xl mx-auto px-4">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div class="text-center mb-12">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">Tabriklaymiz!</h1>
            <div class="text-5xl font-bold text-primary my-8 tracking-wider">
              {{ natijaID() }}
            </div>
            <p class="text-gray-600 mb-8">
              Iltimos, natija ID raqamini saqlab qo'ying. Keyinchalik
              natijangizni ko'rish uchun kerak bo'ladi.
            </p>
            <div class="flex items-center justify-center gap-4">
              <button
                id="copyButton"
                class="px-8 py-4 !rounded-button text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 font-medium"
              >
                <i class="ri-file-copy-line mr-2"></i>
                ID ni nusxalash
              </button>
              <a
                id="viewResultButton"
                routerLink="/result"
                [queryParams]="{ natijaID: natijaID() }"
                class="px-8 py-4 !rounded-button text-white bg-primary hover:bg-blue-600 transition-all transform hover:-translate-y-1 font-medium"
              >
                <i class="ri-eye-line mr-2"></i>
                Natijani ko'rish
              </a>
            </div>
          </div>
          <div class="flex items-center justify-center space-x-4 mb-8">
            <div class="flex items-center">
              <div class="w-3 h-3 bg-primary rounded-full mr-2"></div>
              <span class="text-sm text-gray-600">Joriy savol</span>
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 bg-gray-200 rounded-full mr-2"></div>
              <span class="text-sm text-gray-600">Qolgan savollar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './submitted.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmittedComponent {
  natijaID = input.required<string>();
}
