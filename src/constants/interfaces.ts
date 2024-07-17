import React from "react";

export interface CardProps {

}

export interface FormFieldProps {
    labelName: string;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isSurpriseMe?: boolean;
    handleSurpriseMe?: any; //() => void | undefined;
}

export interface LoaderProps  {

}

export interface PostForm{
    name: string;
    prompt: string;
    photo: string;
}
