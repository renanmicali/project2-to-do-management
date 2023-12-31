import { createPortal } from "react-dom"

import (createPortal)

export default function Modal({children}) {
    return createPortal(
        <dialog>
            {children}
        </dialog>, document.getElementById('modal-root')
    );
}