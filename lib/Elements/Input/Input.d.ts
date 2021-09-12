import React from 'react';
import { EmptyStateProps } from '../EmptyState/EmptyState';
export declare type InputProps = {
    inputType?: string;
    hiddenLabel?: boolean;
    label?: string;
    name?: string;
    placeholder?: string;
    description?: string;
    value?: string;
    trimmed?: boolean;
    prefix?: string;
    cornerHint?: string | JSX.Element;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
};
declare enum InputType {
    text = "text",
    email = "email",
    password = "password",
    search = "search",
    url = "url"
}
export declare type CheckboxInputProps = {
    label?: string;
    name?: string;
    description?: string;
    value?: boolean;
    onChange?: (value: boolean) => void;
    onFocus?: () => void;
    onBlur?: () => void;
};
export declare type TextAreaInputProps = {
    name?: string;
    label?: string;
    description?: string;
    rows?: number;
    defaultValue?: string;
};
export declare type RadioGroupInputProps = {
    label?: string;
    description?: string;
    hiddenLabel?: boolean;
    items?: any[];
};
export declare type FileInputProps = {
    label?: string;
    name?: string;
    hiddenLabel?: boolean;
    multiple?: boolean;
    accept?: string;
    renderFiles?: (file: File) => JSX.Element;
};
export declare const FileInput: React.FC<FileInputProps & EmptyStateProps & React.DOMAttributes<HTMLDivElement>>;
export declare const Input: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> & {
    type: typeof InputType;
    Secure: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>>;
    Checkbox: React.FC<CheckboxInputProps>;
    TextArea: React.FC<TextAreaInputProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>>;
    RadioGroup: React.FC<any>;
    CheckboxGroup: React.FC<import("../CheckboxGroup/CheckboxGroup").CheckboxGroupProps>;
    File: React.FC<FileInputProps & EmptyStateProps & React.DOMAttributes<HTMLDivElement>>;
};
export default Input;
