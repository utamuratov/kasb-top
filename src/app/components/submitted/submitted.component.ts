import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button, ButtonDirective } from 'primeng/button';

@Component({
    selector: 'app-submitted',
    imports: [RouterLink, ButtonDirective],
    template: `
        <div class="min-h-screen py-8">
            <div class="max-w-3xl mx-auto px-4">
                <div
                    class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                >
                    <div class="text-center mb-12">
                        <h1 class="text-3xl font-bold text-gray-900 mb-4">
                            Tabriklaymiz!
                        </h1>
                        <div
                            class="text-5xl font-bold text-primary my-8 tracking-wider"
                        >
                            {{ natijaID() }}
                        </div>
                        <p class="text-gray-600 mb-8">
                            Iltimos, natija ID raqamini saqlab qo'ying.
                            Keyinchalik natijangizni ko'rish uchun kerak
                            bo'ladi.
                        </p>
                        <div class="flex items-center justify-center gap-4">
                            <button
                                pButton
                                [outlined]="true"
                                id="copyButton"
                                class="!px-8 !py-4 !rounded-button font-medium !transition-all transform hover:-translate-y-1"
                                (click)="copy()"
                                [disabled]="!natijaID()"
                            >
                                <i class="ri-file-copy-line mr-2"></i>
                                ID ni nusxalash
                            </button>
                            <button
                                pButton
                                id="viewResultButton"
                                routerLink="/result"
                                [queryParams]="{ natijaID: natijaID() }"
                                class="!px-8 !py-4 !rounded-button font-medium !transition-all transform hover:-translate-y-1"
                                [disabled]="!natijaID()"
                            >
                                <i class="ri-eye-line mr-2"></i>
                                Natijani ko'rish
                            </button>
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

    copy() {
        navigator.clipboard.writeText(this.natijaID()).then(() => {
            console.log('Text copied to clipboard successfully!');
            // Optional: Provide user feedback (e.g., an alert or a temporary message)
        });
    }
}
