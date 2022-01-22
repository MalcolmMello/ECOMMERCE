import styled from "styled-components";

export const HeaderArea = styled.header<{cart: boolean, menu: boolean}>`
    border-bottom: 1px solid #ccc;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 20px;
        width: 100%;
        height: 90px;

        nav {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;

            img {
                width: 138px;
                height: 28px;
            }

            ul {
                display: flex;
                list-style: none;
                height: 100%;

                li {
                    display: flex;
                    align-items: center;
                    height: 100%;
                    margin-right: 50px;
                    cursor: pointer;
                    border-bottom: 3px solid transparent;
                    transition: all ease 0.3s
                }

                li:hover {
                    border-bottom: 3px solid hsl(26, 100%, 55%)
                }
            }

            .menu--buttons {
                display: flex;
                align-items: center;
            }

            .iconMenu {
                display: none;
                height: 20px;
                width: 20px;
                margin-right: 10px;
                cursor: pointer;
            }
        }

        .profile {
            display: flex;
            align-items: center;
            .cart {
                width: 20px;
                height: 20px;
                margin-right: 50px;
                cursor: pointer;
            }

            .profile--picture {
                width: 50px;
                height: 50px;
                cursor: pointer;
            }
        }
    }
    .cart--area {
        position: absolute;
        margin-top: ${props => props.cart ? '-10px' : '-1000px'};;
        right: 10px;
        width: 300px;
        height: 150px;
        background: #FFF;
        box-shadow: 0px 0px 1em #000;
        border-radius: 10px;
        transition: all ease 0.3s;

        .empty {
            padding: 10px;
        }

        .cart--title {
            height: 50px;
            padding: 10px;
            border-bottom: 1px solid #ccc;
        }
        .cart--content {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 5px 0px;

            p {
                margin: 0px;
                font-size: 14px;
            }
            img {
                width: 40px;
                height: 40px;
            }

            .cart--item {
                display: flex;
                font-size: 13px;

                p {
                    margin-right: 5px
                }

                .total {
                    font-weight: bold
                }
            }
            
            .delete {
                width: 15px;
                height: 15px;
                cursor: pointer;
            }
        }
    }

    @media(max-width: 768px) {
        .container {
            nav {
                .iconMenu {
                    display: block
                }
                .nav--list {
                    position: fixed;
                    width: ${props => props.menu ? '70vw' : '0px'};
                    left: 0px;
                    top: 90px;
                    height: calc(100vh - 90px);
                    background-color: #fff;
                    margin: auto;
                    flex-direction: column;
                    transition: all ease 0.3s;
                    padding: 0px;
                    li {
                        display: ${props => props.menu ? 'block' : 'none'};
                        margin: 0px;
                        height: auto;
                        font-weight: bold;
                        padding: 10px 20px;
                    }
                }
            }
        }
    }

    @media(max-width: 480px) {
        .container {
            .profile {
                .cart {
                    margin-right: 20px
                }
            }
        }
    }
`