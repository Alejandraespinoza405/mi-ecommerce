import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  wrapperId?: string;
}

const Portal = ({ children, wrapperId = "portal-root" }: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let element = document.getElementById(wrapperId);
    let created = false;

    if (!element) {
      element = document.createElement("div");
      element.id = wrapperId;
      document.body.appendChild(element);
      created = true;
    }

    setContainer(element);

    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!container) return null;

  return createPortal(children, container);
};

export default Portal;

