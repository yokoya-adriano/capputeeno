import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import styled from "styled-components"

const CartCount = styled.span`
    display: inline-block;
    width: 17px;
    height: 17px;
    border-radius: 100%;
    font-size: 10px;
    padding: 0px 5px;
    background-color: var(--delete-color);
    color: #FFF;
    margin-left: -10px;
    line-height: 17px;
    text-align: center;
`

const Container = styled.div`
    position: relative;
`

export function CartControl() {
    const { value } = useLocalStorage('cart-items', [])

    return (
        <Container>
            <CartIcon />
            {value && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}