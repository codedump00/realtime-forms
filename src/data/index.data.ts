export interface IFormFocusPayload{
    type: "focus" | "defocus" | "input";
    formId: string;
    value: string;
}