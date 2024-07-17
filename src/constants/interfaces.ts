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
    isSupriseMe?: boolean;
}

export interface LoaderProps  {

}

export interface PostForm{
    name: string;
    prompt: string;
    photo: string;
}
