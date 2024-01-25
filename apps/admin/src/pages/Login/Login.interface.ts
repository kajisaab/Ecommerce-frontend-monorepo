export interface LoginPropsInterface {}

export interface UserFormInterface {
    email: string;
    password: string;
}

export interface userFormErrorHandlerInterface {
    email: formErrorState;
    password: formErrorState;
}

interface formErrorState {
    message: string;
    state: boolean;
}
