import { InputHTMLAttributes } from "react"
import styled from "styled-components"
import { SearchIcon } from "./search-icon"

const PrimaryInput = styled.input `
    width: 352px;
    border-radius: 8px;
    background-color: var(--bg-secondary);
    padding: 10px 16px;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--text-dark);
    border: none;
`

const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function PrimaryInputWithSearchIcon(props: InputProps) {
    return (
        <InputContainer>
            <PrimaryInput {...props} />
            <SearchIcon />
        </InputContainer>
    )
}