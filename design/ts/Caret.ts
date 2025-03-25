import { fadeOutIn } from "@/ts/utils/animations";

export default class Caret
{
    public static readonly element: HTMLElement | null = document.getElementById("caret");

    public static reset(): typeof Caret
    {
        return Caret;
    }

    public static hide(): typeof Caret
    {
        Caret.element.style.display = "none";
        return Caret
    }

    public static show(): typeof Caret
    {
        Caret.element.style.display = "";
        return Caret
    }

    public static fadeOutIn(): typeof Caret
    {
        Caret.element.style.animation = "none";
        Caret.element.style.opacity = "0";
        fadeOutIn(Caret.element, 
            {
                onComplete: () => {
                    Caret.element.offsetHeight;	// trigger reflow
                    Caret.element.style.animation = "";
                }
            }
        );
        return Caret;
    }
}