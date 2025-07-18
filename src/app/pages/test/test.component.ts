import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { SubmittedComponent } from '../../components/submitted/submitted.component';
import { ButtonDirective, ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { RadioButton } from 'primeng/radiobutton';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { catchError, forkJoin, of } from 'rxjs';
import { CheckboxModule } from 'primeng/checkbox';
import { BaseService } from '../../core/services/base.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

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
        ButtonDirective,
        Toast,
    ],
    templateUrl: './test.component.html',
    styleUrl: './test.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TestComponent {
    private $route = inject(ActivatedRoute);
    private router = inject(Router);
    private $message = inject(MessageService);
    natijaID = signal<string | undefined>(
        this.$route.snapshot.queryParams['natijaID'],
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
                    if (w) {
                        this.submitLoading.set(false);
                        this.natijaID.set(w.resultCode);
                        this.router.navigate([], {
                            queryParams: { natijaID: this.natijaID() },
                        });
                    }
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
