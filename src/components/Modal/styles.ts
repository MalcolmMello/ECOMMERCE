import styled from "styled-components";

export const ModalArea = styled.section<{modal: boolean}>`
    display: ${props => props.modal ? 'block' : 'none'};
    position: absolute;
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    img {
        border-radius: 10px;
    }

    .container {
        width: 550px;
        margin: auto;

        .shoes--pictures {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: max-content;
            padding: 70px;

            .close {
                display: flex;
                width: 100%;
                justify-content: flex-end;
                margin-bottom: 20px;
                cursor: pointer;
                img {
                    width: 20px;
                    height: 20px
                }
            }

            .main--picture {
                width: 100%;
            }

            .mobile--pictures {
                display: flex;
                width: 410px;
                position: fixed;
                justify-content: space-between;
                margin-top: 170px;

                div {
                    display: flex; 
                    justify-content: center;
                    align-items: center;
                    background-color: #FFF;
                    cursor: pointer;
                    height: 40px;
                    width: 40px;
                    border-radius: 50%
                }
            }
    
            .shoes--items {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                width: 100%;
                grid-gap: 20px;
                margin-top: 20px;
                
                img {
                    width: 100%;
                    cursor: pointer
                }

                .active {
                    border: 3px solid hsl(26, 100%, 55%);
                    opacity: 85%
                }
            }
        }
    }

    @media(max-width: 768px) {
        display: none
    }
`