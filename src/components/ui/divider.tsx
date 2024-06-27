'use client';
import { Divider } from '@tremor/react';

interface props {
    text?: string
}

export const HorizontalLine = ({ text = "" }: props) => (
    <>
        <Divider>{text}</Divider>
    </>
);