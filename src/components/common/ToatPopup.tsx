import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { visibleToast } from "../../atom";

interface IToast {
    visible: boolean;
    msg: string;
}

export default function ToastPopup({ visible, msg }: IToast) {
    const setVisible = useSetRecoilState(visibleToast);
    useEffect(() => {
        const timeout = setTimeout(() => setVisible(false), 1500);
        return () => clearTimeout(timeout);
    }, [visible, setVisible]);
    return (
        <AnimatePresence>
            {visible && (
                <Toast
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                >
                    {msg}
                </Toast>
            )}
        </AnimatePresence>
    );
}

const Toast = styled(motion.div)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20rem;
    max-width: 30rem;
    padding: 1rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 0.4rem;
    border: none;
    z-index: 999;
`;
