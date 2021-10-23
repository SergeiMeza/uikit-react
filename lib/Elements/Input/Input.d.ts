import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { EmptyStateProps } from '../EmptyState/EmptyState';
export declare type InputProps = {
    inputType?: string;
    inputClassNames?: string;
    hiddenLabel?: boolean;
    label?: string | JSX.Element;
    name?: string;
    placeholder?: string;
    description?: string | JSX.Element;
    trimmed?: boolean;
    prefix?: string;
    cornerHint?: string | JSX.Element;
    error?: string | JSX.Element;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    register?: UseFormRegisterReturn;
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
    onChange?: (value: boolean) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    register?: UseFormRegisterReturn;
};
export declare type TextAreaInputProps = {
    textAreaClassNames?: string;
    name?: string;
    label?: string;
    description?: string;
    rows?: number;
    defaultValue?: string;
    register?: UseFormRegisterReturn;
};
export declare type RadioGroupInputProps = {
    label?: string;
    description?: string;
    hiddenLabel?: boolean;
    items?: any[];
    register?: UseFormRegisterReturn;
};
export declare type FileInputProps = {
    label?: string;
    name?: string;
    hiddenLabel?: boolean;
    multiple?: boolean;
    accept?: string;
    renderFiles?: (file: File) => JSX.Element;
    onFilesSelected?: (files: File[]) => void;
};
export declare const FileInput: React.FC<FileInputProps & EmptyStateProps & React.DOMAttributes<HTMLDivElement>>;
export declare const Input: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> & {
    type: typeof InputType;
    Secure: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>>;
    Checkbox: React.FC<CheckboxInputProps>;
    TextArea: React.FC<TextAreaInputProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>>;
    RadioGroup: React.FC<RadioGroupInputProps>;
    CheckboxGroup: React.FC<import("../CheckboxGroup/CheckboxGroup").CheckboxGroupProps>;
    File: React.FC<FileInputProps & EmptyStateProps & React.DOMAttributes<HTMLDivElement>>;
};
export default Input;
