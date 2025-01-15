import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountApi } from '../../../../api';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { mustMatchValidator } from '../../../../functions/validators/must-match';

@Component({
    selector: 'app-page-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();

    loginForm!: FormGroup;
    loginInProgress = false;

    registerForm!: FormGroup;
    registerInProgress = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private account: AccountApi,
    ) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: ['red-parts@example.com', [Validators.required, Validators.email]],
            password: ['123456', [Validators.required]],
            remember: [false],
        });

        this.registerForm = this.fb.group({
            email: ['user@example.com', [Validators.required, Validators.email]],
            password: ['123456', [Validators.required]],
            confirmPassword: ['123456', [Validators.required]],
        }, { validators: [mustMatchValidator('password', 'confirmPassword')] });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    login(): void {
        this.loginForm.markAllAsTouched();

        if (this.loginInProgress || this.loginForm.invalid) {
            return;
        }

        this.loginInProgress = true;

        this.account.signIn(
            this.loginForm.value.email,
            this.loginForm.value.password,
        ).pipe(
            finalize(() => this.loginInProgress = false),
            takeUntil(this.destroy$),
        ).subscribe(
            () => this.router.navigateByUrl('/account/dashboard'),
            error => {
                if (error instanceof HttpErrorResponse) {
                    this.loginForm.setErrors({
                        server: `ERROR_API_${error.error.message}`,
                    });
                } else {
                    alert(error);
                }
            },
        );
    }

    register(): void {
        this.registerForm.markAllAsTouched();

        if (this.registerInProgress || this.registerForm.invalid) {
            return;
        }

        this.registerInProgress = true;

        this.account.signUp(
            this.registerForm.value.email,
            this.registerForm.value.password,
        ).pipe(
            finalize(() => this.registerInProgress = false),
            takeUntil(this.destroy$),
        ).subscribe(
            () => this.router.navigateByUrl('/account/dashboard'),
            error => {
                if (error instanceof HttpErrorResponse) {
                    this.registerForm.setErrors({
                        server: `ERROR_API_${error.error.message}`,
                    });
                } else {
                    alert(error);
                }
            },
        );
    }
}
