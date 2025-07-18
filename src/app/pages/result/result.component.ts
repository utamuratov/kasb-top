import { NgClass } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    signal,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from '../../core/services/base.service';
import { ButtonDirective } from 'primeng/button';
import { Result } from '../../core/models/result.model';
import { TESTS } from '../../core/configs/constants';
import { TooltipModule } from 'primeng/tooltip';
import { catchError, of } from 'rxjs';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
    selector: 'app-result',
    imports: [
        FormsModule,
        NgClass,
        ButtonDirective,
        TooltipModule,
        ToastModule,
    ],
    templateUrl: './result.component.html',
    styleUrl: './result.component.css',
    providers: [MessageService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ResultComponent {
    private route = inject(ActivatedRoute);
    private $data = inject(BaseService);
    private $message = inject(MessageService);
    natijaID = this.route.snapshot.queryParams['natijaID'];
    result = signal<Result | undefined>(undefined);
    loading = signal<boolean>(false);

    readonly TESTS = TESTS;

    @ViewChild('resultSection') mySection!: ElementRef;

    scrollToSection() {
        this.mySection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

    discoverResult() {
        this.loading.set(true);
        this.$data
            .discoverResult(this.natijaID)
            .pipe(
                catchError(() => {
                    this.$message.add({
                        severity: 'error',
                        summary: 'Afsusdamiz :(',
                        detail: "Kutilmagan xatolik yuz berdi. Iltimos, qayta urinib ko'ring!",
                    });
                    return of(null);
                }),
            )
            .subscribe((w) => {
                this.loading.set(false);
                if (w) {
                    this.result.set(w);
                    this.scrollToSection();
                }
            });
    }
}
