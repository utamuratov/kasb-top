import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [RouterLink],
    template: `
        <nav class="bg-white border-b border-gray-100 py-4">
            <div
                class="max-w-7xl mx-auto px-4 flex items-center justify-between"
            >
                <a class="flex items-center space-x-2" routerLink="/">
                    <div class="w-8 h-8 flex items-center justify-center">
                        <i class="ri-compass-3-line text-primary text-xl"></i>
                    </div>
                    <span class="font-['Pacifico'] text-xl text-gray-800"
                        >logo</span
                    >
                </a>
                <div class="hidden md:flex items-center gap-8">
                    <a
                        routerLink="./"
                        class="text-gray-700 hover:text-primary transition-colors"
                        >Bosh sahifa</a
                    >
                    <a
                        routerLink="./test"
                        class="text-gray-700 hover:text-primary transition-colors"
                        >Testni boshlash</a
                    >
                    <a
                        routerLink="./result"
                        class="text-gray-700 hover:text-primary transition-colors"
                        >Natijani aniqlash</a
                    >
                </div>
                <button
                    class="md:hidden w-6 h-6 flex items-center justify-center"
                >
                    <i class="ri-menu-line text-gray-700"></i>
                </button>
            </div>
        </nav>
    `,
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
