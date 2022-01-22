import styled from "styled-components";

export const ShoesArea = styled.main`
    height: calc(100vh - 91px);

    .container {
        height: max-content;
        width: 980px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        margin: auto;

        img {
            border-radius: 10px
        }
    }

    .shoes--pictures {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: max-content;
        padding: 70px;

        .previous, .next {
            display: none
        }

        .main--picture {
            width: 100%;
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
        }
    }

    .shoes--info {
        padding: 70px;
        
        .sneaker--company {
            font-weight: bold;
            color: hsl(26, 100%, 55%);
        }

        .text {
            font-size: 14px;
            line-height: 20px;
            font-weight: 300;
            color: #777;
        }

        .cart--actions {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px
        }

        .price {
            margin: 0px
        }

        small {
            color: #CCC;
        }

        .qt--item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 10px;
            flex: 1;
            background: #eee;
            border-radius: 10px;

            img {
                cursor: pointer
            }
        }

        .add--to--cart {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex: 2;
            background: hsl(26, 100%, 55%);
            color: #FFF;
            border-radius: 10px;
            cursor: pointer;
            margin-left: 10px;
        }
    }

    @media(max-width: 768px) {
        .container {
            width: 100%;

            .shoes--pictures {
                padding: 35px
            }

            .shoes--info {
                padding: 35px
            }
        }
    }

    @media(max-width: 732px) {
        .container {

            .shoes--pictures {
                padding: 15px
            }

            .shoes--info {
                padding: 15px
            }
        }
    }

    @media(max-width: 590px) {
        .container {

            .shoes--info {
                .sneaker--company {
                    font-size: 13px
                }
                h1 {
                    font-size: 20px;
                }
            }
        }
    }

    @media(max-width: 572px) {
        .container {
            grid-template-columns: 1fr;

            .shoes--pictures {
                .mobile--pictures {
                    display: flex;
                    justify-content: center;
                }
                .main--picture {
                    width: 70%
                }
                .shoes--items {
                    width: 70%
                }
            }
        }
    }
    @media(max-width: 480px) {
        .container {
            .shoes--pictures {
                width: 100%;
                .main--picture {
                    width: 100%;
                    border-radius: 0px;
                }
                .shoes--items {
                    display: none;
                }
                .mobile--pictures {
                    display: flex;
                    align-items: center;
                    .previous, .next {
                        display: block
                    }
                    .previous {
                        position: fixed;
                        left: 0px;
                        cursor: pointer
                    }
                    .next {
                        position: fixed;
                        right: 0px;
                        cursor: pointer
                    }
                }
                padding: 0px;
            }

            .shoes--info {
                .cart--actions {
                    flex-direction: column;
                    width: 100%;
                    .qt--item, .add--to--cart {
                        width: 100%;
                        margin: 0px;
                        margin-bottom: 10px
                    }
                }
            }
        }
    }
`