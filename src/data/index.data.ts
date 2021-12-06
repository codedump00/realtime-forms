export interface IFormFocusPayload{
    type: "focus" | "blur" | "input";
    formId: string;
    value: string;
}
