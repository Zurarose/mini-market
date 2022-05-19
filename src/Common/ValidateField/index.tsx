import React, {useCallback, useEffect, useRef, useState} from 'react';
import {TextField, Typography} from "@mui/material";

interface PropTypes {
    name: string;
    required: boolean;
    value: any;
    setValue: (value: any) => void;
    onlyNumbers?: boolean;
    onlyLetters?: boolean;
    limitation?: number;
    callValidate: boolean;
    setCallValidate: (value: boolean) => void;
}

const TypographyStyle = {
    color: '#E43F3F',
    fontSize: '12px',
    lineHeight: '16px',
    whiteSpace: 'pre',
    display: 'inline-block',
};

const ValidateField: React.FC<PropTypes> = (
    {
        name,
        required,
        value,
        setValue,
        onlyLetters = false,
        onlyNumbers = false,
        limitation,
        callValidate,
        setCallValidate,
    }) => {
    const [error, setError] = useState<string>(' ');
    const ref = useRef<HTMLInputElement>();

    const validate = useCallback((e: string) => {
        if (required && !e.length) {
            setError('This field in required');
            return true;
        }
        if (onlyNumbers) {
            const isNum = /^\d+$/.test(e);
            if (!isNum) {
                setError('Only numbers allowed');
                return true;
            }
        }
        if (onlyLetters) {
            const isSting = /^[a-z]+$/i.test(e);
            if (!isSting) {
                setError('Only letters allowed');
                return true;
            }
        }
        if (limitation) {
            if (e.length !== limitation) {
                setError(`Should contain ${limitation} characters`);
                return true
            }
        }
        return false
    }, [limitation, onlyLetters, onlyNumbers, required]);


    useEffect(() => {
        if (callValidate && ref.current) {
            validate(ref.current.value);
            setCallValidate(false);
        }
    }, [callValidate, setCallValidate, validate]);

    return (
        <>
            <TextField
                inputRef={ref}
                fullWidth
                hiddenLabel
                placeholder={name}
                variant="standard"
                value={value}
                onChange={(e) => {
                    setValue({[name.toLowerCase()]: e.target.value})
                }}
                InputProps={{disableUnderline: true}}
                onBlur={(e) => {
                    setValue({[name.toLowerCase()]: e.target.value, hasError: validate(e.target.value)})
                }}
                onFocus={() => {
                    setError(" ")
                }}
            />
            <Typography sx={TypographyStyle}>{error}</Typography>
        </>
    );
};

export default ValidateField;