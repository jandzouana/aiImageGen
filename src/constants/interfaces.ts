import React from "react";

export interface Post {
    _id: string;
    name: string;
    prompt: string;
    photo: string;
}

export interface RenderCardsProps {
    data?: Post[];
    title: string;
}

export interface CardProps {
    _id: string;
    name: string;
    prompt: string;
    photo: string;
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
